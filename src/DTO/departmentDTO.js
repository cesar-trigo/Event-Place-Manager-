export const departmentDTO = department => {
  return {
    id: department._id,
    name: department.name,
    address: department.address,
    photo: department.photo || "",
    projests: department.projests,
    date: department.date,
    occupancy: department.occupancy,
  };
};
