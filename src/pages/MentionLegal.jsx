import React from 'react';
import PageTitle from '../components/layout/PageTitle';

export const MentionLegal = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageTitle pageKey="legal" />

      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Mentions légales
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Informations légales du site Evalix
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ces informations ont pour objectif d'informer les utilisateurs sur l'identité de l'éditeur du site, son hébergeur, ainsi que sur les conditions d'utilisation.
          </p>
        </header>

        <div className="space-y-10">
          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Informations légales</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  Le présent site internet est édité par :
                </p>
                <p className="font-medium text-foreground">
                  JVTP SNC
                </p>
                <p>Chemin des Pères 1</p>
                <p>1420 Braine-l'Alleud - Belgique</p>
                <p>Numéro d'entreprise (BCE) : 1029.330.643</p>
                <p>Date de création : 17 octobre 2025</p>
                <p>
                  Numéro de TVA :{' '}
                  <span className="font-medium text-foreground">[à compléter]</span>
                </p>
                <p>
                  Adresse e-mail :{' '}
                  <span className="font-medium text-foreground">[à compléter]</span>
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Responsables de la publication</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  Les responsables de la publication sont Thomas Point et Julien Van der Borght, en leur qualité de gérants de la société JVTP SNC.
                </p>
                <p>
                  Ils peuvent être contactés à l'adresse e-mail mentionnée ci-dessus.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Hébergeur du site</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Le site est hébergé par :</p>
                <p className="font-medium text-foreground">
                  Hostinger International Ltd.
                </p>
                <p>61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
                <p>
                  Site web :{' '}
                  <a
                    href="https://www.hostinger.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.hostinger.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Objet du site</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  Le site JVTP a pour objet de présenter et de commercialiser le logiciel développé par la société.
                </p>
                <p>
                  Toute commande passée via le site implique l'acceptation préalable des Conditions Générales de Vente (CGV), consultables sur le site.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Propriété intellectuelle</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  L'ensemble du contenu du site (textes, images, logos, graphismes, vidéos, logiciels, etc.) est la propriété exclusive de JVTP SNC, sauf mention contraire.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, transmission ou adaptation, totale ou partielle, est strictement interdite sans autorisation écrite préalable.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Protection des données personnelles (RGPD)</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  JVTP SNC s'engage à ce que la collecte et le traitement de vos données personnelles soient conformes au Règlement Général sur la Protection des Données (UE) 2016/679.
                </p>
                <p>
                  Les utilisateurs disposent d'un droit d'accès, de rectification, d'effacement et d'opposition concernant leurs données personnelles.
                </p>
                <p>
                  Ces demandes peuvent être adressées à :{' '}
                  <span className="font-medium text-foreground">[adresse e-mail de contact]</span>.
                </p>
                <p>
                  Une politique de confidentialité détaillée est disponible sur le site.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Cookies</h2>
              <p className="text-muted-foreground">
                Le site n'utilise aucun cookie.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Responsabilité</h2>
              <p className="text-muted-foreground">
                JVTP SNC s'efforce d'assurer la disponibilité et la mise à jour du site, mais ne saurait être tenue responsable d'interruptions, d'erreurs, de pertes de données ou de tout dommage direct ou indirect résultant de l'utilisation du site ou des services proposés.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionLegal;
