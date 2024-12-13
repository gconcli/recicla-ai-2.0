import Formulario from "../forms/Formulario";


function Entrar() {
    return(
        <>
            <section id="entrar">
                <h2>Entrar na sua conta</h2>
                <div className="form-container" style={{'justify-content': 'center'}}>
                    <Formulario tipoForm = {3}/>
                </div>
            </section>
        </>
    );
}

export default Entrar;