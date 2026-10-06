import {io} from "socket.io-client";

import { Base_URL } from "./constants";
 export let creatSocketConnection=()=>{

    return io(Base_URL)
}


