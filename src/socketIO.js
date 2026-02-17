import { io } from "./app.js";
import { addUsers, deleteUsers, findUserById, getAllUsers } from "./users.js";

io.on("connection", (client) => {
  client.on("sendMessageToServer", (message) => {
    client.broadcast.emit("messageFromServerToClients", { message });
  });

  client.on("joined", (data, fnCallback) => {
    addUsers({
      id: client.id,
      user: data.user,
    });
    fnCallback(getAllUsers());
    client.broadcast.emit("joindAnotherUser", getAllUsers());
  });

  client.on("disconnect", (data) => {
    deleteUsers(client.id);
    client.broadcast.emit("userLeft", getAllUsers());
  });

  client.on("oneleft", () => {
    deleteUsers(client.id);
    client.broadcast.emit("userLeft", getAllUsers());
  });
});
