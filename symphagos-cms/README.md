# SYMPHAGOS — Website with CMS

This is your Symphagos website with a built-in content management system.
Once set up, you can add new specimens at `symphagos.com/admin` without touching any code.

---

## SETUP INSTRUCTIONS

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to https://github.com
2. Click "Sign up"
3. Create your account (free)

### Step 2: Create a New Repository
1. Once logged into GitHub, click the "+" icon (top right) → "New repository"
2. Name it `symphagos` (or whatever you like)
3. Keep it Public (required for free Netlify)
4. DON'T check any boxes (no README, no .gitignore)
5. Click "Create repository"

### Step 3: Upload These Files to GitHub
1. On your new empty repository page, you'll see "uploading an existing file"
2. Click that link
3. Drag ALL the files and folders from this symphagos-cms folder onto the page
4. Click "Commit changes"

### Step 4: Connect Netlify to GitHub
1. Go to Netlify (app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Authorize Netlify to access your GitHub
5. Select your `symphagos` repository
6. Build settings should auto-detect:
   - Build command: `npm install && npm run build`
   - Publish directory: `_site`
7. Click "Deploy site"

### Step 5: Enable Netlify Identity (for CMS login)
1. In Netlify, go to your site → "Integrations" tab
2. Search for "Identity" → click "Enable"
3. Go to Settings → Identity → Registration → set to "Invite only"
4. Click "Identity" in top nav → "Invite users" → invite yourself (your email)
5. Check your email, accept the invite, set a password

### Step 6: Enable Git Gateway (so CMS can save changes)
1. In Netlify, go to Settings → Identity → Services
2. Click "Enable Git Gateway"

### Step 7: Connect Your Domain
1. Go to Domain management
2. Add `symphagos.com` as custom domain
3. Update GoDaddy DNS (you already did this!)

---

## USING THE CMS

1. Go to `symphagos.com/admin`
2. Log in with your email/password
3. Click "Specimens" in the sidebar
4. Click "New Specimens" to add a new plugin
5. Fill out the form:
   - Specimen Number (001, 002, etc.)
   - Name (The Ember Stallion)
   - Class (Equus Ignifer — Percussive / Rhythmic)
   - Description (the lore)
   - Price ($9 or FREE)
   - Image (upload creature art)
   - Lemonsqueezy URL (paste from Lemonsqueezy)
6. Click "Publish"
7. Wait ~30 seconds for site to rebuild
8. Your new specimen appears on the site!

---

## FOLDER STRUCTURE

```
symphagos-cms/
├── src/
│   ├── _includes/
│   │   └── base.njk          ← Main template (the beautiful design)
│   ├── specimens/
│   │   └── *.md              ← Each specimen is a file here
│   ├── images/               ← Creature artwork goes here
│   ├── admin/
│   │   ├── index.html        ← CMS admin page
│   │   └── config.yml        ← CMS field configuration
│   └── index.njk             ← Homepage template
├── .eleventy.js              ← Build configuration
├── package.json              ← Dependencies
├── netlify.toml              ← Netlify settings
└── README.md                 ← This file
```

---

## ADDING IMAGES

For the header image and creature illustrations:
1. Put images in the `src/images/` folder (or upload via CMS)
2. Supported formats: jpg, png, gif, webp

---

## QUESTIONS?

If something breaks or you need help, the site files are always in GitHub.
You can also edit specimen files directly in GitHub if the CMS isn't working.
