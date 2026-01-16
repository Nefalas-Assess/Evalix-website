const envBaseUrl = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) || '';
const runtimeBaseUrl = typeof window !== 'undefined' ? window.location.origin : '';
const normalizedBaseUrl = (envBaseUrl || runtimeBaseUrl || 'https://www.evalix.be').replace(/\/$/, '');

const defaultImage = `${normalizedBaseUrl}/favicon.ico`;

export const seoContent = {
  fr: {
    baseUrl: normalizedBaseUrl,
    defaultTitle: "Evalix - Logiciel de calcul d'indemnités pour dommages corporels",
    defaultDescription:
      'Evalix aide les compagnies, avocats et experts à calculer rapidement des indemnisations conformes aux barèmes et intérêts légaux.',
    keywords:
      'evalix, indemnisation, dommage corporel, barème magistrature, intérêts légaux, logiciel assurance, calcul indemnités',
    pages: {
      home: {
        title: "Evalix | Logiciel d'indemnités pour dommages corporels",
        description:
          "Logiciel professionnel pour calculer les indemnités des victimes d'accidents : barèmes mis à jour, rapports clairs et simulations instantanées.",
        type: 'website'
      },
      forgotPassword: {
        title: 'Mot de passe oublié - Evalix',
        description:
          'Recevez un lien de réinitialisation de mot de passe pour accéder à nouveau à votre compte Evalix.',
        type: 'website'
      },
      resetPassword: {
        title: 'Réinitialiser le mot de passe - Evalix',
        description:
          'Choisissez un nouveau mot de passe pour votre compte Evalix en toute sécurité.',
        type: 'website'
      },
      presentation: {
        title: 'Présentation du logiciel Evalix',
        description:
          'Découvrez l’approche de développement, la précision des calculs et l’accessibilité multi-langues proposées par Evalix.'
      },
      pricing: {
        title: 'Tarifs et licences Evalix',
        description:
          'Comparez les formules Evalix pour petites et grandes structures, mises à jour incluses et support dédié.'
      },
      downloads: {
        title: 'Téléchargement Evalix',
        description:
          "Téléchargez Evalix et testez le logiciel pendant 15 jours pour évaluer les calculs d'indemnités dans vos dossiers réels."
      },
      contact: {
        title: 'Contactez l’équipe Evalix',
        description:
          'Demandez une démonstration, une licence de test ou un accompagnement personnalisé auprès de notre équipe.'
      }
    }
  },
  en: {
    baseUrl: normalizedBaseUrl,
    defaultTitle: 'Evalix - Bodily injury compensation calculator',
    defaultDescription:
      'Evalix helps insurers, lawyers, and experts calculate compensation quickly with updated legal rates and transparent reports.',
    keywords:
      'evalix, compensation software, bodily injury, insurance calculator, legal interest, damages calculation, claims software',
    pages: {
      home: {
        title: 'Evalix | Bodily injury compensation software',
        description:
          'Professional software to calculate compensation for accident victims with updated guidelines, instant simulations, and clear reports.',
        type: 'website'
      },
      forgotPassword: {
        title: 'Forgot password - Evalix',
        description:
          'Get a password reset link to regain access to your Evalix account.',
        type: 'website'
      },
      resetPassword: {
        title: 'Reset password - Evalix',
        description:
          'Set a new password for your Evalix account securely.',
        type: 'website'
      },
      presentation: {
        title: 'Evalix product overview',
        description:
          'Learn how Evalix is built for accuracy, speed, and accessibility with a multilingual interface.'
      },
      pricing: {
        title: 'Evalix pricing and licenses',
        description:
          'Review Evalix plans for small and large teams, including ongoing updates and dedicated support.'
      },
      downloads: {
        title: 'Download Evalix',
        description:
          'Download Evalix and try the software for 15 days to validate compensation calculations on real cases.'
      },
      contact: {
        title: 'Contact the Evalix team',
        description:
          'Request a demo, a trial license, or personalized onboarding from our team.'
      }
    }
  },
  nl: {
    baseUrl: normalizedBaseUrl,
    defaultTitle: 'Evalix - Software voor berekening van lichamelijke schadevergoedingen',
    defaultDescription:
      'Evalix helpt verzekeraars, advocaten en experten om vergoedingen snel en nauwkeurig te berekenen met actuele wettelijke rente.',
    keywords:
      'evalix, schadevergoeding, lichamelijke schade, verzekeringssoftware, wettelijke rente, berekening vergoeding',
    pages: {
      home: {
        title: 'Evalix | Software voor schadevergoedingen',
        description:
          'Professionele software om vergoedingen voor slachtoffers van ongevallen te berekenen met actuele tabellen en duidelijke rapporten.',
        type: 'website'
      },
      forgotPassword: {
        title: 'Wachtwoord vergeten - Evalix',
        description:
          'Ontvang een link om uw wachtwoord opnieuw in te stellen en weer toegang te krijgen tot uw Evalix-account.',
        type: 'website'
      },
      resetPassword: {
        title: 'Wachtwoord opnieuw instellen - Evalix',
        description:
          'Kies veilig een nieuw wachtwoord voor uw Evalix-account.',
        type: 'website'
      },
      presentation: {
        title: 'Presentatie van Evalix',
        description:
          'Ontdek de ontwikkelingsaanpak van Evalix, de precisie van de berekeningen en de meertalige ervaring.'
      },
      pricing: {
        title: 'Evalix prijzen en licenties',
        description:
          'Vergelijk de formules voor kleine en grote organisaties, inclusief updates en toegewijde support.'
      },
      downloads: {
        title: 'Evalix downloaden',
        description:
          'Download Evalix en test de software 15 dagen om de berekeningen in uw echte dossiers te valideren.'
      },
      contact: {
        title: 'Contact opnemen met het Evalix-team',
        description:
          'Vraag een demo, een testlicentie of persoonlijke begeleiding aan bij ons team.'
      }
    }
  }
};

export const getSeoForPage = (language, pageKey, fallbackTitle) => {
  const lang = seoContent[language] ? language : 'en';
  const langConfig = seoContent[lang];
  const pageConfig = (pageKey && langConfig.pages?.[pageKey]) || {};

  return {
    title: pageConfig.title || fallbackTitle || langConfig.defaultTitle,
    description: pageConfig.description || langConfig.defaultDescription,
    keywords: pageConfig.keywords || langConfig.keywords,
    baseUrl: pageConfig.baseUrl || langConfig.baseUrl || normalizedBaseUrl,
    image: pageConfig.image || defaultImage,
    type: pageConfig.type || 'website'
  };
};

export const getBaseUrl = (language) => {
  const lang = seoContent[language] ? language : 'en';
  return seoContent[lang].baseUrl || normalizedBaseUrl;
};
