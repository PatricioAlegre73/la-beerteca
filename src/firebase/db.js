// src/firebase/db.js

import { getFirestore } from "firebase/firestore";
import { app } from "./config";  // Importar la instancia de Firebase configurada

// Obtener la referencia a la base de datos Firestore
const db = getFirestore(app);

export { db };
