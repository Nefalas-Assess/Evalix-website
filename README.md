# Site Web Evalix

Site web professionnel pour Evalix, logiciel de calcul d'indemnités pour dommages corporels.

## 🚀 Fonctionnalités

- **Design moderne et professionnel** inspiré des standards du secteur
- **Mode sombre/clair** avec switch automatique
- **Multilingue** (Français, Néerlandais, Anglais) - actuellement en français
- **Responsive** - compatible mobile et desktop
- **Navigation fluide** entre les pages
- **Formulaire de contact** fonctionnel
- **Page tarifs** avec les prix officiels
- **Page téléchargements** avec liens directs vers les installeurs

## 📁 Structure du projet

```
evalix-website/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Layout
│   │   ├── common/          # Composants réutilisables
│   │   └── ui/              # Composants UI (shadcn/ui)
│   ├── contexts/            # Contextes React (Thème, Langue)
│   ├── pages/               # Pages principales
│   ├── utils/               # Utilitaires et données
│   └── assets/              # Images et ressources
├── public/                  # Fichiers statiques
└── package.json            # Dépendances
```

## 🛠 Technologies utilisées

- **React 19** - Framework frontend
- **Vite** - Build tool et dev server
- **Tailwind CSS** - Framework CSS
- **shadcn/ui** - Composants UI
- **Lucide React** - Icônes
- **React Router** - Navigation

## 🎨 Design

### Couleurs principales
- Primaire: `#3422f2` (Bleu Evalix)
- Secondaire: `#9f9adb` (Violet Evalix)

### Thèmes
- Mode clair et mode sombre
- Switch automatique avec sauvegarde localStorage

## 📄 Pages disponibles

1. **Accueil** (`/`) - Page principale avec présentation
2. **Tarifs** (`/tarifs`) - Grille tarifaire avec calculateur d'économies
3. **Téléchargements** (`/telechargements`) - Liens de téléchargement Windows/macOS
4. **Contacts** (`/contacts`) - Formulaire de contact et informations

## 🌐 Internationalisation

Le système de traduction est prêt pour 3 langues :
- 🇫🇷 Français (actuel)
- 🇳🇱 Néerlandais (préparé)
- 🇬🇧 Anglais (préparé)

Les traductions sont dans `src/contexts/LanguageContext.jsx`.

## 💰 Tarification intégrée

Les tarifs sont configurés dans `src/utils/pricing.js` :

### Souscription trimestrielle
- 1-10 licences : 50€ HT / 60,50€ TTC par mois
- 10+ licences : 45€ HT / 54,45€ TTC par mois

### Souscription annuelle
- 1-10 licences : 45€ HT / 54,45€ TTC par mois
- 10+ licences : 40€ HT / 48,40€ TTC par mois

## 🔗 Liens de téléchargement

- **Windows** : https://github.com/Nefalas-Assess/Assess-calculator/releases/download/v0.2.2/Evalix-0.2.2.exe
- **macOS** : https://github.com/Nefalas-Assess/Assess-calculator/releases/download/v0.2.2/Evalix-0.2.2.dmg

## 🚀 Développement

### Installation
```bash
cd evalix-website
pnpm install
```

### Démarrage du serveur de développement
```bash
pnpm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build de production
```bash
pnpm run build
```

Les fichiers de production seront dans le dossier `dist/`.

## 📦 Déploiement

### Option 1 : Déploiement automatique
Le projet peut être déployé automatiquement via les outils de déploiement intégrés.

### Option 2 : Déploiement manuel
1. Exécuter `pnpm run build`
2. Uploader le contenu du dossier `dist/` sur votre serveur web
3. Configurer votre serveur pour servir `index.html` pour toutes les routes

### Serveurs recommandés
- Netlify
- Vercel
- GitHub Pages
- Tout serveur web statique

## 🔧 Personnalisation

### Modifier les couleurs
Éditer les variables CSS dans `src/App.css` :
```css
--primary: #3422f2;
--secondary: #9f9adb;
```

### Ajouter du contenu
- Pages : `src/pages/`
- Composants : `src/components/`
- Traductions : `src/contexts/LanguageContext.jsx`

### Modifier les tarifs
Éditer `src/utils/pricing.js` avec vos nouveaux tarifs.

## 📞 Support

Pour toute question technique concernant le site web, consultez la documentation React et Tailwind CSS.

## 📝 Notes importantes

1. **Logo** : Le logo officiel Evalix est intégré dans `src/assets/Logo-Evalix.png`
2. **Mentions légales** : À ajouter quand la société sera créée
3. **Formulaire de contact** : Actuellement en mode démo, à connecter à un service d'email
4. **Analytics** : À ajouter selon vos besoins (Google Analytics, etc.)

---

**Développé pour Evalix** - Site web professionnel pour logiciel de calcul d'indemnités

