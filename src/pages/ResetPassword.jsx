import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Lock, KeyRound, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import PageTitle from '../components/layout/PageTitle';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [hasSession, setHasSession] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const init = async () => {
      setInitializing(true);
      setError(null);

      try {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        // If the project uses PKCE recovery links, a "code" will be present.
        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) throw error;
        }

        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;

        if (!data?.session) {
          setError(t('auth.reset.invalidLink'));
          setHasSession(false);
        } else {
          setHasSession(true);
        }
      } catch (err) {
        setError(err?.message || t('auth.reset.genericError'));
        setHasSession(false);
      } finally {
        setInitializing(false);
      }
    };

    init();
  }, [t]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError(t('auth.reset.passwordTooShort'));
      return;
    }
    if (password !== confirmPassword) {
      setError(t('auth.reset.passwordMismatch'));
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      setSuccess(true);

      // Optional: sign out to force a clean login with the new password.
      await supabase.auth.signOut();
    } catch (err) {
      setError(err?.message || t('auth.reset.genericError'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <PageTitle pageKey="resetPassword" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <KeyRound className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t('auth.reset.title')}
            </h1>
            <p className="text-muted-foreground">{t('auth.reset.subtitle')}</p>
          </div>

          <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              {initializing ? (
                <div className="flex items-center justify-center py-8 text-muted-foreground">
                  <RefreshCw className="h-5 w-5 animate-spin mr-2" />
                  {t('auth.reset.loading')}
                </div>
              ) : (
                <>
                  {error && (
                    <Alert variant="destructive" className="mb-6">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  {success ? (
                    <div className="space-y-4">
                      <Alert className="mb-2">
                        <CheckCircle className="h-4 w-4" />
                        <AlertDescription>{t('auth.reset.successDescription')}</AlertDescription>
                      </Alert>
                      <Button
                        type="button"
                        className="w-full bg-primary hover:bg-primary/90"
                        onClick={() => navigate('/login')}
                      >
                        {t('auth.reset.goToLogin')}
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-medium">
                          {t('auth.reset.passwordLabel')}
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={t('auth.reset.passwordPlaceholder')}
                            className="pl-10"
                            required
                            disabled={loading || !hasSession}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-sm font-medium">
                          {t('auth.reset.confirmPasswordLabel')}
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder={t('auth.reset.confirmPasswordPlaceholder')}
                            className="pl-10"
                            required
                            disabled={loading || !hasSession}
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={loading || !hasSession}
                      >
                        {loading ? t('auth.reset.saving') : t('auth.reset.save')}
                      </Button>

                      <div className="text-center">
                        <button
                          type="button"
                          className="text-sm text-primary hover:underline"
                          onClick={() => navigate('/login')}
                          disabled={loading}
                        >
                          {t('auth.reset.goToLogin')}
                        </button>
                      </div>
                    </form>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

