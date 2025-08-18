import React, { createContext, useContext, useState, useEffect } from 'react';

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
      new_version_badge: 'Nouvelle version 0.2.2 disponible',
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
      privacy: 'Politique de confidentialité',
      navigation: 'Navigation'
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
        success: 'Votre message a été envoyé avec succès !'
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
        file_info: 'Fichier .exe • Version 0.2.2'
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
        file_info: 'Fichier .dmg • Version 0.2.2'
      },
      features_section: {
        title: 'Fonctionnalités',
        secure_reliable: {
          title: 'Sécurisé et fiable',
          description: 'Application signée numériquement et vérifiée'
        },
        latest_version: {
          title: 'Dernière version',
          description: 'Version 0.2.2 avec les dernières améliorations'
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
          step1: 'Téléchargez le fichier Evalix-0.2.2.exe',
          step2: 'Exécutez le fichier en tant qu\'administrateur',
          step3: 'Suivez les instructions de l\'assistant d\'installation',
          step4: 'Lancez Evalix depuis le menu Démarrer'
        },
        macos: {
          title: 'macOS',
          step1: 'Téléchargez le fichier Evalix-0.2.2.dmg',
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
    }
  },
  nl: {
    nav: {
      home: 'Home',
      presentation: 'Presentatie',
      pricing: 'Tarieven',
      contact: 'Contact',
      downloads: 'Downloads',
      subscribe: 'Abonneren'
    },
    hero: {
      title: "De tool voor het berekenen van schadevergoedingen voor lichamelijk letsel",
      subtitle: "Ontdek Evalix, de professionele software voor het berekenen van schadevergoedingen voor slachtoffers van ongevallen met lichamelijk letsel.",
      cta: "Downloaden"
    },
    home: {
      new_version_badge: "Nieuwe versie 0.2.2 beschikbaar",
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
      privacy: 'Privacybeleid',
      navigation: 'Navigatie'
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
        success: 'Uw bericht is succesvol verzonden!'
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
        file_info: 'Bestand .exe • Versie 0.2.2'
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
        file_info: 'Bestand .dmg • Versie 0.2.2'
      },
      features_section: {
        title: 'Functionaliteiten',
        secure_reliable: {
          title: 'Veilig en betrouwbaar',
          description: 'Digitaal ondertekende en geverifieerde applicatie'
        },
        latest_version: {
          title: 'Nieuwste versie',
          description: 'Versie 0.2.2 met de nieuwste verbeteringen'
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
          step1: 'Download het bestand Evalix-0.2.2.exe',
          step2: 'Voer het bestand uit als administrator',
          step3: 'Volg de instructies van de installatiewizard',
          step4: 'Start Evalix vanuit het Startmenu'
        },
        macos: {
          title: 'macOS',
          step1: 'Download het bestand Evalix-0.2.2.dmg',
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
    }
  },
  en: {
    nav: {
      home: 'Home',
      presentation: 'Presentation',
      pricing: 'Pricing',
      contact: 'Contact',
      downloads: 'Downloads',
      subscribe: 'Subscribe'
    },
    hero: {
      title: "The tool for calculating personal injury compensation",
      subtitle: "Discover Evalix, the professional software for calculating compensation for accident victims with personal injury.",
      cta: "Download"
    },
    home: {
      new_version_badge: "New version 0.2.2 available",
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
      privacy: 'Privacy policy',
      navigation: 'Navigation'
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
        success: 'Your message has been sent successfully!'
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
        file_info: 'File .exe • Version 0.2.2'
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
        file_info: 'File .dmg • Version 0.2.2'
      },
      features_section: {
        title: 'Features',
        secure_reliable: {
          title: 'Secure and reliable',
          description: 'Digitally signed and verified application'
        },
        latest_version: {
          title: 'Latest version',
          description: 'Version 0.2.2 with the latest improvements'
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
          step1: 'Download the Evalix-0.2.2.exe file',
          step2: 'Run the file as administrator',
          step3: 'Follow the installation wizard instructions',
          step4: 'Launch Evalix from the Start menu'
        },
        macos: {
          title: 'macOS',
          step1: 'Download the Evalix-0.2.2.dmg file',
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
    }
  }
};

// Langues disponibles
const availableLanguages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
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

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];

    for (const k of keys) {
      value = value?.[k];
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

