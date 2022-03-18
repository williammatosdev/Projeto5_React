import React,{useState} from "react";
import "./style.css";



function Promocoes(){

    const[valor,setvalor]=useState(399)
    const[valor1,setvalor1]=useState(489)
    const[valor2,setvalor2]=useState(430)
    const[valor3,setvalor3]=useState(580)
    const[valor4,setvalor4]=useState(650)
    const[valor5,setvalor5]=useState(840)
    
    function desconto(){
        setvalor(valor-50);     
    }
    function desconto1(){
        setvalor1(valor1-70);
    }
    function desconto2(){
        setvalor2(valor2-60); 
    }
    function desconto3(){
        setvalor3(valor3-80);
    }
    function desconto4(){
        setvalor4(valor4-110);
    }
    function desconto5(){
        setvalor5(valor5-140);
    }
    return(
<section className="bg">
        

    <main className="text-center">
        <div class="displayil">
            <br/>
                <a href="#"><img class="imagem_promoçoes" src="imagens.de.praia1.jpg" alt="Praia"/></a><br/>
            <table className="style1">
                <br/>
                <tr>Maceió</tr>            
                <tr>Valor : R${valor}</tr>            
                <tr>
                <p className="style"> Desconto á Vista: R$ 349,00</p>            
                </tr>
            </table>
        <a href="http://localhost:3000/Cadastro"><button className="button">Comprar</button></a><a><button className="buton" onClick={desconto}>Aplicar Desconto</button></a>            
        </div> 
        
    <div class="displayil">
        <a href="#"><img class="imagem_promoçoes" src="imagens.de.praia2.jpg" alt="Praia"/></a><br/>
        <table className="style1">
            <br/>
            <tr>Fortaleza</tr>            
            <tr>Valor : R${valor1}</tr>            
            <tr>
                <p className="style"> Desconto á Vista: R$ 419,00</p>                
            </tr>
        </table>
        <a href="http://localhost:3000/Cadastro"><button className="button">Comprar</button></a><a><button className="buton" onClick={desconto1}>Aplicar Desconto</button></a>
    </div>

         <br/>

    <div class="displayil">
        <a href="#"><img class="imagem_promoçoes" src="imagens.de.praia3.jpg" alt="Praia"/></a><br/>
        <table className="style1">
            <br/>
            <tr>Florianópolis</tr>            
            <tr>Valor : R${valor2}</tr>            
            <tr>
                <p className="style"> Desconto á Vista: R$ 370,00</p>
            </tr>
        </table>
        <a href="http://localhost:3000/Cadastro"><button className="button">Comprar</button></a><a><button className="buton" onClick={desconto2}>Aplicar Desconto</button></a>
    </div>

          <br/>

        <div class="displayil">
            <a href="#"><img class="imagem_promoçoes" src="imagens.de.praia1.jpg" alt="Praia"/></a><br/>
            <table className="style1">
                <br/>
                <tr>Rio de Janeiro</tr>                
                <tr>Valor :{valor3}</tr>                
                <tr>
                    <p className="style"> Desconto á Vista: R$ 500,00</p>                                
                </tr>
            </table>
                <a href="http://localhost:3000/Cadastro"><button className="button">Comprar</button></a><a><button className="buton" onClick={desconto3}>Aplicar Desconto</button></a>
        </div>

           <br/>

        <div class="displayil">
            <a href="#"><img class="imagem_promoçoes" src="imagens.de.praia2.jpg" alt="Praia"/></a><br/>
            <table className="style1">
                <br/>
                <tr>São Paulo</tr>                
                <tr>Valor : R${valor4}</tr>                
                <tr>
                    <p className="style"> Desconto á Vista: R$ 540,00</p>                                    
                </tr>
            </table>
                <a href="http://localhost:3000/Cadastro"><button className="button">Comprar</button></a><a><button className="buton" onClick={desconto4}>Aplicar Desconto</button></a>
        </div>

           <br/>

        <div class="displayil">
            <a href="#"><img class="imagem_promoçoes" src="imagens.de.praia3.jpg" alt="Praia"/></a><br/>
            <table className="style1">
                <br/>            
                <tr>Salvador</tr>                
                <tr>Valor : R${valor5}</tr>                
                <tr>
                    <p className="style"> Desconto á Vista: R$ 700,00</p>                                        
                </tr>
            </table>
                <a href="http://localhost:3000/Cadastro"><button className="button">Comprar</button></a><a><button className="buton" onClick={desconto5}>Aplicar Desconto</button></a>
        </div>

             <br/>
        
                 <h3 align="center">
                    Formas de Pagamento
                 </h3>
           <center>
              <img width="15%" src="bandeira de Cartões.png"  alt="Formas de pagamento"/>
           </center>
    </main>
  
</section>

    )
}

export default Promocoes;