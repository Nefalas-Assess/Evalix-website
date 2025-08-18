// Données de tarification Evalix
export const pricingData = {
  quarterly: {
    small: {
      range: "1 à 9 licences",
      priceHT: 50.00,
      priceTTC: 60.50,
      currency: "€",
      period: "mois"
    },
    large: {
      range: "10 licences ou plus",
      priceHT: 45.00,
      priceTTC: 54.45,
      currency: "€",
      period: "mois"
    }
  },
  annual: {
    small: {
      range: "1 à 9 licences",
      priceHT: 45.00,
      priceTTC: 54.45,
      currency: "€",
      period: "mois"
    },
    large: {
      range: "10 licences ou plus",
      priceHT: 40.00,
      priceTTC: 48.40,
      currency: "€",
      period: "mois"
    }
  }
};

// Calcul des économies annuelles
export const calculateSavings = (licenseCount) => {
  const isLarge = licenseCount >= 10;
  const quarterlyPrice = isLarge ? pricingData.quarterly.large.priceTTC : pricingData.quarterly.small.priceTTC;
  const annualPrice = isLarge ? pricingData.annual.large.priceTTC : pricingData.annual.small.priceTTC;
  
  const quarterlyCost = quarterlyPrice * 12;
  const annualCost = annualPrice * 12;
  const savings = quarterlyCost - annualCost;
  const savingsPercentage = Math.round((savings / quarterlyCost) * 100);
  
  return {
    quarterlyCost,
    annualCost,
    savings,
    savingsPercentage
  };
};

// Traductions pour les tarifs
export const pricingTranslations = {
  fr: {
    title: "Tarification transparente",
    subtitle: "Choisissez la formule qui correspond à vos besoins",
    quarterly: "Souscription trimestrielle",
    annual: "Souscription annuelle",
    recommended: "Recommandé",
    licenses: "licences",
    perMonth: "par mois",
    htva: "HTVA",
    tvac: "TVAC",
    savings: "Économie",
    contact: "Nous contacter",
    subscribe: "Souscrire",
    features: {
      calculation: "Calculs automatisés basés sur la législation en vigueur et les barèmes officiels",
      reports: "Génération de rapports détaillés pour la gestion de vos dossiers",
      support: "Assistance technique dédiée et assistance à l'utilisation du logiciel",
      updates: "Mises à jour automatiques avec les dernières évolutions légales",
      security: "Aucune conservation des données sur nos serveurs et conformité GDPR garantie"
    }
  },
  nl: {
    title: "Transparante prijzen",
    subtitle: "Kies de formule die bij uw behoeften past",
    quarterly: "Driemaandelijks abonnement",
    annual: "Jaarlijks abonnement",
    recommended: "Aanbevolen",
    licenses: "licenties",
    perMonth: "per maand",
    htva: "Excl. BTW",
    tvac: "Incl. BTW",
    savings: "Besparing",
    contact: "Contact opnemen",
    subscribe: "Abonneren",
    features: {
      calculation: "Nauwkeurige schadevergoeding berekeningen",
      reports: "Professionele rapporten",
      support: "Technische ondersteuning",
      updates: "Updates inbegrepen",
      security: "Gegevensbeveiliging"
    }
  },
  en: {
    title: "Transparent pricing",
    subtitle: "Choose the plan that fits your needs",
    quarterly: "Quarterly subscription",
    annual: "Annual subscription",
    recommended: "Recommended",
    licenses: "licenses",
    perMonth: "per month",
    htva: "Excl. VAT",
    tvac: "Incl. VAT",
    savings: "Savings",
    contact: "Contact us",
    subscribe: "Subscribe",
    features: {
      calculation: "Accurate compensation calculations",
      reports: "Professional reports",
      support: "Technical support",
      updates: "Updates included",
      security: "Data security"
    }
  }
};

