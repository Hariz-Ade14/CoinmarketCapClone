
import { Home } from "../../Pages/Home/Home";
type routes = {
     path: string;
     Component: React.FC;
}

const allroutes:routes[] = [
      {
         path: "/",
         Component: Home
      }
];

export {allroutes}