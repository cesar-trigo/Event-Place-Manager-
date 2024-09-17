import { Schema, model } from "mongoose"; // importo el nuevo schema que va seguir el modelo que va haber en mongoose

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    photo: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    genre: { type: String },
    project: { type: String }, //agregar el objet id de referencia
    role: { type: String, enum: ["user", "admin", "organizer"], default: "user" },
  },
  {
    timestamps: true,
  }
);

export const userModel = model("user", userSchema); // exporto el modelo el cual con el metodo model que requiere el nombre del modelo y el esquema que armamos
