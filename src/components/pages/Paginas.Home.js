import Formulario from "../forms/Formulario";


function Home() {
    return (
        <>
            <section id="introducao">
                <h2>Bem-vindo ao Recicla Aí!</h2>
                <p>O Recicla Aí foi criado para conscientizar e informar sobre a importância da reciclagem de eletrônicos.
                    Com o aumento do uso de dispositivos eletrônicos, o descarte inadequado se tornou um grande desafio para
                    o meio ambiente e a saúde pública. Nosso objetivo é ajudar você a entender os impactos do lixo
                    eletrônico e guiar para o descarte correto, proporcionando informações essenciais sobre como, onde, e
                    por que reciclar.</p>
                <p>Aqui, você encontrará tudo o que precisa saber para contribuir com um futuro mais sustentável. Junte-se a
                    nós nessa missão de cuidar do planeta!</p>
            </section>
            <section id="cadastrar">
                <h2>Cadastre-se para mais informações!</h2>
                <div className="form-container" style={{'justify-content': 'center'}}>
                    <Formulario tipoForm = {1}/>
                </div>
            </section>
        </>
    );
}

export default Home;