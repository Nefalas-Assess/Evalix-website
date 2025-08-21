import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { CreditCard, CheckCircle, Ban, AlertTriangle, Loader2, Edit } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

const SubscriptionStatus = ({ subscription, refreshSubscription }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false); // Add dialog state management

    const handleCancelSubscription = async (e) => {
        e.preventDefault(); // Prevent default dialog closure
        try {
            setIsLoading(true);

            const { data } = await supabase.functions.invoke('cancel-subscription', {
                body: {
                    subscriptionId: subscription.id,
                }
            });

            if (data?.subscription) {
                refreshSubscription(data?.subscription)
            }
        } catch (error) {
            console.error('Erreur lors de l\'annulation:', error);
        } finally {
            setIsLoading(false);
            setIsDialogOpen(false); // Close dialog after operation completes
        }
    };

    const handleRenewSubscription = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const { data } = await supabase.functions.invoke('resume-subscription', {
                body: {
                    subscriptionId: subscription.id,
                }
            });
            if (data?.subscription) {
                refreshSubscription(data?.subscription)
            }
        } catch (error) {
            console.error('Erreur lors du renouvellement:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdatePaymentMethod = async () => {
        try {
            setIsLoading(true);

            // Call Supabase function to get the payment method update URL
            const { data } = await supabase.functions.invoke('update-pm', {
                body: {
                    customerId: subscription.customer,
                }
            });

            if (data?.url) {
                // Redirect to Stripe's payment method update page
                window.open(data.url, '_blank');
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour du moyen de paiement:', error);
        } finally {
            setIsLoading(false);
        }
    };



    return (
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
                    <Badge variant="secondary" className={`${subscription?.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {subscription?.status === "active" ? <CheckCircle className="h-3 w-3 mr-1" /> : <Ban className="h-3 w-3 mr-1" />}
                        {subscription?.status === 'active' ? 'Actif' : 'Inactif'}
                    </Badge>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Type</span>
                    <Badge variant="outline">
                        {subscription?.plan?.interval === 'month' ? 'Mensuel' : 'Annuel'}
                    </Badge>
                </div>

                {subscription?.cancel_at && (
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Fin de l'abonnement</span>
                        <span className="text-sm text-muted-foreground">
                            {new Date(subscription.cancel_at * 1000).toLocaleDateString('fr-FR')}
                        </span>
                    </div>
                )}

                <Separator />

                {/* Update Payment Method Button */}
                <Button
                    variant="outline"
                    className="w-full h-auto"
                    onClick={handleUpdatePaymentMethod}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Mise à jour...
                        </>
                    ) : (
                        <div className="flex items-center justify-center text-center">
                            <Edit className="mr-2 h-4 w-4 flex-shrink-0" />
                            <span>
                                Modifier le moyen de paiement
                            </span>
                        </div>
                    )}
                </Button>

                {subscription?.cancel_at_period_end ? (
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={handleRenewSubscription}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Reprise en cours...
                            </>
                        ) : (
                            'Reprendre l\'abonnement'
                        )}
                    </Button>
                ) : (

                    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <AlertDialogTrigger asChild>
                            <Button
                                variant="outline"
                                className="w-full text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                            >
                                <Ban className="mr-2 h-4 w-4" />
                                Annuler l'abonnement
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle className="flex items-center gap-2">
                                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                                    Confirmer l'annulation
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    Êtes-vous sûr de vouloir annuler votre abonnement ? Cette action est irréversible et vous perdrez l'accès à tous les services premium à la fin de votre période de facturation actuelle.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel disabled={isLoading}>
                                    Annuler
                                </AlertDialogCancel>
                                <AlertDialogAction
                                    onClick={handleCancelSubscription}
                                    disabled={isLoading}
                                    className="bg-red-600 hover:bg-red-700 text-white disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Annulation en cours...
                                        </>
                                    ) : (
                                        'Confirmer l\'annulation'
                                    )}
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                )}

            </CardContent>
        </Card>
    );
};

export default SubscriptionStatus;
