
import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";

import "./App.css";

import imgDarkMode from "../img/eudnv.jpg";
import imgLightMode from "../img/126248825.jpg";

const App = () => {
const [isLightMode,setIsLightMode] = useState(true)

const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro"; 
return (
    <div id="container">
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@gomes_eduarda__</Profile>
      <Switch></Switch>
    <div id="links">
      <ul> 
      <Links link={"https://github.com"}>GitHub</Links>
      <Links link={"#"}>Instagram</Links>
      <Links link={"#"}>Portifólio</Links>
      <Links link={"#"}>Projetos</Links>
      </ul>

      </div>
    </div>

);
};
export default App;