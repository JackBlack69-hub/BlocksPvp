import Cookies from "js-cookie";
import { io } from "socket.io-client";

export const socket = io.connect("ws://localhost:9000");

const storedJwtToken = Cookies.get("jwtToken");
socket.emit("register", storedJwtToken);
