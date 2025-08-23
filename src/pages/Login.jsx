import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import PageTitle from '../components/layout/PageTitle';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { t } = useLanguage();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            });

            if (error) {
                setError(error.message);
            } else {
                navigate('/account');
            }
        } catch (err) {
            setError('Une erreur est survenue lors de la connexion');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <PageTitle pageKey="login" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-md mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                            Connexion
                        </h1>
                        <p className="text-muted-foreground">
                            Connectez-vous à votre compte Evalix
                        </p>
                    </div>

                    {/* Login Card */}
                    <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
                        <CardContent>
                            {error && (
                                <Alert variant="destructive" className="mb-6">
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}

                            <form onSubmit={handleLogin} className="space-y-6">
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
                                            placeholder="Votre mot de passe"
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

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-input"
                                        />
                                        <Label htmlFor="remember" className="text-sm">
                                            Se souvenir de moi
                                        </Label>
                                    </div>
                                    <button
                                        type="button"
                                        className="text-sm text-primary hover:underline"
                                        onClick={() => navigate('/forgot-password')}
                                    >
                                        Mot de passe oublié ?
                                    </button>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90"
                                    disabled={loading}
                                >
                                    {loading ? 'Connexion en cours...' : 'Se connecter'}
                                </Button>
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-muted-foreground">
                                    Pas encore de compte ?{' '}
                                    <button
                                        onClick={() => navigate('/signup')}
                                        className="text-primary hover:underline font-medium"
                                    >
                                        Créer un compte
                                    </button>
                                </p>
                            </div>
                        </CardContent>
                    </Card>


                    {/* Additional Info */}
                    <div className="mt-8 text-center">
                        <p className="text-xs text-muted-foreground">
                            En vous connectant, vous acceptez nos{' '}
                            <a href="/terms" className="text-primary hover:underline">
                                conditions d'utilisation
                            </a>{' '}
                            et notre{' '}
                            <a href="/privacy" className="text-primary hover:underline">
                                politique de confidentialité
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
