import { createRoot } from "react-dom/client";
import { App } from "./src/app";

const root = createRoot(document.getElementById('app'));//se crea la ruta de donde se va arenderizar el componente

root.render(<App/>);//recibe el componente que se va a mandar a renderizar a la ruta definida