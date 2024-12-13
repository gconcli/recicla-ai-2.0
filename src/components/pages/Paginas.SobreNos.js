function SobreNos() {
    return(
        <>
            <section className="pagina-card">
                <h2>Sobre nós</h2>

                <p>Nós somos a equipe por trás do Recicla Aí. Nos dedicamos para conscientizar a todos da importância do descarte
                    correto
                    dos dispositivos eletrônicos e, ao mesmo tempo, oferecer uma experiência de usuário de qualidade e inclusiva no
                    nosso site.
                    Conheça um pouco mais sobre nós abaixo e descubra quem está por trás do desenvolvimento deste projeto:</p>
                <br></br>
                <div className="container-cards">
                    <div className="card-sobre-nos">
                        <div className="container-imagem">
                            <img src={require("../../img/eduardo.jpg")} alt="Imagem do Eduardo"/>
                        </div>
                        <div className="informacao-card">
                            <h3>Eduardo Moreira</h3>
                            <p>Cargo: Gerente do Projeto</p>
                            <p>Contato: <a href="https://github.com/ProfBlack3342" target="_blank" rel="noreferrer">GitHub</a></p>
                        </div>
                    </div>

                    <div className="card-sobre-nos">
                        <div className="container-imagem">
                            <img src={require("../../img/gabriel.jpg")} alt="Imagem do Gabriel"/>
                        </div>
                        <div className="informacao-card">
                            <h3>Gabriel Concli</h3>
                            <p>Cargo: Analista de Testes</p>
                            <p>Contato: <a href="https://github.com/gconcli" target="_blank" rel="noreferrer">GitHub</a></p>
                        </div>
                    </div>

                    <div className="card-sobre-nos">
                        <div className="container-imagem">
                            <img src={require("../../img/milena.jpg")} alt="Imagem da Milena"/>
                        </div>
                        <div className="informacao-card">
                            <h3>Milena Bregalda</h3>
                            <p>Cargo: Desenvolvedora Front-end</p>
                            <p>Contato: <a href="https://github.com/milenabregalda" target="_blank" rel="noreferrer">GitHub</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SobreNos;