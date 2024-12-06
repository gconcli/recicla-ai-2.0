import { useState } from 'react';

/*
 * Cria e retorna um formulário HTML, além de lidar com o tratamento dos dados digitados.
 */
function FormularioCadastro() {

    /**
     * Constante que guarda os dados digitados no formulário.
     * Para ler algum valor salvo nesta variável, use o nome definido no elemento "input" do formulário
     * Exemplo: Se name="nome", você deve chamar inputs.nome para receber o que foi digitado na caixa de texto desse elemento
     */
    const [inputs, setInputs] = useState({});

    /**
     * Constante que define a lógica que deve ocorrer se o botão de "submit" for selecionado
     * Neste exemplo, somente impede o código PHP, e exibe um alerta no navegador
     */
    const handleSubmit = (event) => {
        event.preventDefault();

        if(inputs.senha === inputs.senhaC) {

            let mensagemConfirmacao = `
            Nome: ${inputs.nome || ""} ${inputs.sobrenome || ""}
            E-mail: ${inputs.email || ""}
            Login: ${inputs.usuario || ""}
            Senha: ${inputs.senha || ""}

            Você deseja realizar o seu cadastro com os
            dados informados acima?
            `;
            
            if(window.confirm(mensagemConfirmacao) === true) {
                alert("Realizando o seu cadastro...");
                // Código do banco de dados aqui
            }
        }
        else {
            alert("A senha e sua confirmação são diferentes!");
        }
        
    }

    /**
     * Constante que define a lógica que deve ocorrer se o botão de "reset" for selecionado
     * Neste exemplo, somente impede o código PHP, e reseta o valor da constante "inputs"
     */
    const handleReset = (event) => {
        event.preventDefault();
        setInputs({});
    }

    /**
     * Constante que define a lógica que deve ocorrer se houver alteração no valor de quaisquer dos elementos "input" no formulário
     */
    const handleChange = (event) => {
        const nome = event.target.name;
        const valor = event.target.value;
        setInputs(valores => ({...valores, [nome]: valor}));
    }

    return (
        <>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <input type="text" placeholder="Digite o seu Nome" name="nome" value={inputs.nome || ""} onChange={handleChange}></input>

                <input type="email" placeholder="Digite o seu E-mail" name="email" value={inputs.email || ""} onChange={handleChange}></input>

                <input type="text" placeholder="Crie um nome de Login" name="login" value={inputs.login || ""} onChange={handleChange}></input>

                <input type="password" placeholder="Crie uma Senha" name="senha" value={inputs.senha || ""} onChange={handleChange}></input>

                <input type="password" placeholder="Confirme a sua Senha" name="senhaC" value={inputs.senhaC || ""} onChange={handleChange}></input>

                <button type="submit">Fazer Cadastro</button>
                <button type="reset">Limpar os Dados</button>
                </form>
        </>
    );
}

export default FormularioCadastro;