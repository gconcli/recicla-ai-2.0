function OQue() {
    return(
        <>
            <section>
                <h2>O que é o Descarte Eletrônico</h2>
                <p>O descarte eletrônico, ou lixo eletrônico, refere-se ao processo de eliminação de dispositivos
                    eletrônicos e eletrodomésticos que não são mais utilizáveis ou desejados.</p>
                <p>Esta categoria abrange uma vasta gama de produtos, todos eles contendo componentes que podem ser
                    prejudiciais ao meio ambiente e à saúde humana se não forem descartados corretamente.</p>
                <p>Entre os dispositivos que se enquadram na categoria de lixo eletrônico, estão:</p>

                <div className="card-imagem">
                    <img src={require("../../img/celular-smartphone.jpg")} alt=""/>
                    <p>
                        <strong>Celulares e Smartphones:</strong><br></br>
                        Estes dispositivos contêm baterias e circuitos,<br></br>
                        que podem liberar substâncias tóxicas se não forem<br></br>
                        descartados de maneira adequada.
                    </p>
                </div>
                <div className="card-imagem">
                    <img src={require("../../img/desktop-laptop.jpg")} alt=""/>
                    <p>
                        <strong>Computadores e Laptops:</strong><br></br>
                        Incluem componentes como placas de circuito,<br></br>
                        discos rígidos e baterias, que podem conter<br></br>
                        metais pesados e produtos químicos nocivos.
                    </p>
                </div>
                <div className="card-imagem">
                    <img src={require("../../img/televisao.jpg")} alt=""/>
                    <p>
                        <strong>Televisores e Monitores:</strong><br></br>
                        Muitos desses dispositivos antigos utilizam<br></br>
                        tubos de raios catódicos (CRT) que contêm<br></br>
                        materiais tóxicos, como chumbo.
                    </p>
                </div>
                <div className="card-imagem">
                    <img src={require("../../img/impressora.jpg")} alt=""/>
                    <p>
                        <strong>Impressoras:</strong><br></br>
                        Podem ter cartuchos de tinta e peças eletrônicas<br></br>
                        que necessitam de tratamento especial<br></br>
                        para evitar a poluição.
                    </p>
                </div>
                <div className="card-imagem">
                    <img src={require("../../img/microondas.jpg")} alt=""/>
                    <p>
                        <strong>Eletrodomésticos:</strong><br></br>
                        Aparelhos como micro-ondas, fogões e refrigeradores<br></br>
                        contêm materiais que precisam ser manuseados<br></br>
                        com cuidado durante o descarte.
                    </p>
                </div>
                <p>O correto descarte desses itens é fundamental para minimizar o impacto ambiental.</p>
            </section>
        </>
    );
}

export default OQue;