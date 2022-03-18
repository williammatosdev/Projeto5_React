import React from "react";
import "./style.css";


function Destino(){
    return(
        
<section className="bg">
        
           

           
           
        <h2 className="style">
            Passagens Aéreas
        </h2>
        
    <form>  
        <label for="nome">Local de Origem</label>
        
        
        <input type="text" name="local" id="local" placeholder="Digite Seu Local.."/><br/>
            <br/>
        <label for="nome">Destino</label> <br/>   
        <input type="text" name="destino" id="destino" placeholder="Digite Seu Destino.."/><br/>
        <br/>
        <label for="data">Data de Ida</label><br/>
        <input type="date" name="data" id="data"/><br/>
        <br/>
        <label for="data">Data de Volta</label><br/>
        <input type="date" name="data" id="data"/><br/>
        <br/>
        <label for="número">Quantidade de Pessoas</label> <br/>   
        <input type="number" name="pessoas" id="pessoas" placeholder="Clique aqui.."/><br/>
        <br/>
        <label for="número">Adulto</label> <br/>   
        <input type="number" name="adulto" id="adulto" placeholder="Clique aqui.."/><br/>
        <br/>
        <label for="número">Criança de 3 á 11 anos</label> <br/>   
        <input type="number" name="criança" id="criança" placeholder="Clique aqui.."/><br/>
        <br/>
        <label for="número">Criança Menores de 3 anos</label> <br/>   
        <input type="number" name="criança" id="criança" placeholder="Clique aqui"/><br/>
        <br/>
        <label for="Email">Email</label> <br/>   
        <input type="email" name="email" id="Email" placeholder="Digite ser email"/>
        
    </form>
        <br/>    
        <button className="botao">Buscar Voos</button>
        
        <h3 align="center">
                    Formas de Pagamento
        </h3>
    <center>
        <img width="15%" src="bandeira de Cartões.png"  alt="Formas de pagamento"/>
    </center>
        
        
</section>
        
        
        
    )
    } 

    export default Destino;