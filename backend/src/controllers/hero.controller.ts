
import { Request, Response } from 'express';
import SuperHeroModel from "../models/Hero"


export const getHero = async (req: Request, res: Response) => {
    try {
        const hero= await SuperHeroModel.find()
        res.status(200).json(hero);
    } catch(error) {
        console.log("Error:", error);
        res.status(500).json(error);
    }
};


export const addHero = async (req: Request, res: Response) => {
  try {
    const { name, images} = req.body;

    if (!name || !images) {
      return res.status(400).json({ message: "Nom, et image requis" });
    }

    const heroExist = await SuperHeroModel.findOne({ name });
    if (heroExist) {
      return res.status(400).json({ error: "Email existe déjà" });
    }

    const newHero = new SuperHeroModel({
      name, 
      images
    });

    await newHero.save(); 

    return res.status(201).json({
      message: "Utilisateur créé avec succès",
      hero: newHero,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erreur création utilisateur" });
  }
};