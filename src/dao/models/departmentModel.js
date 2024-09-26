import { Schema, model } from "mongoose";

const departmentSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    photo: { type: String },
    projests: { type: String, required: true }, //agregar el objeto id de referencia
    date: { type: Date, required: true },
    occupancy: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const departmentModel = model("department", departmentSchema);
