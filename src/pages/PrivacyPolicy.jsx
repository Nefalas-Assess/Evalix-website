import React from 'react';
import PageTitle from '../components/layout/PageTitle';

export const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageTitle pageKey="privacy" />

      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Politique de confidentialité
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Protection des données personnelles
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cette politique explique comment JVTP SNC collecte, utilise, conserve et protège vos données personnelles dans le cadre de l'utilisation du site et du logiciel Evalix.
          </p>
        </header>

        <div className="space-y-10">
          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Politique de Confidentialité</h2>
              <p className="text-muted-foreground">
                Dernière mise à jour : <span className="font-medium text-foreground">[à compléter]</span>
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground">
                La présente politique de confidentialité décrit la manière dont JVTP SNC, société en nom collectif dont le siège social est situé Chemin des Pères 1, 1420 Braine-l'Alleud (Belgique) et enregistrée à la BCE sous le numéro 1029.330.643, traite les données personnelles de ses clients, prospects et utilisateurs du logiciel Evalix. JVTP SNC s'engage à respecter la législation en vigueur en matière de protection des données, notamment le RGPD et la loi belge du 30 juillet 2018.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Responsable du traitement</h2>
              <p className="text-muted-foreground">
                Le responsable du traitement des données est : JVTP SNC, Chemin des Pères 1, 1420 Braine-l'Alleud. E-mail : <span className="font-medium text-foreground">[à compléter]</span>
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Données collectées</h2>
              <p className="text-muted-foreground">
                JVTP SNC collecte uniquement les données nécessaires à la gestion de la relation commerciale et du support client. Le logiciel Evalix ne collecte, ne transmet ni ne stocke aucune donnée encodée par l'utilisateur, celles-ci demeurant sous la seule responsabilité du client.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Finalités du traitement</h2>
              <p className="text-muted-foreground">
                Les données sont utilisées pour : la gestion des commandes et licences, le support technique, la communication sur les mises à jour, la gestion comptable et légale, et les communications commerciales (avec consentement).
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Base légale du traitement</h2>
              <p className="text-muted-foreground">
                Les traitements reposent sur les bases suivantes : exécution du contrat, obligation légale, consentement et intérêt légitime.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Durée de conservation</h2>
              <p className="text-muted-foreground">
                Les données sont conservées pendant la durée de la relation contractuelle puis archivées 5 ans. Les données marketing sont conservées jusqu'au retrait du consentement.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Partage des données</h2>
              <p className="text-muted-foreground">
                Les données ne sont jamais vendues ni louées. Elles peuvent être partagées avec des prestataires techniques ou les autorités si la loi l'exige.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Hébergement et sécurité</h2>
              <p className="text-muted-foreground">
                Le site web de JVTP SNC est hébergé par Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Chypre. JVTP SNC met en œuvre des mesures techniques et organisationnelles pour protéger les données contre la perte, le vol ou l'accès non autorisé.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Droits des personnes concernées</h2>
              <p className="text-muted-foreground">
                Chaque utilisateur dispose d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité. Pour exercer ces droits : <span className="font-medium text-foreground">[adresse e-mail à compléter]</span>. Réponse sous 30 jours ouvrés.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Transfert de données hors UE</h2>
              <p className="text-muted-foreground">
                Aucun transfert hors de l'Union européenne n'est effectué, sauf nécessité contractuelle et garanties conformes au RGPD.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Cookies</h2>
              <p className="text-muted-foreground">
                Le site n'utilise aucun cookie.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Modification de la politique</h2>
              <p className="text-muted-foreground">
                La présente politique peut être mise à jour à tout moment. Les modifications importantes seront notifiées via le site ou par e-mail.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">13. Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant la protection des données : JVTP SNC, Chemin des Pères 1, 1420 Braine-l'Alleud. E-mail : <span className="font-medium text-foreground">[à compléter]</span>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
