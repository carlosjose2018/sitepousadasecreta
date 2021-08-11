import React, { Component} from 'react';
import './index.css'
/*imagens cardQuartos*/
import CardQuartos from '../../components/cardQuartos/cardQuartos';
import quartoSolteiro from '../../assets/img/quarto-solteiro1.jpg';
import quartoCasal from '../../assets/img/quarto-casal1.jpg';
import quartoFamilia from '../../assets/img/quarto-familia1.jpg';
/*imagem cardPousadaQuarto*/
import imagem1 from '../../assets/img/img1.jpg';
import imagem2 from '../../assets/img/img2.jpg';
import imagem3 from '../../assets/img/img3.jpg';
import imagem5 from '../../assets/img/img5.jpg'
import Subtitulo from '../../components/subTitulo';
import Maps from '../../components/maps'
import Pousada from '../../components/pousada'
export default class Home extends Component{

    render(){
        return(
     <>
        <section className="home-container">
            <div className="container-areaBar">
                <h1>Pousada Secreta</h1>
                <h3>A pousada reservada em Angra dos Reis</h3>
            </div>
        </section>
        <section className="card_container">
            <div className="card_containerArea">
            <div className="card_phase">
                <Subtitulo h2="Seja Bem-vindo(A)!" paragrafo="Relaxe em nossas acomodações e curta o melhor de Angra dos Reis.Temos quartos para solteiro, casal ou família."/>
            </div>
            <div className="cardsQuartos">
                <CardQuartos cardfoto={quartoSolteiro} cardTexto="Quarto de Solteiro"/> 
                <CardQuartos cardfoto={quartoCasal} cardTexto="Quarto de Casal"/> 
                <CardQuartos cardfoto={quartoFamilia} cardTexto="Quarto Familia"/> 
            </div>         
            </div>
        </section>
        <section className="card_container_maps">
            <div className="card_containerArea_maps">
            <div className="card_phase_maps">
                <Subtitulo h2="rota" paragrafo="Conheça um pouco sobre nossa pousada."/>
            </div>      
            </div>
            <Maps/>
        </section>
        <section className="card_container">
            <div className="card_containerArea">
            <div className="card_phase">
             <Subtitulo h2="Sobre a pousada!" paragrafo="Veja como chegar até a pousada."/>
            </div>
            <div className="cardsSobrePousada">
                <Pousada  h3="A pousada" paragrafoPousada="A pousada Dev dispõe de estacionamento privativo gratuito,piscina ao ar livre e bar." cardImagem={imagem1}/>
                <Pousada  h3="Nossos quartos" paragrafoPousada="Os quartos possuem Tv de tela plana a cabo, cozinha compacta e área para refeições.Além disso,as unidades da Pousada Dev contam com ar-condicionado e guarda-roupa." cardImagem={imagem2}/>
                <Pousada  h3="Alimentação" paragrafoPousada="A pousada serve café da manhã em estilo continental ou buffet.Nossos restaurantes functional 24hrs." cardImagem={imagem3}/>
                <Pousada  h3="Recepção" paragrafoPousada="Nossa recepção fica aberta 24hrs." cardImagem={imagem5}/>
            </div>         
            </div>
        </section>
        </>
        );
    }
}