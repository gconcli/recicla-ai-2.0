import FormularioCadastro from "./Formulario.FormularioCadastro";
import FormularioLogin from "./Formulario.FormularioLogin";
import FormularioModificacao from "./Formulario.FormularioModificacao";
import FormularioRecuperacao from "./Formulario.FormularioRecuperacao";

function Formulario({ tipoForm = 1 }) {
    switch (tipoForm) {
        case 1:
            return <div> <FormularioCadastro /> </div>;
        case 2:
            return <div> <FormularioModificacao /> </div>;
        case 3:
            return <div> <FormularioLogin /> </div>;
        case 4:
            return <div> <FormularioRecuperacao /> </div>;
        default:
            return <div>Tipo de formulário inválido</div>; // Adicionar caso padrão
    }
}

export default Formulario;
