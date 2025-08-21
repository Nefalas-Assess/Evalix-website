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

    const activeDevices = (license?.devices || [])?.length;

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
                            UTILISATION DES APPAREILS
                        </Label>

                        {/* Device usage display */}
                        <div className="mt-2 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">
                                    {activeDevices || 0} / {license.maxDevices} appareils
                                </span>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="text-xs text-muted-foreground">
                                        {activeDevices || 0} actif{(activeDevices || 0) > 1 ? 's' : ''}
                                    </span>
                                </div>
                            </div>

                            {/* Progress bar */}
                            <div className="w-full bg-secondary rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full transition-all duration-300 ${(activeDevices || 0) >= license.maxDevices
                                        ? 'bg-red-500'
                                        : (activeDevices || 0) / license.maxDevices > 0.8
                                            ? 'bg-yellow-500'
                                            : 'bg-green-500'
                                        }`}
                                    style={{
                                        width: `${Math.min(((activeDevices || 0) / license.maxDevices) * 100, 100)}%`
                                    }}
                                />
                            </div>

                            {/* Status message */}
                            <div className="flex items-center gap-1 text-xs">
                                {(activeDevices || 0) >= license.maxDevices ? (
                                    <>
                                        <AlertTriangle className="h-3 w-3 text-red-500" />
                                        <span className="text-red-600">Limite atteinte</span>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-3 h-3 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="text-green-600">
                                            {license.maxDevices - (activeDevices || 0)} appareil{license.maxDevices - (activeDevices || 0) > 1 ? 's' : ''} disponible{license.maxDevices - (activeDevices || 0) > 1 ? 's' : ''}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
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
