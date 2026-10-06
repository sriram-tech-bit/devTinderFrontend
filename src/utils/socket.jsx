import { io } from "socket.io-client";
import { Base_URL } from "./constants";

export let creatSocketConnection = () => {
  if (location.hostname === "localhost") {
    return io(Base_URL, { withCredentials: true });
  }
  return io("/", {
    path: "/api/socket.io",
    withCredentials: true,
  });
};