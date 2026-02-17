let users = [];

const addUsers = (user) => {
  users.push(user);
};
const deleteUsers = (id) => {
  users = users.filter((user) => user.id !== id);
};
const findUserById = (id) => {
  const userFound = users.filter((user) => user.id == id);
  return userFound;
};
const getAllUsers = () => {
  return users;
};

export { addUsers, deleteUsers, findUserById, getAllUsers };
