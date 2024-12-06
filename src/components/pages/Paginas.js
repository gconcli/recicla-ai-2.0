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
                <Home />
            );
            break;
        }
        case 2: {
            return (
                <Sessao />
            );
            break;
        }
        case 3: {
            return (
                <OQue />
            );
            break;
        }
        case 4: {
            return (
                <PorQue />
            );
            break;
        }
        case 5: {
            return (
                <ComoEOnde />
            );
            break;
        }
        case 6: {
            return (
                <SobreNos />
            );
            break;
        }
        case 7: {
            return (
                <Entrar />
            );
            break;
        }
        case 8: {
            return (
                <RecuperarSenha />
            );
            break;
        }
    }
}

export default Pagina;