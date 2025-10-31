import React from 'react';
import PageTitle from '../components/layout/PageTitle';

export const ConditionsGenerales = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageTitle pageKey="terms" />

      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Conditions générales de vente
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Conditions Générales de Vente (CGV) - Licence logiciel Evalix
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ces conditions encadrent la vente et l'utilisation des licences du logiciel Evalix édité par JVTP SNC.
          </p>
        </header>

        <div className="space-y-10">
          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Article 1 : Parties</h2>
              <p className="text-muted-foreground">
                Les présentes Conditions Générales de Vente (ci-après les 'CGV') régissent la vente
                et l'octroi de licences du logiciel Evalix entre :
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  La société JVTP SNC, dont le siège social est situé Chemin des Pères 1, 1420 Braine-l'Alleud (Belgique),
                  immatriculée sous le numéro de TVA{' '}
                  <span className="font-medium text-foreground">[Numéro d'immatriculation - à compléter]</span>{' '}
                  (ci-après l'Éditeur ou le Vendeur).
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Numéro de téléphone : <span className="font-medium text-foreground">[à compléter]</span></li>
                  <li>Adresse e-mail : <span className="font-medium text-foreground">[à compléter]</span></li>
                  <li>Site web : <span className="font-medium text-foreground">[à compléter]</span></li>
                </ul>
                <p>
                  Et le Client désirant acquérir une licence d'utilisation du logiciel Evalix (ci-après le Client ou le Licencié).
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Article 2 : Objet du contrat</h2>
              <p className="text-muted-foreground">
                Le présent contrat a pour objet la concession non exclusive et non transférable d'un droit
                d'utilisation du logiciel Evalix, édité par JVTP SNC. Le logiciel Evalix est un outil informatique
                destiné au calcul de l'indemnisation de dommages corporels résultant d'accidents.
              </p>
              <p className="text-muted-foreground">
                Le Vendeur concède au Client une licence d'utilisation du logiciel, telle que définie ci-après.
                Il est expressément convenu que le présent contrat ne confère en aucun cas au Client un droit de
                propriété sur le logiciel, ses mises à jour ou sa documentation, qui restent la propriété exclusive
                de l'Éditeur.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Article 3 : Périmètre et restrictions de la licence</h2>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">3.1. Droits d'utilisation concédés</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Installer et utiliser le logiciel Evalix sur le nombre de postes correspondant au nombre de licences acquises.</li>
                  <li>Utiliser le programme pour ses besoins propres et conformément à sa destination.</li>
                  <li>Partager les fichiers générés par le logiciel Evalix avec des tiers.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">3.2. Restrictions d'utilisation</h3>
                <p className="text-muted-foreground">
                  Sauf autorisation écrite et préalable de l'Éditeur, le Client s'interdit expressément de :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Procéder à la rétro-ingénierie, la décompilation ou le désassemblage du logiciel.</li>
                  <li>Modifier, adapter ou créer des dérivés du logiciel.</li>
                  <li>Distribuer, vendre, sous-licencier, louer, prêter ou mettre à disposition le logiciel à des tiers.</li>
                  <li>Utiliser le logiciel à des fins illicites ou non conformes à sa destination.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Article 4 : Durée de la licence et renouvellement</h2>
              <p className="text-muted-foreground">
                La licence d'utilisation du logiciel Evalix est concédée pour une durée déterminée, selon le choix effectué lors de la commande :
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Durée trimestrielle (3 mois).</li>
                <li>Durée annuelle (12 mois).</li>
              </ul>
              <p className="text-muted-foreground">
                Un mois avant la date d'expiration de la licence, l'Éditeur enverra un e-mail au Client pour proposer le renouvellement de la licence.
                Le renouvellement ne sera effectif qu'après réception du paiement par l'Éditeur, conformément aux modalités de l'Article 5.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Article 5 : Prix et modalités de paiement</h2>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">5.1. Prix des licences</h3>
                <p className="text-muted-foreground">
                  Les prix sont exprimés en euros, hors TVA (HTVA) et toutes taxes comprises (TTC), au taux de TVA belge en vigueur (actuellement 21 %).
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Formule trimestrielle : jusqu'à dix licences, 50 € par mois HTVA par licence; à partir de onze licences, 45 € par mois HTVA par licence.</li>
                  <li>Formule annuelle : jusqu'à dix licences, 45 € par mois HTVA par licence; à partir de onze licences, 40 € par mois HTVA par licence.</li>
                  <li>Le paiement est dû en une seule fois pour la période de licence choisie.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">5.2. Modalités de paiement</h3>
                <p className="text-muted-foreground">
                  Le paiement s'effectue exclusivement par virement bancaire sur le compte de JVTP SNC. Les coordonnées bancaires seront communiquées lors de la commande.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">5.3. Conséquences du non-paiement</h3>
                <p className="text-muted-foreground">
                  En cas de non-réception du paiement dans les délais impartis, l'Éditeur se réserve le droit de suspendre immédiatement les licences du Client,
                  entraînant l'impossibilité d'utiliser le logiciel jusqu'à régularisation complète.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Article 6 : Livraison et activation</h2>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">6.1. Mode de livraison</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Le logiciel Evalix est fourni via un lien de téléchargement sécurisé envoyé par e-mail et disponible sur le site de l'Éditeur.</li>
                  <li>Les codes d'activation des licences sont envoyés par e-mail.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">6.2. Délais de livraison</h3>
                <p className="text-muted-foreground">
                  Les codes d'activation sont transmis dans un délai maximum de 72 heures ouvrées à compter de la réception effective du paiement.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">6.3. Procédure d'activation</h3>
                <p className="text-muted-foreground">
                  Le Client reçoit par e-mail les instructions détaillées ainsi que les codes nécessaires pour activer les licences et utiliser le logiciel Evalix.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Article 7 : Mises à jour et support</h2>
              <div className="space-y-3 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">7.1. Politique de mises à jour</h3>
                <p>
                  Les mises à jour du logiciel sont incluses dans le prix de la licence. Elles sont automatiquement téléchargées et installées lorsque le logiciel est en fonctionnement et qu'une connexion internet est disponible.
                </p>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">7.2. Services de support</h3>
                <p>
                  En cas de difficulté, le Client peut contacter l'Éditeur :
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Par e-mail : <span className="font-medium text-foreground">[adresse e-mail de support - à compléter]</span></li>
                  <li>Via le formulaire de contact : <span className="font-medium text-foreground">[adresse du site web - à compléter]</span></li>
                </ul>
                <p>
                  La demande doit inclure une description détaillée du problème et, si possible, des captures d'écran.
                  L'Éditeur accuse réception sous 24 heures ouvrées et s'efforce de résoudre le problème dans les meilleurs délais.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Article 8 : Garanties et responsabilités</h2>
              <div className="space-y-3 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">8.1. Garanties légales</h3>
                <p>
                  L'Éditeur est tenu des défauts de conformité du logiciel et des vices cachés de la chose vendue dans les conditions prévues par la loi belge.
                </p>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">8.2. Garantie commerciale</h3>
                <p>
                  L'Éditeur garantit que le logiciel Evalix est exempt de bugs majeurs empêchant son utilisation normale pendant la durée de la licence.
                  Cette garantie ne couvre pas les problèmes résultant d'une utilisation non conforme, de modifications du logiciel ou d'incompatibilités non spécifiées.
                  En cas de bug majeur, l'Éditeur peut prolonger la durée des licences actives ou rembourser partiellement le Client.
                </p>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">8.3. Exclusions de garantie</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Utilisation du logiciel non conforme à sa destination ou aux instructions fournies.</li>
                  <li>Modifications, adaptations ou altérations du logiciel par le Client ou un tiers non autorisé.</li>
                  <li>Dommages causés par des logiciels tiers, virus, attaques informatiques ou causes extérieures.</li>
                  <li>Non-respect des prérequis techniques ou d'environnement spécifiés par l'Éditeur.</li>
                </ul>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">8.4. Limitation de responsabilité</h3>
                <p>
                  La responsabilité de l'Éditeur est limitée au montant total payé par le Client pour la licence au cours des douze derniers mois.
                  Aucun dédommagement n'est dû pour les dommages indirects tels que perte de données ou de chiffre d'affaires.
                  Le logiciel Evalix ne collectant aucune donnée personnelle, le Client reste seul responsable des données traitées via le logiciel.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Article 9 : Propriété intellectuelle</h2>
              <p className="text-muted-foreground">
                Le logiciel Evalix et tous les droits de propriété intellectuelle afférents restent la propriété exclusive de JVTP SNC.
                L'acquisition d'une licence n'accorde aucun droit de propriété intellectuelle au Client.
                Toute reproduction, adaptation ou utilisation non autorisée est strictement interdite et passible de poursuites.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Article 10 : Résiliation</h2>
              <div className="space-y-3 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">10.1. Conditions de résiliation</h3>
                <p>
                  L'Éditeur peut résilier la licence sans préavis ni indemnité en cas de manquement grave du Client, notamment :
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Non-paiement des sommes dues.</li>
                  <li>Violation des restrictions d'utilisation de la licence.</li>
                  <li>Tentative de rétro-ingénierie, décompilation, modification ou distribution non autorisée.</li>
                </ul>
                <p>
                  Le Client peut résilier sa licence en ne procédant pas au renouvellement à la fin de la période en cours. Aucun remboursement ne sera effectué pour la période restante.
                </p>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">10.2. Conséquences de la résiliation</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Les licences du Client sont immédiatement désactivées.</li>
                  <li>Les droits d'utilisation prennent fin et le logiciel doit être désinstallé de tous les systèmes.</li>
                  <li>Aucun remboursement des sommes versées n'est effectué.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Article 11 : Protection des données personnelles</h2>
              <p className="text-muted-foreground">
                L'Éditeur respecte le Règlement Général sur la Protection des Données concernant les informations collectées pour gérer les licences et la relation client.
                Le logiciel Evalix ne collecte ni ne stocke les données encodées par l'utilisateur, qui restent sous la seule responsabilité du Client.
                L'Éditeur n'a pas accès à ces données et ne peut être tenu responsable de leur traitement ou de leur sécurité.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Article 12 : Force majeure</h2>
              <p className="text-muted-foreground">
                En cas de force majeure empêchant l'exécution des obligations de l'une des parties, celles-ci sont suspendues.
                En cas de bug majeur avéré empêchant l'utilisation normale du logiciel, l'Éditeur prolonge la durée des licences pour couvrir la période comprise entre la notification du problème et sa résolution.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Article 13 : Non-cession</h2>
              <p className="text-muted-foreground">
                La licence d'utilisation du logiciel Evalix est personnelle et incessible. Le Client ne peut la céder ou la transférer à un tiers sans l'accord écrit et préalable de l'Éditeur.
              </p>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Article 14 : Droit applicable et règlement des litiges</h2>
              <div className="space-y-3 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">14.1. Droit applicable</h3>
                <p>Les présentes CGV sont régies par le droit belge.</p>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">14.2. Règlement amiable</h3>
                <p>En cas de litige, les parties recherchent une solution amiable avant toute action judiciaire, notamment via la médiation.</p>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">14.3. Juridiction compétente</h3>
                <p>
                  À défaut de résolution amiable, tout litige relève de la compétence exclusive du Tribunal de l'entreprise du Brabant wallon, division Nivelles (Belgique),
                  même en cas de pluralité de défendeurs ou d'appel en garantie.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Article 15 : Acceptation des CGV</h2>
              <p className="text-muted-foreground">
                Le Client reconnaît avoir pris connaissance des présentes CGV avant de passer commande. L'acquisition d'une licence et la réception du paiement par le Vendeur
                valent acceptation pleine et entière de ces conditions.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ConditionsGenerales;
