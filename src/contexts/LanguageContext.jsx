import React, { createContext, useContext, useState, useEffect } from 'react';
import { FlagFR, FlagNL, FlagGB } from '../components/common/FlagIcons';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Traductions pour les différentes langues
const translations = {
  fr: {
    pageTitle: {
      base: 'Evalix - Logiciel de calcul d\'indemnités pour dommages corporels',
      home: 'Accueil - Evalix',
      presentation: 'Présentation - Evalix',
      pricing: 'Tarifs - Evalix',
      contact: 'Contact - Evalix',
      downloads: 'Téléchargements - Evalix',
      login: 'Connexion - Evalix',
      signup: 'Inscription - Evalix',
      account: 'Mon compte - Evalix',
      legal: 'Mentions légales - Evalix',
      privacy: 'Politique de confidentialité - Evalix',
      terms: 'Conditions générales - Evalix'
    },
    nav: {
      home: 'Accueil',
      presentation: 'Présentation',
      pricing: 'Tarifs',
      contact: 'Contacts',
      downloads: 'Téléchargements',
      subscribe: 'Souscrire',
      login: 'Connexion',
      account: {
        title: 'Mon compte',
        space: 'Mon espace client',
        logout: 'Se déconnecter'
      }
    },
    hero: {
      title: 'L\'outil de calcul d\'indemnités pour dommages corporels',
      subtitle: 'Découvrez Evalix, le logiciel professionnel de calcul d\'indemnités pour les victimes d\'accidents avec dommages corporels.',
      cta: 'Télécharger'
    },
    home: {
      new_version_badge: 'Nouvelle version {version} disponible',
      why_choose_evalix: {
        title: 'Pourquoi choisir Evalix ?',
        subtitle: 'Une solution complète qui répond aux besoins spécifiques des professionnels du droit et de l\'assurance en matière d\'indemnisation.'
      },
      features: {
        precision: {
          title: 'Précision absolue',
          description: 'Calculs basés sur la législation en vigueur et le tableau indicatif de la magistrature, régulièrement mis à jour.'
        },
        efficiency: {
          title: 'Gestion efficace',
          description: 'Automatisation des calculs, notamment des intérêts, et guidage dans la saisie des données pour constituer vos dossiers rapidement.'
        },
        security: {
          title: 'Sécurité des données',
          description: 'Application sécurisée avec sauvegarde des fichiers sur votre appareil ou serveur, garantissant la confidentialité de vos données.'
        },
        reports: {
          title: 'Rapports en un clic',
          description: 'Génération automatique de résumés clairs et complets avec calculs transparents.'
        },
        negotiation_tool: {
          title: 'Outil de négociation',
          description: 'Réalisez facilement toutes les simulations souhaitées et visualisez immédiatement les conséquences de chaque changement.'
        },
        continuous_development: {
          title: 'Développement continu',
          description: 'Le programme est toujours en cours de développement et de nouvelles fonctionnalités seront régulièrement ajoutées.'
        }
      },
      benefits: {
        title: 'Les avantages concrets d\'Evalix',
        time_saving: {
          title: 'Gain de temps considérable',
          description: 'Une interface épurée et intuitive pour réduire le temps d\'encodage.'
        },
        recognized_expertise: {
          title: 'Expertise reconnue',
          description: 'Développé en collaboration avec des professionnels du secteur juridique et des assurances.'
        },
        dedicated_support: {
          title: 'Support dédié',
          description: 'Équipe de support technique et formation à l\'écoute pour une prise en main optimale.'
        }
      },
      test_license: {
        title: 'Testez Evalix gratuitement',
        subtitle: 'Découvrez toutes les fonctionnalités d\'Evalix avec notre licence de test',
        badge: '15 jours d\'essai gratuit',
        description: 'Il est possible de nous demander une licence de test de 15 jours pour évaluer Evalix dans vos conditions réelles d\'utilisation. Cette période d\'essai vous donnera accès à toutes les fonctionnalités du logiciel sans aucune limitation.',
        cta_request: 'Demander une licence de test',
        cta_learn_more: 'En savoir plus'
      },
      cta: {
        title: 'Prêt à transformer votre gestion des indemnités ?',
        subtitle: 'Rejoignez les professionnels qui ont déjà adopté Evalix pour optimiser leur travail et améliorer leur efficacité.',
        start_now: 'Commencer maintenant',
        view_pricing: 'Voir les tarifs'
      }
    },
    presentation: {
      title: 'Notre approche du développement',
      subtitle: 'Découvrez les principes qui guident le développement d\'Evalix et notre engagement envers l\'excellence technique et l\'accessibilité.',
      development: {
        title: 'Philosophie de développement',
        description: 'Durant le développement d\'Evalix, nous avons axé nos efforts sur trois piliers fondamentaux'
      },
      features: {
        interface: {
          title: 'Interface épurée',
          description: 'Une interface utilisateur claire et intuitive, conçue pour une utilisation efficace au quotidien.'
        },
        speed: {
          title: 'Rapidité d\'utilisation',
          description: 'Optimisé pour des calculs rapides et précis, permettant un gain de temps considérable.'
        },
        intuitive: {
          title: 'Intuitivité',
          description: 'Développé avec un focus sur l\'expérience utilisateur pour une prise en main immédiate.'
        }
      },
      pricing_benefits: {
        small: {
          title: 'Petites sociétés',
          description: 'Tarification adaptée aux besoins et budgets des petites structures.'
        },
        large: {
          title: 'Grandes sociétés',
          description: 'Solutions scalables pour les organisations de grande taille avec des besoins étendus.'
        }
      },
      test_license: {
        title: 'Licence de test disponible',
        description: 'Évaluez Evalix dans vos conditions réelles',
        content: 'Sur demande, nous pouvons délivrer une licence de test de 15 jours pour vous permettre d\'évaluer Evalix dans vos conditions réelles d\'utilisation.',
        cta_request: 'Demander une licence de test',
        cta_demo: 'Demander une démonstration'
      },
      languages: {
        title: 'Disponible en 3 langues',
        description: 'Evalix s\'adapte à votre environnement linguistique',
        content: 'Notre logiciel est disponible en trois langues : français, néerlandais et anglais. Cette approche multilingue permet aux professionnels de travailler dans leur langue de prédilection et facilite les échanges dans un contexte international.'
      },
      precision: {
        title: 'Précision maximale des calculs',
        description: 'Des calculs d\'indemnités d\'une précision inégalée',
        content: 'Notre logiciel calcule les indemnités le plus précisément possible en tenant compte de tous les paramètres pertinents. Chaque détail compte dans l\'évaluation d\'un dossier.',
        example_title: 'Exemple concret',
        example: 'Les calculs de capitalisation tiennent compte de l\'âge de la victime au jour près pour trouver le résultat le plus exact et tiennent compte de la composition familiale pour ajuster les indemnités en conséquence.'
      },
      interests: {
        title: 'Gestion avancée des intérêts',
        description: 'Calculs d\'intérêts conformes à la législation',
        content: 'Le logiciel dispose d\'une fonction permettant de choisir si les intérêts doivent être calculés pour les indemnités. Il tient compte automatiquement des taux d\'intérêts légaux en vigueur, garantissant ainsi la conformité de vos calculs avec la réglementation.'
      },
      cta: {
        pricing: 'Voir les tarifs'
      },
      fair_pricing: {
        title: 'Tarification équitable',
        description: 'Une approche tarifaire adaptée à tous les types de structures',
        content: 'Notre démarche était également de produire un logiciel avec une tarification juste, autant pour les petites que les grandes sociétés. Nous croyons que l\'accès à des outils de qualité professionnelle ne doit pas être réservé aux grandes organisations.'
      },
      final_cta: {
        title: 'Prêt à découvrir Evalix ?',
        subtitle: 'Contactez-nous pour obtenir votre licence de test ou pour en savoir plus sur nos solutions.',
        demo_button: 'Demander une démonstration',
        pricing_button: 'Voir les tarifs'
      }
    },
    features: {
      precision: 'Précision absolue',
      efficiency: 'Gestion efficace',
      security: 'Sécurité des données',
      support: 'Support professionnel',
      calculation: 'Précision absolue',
      reports: 'Rapports en un clic',
      updates: 'Mises à jour automatiques'
    },
    footer: {
      description: 'Evalix - Solution professionnelle pour le calcul d\'indemnités en dommages corporels',
      legal: 'Mentions légales',
      legal_section: 'Légal',
      privacy: 'Politique de confidentialité',
      navigation: 'Navigation',
      conditions_generales: 'Conditions générales de vente'
    },
    legal_page: {
      badge: 'Mentions légales',
      heroTitle: 'Informations légales du site Evalix',
      heroIntro: 'Ces informations ont pour objectif d\'informer les utilisateurs sur l\'identité de l\'éditeur du site, son hébergeur, ainsi que sur les conditions d\'utilisation.',
      sections: [
        {
          title: '1. Informations légales',
          paragraphs: [
            'Le présent site internet est édité par :'
          ],
          details: [
            'JVTP SNC',
            'Chemin des Pères 1',
            '1420 Braine-l\'Alleud - Belgique',
            'Numéro d\'entreprise (BCE) : 1029.330.643',
            'Date de création : 17 octobre 2025',
            'Numéro de TVA : 1029.330.643',
            'Adresse e-mail : info@evalix.be'
          ]
        },
        {
          title: '2. Responsables de la publication',
          paragraphs: [
            'Les responsables de la publication sont Thomas Point et Julien Van der Borght, en leur qualité de gérants de la société JVTP SNC.',
            'Ils peuvent être contactés à l\'adresse e-mail mentionnée ci-dessus.'
          ]
        },
        {
          title: '3. Hébergeur du site',
          paragraphs: [
            'Le site est hébergé par :'
          ],
          details: [
            'Hostinger International Ltd.',
            '61 Lordou Vironos Street, 6023 Larnaca, Chypre'
          ],
          links: [
            {
              label: 'Site web',
              text: 'www.hostinger.com',
              href: 'https://www.hostinger.com'
            }
          ]
        },
        {
          title: '4. Objet du site',
          paragraphs: [
            'Le site JVTP a pour objet de présenter et de commercialiser le logiciel développé par la société.',
            'Toute commande passée via le site implique l\'acceptation préalable des Conditions Générales de Vente (CGV), consultables sur le site.'
          ]
        },
        {
          title: '5. Propriété intellectuelle',
          paragraphs: [
            'L\'ensemble du contenu du site (textes, images, logos, graphismes, vidéos, logiciels, etc.) est la propriété exclusive de JVTP SNC, sauf mention contraire.',
            'Toute reproduction, représentation, modification, publication, transmission ou adaptation, totale ou partielle, est strictement interdite sans autorisation écrite préalable.'
          ]
        },
        {
          title: '6. Protection des données personnelles (RGPD)',
          paragraphs: [
            'JVTP SNC s\'engage à ce que la collecte et le traitement de vos données personnelles soient conformes au Règlement Général sur la Protection des Données (UE) 2016/679.',
            'Les utilisateurs disposent d\'un droit d\'accès, de rectification, d\'effacement et d\'opposition concernant leurs données personnelles.',
            'Ces demandes peuvent être adressées à : [adresse e-mail de contact].',
            'Une politique de confidentialité détaillée est disponible sur le site.'
          ]
        },
        {
          title: '7. Cookies',
          paragraphs: [
            'Le site n\'utilise aucun cookie.'
          ]
        },
        {
          title: '8. Responsabilité',
          paragraphs: [
            'JVTP SNC s\'efforce d\'assurer la disponibilité et la mise à jour du site, mais ne saurait être tenue responsable d\'interruptions, d\'erreurs, de pertes de données ou de tout dommage direct ou indirect résultant de l\'utilisation du site ou des services proposés.'
          ]
        }
      ]
    },
    privacy_page: {
      badge: 'Politique de confidentialité',
      heroTitle: 'Protection des données personnelles',
      heroIntro: 'Cette politique explique comment JVTP SNC collecte, utilise, conserve et protège vos données personnelles dans le cadre de l\'utilisation du site et du logiciel Evalix.',
      title: 'Politique de Confidentialité',
      lastUpdated: 'Dernière mise à jour : 20/11/2025',
      sections: [
        {
          title: '1. Introduction',
          paragraphs: [
            'La présente politique de confidentialité décrit la manière dont JVTP SNC, société en nom collectif dont le siège social est situé Chemin des Pères 1, 1420 Braine-l\'Alleud (Belgique) et enregistrée à la BCE sous le numéro 1029.330.643, traite les données personnelles de ses clients, prospects et utilisateurs du logiciel Evalix.',
            'JVTP SNC s\'engage à respecter la législation en vigueur en matière de protection des données, notamment le RGPD et la loi belge du 30 juillet 2018.'
          ]
        },
        {
          title: '2. Responsable du traitement',
          paragraphs: [
            'Le responsable du traitement des données est : JVTP SNC, Chemin des Pères 1, 1420 Braine-l\'Alleud. E-mail : info@evalix.be.'
          ]
        },
        {
          title: '3. Données collectées',
          paragraphs: [
            'JVTP SNC collecte uniquement les données nécessaires à la gestion de la relation commerciale et du support client.',
            'Le logiciel Evalix ne collecte, ne transmet ni ne stocke aucune donnée encodée par l\'utilisateur, celles-ci demeurant sous la seule responsabilité du client.'
          ]
        },
        {
          title: '4. Finalités du traitement',
          paragraphs: [
            'Les données sont utilisées pour : la gestion des commandes et licences, le support technique, la communication sur les mises à jour, la gestion comptable et légale, et les communications commerciales (avec consentement).'
          ]
        },
        {
          title: '5. Base légale du traitement',
          paragraphs: [
            'Les traitements reposent sur les bases suivantes : exécution du contrat, obligation légale, consentement et intérêt légitime.'
          ]
        },
        {
          title: '6. Durée de conservation',
          paragraphs: [
            'Les données sont conservées pendant la durée de la relation contractuelle puis archivées 5 ans.',
            'Les données marketing sont conservées jusqu\'au retrait du consentement.'
          ]
        },
        {
          title: '7. Partage des données',
          paragraphs: [
            'Les données ne sont jamais vendues ni louées.',
            'Elles peuvent être partagées avec des prestataires techniques ou les autorités si la loi l\'exige.'
          ]
        },
        {
          title: '8. Hébergement et sécurité',
          paragraphs: [
            'Le site web de JVTP SNC est hébergé par Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Chypre.',
            'JVTP SNC met en œuvre des mesures techniques et organisationnelles pour protéger les données contre la perte, le vol ou l\'accès non autorisé.'
          ]
        },
        {
          title: '9. Droits des personnes concernées',
          paragraphs: [
            'Chaque utilisateur dispose d\'un droit d\'accès, de rectification, d\'effacement, de limitation, d\'opposition et de portabilité.',
            'Pour exercer ces droits : [adresse e-mail à compléter]. Réponse sous 30 jours ouvrés.'
          ]
        },
        {
          title: '10. Transfert de données hors UE',
          paragraphs: [
            'Aucun transfert hors de l\'Union européenne n\'est effectué, sauf nécessité contractuelle et garanties conformes au RGPD.'
          ]
        },
        {
          title: '11. Cookies',
          paragraphs: [
            'Le site n\'utilise aucun cookie.'
          ]
        },
        {
          title: '12. Modification de la politique',
          paragraphs: [
            'La présente politique peut être mise à jour à tout moment.',
            'Les modifications importantes seront notifiées via le site ou par e-mail.'
          ]
        },
        {
          title: '13. Contact',
          paragraphs: [
            'Pour toute question concernant la protection des données : JVTP SNC, Chemin des Pères 1, 1420 Braine-l\'Alleud.',
            'E-mail : [à compléter].'
          ]
        }
      ]
    },
    terms_page: {
      badge: 'Conditions générales de vente',
      heroTitle: 'Conditions Générales de Vente (CGV) - Licence logiciel Evalix',
      heroIntro: 'Ces conditions encadrent la vente et l\'utilisation des licences du logiciel Evalix édité par JVTP SNC.',
      sections: [
        {
          title: 'Article 1 : Parties',
          paragraphs: [
            'Les présentes Conditions Générales de Vente (ci-après les "CGV") régissent la vente et l\'octroi de licences du logiciel Evalix entre :',
            'La société JVTP SNC, dont le siège social est situé Chemin des Pères 1, 1420 Braine-l\'Alleud (Belgique), immatriculée sous le numéro de TVA [Numéro d\'immatriculation - à compléter] (ci-après l\'Éditeur ou le Vendeur).',
            'Et le Client désirant acquérir une licence d\'utilisation du logiciel Evalix (ci-après le Client ou le Licencié).'
          ],
          list: [
            'Adresse e-mail : info@evalix.be',
            'Site web : https://www.evalix.be'
          ]
        },
        {
          title: 'Article 2 : Objet du contrat',
          paragraphs: [
            'Le présent contrat a pour objet la concession non exclusive et non transférable d\'un droit d\'utilisation du logiciel Evalix, édité par JVTP SNC.',
            'Le logiciel Evalix est un outil informatique destiné au calcul de l\'indemnisation de dommages corporels résultant d\'accidents.',
            'Le Vendeur concède au Client une licence d\'utilisation du logiciel, sans transfert de propriété sur le logiciel, ses mises à jour ou sa documentation.'
          ]
        },
        {
          title: 'Article 3 : Périmètre et restrictions de la licence',
          paragraphs: [
            'La présente licence définit les droits et limites accordés au Client concernant l\'utilisation du logiciel Evalix.'
          ],
          subsections: [
            {
              title: '3.1. Droits d\'utilisation concédés',
              list: [
                'Installer et utiliser le logiciel Evalix sur le nombre de postes correspondant au nombre de licences acquises.',
                'Utiliser le programme pour ses besoins propres et conformément à sa destination.',
                'Partager les fichiers générés par le logiciel Evalix avec des tiers.'
              ]
            },
            {
              title: '3.2. Restrictions d\'utilisation',
              paragraphs: [
                'Sauf autorisation écrite et préalable de l\'Éditeur, le Client s\'interdit expressément de :'
              ],
              list: [
                'Procéder à la rétro-ingénierie, la décompilation ou le désassemblage du logiciel.',
                'Modifier, adapter ou créer des dérivés du logiciel.',
                'Distribuer, vendre, sous-licencier, louer, prêter ou mettre à disposition le logiciel à des tiers.',
                'Utiliser le logiciel à des fins illicites ou non conformes à sa destination.'
              ]
            }
          ]
        },
        {
          title: 'Article 4 : Durée de la licence et renouvellement',
          paragraphs: [
            'La licence d\'utilisation du logiciel Evalix est concédée pour une durée déterminée, selon le choix effectué lors de la commande :'
          ],
          list: [
            'Durée trimestrielle (3 mois).',
            'Durée annuelle (12 mois).'
          ],
          note: 'Un mois avant l\'expiration de la licence, l\'Éditeur contacte le Client pour proposer le renouvellement. Le renouvellement est effectif après réception du paiement conformément à l\'article 5.'
        },
        {
          title: 'Article 5 : Prix et modalités de paiement',
          subsections: [
            {
              title: '5.1. Prix des licences',
              paragraphs: [
                'Les prix sont exprimés en euros, hors TVA (HTVA) et toutes taxes comprises (TTC), au taux de TVA belge en vigueur (actuellement 21 %).'
              ],
              list: [
                'Formule trimestrielle : jusqu\'à dix licences, 50 € par mois HTVA par licence ; à partir de onze licences, 45 € par mois HTVA par licence.',
                'Formule annuelle : jusqu\'à dix licences, 45 € par mois HTVA par licence ; à partir de onze licences, 40 € par mois HTVA par licence.',
                'Le paiement est dû en une seule fois pour la période de licence choisie.'
              ]
            },
            {
              title: '5.2. Modalités de paiement',
              paragraphs: [
                'Le paiement des licences s\'effectue exclusivement par virement bancaire sur le compte de JVTP SNC.',
                'Les coordonnées bancaires sont communiquées au Client lors de la commande.'
              ]
            },
            {
              title: '5.3. Conséquences du non-paiement',
              paragraphs: [
                'En cas de non-réception du paiement dans les délais impartis, l\'Éditeur se réserve le droit de suspendre immédiatement les licences du Client jusqu\'à régularisation complète.'
              ]
            }
          ]
        },
        {
          title: 'Article 6 : Livraison et activation',
          subsections: [
            {
              title: '6.1. Mode de livraison',
              list: [
                'Le logiciel Evalix est fourni via un lien de téléchargement sécurisé envoyé par e-mail et disponible sur le site de l\'Éditeur.',
                'Les codes d\'activation des licences sont envoyés au Client par e-mail.'
              ]
            },
            {
              title: '6.2. Délais de livraison',
              paragraphs: [
                'Les codes d\'activation sont transmis dans un délai maximum de 72 heures ouvrées à compter de la réception effective du paiement.'
              ]
            },
            {
              title: '6.3. Procédure d\'activation',
              paragraphs: [
                'Le Client reçoit par e-mail les instructions détaillées ainsi que les codes nécessaires pour activer ses licences et utiliser le logiciel Evalix.'
              ]
            }
          ]
        },
        {
          title: 'Article 7 : Mises à jour et support',
          subsections: [
            {
              title: '7.1. Politique de mises à jour',
              paragraphs: [
                'Les mises à jour du logiciel Evalix sont incluses dans le prix de la licence.',
                'Elles sont automatiquement téléchargées et installées lorsque le logiciel est en fonctionnement et qu\'une connexion internet est disponible.'
              ]
            },
            {
              title: '7.2. Services de support',
              paragraphs: [
                'En cas de difficulté, le Client peut contacter l\'Éditeur :'
              ],
              list: [
                'Par e-mail : info@evalix.be.',
                'Via le formulaire de contact sur le site de l\'Éditeur : https://www.evalix.be.'
              ],
              note: 'La demande doit inclure une description détaillée du problème et, si possible, des captures d\'écran. Un accusé de réception est envoyé sous 24 heures ouvrées et l\'Éditeur s\'efforce de résoudre le problème dans les meilleurs délais.'
            }
          ]
        },
        {
          title: 'Article 8 : Garanties et responsabilités',
          subsections: [
            {
              title: '8.1. Garanties légales',
              paragraphs: [
                'L\'Éditeur est tenu des défauts de conformité du logiciel et des vices cachés de la chose vendue dans les conditions prévues par la loi belge.'
              ]
            },
            {
              title: '8.2. Garantie commerciale',
              paragraphs: [
                'L\'Éditeur garantit que le logiciel Evalix est exempt de bugs majeurs empêchant son utilisation normale pendant la durée de la licence.',
                'Cette garantie ne couvre pas les problèmes résultant d\'une utilisation non conforme, de modifications du logiciel ou d\'incompatibilités non spécifiées.',
                'En cas de bug majeur empêchant l\'utilisation complète du logiciel, l\'Éditeur peut prolonger la durée des licences actives ou rembourser partiellement le Client.'
              ]
            },
            {
              title: '8.3. Exclusions de garantie',
              list: [
                'Utilisation du logiciel non conforme à sa destination ou aux instructions fournies par l\'Éditeur.',
                'Modifications, adaptations ou altérations du logiciel par le Client ou un tiers non autorisé.',
                'Dommages causés par des logiciels tiers, des virus, des attaques informatiques ou toute autre cause extérieure au logiciel.',
                'Non-respect des prérequis techniques ou d\'environnement spécifiés par l\'Éditeur.'
              ]
            },
            {
              title: '8.4. Limitation de responsabilité',
              paragraphs: [
                'La responsabilité de l\'Éditeur est limitée au montant total payé par le Client pour la licence au cours des douze derniers mois précédant le fait générateur du dommage.',
                'Aucun dédommagement n\'est dû pour les dommages indirects, y compris la perte de données, de chiffre d\'affaires ou de clientèle.',
                'Le logiciel Evalix ne collectant aucune donnée personnelle, le Client reste seul responsable des données traitées via le logiciel.'
              ]
            }
          ]
        },
        {
          title: 'Article 9 : Propriété intellectuelle',
          paragraphs: [
            'Le logiciel Evalix et tous les droits de propriété intellectuelle afférents demeurent la propriété exclusive de JVTP SNC.',
            'L\'acquisition d\'une licence n\'accorde aucun droit de propriété intellectuelle au Client. Toute reproduction, adaptation ou utilisation non autorisée est strictement interdite.'
          ]
        },
        {
          title: 'Article 10 : Résiliation',
          subsections: [
            {
              title: '10.1. Conditions de résiliation',
              paragraphs: [
                'La licence peut être résiliée de plein droit par l\'Éditeur, sans préavis ni indemnité, en cas de manquement grave du Client, notamment :'
              ],
              list: [
                'Non-paiement des sommes dues dans les délais impartis.',
                'Violation des restrictions d\'utilisation de la licence.',
                'Tentative de rétro-ingénierie, de décompilation, de modification ou de distribution non autorisée du logiciel.'
              ],
              note: 'Le Client peut ne pas renouveler sa licence à l\'issue de la période en cours. Aucun remboursement n\'est accordé pour la période restante.'
            },
            {
              title: '10.2. Conséquences de la résiliation',
              list: [
                'Toutes les licences concédées au Client sont immédiatement désactivées.',
                'Les droits d\'utilisation prennent fin et le Client doit désinstaller le logiciel de tous ses systèmes.',
                'Le Client ne peut prétendre à aucun remboursement des sommes déjà versées.'
              ]
            }
          ]
        },
        {
          title: 'Article 11 : Protection des données personnelles',
          paragraphs: [
            'L\'Éditeur respecte le Règlement Général sur la Protection des Données (RGPD) pour les données collectées dans le cadre de la gestion des licences et de la relation client.',
            'Le logiciel Evalix ne collecte ni ne stocke les données encodées par l\'utilisateur, lesquelles restent sous la seule responsabilité du Client.'
          ]
        },
        {
          title: 'Article 12 : Force majeure',
          paragraphs: [
            'En cas de force majeure empêchant l\'exécution des obligations de l\'une des parties, celles-ci sont suspendues.',
            'En cas de bug majeur avéré empêchant l\'utilisation normale du logiciel, l\'Éditeur prolonge la durée des licences pour couvrir la période comprise entre la notification du problème et sa résolution.'
          ]
        },
        {
          title: 'Article 13 : Non-cession',
          paragraphs: [
            'La licence d\'utilisation du logiciel Evalix est personnelle et incessible. Toute cession, transfert ou concession à un tiers nécessite l\'accord écrit préalable de l\'Éditeur.'
          ]
        },
        {
          title: 'Article 14 : Droit applicable et règlement des litiges',
          subsections: [
            {
              title: '14.1. Droit applicable',
              paragraphs: [
                'Les présentes CGV sont régies et interprétées conformément au droit belge.'
              ]
            },
            {
              title: '14.2. Règlement amiable des litiges',
              paragraphs: [
                'En cas de litige relatif à la validité, à l\'interprétation ou à l\'exécution des CGV, les parties recherchent une solution amiable, notamment via la médiation.'
              ]
            },
            {
              title: '14.3. Juridiction compétente',
              paragraphs: [
                'À défaut de résolution amiable, tout litige relève de la compétence exclusive du Tribunal de l\'entreprise du Brabant wallon, division Nivelles (Belgique), même en cas de pluralité de défendeurs ou d\'appel en garantie.'
              ]
            }
          ]
        },
        {
          title: 'Article 15 : Acceptation des CGV',
          paragraphs: [
            'Le Client reconnaît avoir pris connaissance des présentes CGV avant de passer commande.',
            'L\'acquisition d\'une licence et la réception du paiement par le Vendeur valent acceptation pleine et entière des présentes CGV.'
          ]
        }
      ]
    },
    pricing: {
      title: 'Nos plans tarifaires',
      subtitle: 'Choisissez le plan qui correspond le mieux à vos besoins et à la taille de votre équipe.',
      quarterly: 'Trimestriel',
      annual: 'Annuel',
      recommended: 'Recommandé',
      perMonth: 'par mois',
      perLicense: 'licence',
      perMonthPerLicense: 'par mois et par licence',
      htva: 'HTVA',
      tvac: 'TVAC',
      savings: 'Économies',
      subscribe: 'Souscrire',
      plans: {
        small: {
          name: '1 à 9 licences',
          description: 'Parfait pour les petits cabinets et équipes'
        },
        large: {
          name: '10 licences ou plus',
          description: 'Idéal pour les grandes structures'
        }
      },
      contact_section: {
        title: 'Besoin d\'une solution sur mesure ?',
        description: 'Pour les grandes organisations ou des besoins spécifiques, nous proposons des solutions personnalisées. Contactez notre équipe pour discuter de vos exigences.'
      },
      features_included: 'Fonctionnalités incluses',
      feature_descriptions: {
        calculation: 'Calculs automatisés basés sur la législation en vigueur et les barèmes officiels',
        reports: 'Génération de rapports détaillés pour la gestion de vos dossiers',
        support: 'Assistance technique dédiée et assistance à l\'utilisation du logiciel',
        updates: 'Mises à jour automatiques avec les dernières évolutions légales',
        security: 'Aucune conservation des données sur nos serveurs et conformité GDPR garantie',
      },
      period: {
        month1: 'Mensuel',
        month3: 'Trimestriel',
        month6: 'Semestriel',
        year1: 'Annuel'
      }
    },
    contact_page: {
      title: 'Contactez-nous',
      subtitle: 'Nous sommes là pour répondre à toutes vos questions et vous accompagner.',
      form: {
        send_message_title: 'Envoyez-nous un message',
        send_message_description: 'Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.',
        name: 'Nom complet',
        your_name: 'Votre nom',
        email: 'Email',
        your_email: 'votre@email.com',
        company: 'Société',
        company_name: 'Nom de votre société',
        phone: 'Téléphone',
        phone_placeholder: '+32 XXX XX XX XX',
        subject: 'Sujet',
        subject_placeholder: 'Objet de votre demande',
        message: 'Message',
        message_placeholder: 'Décrivez votre demande en détail...',
        send: 'Envoyer le message',
        sending: 'Envoi en cours...',
        success: 'Votre message a été envoyé avec succès !',
        error: 'Une erreur est survenue lors de l\'envoi du message. Merci de réessayer.'
      },
      contact_info: {
        title: 'Informations de contact',
        email_info: {
          title: 'Email',
          description: 'Réponse sous 24h'
        },
        phone_info: {
          title: 'Téléphone',
          description: 'Nous vous rappelons dans les 24h après réception de votre formulaire de contact.'
        }
      },
      faq: {
        title: 'Questions fréquemment posées',
        q1: {
          title: 'Proposez-vous une démonstration ?',
          answer: 'Oui, nous proposons des démonstrations personnalisées pour vous présenter toutes les fonctionnalités d\'Evalix adaptées à vos besoins.'
        },
        q2: {
          title: 'Quel est le délai de mise en service ?',
          answer: 'Dès que vous avez communiqué votre/vos code(s) d\'activation de licence, il suffit d\'installer le logiciel pour commencer.'
        },
        q3: {
          title: 'Proposez-vous un support technique ?',
          answer: 'Oui, notre équipe de support technique est disponible pour vous accompagner et répondre à toutes vos questions d\'utilisation.'
        }
      },
      cta: {
        title: 'Prêt à découvrir Evalix ?',
        subtitle: 'Demandez une démonstration personnalisée et découvrez comment Evalix peut transformer votre gestion des indemnités.',
        request_demo: 'Demander une démo'
      }
    },
    downloads_page: {
      title: 'Télécharger Evalix',
      subtitle: 'Téléchargez la dernière version d\'Evalix pour votre système d\'exploitation. Installation simple et rapide en quelques clics.',
      windows_card: {
        title: 'Windows',
        description: 'Compatible avec Windows 10 et versions ultérieures',
        requirements: 'Configuration requise :',
        os: 'Windows 10 ou supérieur',
        processor: 'Intel Core i3 ou équivalent',
        memory: '4 GB RAM',
        storage: '500 MB d\'espace libre',
        download_button: 'Télécharger pour Windows',
        file_info: 'Fichier .exe • Version {version}'
      },
      macos_card: {
        title: 'macOS',
        description: 'Compatible avec macOS 10.14 et versions ultérieures',
        requirements: 'Configuration requise :',
        os: 'macOS 10.14 ou supérieur',
        processor: 'Intel Core i3 ou Apple Silicon',
        memory: '4 GB RAM',
        storage: '500 MB d\'espace libre',
        download_button: 'Télécharger pour macOS',
        file_info: 'Fichier .dmg • Version {version}'
      },
      features_section: {
        title: 'Fonctionnalités',
        secure_reliable: {
          title: 'Sécurisé et fiable',
          description: 'Application signée numériquement et vérifiée'
        },
        latest_version: {
          title: 'Dernière version',
          description: 'Version {version} avec les dernières améliorations'
        },
        modern_interface: {
          title: 'Interface moderne',
          description: 'Design intuitif et professionnel'
        }
      },
      installation_instructions: {
        title: 'Instructions d\'installation',
        windows: {
          title: 'Windows',
          step1: 'Téléchargez le fichier {file}',
          step2: 'Exécutez le fichier en tant qu\'administrateur',
          step3: 'Suivez les instructions de l\'assistant d\'installation',
          step4: 'Lancez Evalix depuis le menu Démarrer'
        },
        macos: {
          title: 'macOS',
          step1: 'Téléchargez le fichier {file}',
          step2: 'Ouvrez le fichier .dmg téléchargé',
          step3: 'Glissez Evalix vers le dossier Applications',
          step4: 'Lancez Evalix depuis le Launchpad'
        }
      },
      support_section: {
        title: 'Besoin d\'aide ?',
        description: 'Si vous rencontrez des difficultés lors de l\'installation ou de l\'utilisation d\'Evalix, notre équipe de support est là pour vous aider.',
        contact_support: 'Contacter le support'
      }
    },
    header: {
      change_language: 'Changer de langue',
      change_theme: 'Changer de thème',
      menu: 'Menu'
    },
    account: {
      title: 'Mon espace client',
      subtitle: 'Gérez vos informations personnelles et votre abonnement Evalix',
      loading: 'Chargement de votre espace client...',
      general_info: {
        title: 'Informations générales',
        subtitle: 'Mettez à jour vos informations personnelles et professionnelles',
        email: 'Adresse e-mail',
        email_readonly: 'Votre adresse e-mail ne peut pas être modifiée',
        company: 'Nom de société',
        company_placeholder: 'Nom de votre société',
        address: 'Adresse',
        address_placeholder: 'Adresse complète',
        vat: 'Numéro TVA',
        vat_placeholder: 'Numéro de TVA (optionnel)',
        save: 'Sauvegarder les modifications',
        saving: 'Sauvegarde en cours...',
        success: 'Profil mis à jour avec succès',
        error: 'Erreur lors de la mise à jour du profil'
      },
      license: {
        title: 'Licence',
        subtitle_with: 'Votre clé de licence Evalix',
        subtitle_without: 'Générez votre clé de licence Evalix',
        key_label: 'CLÉ DE LICENCE',
        devices_usage: 'UTILISATION DES APPAREILS',
        devices_count: 'appareils',
        devices_active: 'actif',
        devices_active_plural: 'actifs',
        devices_available: 'appareil disponible',
        devices_available_plural: 'appareils disponibles',
        limit_reached: 'Limite atteinte',
        expires_warning: 'Cette clé sera désactivée le',
        update_subscription: 'Modifier l\'abonnement',
        update_subscription_desc: 'Modifiez le nombre de licences ou changez votre plan d\'abonnement.',
        generate_key: 'Générer une clé',
        generate_key_desc: 'Cette clé est nécessaire pour activer votre logiciel Evalix.'
      },
      subscription: {
        title: 'Abonnement',
        status: 'Statut',
        status_active: 'Actif',
        status_inactive: 'Inactif',
        type: 'Type',
        type_monthly: 'Mensuel',
        type_annual: 'Annuel',
        end_date: 'Fin de l\'abonnement',
        update_payment: 'Modifier le moyen de paiement',
        updating_payment: 'Mise à jour...',
        cancel: 'Annuler l\'abonnement',
        cancelling: 'Annulation en cours...',
        resume: 'Reprendre l\'abonnement',
        resuming: 'Reprise en cours...',
        confirm_cancel_title: 'Confirmer l\'annulation',
        confirm_cancel_desc: 'Êtes-vous sûr de vouloir annuler votre abonnement ? Cette action est irréversible et vous perdrez l\'accès à tous les services premium à la fin de votre période de facturation actuelle.',
        confirm_cancel_button: 'Confirmer l\'annulation'
      },
      logout: 'Se déconnecter'
    },
    generate_key_modal: {
      forfait: 'Forfait',
      per_license: 'par licence',
      plan: 'Plan',
      title_generate: 'Générer une nouvelle clé de licence',
      title_update: 'Mettre à jour votre abonnement',
      desc_generate: 'Configurez votre nouvelle licence en sélectionnant le nombre de licences et le type d\'abonnement.',
      desc_update: 'Modifiez le nombre de licences ou changez votre plan d\'abonnement.',
      current_subscription: 'Abonnement actuel',
      license_count: 'Nombre de licences',
      license_count_placeholder: 'Entrez le nombre de licences',
      billing_plan: 'Choisissez votre plan de facturation',
      no_plans: 'Aucun plan disponible',
      order_summary: 'Résumé de la commande',
      licenses: 'licence',
      licenses_plural: 'licences',
      total_monthly: 'Total mensuel',
      total_quarterly: 'Total trimestriel',
      total_annual: 'Total annuel',
      interval_month: 'mois',
      interval_quarter: 'trimestre',
      interval_year: 'an',
      cancel: 'Annuler',
      generate: 'Générer la clé',
      update: 'Mettre à jour',
      generating: 'Génération...',
      updating: 'Mise à jour...',
      tier_standard: 'Tarif standard',
      tier_standard_up_to: 'Tarif standard (jusqu\'à',
      tier_preferential: 'Tarif préférentiel',
      savings_potential: 'Économisez',
      savings_current: 'Vous économisez',
      savings_per_license: 'par licence',
      savings_total: 'au total',
      savings_from: 'à partir de',
      pricing_tiers: {
        standard: 'Tarif standard',
        bulk: 'Tarif préférentiel',
        save_message: 'Économisez {percentage}% ({amount}€/licence) à partir de {quantity} licences',
        current_savings: 'Vous économisez {percentage}% par licence ({total}€ au total)'
      }
    }
  },
  nl: {
    pageTitle: {
      base: "Evalix - Software voor berekening van letselschade vergoedingen",
      home: "Home - Evalix",
      presentation: "Presentatie - Evalix",
      pricing: "Prijzen - Evalix",
      contact: "Contact - Evalix",
      downloads: "Downloads - Evalix",
      login: "Inloggen - Evalix",
      signup: "Registreren - Evalix",
      account: "Mijn Account - Evalix",
      legal: "Juridische vermeldingen - Evalix",
      privacy: "Privacybeleid - Evalix",
      terms: "Algemene voorwaarden - Evalix"
    },
    nav: {
      home: 'Home',
      presentation: 'Presentatie',
      pricing: 'Tarieven',
      contact: 'Contact',
      downloads: 'Downloads',
      subscribe: 'Abonneren',
        account: {
        title: 'Mijn account',
        space: 'Mijn klantenzone',
        logout: 'Uitloggen'
      }
    },
    hero: {
      title: "De tool voor het berekenen van schadevergoedingen voor lichamelijk letsel",
      subtitle: "Ontdek Evalix, de professionele software voor het berekenen van schadevergoedingen voor slachtoffers van ongevallen met lichamelijk letsel.",
      cta: "Downloaden"
    },
    home: {
      new_version_badge: "Nieuwe versie {version} beschikbaar",
      why_choose_evalix: {
        title: "Waarom kiezen voor Evalix?",
        subtitle: "Een complete oplossing die voldoet aan de specifieke behoeften van professionals in de juridische en verzekeringssector op het gebied van schadevergoeding."
      },
      features: {
        precision: {
          title: "Absolute precisie",
          description: "Berekeningen gebaseerd op de geldende wetgeving en de indicatieve tabel van de magistratuur, regelmatig bijgewerkt."
        },
        efficiency: {
          title: "Efficiënt beheer",
          description: "Automatisering van berekeningen, inclusief rente, en begeleiding bij het invoeren van gegevens om uw dossiers snel samen te stellen."
        },
        security: {
          title: "Gegevensbeveiliging",
          description: "Beveiligde applicatie met back-up van bestanden op uw apparaat of server, waardoor de vertrouwelijkheid van uw gegevens wordt gegarandeerd."
        },
        reports: {
          title: "Rapporten met één klik",
          description: "Automatische generatie van duidelijke en volledige samenvattingen met transparante berekeningen."
        },
        negotiation_tool: {
          title: "Onderhandelingstool",
          description: "Voer eenvoudig alle gewenste simulaties uit en visualiseer onmiddellijk de gevolgen van elke wijziging."
        },
        continuous_development: {
          title: "Doorlopende ontwikkeling",
          description: "Het programma wordt voortdurend ontwikkeld en nieuwe functionaliteiten worden regelmatig toegevoegd."
        }
      },
      benefits: {
        title: "De concrete voordelen van Evalix",
        time_saving: {
          title: "Aanzienlijke tijdsbesparing",
          description: "Een schone en intuïtieve interface om de coderingstijd te verkorten."
        },
        recognized_expertise: {
          title: "Erkende expertise",
          description: "Ontwikkeld in samenwerking met professionals uit de juridische sector en verzekeringen."
        },
        dedicated_support: {
          title: "Toegewijde ondersteuning",
          description: "Technische ondersteuning en trainingsteam dat luistert voor optimale adoptie."
        }
      },
      test_license: {
        title: "Test Evalix gratis",
        subtitle: "Ontdek alle functionaliteiten van Evalix met onze testlicentie",
        badge: "15 dagen gratis proefperiode",
        description: "Het is mogelijk om ons een testlicentie van 15 dagen te vragen om Evalix te evalueren in uw echte gebruiksomstandigheden. Deze proefperiode geeft u toegang tot alle functionaliteiten van de software zonder enige beperking.",
        cta_request: "Vraag een testlicentie aan",
        cta_learn_more: "Meer informatie"
      },
      cta: {
        title: "Klaar om uw schadevergoedingsbeheer te transformeren?",
        subtitle: "Sluit u aan bij de professionals die Evalix al hebben geadopteerd om hun werk te optimaliseren en hun efficiëntie te verbeteren.",
        start_now: "Nu beginnen",
        view_pricing: "Bekijk tarieven"
      }
    },
    presentation: {
      title: "Onze ontwikkelingsaanpak",
      subtitle: "Ontdek de principes die de ontwikkeling van Evalix leiden en onze toewijding aan technische excellentie en toegankelijkheid.",
      development: {
        title: "Ontwikkelingsfilosofie",
        description: "Tijdens de ontwikkeling van Evalix hebben we onze inspanningen gericht op drie fundamentele pijlers"
      },
      features: {
        interface: {
          title: "Schone interface",
          description: "Een duidelijke en intuïtieve gebruikersinterface, ontworpen voor efficiënt dagelijks gebruik."
        },
        speed: {
          title: "Gebruikssnelheid",
          description: "Geoptimaliseerd voor snelle en nauwkeurige berekeningen, waardoor aanzienlijke tijdsbesparing mogelijk is."
        },
        intuitive: {
          title: "Intuïtiviteit",
          description: "Ontwikkeld met een focus op gebruikerservaring voor onmiddellijke adoptie."
        }
      },
      pricing_benefits: {
        small: {
          title: "Kleine bedrijven",
          description: "Prijsstelling aangepast aan de behoeften en budgetten van kleine structuren."
        },
        large: {
          title: "Grote bedrijven",
          description: "Schaalbare oplossingen voor grote organisaties met uitgebreide behoeften."
        }
      },
      test_license: {
        title: "Testlicentie beschikbaar",
        description: "Evalueer Evalix in uw echte omstandigheden",
        content: "Op verzoek kunnen we een testlicentie van 15 dagen verstrekken om u in staat te stellen Evalix te evalueren in uw echte gebruiksomstandigheden.",
        cta_request: "Vraag een testlicentie aan",
        cta_demo: "Vraag een demonstratie aan"
      },
      languages: {
        title: "Beschikbaar in 3 talen",
        description: "Evalix past zich aan uw taalomgeving aan",
        content: "Onze software is beschikbaar in drie talen: Frans, Nederlands en Engels. Deze meertalige aanpak stelt professionals in staat om in hun voorkeurstaal te werken en vergemakkelijkt uitwisselingen in een internationale context."
      },
      precision: {
        title: "Maximale precisie van berekeningen",
        description: "Schadevergoedingsberekeningen van ongeëvenaarde precisie",
        content: "Onze software berekent schadevergoedingen zo nauwkeurig mogelijk door rekening te houden met alle relevante parameters. Elk detail telt bij de evaluatie van een dossier.",
        example_title: "Concreet voorbeeld",
        example: "Kapitalisatieberekeningen houden rekening met de leeftijd van het slachtoffer tot op de dag nauwkeurig om het meest exacte resultaat te vinden en houden rekening met de gezinssamenstelling om schadevergoedingen dienovereenkomstig aan te passen."
      },
      interests: {
        title: "Geavanceerd rentebeheer",
        description: "Renteberekeningen conform de wetgeving",
        content: "De software heeft een functie waarmee u kunt kiezen of rente moet worden berekend voor schadevergoedingen. Het houdt automatisch rekening met de geldende wettelijke rentetarieven, waardoor de conformiteit van uw berekeningen met de regelgeving wordt gegarandeerd."
      },
      cta: {
        pricing: "Bekijk tarieven"
      },
      fair_pricing: {
        title: "Eerlijke prijsstelling",
        description: "Een tariefaanpak aangepast aan alle soorten structuren",
        content: "Onze aanpak was ook om software te produceren met eerlijke prijsstelling, zowel voor kleine als grote bedrijven. We geloven dat toegang tot professionele kwaliteitstools niet voorbehouden moet zijn aan grote organisaties."
      },
      final_cta: {
        title: "Klaar om Evalix te ontdekken?",
        subtitle: "Neem contact met ons op om uw testlicentie te krijgen of om meer te weten te komen over onze oplossingen.",
        demo_button: "Vraag een demonstratie aan",
        pricing_button: "Bekijk tarieven"
      }
    },
    features: {
      precision: 'Absolute precisie',
      efficiency: 'Efficiënt beheer',
      security: 'Gegevensbeveiliging',
      support: 'Professionele ondersteuning',
      calculation: 'Absolute precisie',
      reports: 'Rapporten met één klik',
      updates: 'Automatische updates'
    },
    footer: {
      description: 'Evalix - Professionele oplossing voor het berekenen van schadevergoedingen bij lichamelijk letsel',
      legal: 'Juridische vermeldingen',
      legal_section: 'Juridisch',
      privacy: 'Privacybeleid',
      navigation: 'Navigatie',
      conditions_generales: 'Algemene voorwaarden van verkoop'
    },
    legal_page: {
      badge: 'Juridische vermeldingen',
      heroTitle: 'Wettelijke informatie over de website van Evalix',
      heroIntro: 'Deze informatie heeft als doel gebruikers te informeren over de identiteit van de uitgever van de website, de hostingprovider en de gebruiksvoorwaarden.',
      sections: [
        {
          title: '1. Wettelijke informatie',
          paragraphs: [
            'Deze website wordt uitgegeven door:'
          ],
          details: [
            'JVTP SNC',
            'Chemin des Pères 1',
            '1420 Braine-l\'Alleud - België',
            'Ondernemingsnummer (KBO): 1029.330.643',
            'Oprichtingsdatum: 17 oktober 2025',
            'btw-nummer: 1029.330.643',
            'E-mailadres: info@evalix.be'
          ]
        },
        {
          title: '2. Verantwoordelijken voor de publicatie',
          paragraphs: [
            'De verantwoordelijken voor de publicatie zijn Thomas Point en Julien Van der Borght, in hun hoedanigheid van zaakvoerders van JVTP SNC.',
            'Zij zijn bereikbaar via het hierboven vermelde e-mailadres.'
          ]
        },
        {
          title: '3. Hostingprovider',
          paragraphs: [
            'De website wordt gehost door:'
          ],
          details: [
            'Hostinger International Ltd.',
            '61 Lordou Vironos Street, 6023 Larnaca, Cyprus'
          ],
          links: [
            {
              label: 'Website',
              text: 'www.hostinger.com',
              href: 'https://www.hostinger.com'
            }
          ]
        },
        {
          title: '4. Doel van de website',
          paragraphs: [
            'De website van JVTP heeft tot doel de door de vennootschap ontwikkelde software te presenteren en te commercialiseren.',
            'Elke bestelling via de website impliceert de voorafgaande aanvaarding van de Algemene Verkoopsvoorwaarden (AVV), raadpleegbaar op de website.'
          ]
        },
        {
          title: '5. Intellectuele eigendom',
          paragraphs: [
            'Alle inhoud van de website (teksten, afbeeldingen, logo\'s, grafieken, video\'s, software, enz.) is, tenzij anders vermeld, exclusief eigendom van JVTP SNC.',
            'Elke reproductie, voorstelling, wijziging, publicatie, overdracht of aanpassing, geheel of gedeeltelijk, is verboden zonder voorafgaande schriftelijke toestemming.'
          ]
        },
        {
          title: '6. Bescherming van persoonsgegevens (GDPR)',
          paragraphs: [
            'JVTP SNC verbindt zich ertoe dat de verzameling en verwerking van uw persoonsgegevens in overeenstemming zijn met de Algemene Verordening Gegevensbescherming (EU) 2016/679.',
            'Gebruikers beschikken over een recht op inzage, rectificatie, verwijdering en bezwaar met betrekking tot hun persoonsgegevens.',
            'Deze verzoeken kunnen worden gericht aan: [contact-e-mailadres].',
            'Een gedetailleerd privacybeleid is beschikbaar op de website.'
          ]
        },
        {
          title: '7. Cookies',
          paragraphs: [
            'De website maakt geen gebruik van cookies.'
          ]
        },
        {
          title: '8. Aansprakelijkheid',
          paragraphs: [
            'JVTP SNC streeft naar de beschikbaarheid en actualisering van de website, maar kan niet aansprakelijk worden gesteld voor onderbrekingen, fouten, gegevensverlies of enige directe of indirecte schade die voortvloeit uit het gebruik van de website of de aangeboden diensten.'
          ]
        }
      ]
    },
    privacy_page: {
      badge: 'Privacybeleid',
      heroTitle: 'Bescherming van persoonsgegevens',
      heroIntro: 'Dit beleid legt uit hoe JVTP SNC uw persoonsgegevens verzamelt, gebruikt, bewaart en beschermt in het kader van het gebruik van de website en de Evalix-software.',
      title: 'Privacybeleid',
      lastUpdated: 'Laatste update: 20/11/2025',
      sections: [
        {
          title: '1. Inleiding',
          paragraphs: [
            'Dit privacybeleid beschrijft hoe JVTP SNC, een vennootschap onder firma met maatschappelijke zetel Chemin des Pères 1, 1420 Braine-l\'Alleud (België) en ingeschreven bij de KBO onder het nummer 1029.330.643, de persoonsgegevens verwerkt van haar klanten, prospecten en gebruikers van de Evalix-software.',
            'JVTP SNC verbindt zich ertoe de toepasselijke wetgeving inzake gegevensbescherming na te leven, waaronder de GDPR en de Belgische wet van 30 juli 2018.'
          ]
        },
        {
          title: '2. Verwerkingsverantwoordelijke',
          paragraphs: [
            'De verwerkingsverantwoordelijke is: JVTP SNC, Chemin des Pères 1, 1420 Braine-l\'Alleud. E-mail: info@evalix.be.'
          ]
        },
        {
          title: '3. Verzamelde gegevens',
          paragraphs: [
            'JVTP SNC verzamelt uitsluitend de gegevens die noodzakelijk zijn voor het beheer van de commerciële relatie en de klantenservice.',
            'De Evalix-software verzamelt, verzendt of bewaart geen gegevens die door de gebruiker worden ingevoerd; deze blijven volledig onder de verantwoordelijkheid van de klant.'
          ]
        },
        {
          title: '4. Doeleinden van de verwerking',
          paragraphs: [
            'De gegevens worden gebruikt voor: het beheer van bestellingen en licenties, technische ondersteuning, communicatie over updates, boekhoudkundige en wettelijke verplichtingen en commerciële communicatie (met toestemming).'
          ]
        },
        {
          title: '5. Rechtsgrond van de verwerking',
          paragraphs: [
            'De verwerkingen zijn gebaseerd op de volgende gronden: uitvoering van het contract, wettelijke verplichting, toestemming en gerechtvaardigd belang.'
          ]
        },
        {
          title: '6. Bewaartermijn',
          paragraphs: [
            'De gegevens worden bewaard gedurende de looptijd van de contractuele relatie en vervolgens gedurende 5 jaar gearchiveerd.',
            'Marketinggegevens worden bewaard tot het intrekken van de toestemming.'
          ]
        },
        {
          title: '7. Gegevensdeling',
          paragraphs: [
            'De gegevens worden nooit verkocht of verhuurd.',
            'Ze kunnen worden gedeeld met technische dienstverleners of met de autoriteiten indien de wet dit vereist.'
          ]
        },
        {
          title: '8. Hosting en beveiliging',
          paragraphs: [
            'De website van JVTP SNC wordt gehost door Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Cyprus.',
            'JVTP SNC implementeert technische en organisatorische maatregelen om gegevens te beschermen tegen verlies, diefstal of ongeoorloofde toegang.'
          ]
        },
        {
          title: '9. Rechten van betrokkenen',
          paragraphs: [
            'Elke gebruiker beschikt over een recht op inzage, rectificatie, verwijdering, beperking, bezwaar en overdraagbaarheid van zijn gegevens.',
            'Deze verzoeken kunnen worden gericht aan: [aan te vullen e-mailadres]. Antwoord binnen 30 werkdagen.'
          ]
        },
        {
          title: '10. Gegevensoverdracht buiten de EU',
          paragraphs: [
            'Er vindt geen overdracht buiten de Europese Unie plaats, behalve indien contractueel noodzakelijk en met waarborgen in overeenstemming met de GDPR.'
          ]
        },
        {
          title: '11. Cookies',
          paragraphs: [
            'De website gebruikt geen cookies.'
          ]
        },
        {
          title: '12. Wijziging van het beleid',
          paragraphs: [
            'Dit beleid kan op elk moment worden bijgewerkt.',
            'Belangrijke wijzigingen worden meegedeeld via de website of per e-mail.'
          ]
        },
        {
          title: '13. Contact',
          paragraphs: [
            'Voor vragen over gegevensbescherming: JVTP SNC, Chemin des Pères 1, 1420 Braine-l\'Alleud.',
            'E-mail: [aan te vullen].'
          ]
        }
      ]
    },
    terms_page: {
      badge: 'Algemene verkoopsvoorwaarden',
      heroTitle: 'Algemene Verkoopsvoorwaarden (AVV) - Evalix-softwarelicentie',
      heroIntro: 'Deze voorwaarden regelen de verkoop en het gebruik van de Evalix-licenties die door JVTP SNC worden uitgegeven.',
      sections: [
        {
          title: 'Artikel 1: Partijen',
          paragraphs: [
            'Deze Algemene Verkoopsvoorwaarden ("AVV") regelen de verkoop en de toekenning van licenties voor de Evalix-software tussen:',
            'De vennootschap JVTP SNC, met maatschappelijke zetel Chemin des Pères 1, 1420 Braine-l\'Alleud (België), ingeschreven onder btw-nummer [btw-nummer - aan te vullen] (hierna de Uitgever of Verkoper).',
            'En de klant die een gebruikslicentie voor de Evalix-software wil verwerven (hierna de Klant of Licentienemer).'
          ],
          list: [
            'E-mailadres: info@evalix.be',
            'Website: https://www.evalix.be'
          ]
        },
        {
          title: 'Artikel 2: Voorwerp van het contract',
          paragraphs: [
            'Dit contract heeft tot doel een niet-exclusief en niet-overdraagbaar gebruiksrecht op de Evalix-software te verlenen, uitgegeven door JVTP SNC.',
            'De Evalix-software is een informaticatool die bedoeld is voor de berekening van schadevergoedingen bij lichamelijke letselschade als gevolg van ongevallen.',
            'De Verkoper verleent de Klant een gebruikslicentie zonder overdracht van eigendom van de software, de updates of de documentatie.'
          ]
        },
        {
          title: 'Artikel 3: Omvang en beperkingen van de licentie',
          paragraphs: [
            'Deze licentie bepaalt de rechten en beperkingen die aan de Klant worden toegekend bij het gebruik van de Evalix-software.'
          ],
          subsections: [
            {
              title: '3.1. Verleende gebruiksrechten',
              list: [
                'De Evalix-software te installeren en te gebruiken op het aantal toestellen dat overeenkomt met het aantal aangeschafte licenties.',
                'De software te gebruiken voor eigen behoeften en overeenkomstig de bestemming ervan.',
                'De door de Evalix-software gegenereerde bestanden met derden te delen.'
              ]
            },
            {
              title: '3.2. Gebruiksbeperkingen',
              paragraphs: [
                'Zonder voorafgaande schriftelijke toestemming van de Uitgever verbindt de Klant zich ertoe om niet:'
              ],
              list: [
                'Reverse engineering, decompilatie of demontage van de software uit te voeren.',
                'De software te wijzigen, aan te passen of afgeleide werken te creëren.',
                'De software te distribueren, verkopen, sublicentiëren, verhuren, uitlenen of ter beschikking te stellen van derden.',
                'De software te gebruiken voor onwettige doeleinden of op een wijze die niet overeenkomt met de bestemming.'
              ]
            }
          ]
        },
        {
          title: 'Artikel 4: Duur van de licentie en verlenging',
          paragraphs: [
            'De licentie op de Evalix-software wordt voor bepaalde duur verleend, afhankelijk van de keuze bij de bestelling:'
          ],
          list: [
            'Driemaandelijkse duur (3 maanden).',
            'Jaarlijkse duur (12 maanden).'
          ],
          note: 'Een maand voor het verstrijken van de licentie neemt de Uitgever contact op met de Klant om een verlenging voor te stellen. De verlenging wordt pas van kracht na ontvangst van de betaling overeenkomstig artikel 5.'
        },
        {
          title: 'Artikel 5: Prijs en betalingsmodaliteiten',
          subsections: [
            {
              title: '5.1. Licentieprijzen',
              paragraphs: [
                'De prijzen worden uitgedrukt in euro, exclusief btw en inclusief btw, volgens het in België geldende btw-tarief (momenteel 21%).'
              ],
              list: [
                'Driemaandelijks plan: tot en met tien licenties, 50 € per maand excl. btw per licentie; vanaf elf licenties, 45 € per maand excl. btw per licentie.',
                'Jaarlijks plan: tot en met tien licenties, 45 € per maand excl. btw per licentie; vanaf elf licenties, 40 € per maand excl. btw per licentie.',
                'De betaling is verschuldigd in één keer voor de gekozen licentieperiode.'
              ]
            },
            {
              title: '5.2. Betalingsmodaliteiten',
              paragraphs: [
                'De betaling van de licenties gebeurt uitsluitend via bankoverschrijving op de rekening van JVTP SNC.',
                'De bankgegevens worden aan de Klant meegedeeld tijdens de bestelling.'
              ]
            },
            {
              title: '5.3. Gevolgen van niet-betaling',
              paragraphs: [
                'Bij het uitblijven van de betaling binnen de gestelde termijnen behoudt de Uitgever zich het recht voor om de licenties van de Klant onmiddellijk te schorsen tot volledige regularisatie.'
              ]
            }
          ]
        },
        {
          title: 'Artikel 6: Levering en activatie',
          subsections: [
            {
              title: '6.1. Leveringswijze',
              list: [
                'De Evalix-software wordt geleverd via een beveiligde downloadlink die per e-mail wordt verzonden en beschikbaar is op de website van de Uitgever.',
                'De activatiecodes van de licenties worden per e-mail naar de Klant gestuurd.'
              ]
            },
            {
              title: '6.2. Leveringstermijnen',
              paragraphs: [
                'De activatiecodes worden uiterlijk binnen 72 werkuren na de effectieve ontvangst van de betaling door de Uitgever verzonden.'
              ]
            },
            {
              title: '6.3. Activatieprocedure',
              paragraphs: [
                'De Klant ontvangt per e-mail de gedetailleerde instructies en de codes die nodig zijn om de licenties te activeren en de Evalix-software te gebruiken.'
              ]
            }
          ]
        },
        {
          title: 'Artikel 7: Updates en ondersteuning',
          subsections: [
            {
              title: '7.1. Updatebeleid',
              paragraphs: [
                'Updates van de Evalix-software zijn in de licentieprijs inbegrepen.',
                'Ze worden automatisch gedownload en geïnstalleerd wanneer de software actief is en er een internetverbinding beschikbaar is.'
              ]
            },
            {
              title: '7.2. Ondersteuningsdiensten',
              paragraphs: [
                'Bij vragen of problemen kan de Klant contact opnemen met de Uitgever:'
              ],
              list: [
                'Via e-mail: info@evalix.be.',
                'Via het contactformulier op de website van de Uitgever: https://www.evalix.be.'
              ],
              note: 'Het verzoek moet een gedetailleerde beschrijving van het probleem bevatten en indien mogelijk schermopnamen. De Uitgever bevestigt ontvangst binnen 24 werkuren en streeft ernaar het probleem zo snel mogelijk op te lossen.'
            }
          ]
        },
        {
          title: 'Artikel 8: Garanties en aansprakelijkheid',
          subsections: [
            {
              title: '8.1. Wettelijke garanties',
              paragraphs: [
                'De Uitgever is aansprakelijk voor conformiteitsgebreken van de software en verborgen gebreken van het verkochte goed onder de voorwaarden van het Belgische recht.'
              ]
            },
            {
              title: '8.2. Commerciële garantie',
              paragraphs: [
                'De Uitgever garandeert dat de Evalix-software vrij is van ernstige bugs die het normale gebruik verhinderen gedurende de looptijd van de licentie.',
                'Deze garantie dekt geen problemen die het gevolg zijn van oneigenlijk gebruik, wijzigingen door de Klant of niet-gespecificeerde incompatibiliteiten.',
                'Bij een ernstige bug die het volledige gebruik verhindert, kan de Uitgever de duur van de actieve licenties verlengen of de Klant gedeeltelijk terugbetalen.'
              ]
            },
            {
              title: '8.3. Uitsluitingen van garantie',
              list: [
                'Gebruik van de software dat niet overeenstemt met de bestemming of met de instructies van de Uitgever.',
                'Wijzigingen, aanpassingen of wijzigingen van de software door de Klant of een niet-geautoriseerde derde.',
                'Schade veroorzaakt door software van derden, virussen, cyberaanvallen of andere externe oorzaken.',
                'Niet-naleving van de technische vereisten of het aanbevolen systeem door de Uitgever.'
              ]
            },
            {
              title: '8.4. Aansprakelijkheidsbeperking',
              paragraphs: [
                'De aansprakelijkheid van de Uitgever is beperkt tot het totale bedrag dat de Klant in de twaalf maanden voorafgaand aan het schadegeval voor de licentie heeft betaald.',
                'Er wordt geen schadevergoeding toegekend voor indirecte schade, waaronder verlies van gegevens, omzet of cliënteel.',
                'Omdat de Evalix-software geen persoonsgegevens verzamelt, blijft de Klant als enige verantwoordelijk voor de gegevens die via de software worden verwerkt.'
              ]
            }
          ]
        },
        {
          title: 'Artikel 9: Intellectuele eigendom',
          paragraphs: [
            'De Evalix-software en alle bijbehorende intellectuele-eigendomsrechten blijven het exclusieve eigendom van JVTP SNC.',
            'De verwerving van een licentie verleent de Klant geen enkel intellectueel eigendomsrecht. Elke ongeoorloofde reproductie, aanpassing of gebruik is strikt verboden.'
          ]
        },
        {
          title: 'Artikel 10: Beëindiging',
          subsections: [
            {
              title: '10.1. Beëindigingsvoorwaarden',
              paragraphs: [
                'De Uitgever kan de licentie van rechtswege en zonder schadevergoeding beëindigen bij ernstige tekortkomingen van de Klant, met name:'
              ],
              list: [
                'Niet-betaling van verschuldigde bedragen binnen de gestelde termijnen.',
                'Schending van de gebruiksbeperkingen van de licentie.',
                'Poging tot reverse engineering, decompilatie, wijziging of ongeoorloofde distributie van de software.'
              ],
              note: 'De Klant kan de licentie beëindigen door geen verlenging aan te vragen aan het einde van de lopende periode. Geen terugbetaling voor de resterende periode.'
            },
            {
              title: '10.2. Gevolgen van beëindiging',
              list: [
                'Alle aan de Klant toegekende licenties worden onmiddellijk gedeactiveerd.',
                'Alle gebruiksrechten eindigen en de Klant moet de software van al zijn systemen verwijderen.',
                'Er wordt geen terugbetaling gedaan van reeds betaalde bedragen.'
              ]
            }
          ]
        },
        {
          title: 'Artikel 11: Bescherming van persoonsgegevens',
          paragraphs: [
            'De Uitgever respecteert de GDPR voor de gegevens die worden verzameld in het kader van het licentiebeheer en de klantrelatie.',
            'De Evalix-software verzamelt of bewaart geen gegevens die door de gebruiker worden ingevoerd; deze blijven volledig onder verantwoordelijkheid van de Klant.'
          ]
        },
        {
          title: 'Artikel 12: Overmacht',
          paragraphs: [
            'In geval van overmacht die de uitvoering van de verplichtingen van een partij verhindert, worden deze verplichtingen opgeschort.',
            'Bij een aangetoonde ernstige bug die het normale gebruik van de software verhindert, verlengt de Uitgever de licenties voor de periode tussen de melding van het probleem en de effectieve oplossing.'
          ]
        },
        {
          title: 'Artikel 13: Niet-overdraagbaarheid',
          paragraphs: [
            'De licentie voor het gebruik van de Evalix-software is persoonlijk en niet-overdraagbaar. Elke overdracht, cessie of onderlicentie vereist de voorafgaande schriftelijke toestemming van de Uitgever.'
          ]
        },
        {
          title: 'Artikel 14: Toepasselijk recht en geschillenbeslechting',
          subsections: [
            {
              title: '14.1. Toepasselijk recht',
              paragraphs: [
                'Deze AVV worden beheerst en geïnterpreteerd volgens het Belgische recht.'
              ]
            },
            {
              title: '14.2. Minnerlijke geschillenregeling',
              paragraphs: [
                'Bij een geschil over de geldigheid, interpretatie of uitvoering van de AVV verbinden de partijen zich ertoe eerst een minnelijke oplossing te zoeken, onder meer via bemiddeling.'
              ]
            },
            {
              title: '14.3. Bevoegde rechtbank',
              paragraphs: [
                'Bij gebrek aan minnelijke oplossing is de Ondernemingsrechtbank Waals-Brabant, afdeling Nijvel (België), exclusief bevoegd, zelfs bij meerdere verweerders of vrijwaring.'
              ]
            }
          ]
        },
        {
          title: 'Artikel 15: Aanvaarding van de AVV',
          paragraphs: [
            'De Klant erkent de huidige AVV te hebben gelezen voordat hij een bestelling plaatst.',
            'De aankoop van een licentie en de ontvangst van de betaling door de Verkoper houden een volledige en onvoorwaardelijke aanvaarding van deze AVV in.'
          ]
        }
      ]
    },
    pricing: {
      title: 'Onze tariefplannen',
      subtitle: 'Kies het plan dat het beste past bij uw behoeften en de grootte van uw team.',
      quarterly: 'Driemaandelijks',
      annual: 'Jaarlijks',
      recommended: 'Aanbevolen',
      perMonth: 'per maand',
      perLicense: 'licentie',
      perMonthPerLicense: 'per maand en per licentie',
      htva: 'Excl. BTW',
      tvac: 'Incl. BTW',
      savings: 'Besparingen',
      subscribe: 'Abonneren',
      plans: {
        small: {
          name: '1 tot 10 licenties',
          description: 'Perfect voor kleine kantoren en teams'
        },
        large: {
          name: '10 licenties of meer',
          description: 'Ideaal voor grote structuren'
        }
      },
      contact_section: {
        title: 'Heeft u een oplossing op maat nodig?',
        description: 'Voor grote organisaties of specifieke behoeften bieden we gepersonaliseerde oplossingen. Neem contact op met ons team om uw vereisten te bespreken.'
      },
      features_included: 'Inbegrepen functionaliteiten',
      feature_descriptions: {
        calculation: 'Geautomatiseerde berekeningen gebaseerd op de geldende wetgeving en officiële schalen',
        reports: 'Generatie van gedetailleerde rapporten voor het beheer van uw dossiers',
        support: 'Toegewijde technische assistentie en hulp bij het gebruik van de software',
        updates: 'Automatische updates met de laatste juridische ontwikkelingen',
        security: 'Geen bewaring van gegevens op onze servers en gegarandeerde GDPR-naleving',
      },
      period: {
        month1: 'Maandelijks',
        month3: 'Driemaandelijks',
        month6: 'Halfjaarlijks',
        year1: 'Jaarlijks'
      }
    },
    contact_page: {
      title: 'Neem contact met ons op',
      subtitle: 'We zijn er om al uw vragen te beantwoorden en u te begeleiden.',
      form: {
        send_message_title: 'Stuur ons een bericht',
        send_message_description: 'Vul het onderstaande formulier in en we nemen snel contact met u op.',
        name: 'Volledige naam',
        your_name: 'Uw naam',
        email: 'Email',
        your_email: 'uw@email.com',
        company: 'Bedrijf',
        company_name: 'Naam van uw bedrijf',
        phone: 'Telefoon',
        phone_placeholder: '+32 XXX XX XX XX',
        subject: 'Onderwerp',
        subject_placeholder: 'Onderwerp van uw verzoek',
        message: 'Bericht',
        message_placeholder: 'Beschrijf uw verzoek in detail...',
        send: 'Bericht verzenden',
        sending: 'Bezig met verzenden...',
        success: 'Uw bericht is succesvol verzonden!',
        error: 'Er is een fout opgetreden bij het verzenden van het bericht. Probeer het opnieuw.'
      },
      contact_info: {
        title: 'Contactinformatie',
        email_info: {
          title: 'Email',
          description: 'Antwoord binnen 24 uur'
        },
        phone_info: {
          title: 'Telefoon',
          description: 'We bellen u terug binnen 24 uur na ontvangst van uw contactformulier.'
        }
      },
      faq: {
        title: 'Veelgestelde vragen',
        q1: {
          title: 'Bieden jullie een demonstratie aan?',
          answer: 'Ja, we bieden gepersonaliseerde demonstraties om u alle functionaliteiten van Evalix te presenteren die zijn aangepast aan uw behoeften.'
        },
        q2: {
          title: 'Wat is de implementatietijd?',
          answer: 'Zodra u uw licentieactivatiecode(s) heeft doorgegeven, hoeft u alleen maar de software te installeren om te beginnen.'
        },
        q3: {
          title: 'Bieden jullie technische ondersteuning?',
          answer: 'Ja, ons technische ondersteuningsteam is beschikbaar om u te begeleiden en al uw gebruiksvragen te beantwoorden.'
        }
      },
      cta: {
        title: 'Klaar om Evalix te ontdekken?',
        subtitle: 'Vraag een gepersonaliseerde demonstratie aan en ontdek hoe Evalix uw schadevergoedingsbeheer kan transformeren.',
        request_demo: 'Vraag een demo aan'
      }
    },
    downloads_page: {
      title: 'Download Evalix',
      subtitle: 'Download de nieuwste versie van Evalix voor uw besturingssysteem. Eenvoudige en snelle installatie in een paar klikken.',
      windows_card: {
        title: 'Windows',
        description: 'Compatibel met Windows 10 en latere versies',
        requirements: 'Systeemvereisten:',
        os: 'Windows 10 of hoger',
        processor: 'Intel Core i3 of equivalent',
        memory: '4 GB RAM',
        storage: '500 MB vrije ruimte',
        download_button: 'Download voor Windows',
        file_info: 'Bestand .exe • Versie {version}'
      },
      macos_card: {
        title: 'macOS',
        description: 'Compatibel met macOS 10.14 en latere versies',
        requirements: 'Systeemvereisten:',
        os: 'macOS 10.14 of hoger',
        processor: 'Intel Core i3 of Apple Silicon',
        memory: '4 GB RAM',
        storage: '500 MB vrije ruimte',
        download_button: 'Download voor macOS',
        file_info: 'Bestand .dmg • Versie {version}'
      },
      features_section: {
        title: 'Functionaliteiten',
        secure_reliable: {
          title: 'Veilig en betrouwbaar',
          description: 'Digitaal ondertekende en geverifieerde applicatie'
        },
        latest_version: {
          title: 'Nieuwste versie',
          description: 'Versie {version} met de nieuwste verbeteringen'
        },
        modern_interface: {
          title: 'Moderne interface',
          description: 'Intuïtief en professioneel ontwerp'
        }
      },
      installation_instructions: {
        title: 'Installatie-instructies',
        windows: {
          title: 'Windows',
          step1: 'Download het bestand {file}',
          step2: 'Voer het bestand uit als administrator',
          step3: 'Volg de instructies van de installatiewizard',
          step4: 'Start Evalix vanuit het Startmenu'
        },
        macos: {
          title: 'macOS',
          step1: 'Download het bestand {file}',
          step2: 'Open het gedownloade .dmg-bestand',
          step3: 'Sleep Evalix naar de map Toepassingen',
          step4: 'Start Evalix vanuit Launchpad'
        }
      },
      support_section: {
        title: 'Hulp nodig?',
        description: 'Als u problemen ondervindt tijdens de installatie of het gebruik van Evalix, staat ons ondersteuningsteam klaar om u te helpen.',
        contact_support: 'Contact opnemen met ondersteuning'
      }
    },
    header: {
      change_language: 'Taal wijzigen',
      change_theme: 'Thema wijzigen',
      menu: 'Menu'
    },
    account: {
      title: 'Mijn klantportaal',
      subtitle: 'Beheer uw persoonlijke informatie en uw Evalix abonnement',
      loading: 'Laden van uw klantportaal...',
      general_info: {
        title: 'Algemene informatie',
        subtitle: 'Werk uw persoonlijke en professionele informatie bij',
        email: 'E-mailadres',
        email_readonly: 'Uw e-mailadres kan niet worden gewijzigd',
        company: 'Bedrijfsnaam',
        company_placeholder: 'Naam van uw bedrijf',
        address: 'Adres',
        address_placeholder: 'Volledig adres',
        vat: 'BTW-nummer',
        vat_placeholder: 'BTW-nummer (optioneel)',
        save: 'Wijzigingen opslaan',
        saving: 'Opslaan...',
        success: 'Profiel succesvol bijgewerkt',
        error: 'Fout bij het bijwerken van het profiel'
      },
      license: {
        title: 'Licentie',
        subtitle_with: 'Uw Evalix licentiesleutel',
        subtitle_without: 'Genereer uw Evalix licentiesleutel',
        key_label: 'LICENTIESLEUTEL',
        devices_usage: 'APPARAATGEBRUIK',
        devices_count: 'apparaten',
        devices_active: 'actief',
        devices_active_plural: 'actief',
        devices_available: 'apparaat beschikbaar',
        devices_available_plural: 'apparaten beschikbaar',
        limit_reached: 'Limiet bereikt',
        expires_warning: 'Deze sleutel wordt gedeactiveerd op',
        update_subscription: 'Abonnement wijzigen',
        update_subscription_desc: 'Wijzig het aantal licenties of verander uw abonnementsplan.',
        generate_key: 'Sleutel genereren',
        generate_key_desc: 'Deze sleutel is nodig om uw Evalix software te activeren.'
      },
      subscription: {
        title: 'Abonnement',
        status: 'Status',
        status_active: 'Actief',
        status_inactive: 'Inactief',
        type: 'Type',
        type_monthly: 'Maandelijks',
        type_annual: 'Jaarlijks',
        end_date: 'Einde abonnement',
        update_payment: 'Betaalmethode wijzigen',
        updating_payment: 'Bijwerken...',
        cancel: 'Abonnement annuleren',
        cancelling: 'Annuleren...',
        resume: 'Abonnement hervatten',
        resuming: 'Hervatten...',
        confirm_cancel_title: 'Annulering bevestigen',
        confirm_cancel_desc: 'Weet u zeker dat u uw abonnement wilt annuleren? Deze actie is onomkeerbaar en u verliest toegang tot alle premiumdiensten aan het einde van uw huidige factureringsperiode.',
        confirm_cancel_button: 'Annulering bevestigen'
      },
      logout: 'Uitloggen'
    },
    generate_key_modal: {
      forfait: 'Pakket',
      per_license: 'per licentie',
      plan: 'Plan',
      title_generate: 'Nieuwe licentiesleutel genereren',
      title_update: 'Uw abonnement bijwerken',
      desc_generate: 'Configureer uw nieuwe licentie door het aantal licenties en het type abonnement te selecteren.',
      desc_update: 'Wijzig het aantal licenties of verander uw abonnementsplan.',
      current_subscription: 'Huidig abonnement',
      license_count: 'Aantal licenties',
      license_count_placeholder: 'Voer het aantal licenties in',
      billing_plan: 'Kies uw factureringsplan',
      no_plans: 'Geen plannen beschikbaar',
      order_summary: 'Bestelsamenvatting',
      licenses: 'licentie',
      licenses_plural: 'licenties',
      total_monthly: 'Maandelijks totaal',
      total_quarterly: 'Driemaandelijks totaal',
      total_annual: 'Jaarlijks totaal',
      interval_month: 'maand',
      interval_quarter: 'kwartaal',
      interval_year: 'jaar',
      cancel: 'Annuleren',
      generate: 'Sleutel genereren',
      update: 'Bijwerken',
      generating: 'Genereren...',
      updating: 'Bijwerken...',
      tier_standard: 'Standaardtarief',
      tier_standard_up_to: 'Standaardtarief (tot',
      tier_preferential: 'Voorkeurtarief',
      savings_potential: 'Bespaar',
      savings_current: 'U bespaart',
      savings_per_license: 'per licentie',
      savings_total: 'in totaal',
      savings_from: 'vanaf',
      pricing_tiers: {
        standard: 'Standaardtarief',
        bulk: 'Voorkeurtarief',
        save_message: 'Bespaar {percentage}% ({amount}€/licentie) vanaf {quantity} licenties',
        current_savings: 'U bespaart {percentage}% per licentie ({total}€ in totaal)'
      }
    }
  },
  en: {
    pageTitle: {
      base: "Evalix - Personal Injury Compensation Calculation Software",
      home: "Home - Evalix",
      presentation: "Presentation - Evalix",
      pricing: "Pricing - Evalix",
      contact: "Contact - Evalix",
      downloads: "Downloads - Evalix",
      login: "Login - Evalix",
      signup: "Sign Up - Evalix",
      account: "My Account - Evalix",
      legal: "Legal notices - Evalix",
      privacy: "Privacy Policy - Evalix",
      terms: "Terms and conditions - Evalix"
    },
    nav: {
      home: 'Home',
      presentation: 'Presentation',
      pricing: 'Pricing',
      contact: 'Contact',
      downloads: 'Downloads',
      subscribe: 'Subscribe',
      account: {
        title: 'My account',
        space: 'My customer zone',
        logout: 'Disconnect'
      }
    },
    hero: {
      title: "The tool for calculating personal injury compensation",
      subtitle: "Discover Evalix, the professional software for calculating compensation for accident victims with personal injury.",
      cta: "Download"
    },
    home: {
      new_version_badge: "New version {version} available",
      why_choose_evalix: {
        title: "Why choose Evalix?",
        subtitle: "A complete solution that meets the specific needs of legal and insurance professionals in compensation matters."
      },
      features: {
        precision: {
          title: "Absolute precision",
          description: "Calculations based on current legislation and the indicative table of the magistracy, regularly updated."
        },
        efficiency: {
          title: "Efficient management",
          description: "Automation of calculations, including interest, and guidance in data entry to build your files quickly."
        },
        security: {
          title: "Data security",
          description: "Secure application with file backup on your device or server, ensuring the confidentiality of your data."
        },
        reports: {
          title: "Reports in one click",
          description: "Automatic generation of clear and complete summaries with transparent calculations."
        },
        negotiation_tool: {
          title: "Negotiation tool",
          description: "Easily perform all desired simulations and immediately visualize the consequences of each change."
        },
        continuous_development: {
          title: "Continuous development",
          description: "The program is always under development and new features will be regularly added."
        }
      },
      benefits: {
        title: "The concrete advantages of Evalix",
        time_saving: {
          title: "Considerable time savings",
          description: "A clean and intuitive interface to reduce encoding time."
        },
        recognized_expertise: {
          title: "Recognized expertise",
          description: "Developed in collaboration with professionals from the legal and insurance sector."
        },
        dedicated_support: {
          title: "Dedicated support",
          description: "Technical support and training team listening for optimal adoption."
        }
      },
      test_license: {
        title: "Test Evalix for free",
        subtitle: "Discover all the features of Evalix with our test license",
        badge: "15 days free trial",
        description: "It is possible to ask us for a 15-day test license to evaluate Evalix in your real usage conditions. This trial period will give you access to all software features without any limitation.",
        cta_request: "Request a test license",
        cta_learn_more: "Learn more"
      },
      cta: {
        title: "Ready to transform your compensation management?",
        subtitle: "Join the professionals who have already adopted Evalix to optimize their work and improve their efficiency.",
        start_now: "Start now",
        view_pricing: "View pricing"
      }
    },
    presentation: {
      title: "Our development approach",
      subtitle: "Discover the principles that guide the development of Evalix and our commitment to technical excellence and accessibility.",
      development: {
        title: "Development philosophy",
        description: "During the development of Evalix, we focused our efforts on three fundamental pillars"
      },
      features: {
        interface: {
          title: "Clean interface",
          description: "A clear and intuitive user interface, designed for efficient daily use."
        },
        speed: {
          title: "Speed of use",
          description: "Optimized for fast and accurate calculations, allowing considerable time savings."
        },
        intuitive: {
          title: "Intuitiveness",
          description: "Developed with a focus on user experience for immediate adoption."
        }
      },
      pricing_benefits: {
        small: {
          title: "Small companies",
          description: "Pricing adapted to the needs and budgets of small structures."
        },
        large: {
          title: "Large companies",
          description: "Scalable solutions for large organizations with extensive needs."
        }
      },
      test_license: {
        title: "Test license available",
        description: "Evaluate Evalix in your real conditions",
        content: "On request, we can issue a 15-day test license to allow you to evaluate Evalix in your real usage conditions.",
        cta_request: "Request a test license",
        cta_demo: "Request a demonstration"
      },
      languages: {
        title: "Available in 3 languages",
        description: "Evalix adapts to your linguistic environment",
        content: "Our software is available in three languages: French, Dutch and English. This multilingual approach allows professionals to work in their preferred language and facilitates exchanges in an international context."
      },
      precision: {
        title: "Maximum precision of calculations",
        description: "Compensation calculations of unparalleled precision",
        content: "Our software calculates compensation as precisely as possible by taking into account all relevant parameters. Every detail counts in the evaluation of a file.",
        example_title: "Concrete example",
        example: "Capitalization calculations take into account the victim's age to the day to find the most exact result and take into account the family composition to adjust compensation accordingly."
      },
      interests: {
        title: "Advanced interest management",
        description: "Interest calculations compliant with legislation",
        content: "The software has a function to choose whether interest should be calculated for compensation. It automatically takes into account the legal interest rates in force, thus guaranteeing the compliance of your calculations with regulations."
      },
      cta: {
        pricing: "View pricing"
      },
      fair_pricing: {
        title: "Fair pricing",
        description: "A pricing approach adapted to all types of structures",
        content: "Our approach was also to produce software with fair pricing, both for small and large companies. We believe that access to professional quality tools should not be reserved for large organizations."
      },
      final_cta: {
        title: "Ready to discover Evalix?",
        subtitle: "Contact us to get your test license or to learn more about our solutions.",
        demo_button: "Request a demonstration",
        pricing_button: "View pricing"
      }
    },
    features: {
      precision: 'Absolute precision',
      efficiency: 'Efficient management',
      security: 'Data security',
      support: 'Professional support',
      calculation: 'Absolute precision',
      reports: 'Reports in one click',
      updates: 'Automatic updates'
    },
    footer: {
      description: 'Evalix - Professional solution for calculating personal injury compensation',
      legal: 'Legal notices',
      legal_section: 'Legal',
      privacy: 'Privacy policy',
      navigation: 'Navigation',
      conditions_generales: 'General conditions of sale'
    },
    legal_page: {
      badge: 'Legal notices',
      heroTitle: 'Legal information about the Evalix website',
      heroIntro: 'This information informs users about the identity of the website publisher, its hosting provider, and the applicable terms of use.',
      sections: [
        {
          title: '1. Legal information',
          paragraphs: [
            'This website is published by:'
          ],
          details: [
            'JVTP SNC',
            'Chemin des Pères 1',
            '1420 Braine-l\'Alleud - Belgium',
            'Company number (BCE): 1029.330.643',
            'Creation date: 17 October 2025',
            'VAT number: 1029.330.643',
            'Email address: info@evalix.be'
          ]
        },
        {
          title: '2. Publication managers',
          paragraphs: [
            'The publication managers are Thomas Point and Julien Van der Borght, acting as managing partners of JVTP SNC.',
            'They can be contacted at the email address indicated above.'
          ]
        },
        {
          title: '3. Website hosting',
          paragraphs: [
            'The website is hosted by:'
          ],
          details: [
            'Hostinger International Ltd.',
            '61 Lordou Vironos Street, 6023 Larnaca, Cyprus'
          ],
          links: [
            {
              label: 'Website',
              text: 'www.hostinger.com',
              href: 'https://www.hostinger.com'
            }
          ]
        },
        {
          title: '4. Purpose of the website',
          paragraphs: [
            'The JVTP website is intended to present and market the software developed by the company.',
            'Any order placed through the website implies prior acceptance of the General Terms and Conditions of Sale (GTCS), available on the website.'
          ]
        },
        {
          title: '5. Intellectual property',
          paragraphs: [
            'All website content (texts, images, logos, graphics, videos, software, etc.) is the exclusive property of JVTP SNC, unless otherwise stated.',
            'Any reproduction, representation, modification, publication, transmission, or adaptation, in whole or in part, is strictly prohibited without prior written authorization.'
          ]
        },
        {
          title: '6. Protection of personal data (GDPR)',
          paragraphs: [
            'JVTP SNC ensures that the collection and processing of your personal data comply with the General Data Protection Regulation (EU) 2016/679.',
            'Users have the right to access, rectify, erase, and object to the processing of their personal data.',
            'Requests can be sent to: [contact email address].',
            'A detailed privacy policy is available on the website.'
          ]
        },
        {
          title: '7. Cookies',
          paragraphs: [
            'The website does not use any cookies.'
          ]
        },
        {
          title: '8. Liability',
          paragraphs: [
            'JVTP SNC strives to keep the website available and up to date, but cannot be held liable for interruptions, errors, data loss, or any direct or indirect damage resulting from the use of the website or the services provided.'
          ]
        }
      ]
    },
    privacy_page: {
      badge: 'Privacy policy',
      heroTitle: 'Protection of personal data',
      heroIntro: 'This policy explains how JVTP SNC collects, uses, stores, and protects your personal data when using the website and the Evalix software.',
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: 11/20/2025',
      sections: [
        {
          title: '1. Introduction',
          paragraphs: [
            'This privacy policy describes how JVTP SNC, a general partnership with its registered office at Chemin des Pères 1, 1420 Braine-l\'Alleud (Belgium) and registered with the BCE under number 1029.330.643, processes the personal data of its clients, prospects, and users of the Evalix software.',
            'JVTP SNC is committed to complying with the applicable data protection legislation, including the GDPR and the Belgian law of 30 July 2018.'
          ]
        },
        {
          title: '2. Data controller',
          paragraphs: [
            'The data controller is: JVTP SNC, Chemin des Pères 1, 1420 Braine-l\'Alleud. Email: info@evalix.be.'
          ]
        },
        {
          title: '3. Data collected',
          paragraphs: [
            'JVTP SNC only collects the data necessary to manage the commercial relationship and customer support.',
            'The Evalix software does not collect, transmit, or store any data entered by the user; these remain under the sole responsibility of the client.'
          ]
        },
        {
          title: '4. Purposes of processing',
          paragraphs: [
            'Data are used for: managing orders and licenses, technical support, communication about updates, accounting and legal obligations, and marketing communications (with consent).'
          ]
        },
        {
          title: '5. Legal basis for processing',
          paragraphs: [
            'Processing is based on the following legal grounds: performance of the contract, legal obligation, consent, and legitimate interest.'
          ]
        },
        {
          title: '6. Data retention period',
          paragraphs: [
            'Data are kept for the duration of the contractual relationship and then archived for 5 years.',
            'Marketing data are retained until consent is withdrawn.'
          ]
        },
        {
          title: '7. Data sharing',
          paragraphs: [
            'Data are never sold or rented.',
            'They may be shared with technical service providers or with authorities if required by law.'
          ]
        },
        {
          title: '8. Hosting and security',
          paragraphs: [
            'The JVTP SNC website is hosted by Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Cyprus.',
            'JVTP SNC implements technical and organizational measures to protect data against loss, theft, or unauthorized access.'
          ]
        },
        {
          title: '9. Rights of data subjects',
          paragraphs: [
            'Each user has the right to access, rectify, erase, restrict, object to, and port their personal data.',
            'Requests can be sent to: [contact email to be completed]. Response within 30 working days.'
          ]
        },
        {
          title: '10. Data transfers outside the EU',
          paragraphs: [
            'No transfers outside the European Union are carried out, unless contractually required and with safeguards compliant with the GDPR.'
          ]
        },
        {
          title: '11. Cookies',
          paragraphs: [
            'The website does not use cookies.'
          ]
        },
        {
          title: '12. Changes to the policy',
          paragraphs: [
            'This policy may be updated at any time.',
            'Significant changes will be notified via the website or by email.'
          ]
        },
        {
          title: '13. Contact',
          paragraphs: [
            'For any question regarding data protection: JVTP SNC, Chemin des Pères 1, 1420 Braine-l\'Alleud.',
            'Email: [to be completed].'
          ]
        }
      ]
    },
    terms_page: {
      badge: 'General terms of sale',
      heroTitle: 'General Terms and Conditions of Sale (GTCS) - Evalix Software License',
      heroIntro: 'These terms govern the sale and use of Evalix licenses issued by JVTP SNC.',
      sections: [
        {
          title: 'Article 1: Parties',
          paragraphs: [
            'These General Terms and Conditions of Sale ("GTCS") govern the sale and licensing of the Evalix software between:',
            'The company JVTP SNC, with registered office at Chemin des Pères 1, 1420 Braine-l\'Alleud (Belgium), registered under VAT number [VAT number - to be completed] (hereinafter the Vendor).',
            'And the client wishing to acquire a license to use the Evalix software (hereinafter the Client or Licensee).'
          ],
          list: [
            'Email address: info@evalix.be',
            'Website: https://www.evalix.be'
          ]
        },
        {
          title: 'Article 2: Purpose of the agreement',
          paragraphs: [
            'This agreement grants a non-exclusive, non-transferable right to use the Evalix software, published by JVTP SNC.',
            'The Evalix software is an IT tool designed to calculate compensation for bodily injury resulting from accidents.',
            'The Vendor grants the Client a license to use the software, without any transfer of ownership of the software, its updates, or its documentation.'
          ]
        },
        {
          title: 'Article 3: Scope and restrictions of the license',
          paragraphs: [
            'This license defines the rights and limitations granted to the Client regarding the use of the Evalix software.'
          ],
          subsections: [
            {
              title: '3.1. Granted usage rights',
              list: [
                'Install and use the Evalix software on the number of workstations corresponding to the number of licenses purchased.',
                'Use the software for internal needs and in accordance with its intended purpose.',
                'Share files generated by the Evalix software with third parties.'
              ]
            },
            {
              title: '3.2. Usage restrictions',
              paragraphs: [
                'Unless previously authorized in writing by the Vendor, the Client expressly refrains from:'
              ],
              list: [
                'Performing reverse engineering, decompiling, or disassembling the software.',
                'Modifying, adapting, or creating derivative works from the software.',
                'Distributing, selling, sublicensing, renting, lending, or making the software available to third parties.',
                'Using the software for unlawful purposes or in a manner inconsistent with its intended use.'
              ]
            }
          ]
        },
        {
          title: 'Article 4: Term of the license and renewal',
          paragraphs: [
            'The Evalix software license is granted for a fixed period, depending on the option selected at the time of order:'
          ],
          list: [
            'Quarterly term (3 months).',
            'Annual term (12 months).'
          ],
          note: 'One month before the license expires, the Vendor contacts the Client to propose a renewal. The renewal takes effect only after payment is received, in accordance with Article 5.'
        },
        {
          title: 'Article 5: Pricing and payment terms',
          subsections: [
            {
              title: '5.1. License pricing',
              paragraphs: [
                'Prices are expressed in euros, excluding VAT and including VAT, at the Belgian VAT rate in force (currently 21%).'
              ],
              list: [
                'Quarterly plan: up to ten licenses, €50 per month excl. VAT per license; from eleven licenses, €45 per month excl. VAT per license.',
                'Annual plan: up to ten licenses, €45 per month excl. VAT per license; from eleven licenses, €40 per month excl. VAT per license.',
                'Payment is due in a single instalment for the selected license period.'
              ]
            },
            {
              title: '5.2. Payment terms',
              paragraphs: [
                'Payment for the licenses is made exclusively by bank transfer to the account of JVTP SNC.',
                'Bank details are provided to the Client during the order process.'
              ]
            },
            {
              title: '5.3. Consequences of non-payment',
              paragraphs: [
                "If payment is not received within the allotted time, the Vendor reserves the right to immediately suspend the Client's licenses until full payment is made."
              ]
            }
          ]
        },
        {
          title: 'Article 6: Delivery and activation',
          subsections: [
            {
              title: '6.1. Delivery method',
              list: [
                "The Evalix software is provided via a secure download link sent by email and available on the Vendor's website.",
                'License activation codes are sent to the Client by email.'
              ]
            },
            {
              title: '6.2. Delivery timeframes',
              paragraphs: [
                'Activation codes are sent within 72 working hours from the effective receipt of payment by the Vendor.'
              ]
            },
            {
              title: '6.3. Activation procedure',
              paragraphs: [
                'The Client receives by email the detailed instructions and codes required to activate the licenses and use the Evalix software.'
              ]
            }
          ]
        },
        {
          title: 'Article 7: Updates and support',
          subsections: [
            {
              title: '7.1. Update policy',
              paragraphs: [
                'Updates to the Evalix software are included in the license price.',
                'They are automatically downloaded and installed when the software is running and an internet connection is available.'
              ]
            },
            {
              title: '7.2. Support services',
              paragraphs: [
                'In case of difficulty, the Client may contact the Vendor:'
              ],
              list: [
                'By email: info@evalix.be.',
                "Via the contact form on the Vendor's website: https://www.evalix.be."
              ],
              note: 'Requests must include a detailed description of the issue and, where possible, screenshots. The Vendor acknowledges receipt within 24 working hours and strives to resolve the issue as quickly as possible.'
            }
          ]
        },
        {
          title: 'Article 8: Warranties and liability',
          subsections: [
            {
              title: '8.1. Statutory warranties',
              paragraphs: [
                'The Vendor is liable for any lack of conformity of the software and for hidden defects in the item sold, in accordance with Belgian law.'
              ]
            },
            {
              title: '8.2. Commercial warranty',
              paragraphs: [
                'The Vendor guarantees that the Evalix software is free from major bugs that prevent normal use for the duration of the license.',
                'This warranty does not cover issues resulting from improper use, modifications made by the Client, or unspecified incompatibilities.',
                'If a major bug prevents full use of the software, the Vendor may extend the duration of the active licenses or partially refund the Client.'
              ]
            },
            {
              title: '8.3. Warranty exclusions',
              list: [
                "Use of the software that is inconsistent with its intended purpose or with the Vendor's instructions.",
                'Modifications, adaptations, or alterations to the software by the Client or by an unauthorized third party.',
                'Damage caused by third-party software, viruses, cyberattacks, or any other external cause.',
                'Failure to comply with the technical or environmental prerequisites specified by the Vendor.'
              ]
            },
            {
              title: '8.4. Limitation of liability',
              paragraphs: [
                "The Vendor's liability is limited to the total amount paid by the Client for the license during the twelve months preceding the event giving rise to the damage.",
                'No compensation is due for indirect damages, including loss of data, revenue, or customers.',
                'As the Evalix software does not collect personal data, the Client remains solely responsible for the data processed through the software.'
              ]
            }
          ]
        },
        {
          title: 'Article 9: Intellectual property',
          paragraphs: [
            'The Evalix software and all associated intellectual property rights remain the exclusive property of JVTP SNC.',
            'Purchasing a license does not grant the Client any intellectual property rights. Any unauthorized reproduction, adaptation, or use is strictly prohibited.'
          ]
        },
        {
          title: 'Article 10: Termination',
          subsections: [
            {
              title: '10.1. Termination conditions',
              paragraphs: [
                'The Vendor may terminate the license automatically, without notice or compensation, in the event of serious breach by the Client, in particular:'
              ],
              list: [
                'Failure to pay amounts due within the specified time.',
                'Violation of the license usage restrictions.',
                'Attempted reverse engineering, decompilation, modification, or unauthorized distribution of the software.'
              ],
              note: 'The Client may terminate the license by not renewing it at the end of the current period. No refund is granted for the remaining period.'
            },
            {
              title: '10.2. Consequences of termination',
              list: [
                'All licenses granted to the Client are immediately deactivated.',
                'Usage rights end and the Client must uninstall the software from all systems.',
                'No refund is made for amounts already paid.'
              ]
            }
          ]
        },
        {
          title: 'Article 11: Personal data protection',
          paragraphs: [
            'The Vendor complies with the GDPR for data collected in the context of license management and the customer relationship.',
            "The Evalix software does not collect or store any data entered by the user; these remain entirely under the Client's responsibility."
          ]
        },
        {
          title: 'Article 12: Force majeure',
          paragraphs: [
            'In the event of force majeure preventing either party from fulfilling its obligations, such obligations are suspended.',
            "If a proven major bug prevents normal use of the software, the Vendor extends the licenses for the period between the Client's notification of the issue and its effective resolution."
          ]
        },
        {
          title: 'Article 13: Non-transferability',
          paragraphs: [
            'The license to use the Evalix software is personal and non-transferable. Any transfer, assignment, or sublicense requires the prior written consent of the Vendor.'
          ]
        },
        {
          title: 'Article 14: Governing law and dispute resolution',
          subsections: [
            {
              title: '14.1. Governing law',
              paragraphs: [
                'These GTCS are governed by and interpreted in accordance with Belgian law.'
              ]
            },
            {
              title: '14.2. Amicable resolution of disputes',
              paragraphs: [
                'In the event of a dispute concerning the validity, interpretation, or performance of the GTCS, the parties agree to seek an amicable solution first, including mediation.'
              ]
            },
            {
              title: '14.3. Competent jurisdiction',
              paragraphs: [
                'Failing an amicable solution, the Enterprise Court of Walloon Brabant, Nivelles division (Belgium), has exclusive jurisdiction, even in the event of multiple defendants or third-party proceedings.'
              ]
            }
          ]
        },
        {
          title: 'Article 15: Acceptance of the GTCS',
          paragraphs: [
            'The Client acknowledges having read these GTCS prior to placing an order.',
            'Purchasing a license and the Vendor receiving payment constitute full and unconditional acceptance of these GTCS.'
          ]
        }
      ]
    },
    pricing: {
      title: 'Our pricing plans',
      subtitle: 'Choose the plan that best fits your needs and team size.',
      quarterly: 'Quarterly',
      annual: 'Annual',
      recommended: 'Recommended',
      perMonth: 'per month',
      perLicense: 'license',
      perMonthPerLicense: 'per month per license',
      htva: 'Excl. VAT',
      tvac: 'Incl. VAT',
      savings: 'Savings',
      subscribe: 'Subscribe',
      plans: {
        small: {
          name: '1 to 10 licenses',
          description: 'Perfect for small offices and teams'
        },
        large: {
          name: '10 licenses or more',
          description: 'Ideal for large structures'
        }
      },
      contact_section: {
        title: 'Need a custom solution?',
        description: 'For large organizations or specific needs, we offer personalized solutions. Contact our team to discuss your requirements.'
      },
      features_included: 'Features included',
      feature_descriptions: {
        calculation: 'Automated calculations based on current legislation and official scales',
        reports: 'Generation of detailed reports for managing your files',
        support: 'Dedicated technical assistance and software usage assistance',
        updates: 'Automatic updates with the latest legal developments',
        security: 'No data storage on our servers and guaranteed GDPR compliance',
      },
      period: {
        month1: 'Monthly',
        month3: 'Quarterly',
        month6: 'Semi-annual',
        year1: 'Annual'
      }
    },
    contact_page: {
      title: 'Contact us',
      subtitle: 'We are here to answer all your questions and support you.',
      form: {
        send_message_title: 'Send us a message',
        send_message_description: 'Fill out the form below and we will contact you quickly.',
        name: 'Full name',
        your_name: 'Your name',
        email: 'Email',
        your_email: 'your@email.com',
        company: 'Company',
        company_name: 'Your company name',
        phone: 'Phone',
        phone_placeholder: '+32 XXX XX XX XX',
        subject: 'Subject',
        subject_placeholder: 'Subject of your request',
        message: 'Message',
        message_placeholder: 'Describe your request in detail...',
        send: 'Send message',
        sending: 'Sending...',
        success: 'Your message has been sent successfully!',
        error: 'An error occurred while sending the message. Please try again.'
      },
      contact_info: {
        title: 'Contact information',
        email_info: {
          title: 'Email',
          description: 'Response within 24h'
        },
        phone_info: {
          title: 'Phone',
          description: 'We will call you back within 24 hours after receiving your contact form.'
        }
      },
      faq: {
        title: 'Frequently asked questions',
        q1: {
          title: 'Do you offer a demonstration?',
          answer: 'Yes, we offer personalized demonstrations to present all the features of Evalix adapted to your needs.'
        },
        q2: {
          title: 'What is the implementation time?',
          answer: 'As soon as you have communicated your license activation code(s), you just need to install the software to start.'
        },
        q3: {
          title: 'Do you offer technical support?',
          answer: 'Yes, our technical support team is available to guide you and answer all your usage questions.'
        }
      },
      cta: {
        title: 'Ready to discover Evalix?',
        subtitle: 'Request a personalized demonstration and discover how Evalix can transform your compensation management.',
        request_demo: 'Request a demo'
      }
    },
    downloads_page: {
      title: 'Download Evalix',
      subtitle: 'Download the latest version of Evalix for your operating system. Simple and quick installation in a few clicks.',
      windows_card: {
        title: 'Windows',
        description: 'Compatible with Windows 10 and later versions',
        requirements: 'System requirements:',
        os: 'Windows 10 or higher',
        processor: 'Intel Core i3 or equivalent',
        memory: '4 GB RAM',
        storage: '500 MB free space',
        download_button: 'Download for Windows',
        file_info: 'File .exe • Version {version}'
      },
      macos_card: {
        title: 'macOS',
        description: 'Compatible with macOS 10.14 and later versions',
        requirements: 'System requirements:',
        os: 'macOS 10.14 or higher',
        processor: 'Intel Core i3 or Apple Silicon',
        memory: '4 GB RAM',
        storage: '500 MB free space',
        download_button: 'Download for macOS',
        file_info: 'File .dmg • Version {version}'
      },
      features_section: {
        title: 'Features',
        secure_reliable: {
          title: 'Secure and reliable',
          description: 'Digitally signed and verified application'
        },
        latest_version: {
          title: 'Latest version',
          description: 'Version {version} with the latest improvements'
        },
        modern_interface: {
          title: 'Modern interface',
          description: 'Intuitive and professional design'
        }
      },
      installation_instructions: {
        title: 'Installation instructions',
        windows: {
          title: 'Windows',
          step1: 'Download the {file} file',
          step2: 'Run the file as administrator',
          step3: 'Follow the installation wizard instructions',
          step4: 'Launch Evalix from the Start menu'
        },
        macos: {
          title: 'macOS',
          step1: 'Download the {file} file',
          step2: 'Open the downloaded .dmg file',
          step3: 'Drag Evalix to the Applications folder',
          step4: 'Launch Evalix from Launchpad'
        }
      },
      support_section: {
        title: 'Need help?',
        description: 'If you encounter difficulties during the installation or use of Evalix, our support team is here to help you.',
        contact_support: 'Contact support'
      }
    },
    header: {
      change_language: 'Change language',
      change_theme: 'Change theme',
      menu: 'Menu'
    },
    account: {
      title: 'My client portal',
      subtitle: 'Manage your personal information and your Evalix subscription',
      loading: 'Loading your client portal...',
      general_info: {
        title: 'General information',
        subtitle: 'Update your personal and professional information',
        email: 'Email address',
        email_readonly: 'Your email address cannot be changed',
        company: 'Company name',
        company_placeholder: 'Your company name',
        address: 'Address',
        address_placeholder: 'Full address',
        vat: 'VAT number',
        vat_placeholder: 'VAT number (optional)',
        save: 'Save changes',
        saving: 'Saving...',
        success: 'Profile updated successfully',
        error: 'Error updating profile'
      },
      license: {
        title: 'License',
        subtitle_with: 'Your Evalix license key',
        subtitle_without: 'Generate your Evalix license key',
        key_label: 'LICENSE KEY',
        devices_usage: 'DEVICE USAGE',
        devices_count: 'devices',
        devices_active: 'active',
        devices_active_plural: 'active',
        devices_available: 'device available',
        devices_available_plural: 'devices available',
        limit_reached: 'Limit reached',
        expires_warning: 'This key will be deactivated on',
        update_subscription: 'Update subscription',
        update_subscription_desc: 'Change the number of licenses or modify your subscription plan.',
        generate_key: 'Generate key',
        generate_key_desc: 'This key is required to activate your Evalix software.'
      },
      subscription: {
        title: 'Subscription',
        status: 'Status',
        status_active: 'Active',
        status_inactive: 'Inactive',
        type: 'Type',
        type_monthly: 'Monthly',
        type_annual: 'Annual',
        end_date: 'Subscription end',
        update_payment: 'Update payment method',
        updating_payment: 'Updating...',
        cancel: 'Cancel subscription',
        cancelling: 'Cancelling...',
        resume: 'Resume subscription',
        resuming: 'Resuming...',
        confirm_cancel_title: 'Confirm cancellation',
        confirm_cancel_desc: 'Are you sure you want to cancel your subscription? This action is irreversible and you will lose access to all premium services at the end of your current billing period.',
        confirm_cancel_button: 'Confirm cancellation'
      },
      logout: 'Log out'
    },
    generate_key_modal: {
      forfait: 'Package',
      per_license: 'per license',
      plan: 'Plan',
      title_generate: 'Generate new license key',
      title_update: 'Update your subscription',
      desc_generate: 'Configure your new license by selecting the number of licenses and subscription type.',
      desc_update: 'Change the number of licenses or modify your subscription plan.',
      current_subscription: 'Current subscription',
      license_count: 'Number of licenses',
      license_count_placeholder: 'Enter number of licenses',
      billing_plan: 'Choose your billing plan',
      no_plans: 'No plans available',
      order_summary: 'Order summary',
      licenses: 'license',
      licenses_plural: 'licenses',
      total_monthly: 'Monthly total',
      total_quarterly: 'Quarterly total',
      total_annual: 'Annual total',
      interval_month: 'month',
      interval_quarter: 'quarter',
      interval_year: 'year',
      cancel: 'Cancel',
      generate: 'Generate key',
      update: 'Update',
      generating: 'Generating...',
      updating: 'Updating...',
      tier_standard: 'Standard rate',
      tier_standard_up_to: 'Standard rate (up to',
      tier_preferential: 'Preferential rate',
      savings_potential: 'Save',
      savings_current: 'You save',
      savings_per_license: 'per license',
      savings_total: 'total',
      savings_from: 'from',
      pricing_tiers: {
        standard: 'Standard rate',
        bulk: 'Preferential rate',
        save_message: 'Save {percentage}% ({amount}€/license) from {quantity} licenses',
        current_savings: 'You save {percentage}% per license ({total}€ total)'
      }
    }
  }
};

// Langues disponibles
const availableLanguages = [
  { code: 'fr', name: 'Français', flagEmoji: '🇫🇷', FlagComponent: FlagFR },
  { code: 'nl', name: 'Nederlands', flagEmoji: '🇳🇱', FlagComponent: FlagNL },
  { code: 'en', name: 'English', flagEmoji: '🇬🇧', FlagComponent: FlagGB }
];

// Fonction pour obtenir la langue depuis localStorage ou utiliser la langue par défaut
const getInitialLanguage = () => {
  try {
    const savedLanguage = localStorage.getItem('evalix-language');
    if (savedLanguage && availableLanguages.some(lang => lang.code === savedLanguage)) {
      return savedLanguage;
    }
  } catch (error) {
    console.warn('Erreur lors de la lecture de la langue depuis localStorage:', error);
  }
  return 'fr'; // Langue par défaut
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(getInitialLanguage);

  // Sauvegarder la langue dans localStorage à chaque changement
  useEffect(() => {
    try {
      localStorage.setItem('evalix-language', currentLanguage);
    } catch (error) {
      console.warn('Erreur lors de la sauvegarde de la langue dans localStorage:', error);
    }
  }, [currentLanguage]);

  const changeLanguage = (languageCode) => {
    if (availableLanguages.some(lang => lang.code === languageCode)) {
      setCurrentLanguage(languageCode);
    }
  };

  const t = (key, replacements = {}) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];

    for (const k of keys) {
      value = value?.[k];
    }

    if (typeof value === 'string' && replacements && Object.keys(replacements).length > 0) {
      Object.entries(replacements).forEach(([placeholder, replacement]) => {
        value = value.replace(new RegExp(`{${placeholder}}`, 'g'), replacement);
      });
    }

    return value || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    availableLanguages,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
