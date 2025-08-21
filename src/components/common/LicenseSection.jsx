import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
    Key,
    Monitor,
    AlertTriangle,
    RefreshCw,
    Settings
} from 'lucide-react';

const LicenseSection = ({ license, onGenerateKey, onUpdateSubscription }) => {
    const hasLicense = license && license.key;

    return (
        <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-primary" />
                    Licence
                </CardTitle>
                <CardDescription>
                    {hasLicense ? 'Votre clé de licence Evalix' : 'Générez votre clé de licence Evalix'}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {hasLicense && (
                    <div className="p-3 bg-muted rounded-lg">
                        <Label className="text-xs font-medium text-muted-foreground">
                            CLÉ DE LICENCE
                        </Label>
                        <p className="font-mono text-sm mt-1 break-all">
                            {license.key.replace(/(.{4})/g, '$1-').replace(/-$/, '')}
                        </p>
                    </div>
                )}

                {/* Device count information */}
                {license?.maxDevices && (
                    <div className="p-3 bg-muted rounded-lg">
                        <Label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                            <Monitor className="h-3 w-3" />
                            APPAREILS AUTORISÉS
                        </Label>
                        <p className="text-sm mt-1 font-semibold">
                            {license.maxDevices} {license.maxDevices > 1 ? 'appareils' : 'appareil'}
                        </p>
                    </div>
                )}

                {/* Warning for license expiration */}
                {license?.end_date && (
                    <Alert variant="destructive" className="mt-3">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                            Cette clé sera désactivée le {new Date(license.end_date).toLocaleDateString('fr-FR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </AlertDescription>
                    </Alert>
                )}

                {/* Action button based on license status */}
                {hasLicense ? (
                    <>
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={onUpdateSubscription}
                        >
                            <Settings className="mr-2 h-4 w-4" />
                            Modifier l'abonnement
                        </Button>
                        <p className="text-xs text-muted-foreground">
                            Modifiez le nombre de licences ou changez votre plan d'abonnement.
                        </p>
                    </>
                ) : (
                    <>
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={onGenerateKey}
                        >
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Générer une clé
                        </Button>
                        <p className="text-xs text-muted-foreground">
                            Cette clé est nécessaire pour activer votre logiciel Evalix.
                        </p>
                    </>
                )}
            </CardContent>
        </Card>
    );
};

export default LicenseSection;
