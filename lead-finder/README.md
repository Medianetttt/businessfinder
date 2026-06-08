# 🔍 Lead Finder — Medianet Gang

Trova business locali senza sito web o con sito obsoleto, usando Google Maps Places API.

---

## 🚀 Deploy su Vercel (5 minuti)

### 1. Carica su GitHub
- Crea un nuovo repo su GitHub (es. `lead-finder`)
- Carica tutti questi file mantenendo la struttura delle cartelle

### 2. Collega a Vercel
- Vai su [vercel.com](https://vercel.com) e fai login con GitHub
- Clicca **"Add New Project"**
- Seleziona il repo `lead-finder`
- Clicca **Deploy**

### 3. Aggiungi la API Key (importante!)
Nella dashboard Vercel del tuo progetto:
- Vai su **Settings → Environment Variables**
- Aggiungi:
  - **Name:** `GOOGLE_API_KEY`
  - **Value:** la tua chiave Google Places API
- Clicca **Save**
- Fai **Redeploy** (Settings → Deployments → Redeploy)

### 4. Usa il tool
Vai all'URL che Vercel ti assegna (es. `lead-finder.vercel.app`) — tutto funziona!

---

## 🔑 API Google richieste

Abilita queste API nella Google Cloud Console:
- **Places API**
- **Geocoding API**

---

## 📁 Struttura progetto

```
lead-finder/
├── api/
│   └── places.js        ← Proxy serverless (nasconde la API key)
├── public/
│   └── index.html       ← Frontend del tool
├── vercel.json          ← Configurazione Vercel
└── README.md
```

---

## 💡 Come funziona

1. Scegli categoria (ristoranti, parrucchieri, ecc.) e zona
2. Il tool cerca tutti i business su Google Maps nell'area
3. Per ogni business verifica se ha un sito web
4. Classifica i risultati: 🔴 Nessun sito / 🟠 Sito obsoleto / 🟢 Sito ok
5. Esporta i lead in CSV o JSON

---

## ⚠️ Note sicurezza

La API key non è mai esposta nel frontend — passa sempre attraverso il proxy serverless in `/api/places.js`.
