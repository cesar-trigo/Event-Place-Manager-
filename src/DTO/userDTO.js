export const userDTO = user => {
  return {
    id: user._id,
    name: user.name,
    lastname: user.lastname,
    photo: user.photo,
    email: user.email,
    age: user.age,
    genre: user.genre,
    project: user.project,
    role: user.role,
  };
};
