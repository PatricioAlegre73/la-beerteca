// src/firebase/config.js

import { initializeApp } from "firebase/app";

// Configuración de Firebase (reemplaza con tu propia configuración de Firebase)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID", // Opcional
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);

export { app };
