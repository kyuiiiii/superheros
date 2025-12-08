import mongoose, { Schema, Document } from "mongoose";
import { PowerStats, Appearance, Biography, Work, Connections, Images, SuperHero } from "./Hero.Interface";


export interface SuperHeroDocument extends Document {
  id: number;
  name: string;
  slug: string;
  powerstats: PowerStats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: Images;
}

const PowerStatsSchema = new Schema<PowerStats>({
  intelligence: Number,
  strength: Number,
  speed: Number,
  durability: Number,
  power: Number,
  combat: Number,
});

const AppearanceSchema = new Schema<Appearance>({
  gender: String,
  race: String,
  height: [String],
  weight: [String],
  eyeColor: String,
  hairColor: String,
});

const BiographySchema = new Schema<Biography>({
  fullName: String,
  alterEgos: String,
  aliases: [String],
  placeOfBirth: String,
  firstAppearance: String,
  publisher: String,
  alignment: String,
});

const WorkSchema = new Schema<Work>({
  occupation: String,
  base: String,
});

const ConnectionsSchema = new Schema<Connections>({
  groupAffiliation: String,
  relatives: String,
});

const ImagesSchema = new Schema<Images>({
  xs: String,
  sm: String,
  md: String,
  lg: String,
});

const SuperHeroSchema = new Schema<SuperHeroDocument>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  slug: { type: String, required: true },
  powerstats: { type: PowerStatsSchema, required: true },
  appearance: { type: AppearanceSchema, required: true },
  biography: { type: BiographySchema, required: true },
  work: { type: WorkSchema, required: true },
  connections: { type: ConnectionsSchema, required: true },
  images: { type: ImagesSchema, required: true },
});

export const SuperHeroModel = mongoose.model<SuperHeroDocument>(
  "SuperHero",
  SuperHeroSchema,
  "heros"
);

export default SuperHeroModel;
