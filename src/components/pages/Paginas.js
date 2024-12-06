import { useEffect } from "react";

import Home from "./Paginas.Home";
import Sessao from "./Paginas.Sessao";
import OQue from "./Paginas.OQue";
import PorQue from "./Paginas.PorQue";
import ComoEOnde from "./Paginas.ComoEOnde";
import SobreNos from "./Paginas.SobreNos";
import Entrar from "./Paginas.Entrar";
import RecuperarSenha from "./Paginas.RecuperarSenha";


function Pagina({nome = "Home", id = 1}) {

    useEffect(() => {document.title = nome}, []);

    switch(id) {
        case 1: {
            return (

            );
            break;
        }
        case 2: {
            return (
                
            );
            break;
        }
        case 3: {
            return (
                
            );
            break;
        }
        case 4: {
            return (
                
            );
            break;
        }
        case 5: {
            return (
                
            );
            break;
        }
        case 6: {
            return (
                
            );
            break;
        }
        case 7: {
            return (
                
            );
            break;
        }
        case 8: {
            return (
                
            );
            break;
        }
    }
}

export default Pagina;