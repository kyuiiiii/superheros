// Importation des modules nécessaires
import express, { Request, Response } from 'express'; // Framework Express et types pour les requêtes/réponses
import dotenv from 'dotenv'; // Permet de charger les variables d’environnement
import heroRoutes from './routes/hero.routes'; // Importe les routes utilisateurs
import userRoutes from './routes/user.routes';
import mongoose from "mongoose";
import cors from "cors";
// Charge les variables d'environnement depuis le fichier .env
dotenv.config();
// Création de l'application Express
const app = express();
app.use(cors());
// Définition du port du serveur (utilise celui de l'environnement ou 3000 par défaut)
const PORT = process.env.PORT || 3000;
// Middleware pour parser le JSON dans les requêtes entrantes
app.use(express.json());

// Route de test pour vérifier si le serveur fonctionne
app.get('/', (req: Request, res: Response) => {
    res.send('🚀 API Node.js avec TypeScript fonctionne !'); // Réponse envoyée au client
});


mongoose.connect("mongodb://localhost:27017/SuperHeros")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Connection error:", err));
// Utilisation des routes utilisateurs définies dans "user.routes.ts"
app.use('/heros', heroRoutes);
app.use('/users', userRoutes);
// Démarrage du serveur sur le port défini
app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${PORT}`); // Message de confirmationdans la console
});


    
    