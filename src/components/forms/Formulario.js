import FormularioCadastro from "./Formulario.FormularioCadastro";
import FormularioLogin from "./Formulario.FormularioLogin";
import FormularioRecuperacao from "./Formulario.FormularioRecuperacao";

function Formulario({tipoForm}) {
    switch(tipoForm) {
        case 1: {
            return(
                <div>
                    <FormularioCadastro />
                </div>
            );
            break;
        }
        case 2: {
            return(
                <div>
                    <FormularioLogin />
                </div>
            );
            break;
        }
        case 3: {
            return(
                <div>
                    <FormularioRecuperacao />
                </div>
            );
            break;
        }
    }
}

export default Formulario;