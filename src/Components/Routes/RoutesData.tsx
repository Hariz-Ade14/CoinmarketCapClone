import { Login } from "../auth/Auth";
import { Home } from "../../Pages/Home/Home";
import Signup from "../auth/Auth";
type routes = {
     path: string;
     Component: React.FC;
}

const allroutes:routes[] = [
      {
         path: "/",
         Component: Home
      },
      {
         path: "/signup",
         Component: Signup
      },
      {
         path: "/login",
         Component: Login
      }
];

export {allroutes}