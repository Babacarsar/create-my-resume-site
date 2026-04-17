

## Analyse — Axes d'amélioration du portfolio

J'ai parcouru Hero, About, Navbar, Experience, Projects, Skills, Contact, index.html et sitemap. Voici les améliorations concrètes que je recommande, classées par impact.

### 1. Liens projets manquants (impact recruteur fort)
Aucun des 5 projets n'a de lien `github` ni `demo` renseigné. Les icônes Github/ExternalLink existent déjà dans le code mais ne s'affichent jamais. Un recruteur ne peut pas vérifier ton code.
→ Ajouter au minimum les liens GitHub des projets publics.

### 2. Lien "À propos" absent du Navbar
La section `#about` existe mais n'est pas dans le menu. Idem pour le Hero (`#` seulement).
→ Ajouter "À propos" dans `navItems` en première position.

### 3. SEO & métadonnées sociales incomplètes
- `index.html` : pas de `<meta property="og:image">` → aperçus LinkedIn/Twitter sans image.
- Pas de `<meta property="og:url">` ni de `<link rel="canonical">`.
- Pas de favicon personnalisé (BS monogramme cohérent avec le logo navbar).
- Sitemap pointe vers `babacarsarr.lovable.app` mais l'URL publiée est `create-my-resume-site.lovable.app` → sitemap cassé.
- Pas de JSON-LD `Person` (schema.org) pour le SEO sémantique.

### 4. Accessibilité & UX
- Hero : section sans `id` (le `<a href="#">` du logo ne renvoie nulle part de propre).
- Bouton menu mobile sans `aria-expanded`.
- Le `min-h-screen` du Hero combiné au Navbar fixe peut masquer le haut sur petits écrans.
- Aucune indication "scroll spy" : le lien actif n'est pas surligné dans le Navbar.

### 5. Section Contact pauvre
Comparée au reste du site, la section Contact n'a qu'un bouton mailto. Un recruteur qui arrive en bas n'a pas :
- formulaire de contact (ou au moins copie de l'email en un clic),
- disponibilité explicite ("Disponible pour CDI à partir de Sept 2026"),
- téléchargement CV répété (présent uniquement dans le Hero).

### 6. Performance & qualité technique
- Tous les logos de la section Skills sont chargés depuis `api.iconify.design` (≈ 30 requêtes externes au render). Risque : latence, dépendance réseau, pas de cache offline.
  → Option : passer au composant `@iconify/react` (icônes bundled à la demande) ou pré-télécharger en SVG locaux.
- Pas de `loading="eager"` + `fetchpriority="high"` sur la photo de profil (LCP) → léger pénalité Core Web Vitals.
- `useEffect` du Navbar sans `passive: true` sur le scroll listener.

### 7. Section Projets — micro-améliorations
- Le compteur "Projet · 01" est masqué par le badge période sur mobile étroit (à vérifier).
- Pas d'image/aperçu visuel par projet (capture, schéma d'archi). Les recruteurs scannent visuellement.
- "Unipro" comme période du projet "Application Gestion de Notes" est ambigu (école ? année ?).

### 8. Cohérence design mineure
- Le footer dit "© 2026" mais on est en avril 2026 — OK, mais ajouter ton nom + lien LinkedIn en footer renforcerait la pro.
- Pas de page 404 stylée cohérente avec le thème terminal (à vérifier sur `/pages/NotFound.tsx`).

### 9. Fonctionnalités "wow" optionnelles
- **Mode "terminal interactif"** : commande `help`, `about`, `cv` qui affichent du contenu — très en phase avec ton design `> portfolio.init()`.
- **Stats GitHub live** (contributions, top langages) via API publique.
- **Section "Témoignages"** d'un maître d'apprentissage / prof.
- **Analytics** (Plausible/Umami) pour mesurer les visites recruteurs.

---

### Recommandation : ordre d'attaque suggéré

**Quick wins (15 min)** :
1. Ajouter "À propos" au Navbar
2. Corriger le sitemap (bonne URL)
3. Ajouter `og:image` + favicon + JSON-LD Person

**Impact moyen (30-45 min)** :
4. Ajouter les liens GitHub aux projets (tu me donnes les URLs)
5. Enrichir la section Contact (disponibilité + CV + copie email)
6. Scroll spy actif dans le Navbar

**Refonte plus poussée (1h+)** :
7. Iconify local (perf)
8. Captures/aperçus des projets
9. Mode terminal interactif

Dis-moi par où on commence et j'enchaîne directement.

