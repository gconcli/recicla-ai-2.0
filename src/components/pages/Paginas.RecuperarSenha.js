import Formulario from "../forms/Formulario";

function RecuperarSenha() {
    return(
        <>
            <section id="recuperarSenha">
                <h2>Recupere a Sua Senha:</h2>
                <div className="form-container" style={{'justify-content': 'center'}}>
                    <Formulario tipoForm = {4}/>
                </div>
            </section>
        </>
    );
}

export default RecuperarSenha;