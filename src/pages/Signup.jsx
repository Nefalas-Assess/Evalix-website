import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { UserPlus, Mail, Eye, EyeOff, Building, MapPin, Lock, CheckCircle } from 'lucide-react';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        company: '',
        address: '',
        firstName: '',
        lastName: ''
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const navigate = useNavigate();
    const { t } = useLanguage();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (formData.password !== formData.confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            return false;
        }
        if (formData.password.length < 6) {
            setError('Le mot de passe doit contenir au moins 6 caractères');
            return false;
        }
        if (!acceptTerms) {
            setError('Vous devez accepter les conditions d\'utilisation');
            return false;
        }
        return true;
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null);

        if (!validateForm()) return;

        setLoading(true);

        try {
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        company: formData.company,
                        address: formData.address,
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                    },
                },
            });

            if (error) {
                setError(error.message);
            } else {
                // Afficher un message de confirmation ou rediriger
                navigate('/account');
            }
        } catch (err) {
            setError('Une erreur est survenue lors de l\'inscription');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UserPlus className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                            Créer un compte
                        </h1>
                        <p className="text-muted-foreground">
                            Rejoignez Evalix et commencez votre essai gratuit
                        </p>
                    </div>

                    {/* Signup Card */}
                    <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
                        <CardContent>
                            {error && (
                                <Alert variant="destructive" className="mb-6">
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}

                            <form onSubmit={handleSignup} className="space-y-6">
                                {/* Informations personnelles */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName" className="text-sm font-medium">
                                            Prénom
                                        </Label>
                                        <Input
                                            id="firstName"
                                            type="text"
                                            name="firstName"
                                            placeholder="Votre prénom"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName" className="text-sm font-medium">
                                            Nom
                                        </Label>
                                        <Input
                                            id="lastName"
                                            type="text"
                                            name="lastName"
                                            placeholder="Votre nom"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium">
                                        Adresse e-mail
                                    </Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="votre@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="pl-10"
                                            required
                                            disabled={loading}
                                        />
                                    </div>
                                </div>

                                {/* Mots de passe */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="text-sm font-medium">
                                            Mot de passe
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                name="password"
                                                placeholder="Mot de passe"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="pl-10 pr-10"
                                                required
                                                disabled={loading}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                                disabled={loading}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirmPassword" className="text-sm font-medium">
                                            Confirmer le mot de passe
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="confirmPassword"
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                name="confirmPassword"
                                                placeholder="Confirmer"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                className="pl-10 pr-10"
                                                required
                                                disabled={loading}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                                disabled={loading}
                                            >
                                                {showConfirmPassword ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Informations entreprise */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-foreground flex items-center">
                                        <Building className="h-5 w-5 mr-2 text-primary" />
                                        Informations entreprise
                                    </h3>

                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="text-sm font-medium">
                                            Nom de la société
                                        </Label>
                                        <div className="relative">
                                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="company"
                                                type="text"
                                                name="company"
                                                placeholder="Nom de votre société"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="pl-10"
                                                required
                                                disabled={loading}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="address" className="text-sm font-medium">
                                            Adresse
                                        </Label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="address"
                                                type="text"
                                                name="address"
                                                placeholder="Adresse de votre société"
                                                value={formData.address}
                                                onChange={handleChange}
                                                className="pl-10"
                                                required
                                                disabled={loading}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Conditions d'utilisation */}
                                <div className="flex items-start space-x-2">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        checked={acceptTerms}
                                        onChange={(e) => setAcceptTerms(e.target.checked)}
                                        className="h-4 w-4 rounded border-input mt-1"
                                        required
                                    />
                                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                                        J'accepte les{' '}
                                        <a href="/terms" className="text-primary hover:underline">
                                            conditions d'utilisation
                                        </a>{' '}
                                        et la{' '}
                                        <a href="/privacy" className="text-primary hover:underline">
                                            politique de confidentialité
                                        </a>
                                    </Label>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90"
                                    disabled={loading || !acceptTerms}
                                >
                                    {loading ? 'Création du compte...' : 'Créer mon compte'}
                                </Button>
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-muted-foreground">
                                    Déjà un compte ?{' '}
                                    <button
                                        onClick={() => navigate('/login')}
                                        className="text-primary hover:underline font-medium"
                                    >
                                        Se connecter
                                    </button>
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Benefits Section */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <CheckCircle className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">Essai gratuit</h3>
                            <p className="text-sm text-muted-foreground">
                                30 jours d'essai gratuit sans engagement
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Lock className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">Sécurisé</h3>
                            <p className="text-sm text-muted-foreground">
                                Vos données sont protégées et chiffrées
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <UserPlus className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">Support dédié</h3>
                            <p className="text-sm text-muted-foreground">
                                Accompagnement personnalisé inclus
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
