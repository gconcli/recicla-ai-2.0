import Formulario from "../forms/Formulario";

function Sessao() {
    return(
        <>
            <section id="inicio-sessao">
                <h2>Olá, !</h2>
            </section>

            <section id="editar-usuario">
                <h3 style={{'text-align': 'center'}}>Editar cadastro do usuário</h3>

                <div className="form-container" style={{'justify-content': 'center'}}>
                    <Formulario tipoForm = {3}/>
                </div>
            </section>

            <section id="noticias" className="pagina-card">
                <h3>Principais notícias</h3>
                <div className="container-cards">
                    <div className="card-sobre-nos">
                        <div className="container-imagem">
                            <img src={require("../../img/imagem-noticia-1.PNG")} alt="Imagem da notícia"/>
                        </div>
                        <div className="informacao-card">
                            <h3><a href={"https://avozdaserra.com.br/colunas/prosa-sustentavel/lixo-eletronico-o-desafio-global-da-era-digital"}
                                    target="_blank" rel="noreferrer noopener">Lixo Eletrônico: O Desafio Global da Era Digital</a></h3>
                        </div>
                    </div>
                    <div className="card-sobre-nos">
                        <div className="container-imagem">
                            <img src={require("../../img/imagem-noticia-2.PNG")} alt="Imagem da notícia"/>
                        </div>
                        <div className="informacao-card">
                            <h3><a href={"https://g1.globo.com/jornal-nacional/noticia/2024/04/27/brasil-e-o-5o-pais-que-mais-produz-residuos-eletronicos-mas-descarte-correto-ainda-e-pequeno.ghtml"}
                                    target="_blank" rel="noreferrer noopener">Brasil é o 5º país que mais produz resíduos
                                    eletrônicos, mas descarte correto ainda é pequeno</a></h3>
                        </div>
                    </div>
                    <div className="card-sobre-nos">
                        <div className="container-imagem">
                            <img src={require("../../img/imagem-noticia-4.PNG")} alt="Imagem da notícia"/>
                        </div>
                        <div className="informacao-card">
                            <h3><a href={"https://www.dgabc.com.br/Noticia/4163657/ribeirao-pires-promove-drive-thru-de-lixo-eletronico-saiba-como-participar"}
                                    target="_blank" rel="noreferrer noopener">Ribeirão Pires promove Drive-Thru <br></br>
                                    de lixo eletrônico; saiba como participar</a></h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sessao;