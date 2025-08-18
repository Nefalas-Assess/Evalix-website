import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import {
    User,
    Building2,
    MapPin,
    Hash,
    Key,
    CreditCard,
    CheckCircle,
    AlertCircle,
    LogOut,
    Save,
    RefreshCw
} from 'lucide-react';
import { generateLicenseKey } from '../utils/license';

const Account = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("success");
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const { t } = useLanguage();

    // Load user profile from Supabase
    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);

            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (!user) {
                navigate('/login');
                return;
            }

            setUser(user);

            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", user.id)
                .single();

            if (!error && data) {
                setProfile(data);
            } else {
                // If no profile exists, create one with a license
                const newProfile = {
                    id: user.id,
                    company: "",
                    address: "",
                    vat: "",
                    license_key: generateLicenseKey(),
                    subscription_type: "quarterly",
                };
                await supabase.from("profiles").insert([newProfile]);
                setProfile(newProfile);
            }
            setLoading(false);
        };

        fetchProfile();
    }, [navigate]);

    // Update profile
    const handleUpdate = async (e) => {
        e.preventDefault();
        setMessage("");
        setSaving(true);

        const { error } = await supabase
            .from("profiles")
            .update({
                company: profile.company,
                address: profile.address,
                vat: profile.vat,
                subscription_type: profile.subscription_type,
            })
            .eq("id", profile.id);

        if (error) {
            setMessage("Erreur lors de la mise à jour du profil");
            setMessageType("error");
        } else {
            setMessage("Profil mis à jour avec succès");
            setMessageType("success");
        }
        setSaving(false);

        // Clear message after 3 seconds
        setTimeout(() => setMessage(""), 3000);
    };

    // Handle logout
    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/');
    };

    // Generate new license key
    const handleGenerateNewLicense = async () => {
        const newLicenseKey = generateLicenseKey();
        setProfile({ ...profile, license_key: newLicenseKey });

        const { error } = await supabase
            .from("profiles")
            .update({ license_key: newLicenseKey })
            .eq("id", profile.id);

        if (!error) {
            setMessage("Nouvelle clé de licence générée avec succès");
            setMessageType("success");
            setTimeout(() => setMessage(""), 3000);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="flex items-center justify-center">
                        <div className="text-center">
                            <RefreshCw className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
                            <p className="text-muted-foreground">Chargement de votre espace client...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <User className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                            Mon espace client
                        </h1>
                        <p className="text-muted-foreground">
                            Gérez vos informations personnelles et votre abonnement Evalix
                        </p>
                    </div>

                    {/* Message Alert */}
                    {message && (
                        <Alert
                            variant={messageType === "error" ? "destructive" : "default"}
                            className="mb-6"
                        >
                            {messageType === "success" ? (
                                <CheckCircle className="h-4 w-4" />
                            ) : (
                                <AlertCircle className="h-4 w-4" />
                            )}
                            <AlertDescription>{message}</AlertDescription>
                        </Alert>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Profile Information */}
                        <div className="lg:col-span-2 space-y-6">
                            <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Building2 className="h-5 w-5 text-primary" />
                                        Informations générales
                                    </CardTitle>
                                    <CardDescription>
                                        Mettez à jour vos informations personnelles et professionnelles
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleUpdate} className="space-y-6">
                                        {/* Email (read-only) */}
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                                                <User className="h-4 w-4" />
                                                Adresse e-mail
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={user?.email || ""}
                                                className="bg-muted"
                                                disabled
                                            />
                                            <p className="text-xs text-muted-foreground">
                                                Votre adresse e-mail ne peut pas être modifiée
                                            </p>
                                        </div>

                                        {/* Company */}
                                        <div className="space-y-2">
                                            <Label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
                                                <Building2 className="h-4 w-4" />
                                                Nom de société
                                            </Label>
                                            <Input
                                                id="company"
                                                type="text"
                                                placeholder="Nom de votre société"
                                                value={profile?.company || ""}
                                                onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                                            />
                                        </div>

                                        {/* Address */}
                                        <div className="space-y-2">
                                            <Label htmlFor="address" className="text-sm font-medium flex items-center gap-2">
                                                <MapPin className="h-4 w-4" />
                                                Adresse
                                            </Label>
                                            <Input
                                                id="address"
                                                type="text"
                                                placeholder="Adresse complète"
                                                value={profile?.address || ""}
                                                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                                            />
                                        </div>

                                        {/* VAT Number */}
                                        <div className="space-y-2">
                                            <Label htmlFor="vat" className="text-sm font-medium flex items-center gap-2">
                                                <Hash className="h-4 w-4" />
                                                Numéro TVA
                                            </Label>
                                            <Input
                                                id="vat"
                                                type="text"
                                                placeholder="Numéro de TVA (optionnel)"
                                                value={profile?.vat || ""}
                                                onChange={(e) => setProfile({ ...profile, vat: e.target.value })}
                                            />
                                        </div>

                                        {/* Subscription Type */}
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium flex items-center gap-2">
                                                <CreditCard className="h-4 w-4" />
                                                Type d'abonnement
                                            </Label>
                                            <Select
                                                value={profile?.subscription_type || "quarterly"}
                                                onValueChange={(value) => setProfile({ ...profile, subscription_type: value })}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Sélectionnez un abonnement" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="quarterly">Trimestriel</SelectItem>
                                                    <SelectItem value="annual">Annuel</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-primary hover:bg-primary/90"
                                            disabled={saving}
                                        >
                                            {saving ? (
                                                <>
                                                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                                    Sauvegarde en cours...
                                                </>
                                            ) : (
                                                <>
                                                    <Save className="mr-2 h-4 w-4" />
                                                    Sauvegarder les modifications
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* License Information */}
                            <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Key className="h-5 w-5 text-primary" />
                                        Licence
                                    </CardTitle>
                                    <CardDescription>
                                        Votre clé de licence Evalix
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="p-3 bg-muted rounded-lg">
                                        <Label className="text-xs font-medium text-muted-foreground">
                                            CLÉ DE LICENCE
                                        </Label>
                                        <p className="font-mono text-sm mt-1 break-all">
                                            {profile?.license_key}
                                        </p>
                                    </div>

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={handleGenerateNewLicense}
                                        className="w-full"
                                    >
                                        <RefreshCw className="mr-2 h-4 w-4" />
                                        Générer une nouvelle clé
                                    </Button>

                                    <p className="text-xs text-muted-foreground">
                                        Cette clé est nécessaire pour activer votre logiciel Evalix.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Subscription Status */}
                            <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <CreditCard className="h-5 w-5 text-primary" />
                                        Abonnement
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">Statut</span>
                                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                                            <CheckCircle className="h-3 w-3 mr-1" />
                                            Actif
                                        </Badge>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">Type</span>
                                        <Badge variant="outline">
                                            {profile?.subscription_type === 'quarterly' ? 'Trimestriel' : 'Annuel'}
                                        </Badge>
                                    </div>

                                    <Separator />

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => navigate('/tarifs')}
                                        className="w-full"
                                    >
                                        Voir tous les tarifs
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Logout */}
                            <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
                                <CardContent className="pt-6">
                                    <Button
                                        variant="outline"
                                        onClick={handleLogout}
                                        className="w-full text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                                    >
                                        <LogOut className="mr-2 h-4 w-4" />
                                        Se déconnecter
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
