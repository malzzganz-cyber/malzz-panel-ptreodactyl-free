// ============================================================
//  Firebase Admin Config — ganti nilai di bawah ini
//  dengan kredensial dari Firebase Console kamu
//  https://console.firebase.google.com → Project Settings → Service Accounts
//  → Generate new private key → salin isinya ke sini
// ============================================================

import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

const firebaseAdminConfig = {
  projectId: "flutter-ai-playground-a9dc6",
  clientEmail: "firebase-adminsdk-fbsvc@flutter-ai-playground-a9dc6.iam.gserviceaccount.com",
  // privateKey: salin isi "private_key" dari file JSON service account
  // Pastikan newline \n tetap ada — jangan hapus
  privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDePbsEz8pOu2hY\nQ7c5BNxDUi6P0ZbOJw0iuA+ABFkjp7wUgM1R0p5E//T18rrZIh50oQeVdKL4+T7U\n3tihX5n7tPP31gTcp1SDnTfHajSlkifj9h+k0VlqiiJ82QtDAeJ9Uc9dSBqCCk5M\nMvd++kr7viAiDb35ioLBsmcU/5CrTHtKSE9jc4epSVLXPbzLG8wLLziRrPL8QOQa\nl3mrJRST457WdKRpq3KJr907J52N1Xw3RNAqyM7oJaRiLOERyZE521mjJOHyZIUx\nBoVqvkwHc+MPLvXjE3fY9f9ZQVKYQYd7UpZNTzIrC43ZG9ayGbW1tXe+sl/Ps2Ty\nQDaC6U0DAgMBAAECggEAA3NGrGAZQej05dnCGRCwTtASbWTEhKh+lj/nCIRNgXWq\n6w3BiDSdKsGNRribPa6GfzkT+AIOSEP1UI9JgUuSWtFvIemH+fpDStbXJbiyoT+l\n65lO2fpNtAW3UpOCpmptdsP8EhXNuoOq2nMlOhx/OXwYeivnqwzrlddnfc9kOH+I\nvxu5t+Y00HVVyE9P2lK11zilsTB1BmO1L2lXEVUQFLrOOBFlqatGcRQeC9uLA57S\nFeumN0LE3ffqVkqDy4DypqcYKdKbOYI1rGpo85Ao6useT3bggEne6z6W5GdLtJLJ\noM+UFJGUXf/nCIepsLj0x/SlbbBqdQigE0dC1sdSAQKBgQD5mDpQn/XmHliU2Pw0\nbRajRJG2/HwkOsN7CHpd69E2xu/bO2sgPtE+ZPqMq54l0myosXL1fqLrSdFlKeJ1\ntcZazyjmLOiq0ItqIAaEUmNl5qJdp9biHPMP+lCJHLT7PgcIPDyCNLmEgEswI76g\niMgYIL7O+rLA0CPqVWLbXYl/AwKBgQDj8cwbz7jP2k7QnhYHdHsonbHsC0Sq+4Kr\ns9H7MN30bp+vQeD34CjZbyjV824ct3eftKqjop+WeCm5IunZ0IY7hq9NDCvW+Ji1\nk7Y0jPvcotCzC3OJ+SV3AckFOtZoPjVzlSFTXa4ka0+6CXe7tGIGZLXv4/WFIM7C\nKb12B6iaAQKBgEyt7cxzODJYRFKGTwU0Nm42VKXo76KZwxB7TEyqc/3mJC4wFPs1\nEUef8jFhUBbCjMtOqMiu/RJX/VKdCYusKqIfXqtIRLqlkw8pg5cHUK4vqtYnCCcz\nSaEw/6j//sHpDnQDPXurAwun9nF1qczb+M0g0j34Ww5NY5tMXDCUjfdNAoGAeuRQ\n26mpBP64wUaJr+k/wQ0L8Ku+kMRalcGz8s5My8yccPt+k4UZ4OhKRtcgRYEwkDzy\nRpiVm6UbMYI+O71tsUgS2OI3/IU4p6SEdl6QJ0rsY6tH1loptbiTrSskjz0Cylbb\nibuW+HGWoUEbeWpt8u53HGd1Zhni/tFMIQdOAgECgYB0tv7/qx+XS+Ifp3eZ8cgF\nnUjAC7quWRxDJTMKFypxkrZUu/lc1cBUK59ngXaNYg8YyNcCUInNWWRjtYJ5wI1D\ndB4nntxSC3WH/Zhf5oXOJRp+0KbEp97nNRdfnvIvE5JF4jiXp3KVrUKNmMKQbZIA\n6MVwkgFkpDEE12WyMceEpg==\n-----END PRIVATE KEY-----\n",
};

// ============================================================
//  Setup Secret untuk endpoint /api/auth/setup-admin
//  Ganti dengan string rahasia yang kamu inginkan
// ============================================================
export const SETUP_SECRET = "malzz_secret_key";

function getAdminApp() {
  if (getApps().length === 0) {
    return initializeApp({
      credential: cert(firebaseAdminConfig),
    });
  }
  return getApps()[0];
}

export function getAdminDb() {
  return getFirestore(getAdminApp());
}

export function getAdminAuth() {
  return getAuth(getAdminApp());
}
