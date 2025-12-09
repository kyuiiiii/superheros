import express, { Request, Response } from 'express';
import dotenv from 'dotenv'; 
import heroRoutes from './routes/hero.routes'; 
import userRoutes from './routes/user.routes';
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('🚀 API Node.js avec TypeScript fonctionne !'); 
});


mongoose.connect("mongodb://localhost:27017/SuperHeros")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Connection error:", err));

app.use('/heros', heroRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${PORT}`); 
});


    
    