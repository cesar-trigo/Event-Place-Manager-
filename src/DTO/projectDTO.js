export const projectDTO = project => {
  return {
    id: project._id,
    name: project.name,
    department: project.department,
    date: project.date,
    photo: project.photo || "",
    description: project.description,
    participants: project.participants,
    minumunAge: project.minumunAge,
    organizer: project.organizer,
  };
};
