
import { useState } from "react";
import Profile from "../components/profile/profile";

import "./App.css";

import imgDarkMode from "../img/eudnv.jpg";
import imgLightMode from "../img/126248825.jpg";

const App = () => {
const [isLightMode,setIsLightMode] = useState(true)

const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro"; 
return (
    <div>
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@gomes_eduarda__</Profile>
    </div>
);
};
export default App;