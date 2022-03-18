import React from "react";
import "./style.css";

function Home(){
    return(

<section className="img-fundo ">        
        <h3>
    <div className="container d-flex">
       <span className="mt-5 pt-3">Sejam bem vindos  em nossa Agência,Ganhe descontos até 50%!</span>     
       <img class="img_texto" src="logo.logo.png" reight="50px" alt="viagens"/>
    </div>
      </h3>
      <p className="mx-5 px-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      
      <br/> 
      <br/>
      <br/>
      <br/>
      <br/>
      
    <center>     
        <h2 className="style2">
            Formas de Pagamento
        </h2>    
        <img className="style5" src="Band.Cartões.png"  alt="Formas de pagamento"/>
    </center>
       
</section>
    )
}

export default Home;