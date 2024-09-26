import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    department: { type: String, required: true }, //agregar el objeto id de referencia
    date: { type: Date, required: true },
    name: { type: String, required: true },
    photo: { type: String },
    description: { type: String, required: true },
    participants: [{ type: String, required: true }], //agregar el objeto id de referencia
    minumunAge: { type: Number, required: true },
    organizer: { type: String, required: true }, //agregar el objeto id de referencia
  },
  {
    timestamps: true,
  }
);

export const projectModel = model("project", projectSchema);
