import { projectModel } from "./models/projectModel.js";

export class ProjectMongoDAO {
  create = async data => {
    return await projectModel.create(data);
  };

  getById = async id => {
    return await projectModel.findById(id).lean();
  };

  getAll = async () => {
    return await projectModel.find().lean();
  };

  addParticipant = async (pid, participant) => {
    return await projectModel.findByIdAndUpdate(
      pid,
      { $addToSet: { participants: participant } },
      { returnDocument: "after" }
    );
  };
}
