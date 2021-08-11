import React from 'react';
import './style.css'
function Footer( props){
    return(
      <>
       <div className="footer">
         <div className="footer_ico">
           <div className="ico">
             <h2>Entre em contato conosco:</h2>
           </div>
           <div className="ico">
             <img src={props.enderecoIco} className="name_ico"/>
              <p>{props.endereco}</p>
           </div> 
           <div className="ico">
           <img src={props.telefoneIco} className="name_ico"/>
           <p>{props.contato}</p>
           </div>
           <div className="ico">
           <img src={props.calendarioIco} className="name_ico"/>
           <p>{props.calendario}</p>
           </div>
         </div>
         <p className="footerCopyright">©copyright-PousadaDev</p> 
       </div>
      </>
    );
}
export default Footer;