import React from "react";



function Contato(){
    return(
<section className="bg">
            
    <table border="0" width="100%" cellpadding="30">
        <td align="center" width="33%">
            <img src="img.whats.jpg" width="70px"/>
            <h3><font face="Arial">whatsapp</font></h3>
            <p><font face="Arial">(11)96766-3454</font></p>
        </td>
        <td align="center" width="33%">
            <img src="img.instagram.jpg" width="50px"/>
            <h3><font face="Arial">Instagram</font></h3>
            <p><font face="Arial">@Agencia_de_Viagens</font></p>
        </td>
        <td align="center" width="33%">
            <img src="img.email.png" width="50px"/>
            <h3><font face="Arial">Email</font></h3>
            <p><font face="Arial">Agencia_Viagens@gmail.com</font></p>
        </td>
    </table>    
        <center>
        <h3 className="style">
            Formas de Pagamento
        </h3>
        
        <img width="15%" src="bandeira de Cartões.png"  alt="Formas de pagamento"/>
        </center>
        
</section>
    )
}

export default Contato;