import React, { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, KeyRound, CheckCircle } from 'lucide-react';
import PageTitle from '../components/layout/PageTitle';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const redirectTo = useMemo(() => {
    // Supabase will send the user back to this URL after they click the recovery link.
    return `${window.location.origin}/reset-password`;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo
      });
      if (error) throw error;
      setSent(true);
    } catch (err) {
      setError(err?.message || t('auth.forgot.genericError'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <PageTitle pageKey="forgotPassword" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <KeyRound className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t('auth.forgot.title')}
            </h1>
            <p className="text-muted-foreground">{t('auth.forgot.subtitle')}</p>
          </div>

          <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              {error && (
                <Alert variant="destructive" className="mb-6">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {sent ? (
                <div className="space-y-4">
                  <Alert className="mb-2">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      {t('auth.forgot.sentDescription')}
                    </AlertDescription>
                  </Alert>

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate('/login')}
                  >
                    {t('auth.forgot.backToLogin')}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      {t('auth.forgot.emailLabel')}
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('auth.forgot.emailPlaceholder')}
                        className="pl-10"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={loading}
                  >
                    {loading ? t('auth.forgot.sending') : t('auth.forgot.send')}
                  </Button>

                  <div className="text-center">
                    <button
                      type="button"
                      className="text-sm text-primary hover:underline"
                      onClick={() => navigate('/login')}
                      disabled={loading}
                    >
                      {t('auth.forgot.backToLogin')}
                    </button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

