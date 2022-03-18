import React from "react";
import "./style.css";


function Cadastro(){
    return(
        <section className="bg">
            
            
            <main>        
        <form>
            <label for="nome">Nome completo</label><br/>
        
            <input type="text" name="nome" id="nome" placeholder="Digite Seu Nome..."/><br/>
                <br/>
            <label for="CPF">CPF</label> <br/>   
            <input type="text" name="CPF" id="CPF" placeholder="Digite Seu CPF..."/><br/>
            <br/>
            <label for="idade">Data Nascimento</label><br/>
            <input type="date" name="idade" id="idade"/><br/>
            <br/>
            <label for="Endereço">Endereço</label> <br/>   
            <input type="text" name="Endereço" id="Endereço" placeholder="Digite Sua Avenida/Rua..."/><br/>
            <br/>
            <label for="cidade"> Cidade</label> <br/>   
            <input type="text" name="cidade" id="cidade" placeholder="Digite Sua cidade..."/><br/>
            <br/>
            <label for="bairro">Bairro</label> <br/>   
            <input type="text" name="bairro" id="bairro" placeholder="Digite Seu bairro..."/><br/>
            <br/>
            <label for="Endereço">Número</label> <br/>   
            <input type="text" name="numero" id="numero" placeholder="Digite Número..."/><br/>
            <br/>
            <label for="Email">Email</label> <br/>   
            <input type="email" name="email" id="Email" placeholder="Digite ser email"/>
            <br/>
            <br/>
                <label for="Sexo">Sexo</label> 
                <br/>
                
                <input type="radio" name="genero" id="masculino"value="masculino"/>
                <label for="masculino">Masculino</label><br/>
                <br/>
                <input type="radio" name="genero" id="feminino"value="feminino"/>
                <label for="feminino">Feminino</label><br/>
                <br/>
                <input type="radio" name="genero" id="outros"value="outros"/>
                <label for="outros">Outros</label><br/>
                
            <button className="btn">Enviar</button>
        </form>            
        </main>
        
        </section>
    )
}

export default Cadastro;