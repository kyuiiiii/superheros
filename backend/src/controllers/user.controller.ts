import { compare } from "bcryptjs";
import User from "../models/User";
import { Request, Response } from "express";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Nom, email et mot de passe requis" });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ error: "Email existe déjà" });
    }

    const newUser = new User({
      name, 
      email,
      password,
    });

    await newUser.save(); 

    return res.status(201).json({
      message: "Utilisateur créé avec succès",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erreur création utilisateur" });
  }
};

export const login = async (req: Request, res: Response) => {
    try {
        const{email, password} = req.body;
        const user = await User.findOne({email});
        if (!user){
            return res.status(400).json({error: "Utilisateur non trouvé"});
        }

        if(password !== user.password){
            return res.status(400).json({error: "Mot de passe incorrect"});
        }
        res.status(200).json({message: "connexion réussie", user:{
            _id:user._id,
            name:user.name,
            email:user.email
        }});
        
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({error: "Erreur de connexion"});
        
    }
}
