import { useEffect } from "react";

import Home from "./Paginas.Home";
import Sessao from "./Paginas.Sessao";
import OQue from "./Paginas.OQue";
import PorQue from "./Paginas.PorQue";
import ComoEOnde from "./Paginas.ComoEOnde";
import SobreNos from "./Paginas.SobreNos";
import Entrar from "./Paginas.Entrar";
import RecuperarSenha from "./Paginas.RecuperarSenha";


function Pagina({nome = "Recicla Aí - Home", id = 1}) {

    useEffect(() => {document.title = nome;});

    switch(id) {
        case 1: return (<> <Home /> </>);
        case 2: return (<> <Sessao /> </>);
        case 3: return (<> <OQue /> </>);
        case 4: return (<> <PorQue /> </>);
        case 5: return (<> <ComoEOnde /> </>);
        case 6: return (<> <SobreNos /> </>);
        case 7: return (<> <Entrar /> </>);
        case 8: return (<> <RecuperarSenha /> </>);
        default: break;
    }
}

export default Pagina;