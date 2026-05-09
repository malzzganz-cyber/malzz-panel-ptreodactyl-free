# Malzz Hosting — Setup Guide

## 1. Isi Firebase Config

Buka file **`config/firebase.js`** dan isi nilai berikut dari Firebase Console:

```js
const firebaseConfig = {
  apiKey:            "...",  // Project Settings → General → Web API Key
  authDomain:        "...",  // project-id.firebaseapp.com
  projectId:         "...",  // Project ID
  storageBucket:     "...",  // project-id.appspot.com
  messagingSenderId: "...",  // Cloud Messaging → Sender ID
  appId:             "...",  // Web App → App ID
};
```

Buka file **`config/firebase-admin.js`** dan isi nilai dari **Service Account**:
1. Firebase Console → Project Settings → Service Accounts
2. Klik **Generate new private key** → Download JSON
3. Salin `project_id`, `client_email`, dan `private_key` ke file tersebut

Juga atur `SETUP_SECRET` di `config/firebase-admin.js` dengan string rahasia pilihan kamu.

## 2. Install & Run

```bash
npm install
npm run dev
```

## 3. Tidak Ada .env Yang Dibutuhkan

Semua konfigurasi Firebase sudah hardcoded di `config/firebase.js` dan `config/firebase-admin.js`.
Tidak perlu file `.env` apapun.

## ⚠️ Catatan Keamanan

File `config/firebase-admin.js` berisi **private key** — jangan pernah di-commit ke repository publik!
Tambahkan ke `.gitignore`:
```
config/firebase-admin.js
```
