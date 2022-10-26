
import { SwiperSlide } from "swiper/react";
import cloneNetflix from "../../Files/MangaFlix.PNG"
import controleDeEstoque from "../../Files/ControleDeEstoque.PNG"
import cloneAmazon from "../../Files/Amazon.PNG"
import ecommerce from "../../Files/Ecommerce.PNG" 
import projetoUniversidade from "../../Files/ProjetoUniversidade.PNG"
import Card from "./Card/Card";
import Slider from "./Slider/Slider"

const ContainerPortfolio = () => {  

  const cardsInfos = [
    {
      id:1,
      title: "MangaFlix",
      Informacao: "Clone da Netflix que fiz utilizando HTML5,JavaScript e Jquery. Foi um clone com o tema de animes e mangás.",
      img: cloneNetflix,
      link: 'https://github.com/LucasG-Nunes/Creating_Netflix_Interface'
    },
    {
      id:2,
      title: "Controle de Estoque", 
      Informacao: "Controle de estoque que desenvolvi utilizando React,Material UI e Javascript no FrontEnd e Node com Docker e PostgreSQL para o backend.",
      img: controleDeEstoque,
      link: 'https://github.com/LucasG-Nunes/Controle_de_Estoque'

    },
    {
      id:3,
      title: "Clone da Amazon",
      Informacao: "Clone da Amazon que está sendo desenvolvido com React,JavaScript e Chakra UI, está em produção pois será refatorado para Typescript com next.",
      img:cloneAmazon,
      link: 'https://github.com/LucasG-Nunes/Clone-Amazon/tree/main/narutoapi'

    },
    {
      id:4,
      title: "Ecommerce",
      Informacao: "Ecommerce que está sendo desenvolvido com React,JavaScript e CSS puro. Está em produção pois será refatorado para Typescript com Next.",
      img: ecommerce,
      link: 'https://github.com/LucasG-Nunes/E-commerce_Frexco/tree/main/ecommerce_frexco'

    },
    {
      id:5,
      title:"Projeto da Universidade em Vanilla",
      Informacao:"Site simples desenvolvido como trabalhdo da universidade, usando HTML5,CSS e JavaScript.",
      img: projetoUniversidade,
      link: 'https://lucasg-nunes.github.io/projeto_Faculdade/'
    }
]

  const settings = {
    spaceBetween:1,
    slidesPerView:3,
    navigation: true,
    loop:true,
    draggable:true,
    pagination: {
      clickable:true,
    }
  };
  return (
    <>

    <section className='centerSection'>

        <section className="header">

          <header>
            <h3>Portfolio</h3>
            <h1>Confira alguns projetos realizados</h1>
          </header>


            <p >Você pode também conferir nas redes sociais aqui disponibilizadas</p>


        </section>

      </section>

      <Slider settings={settings}>
        {cardsInfos.map((card)=>(
          <SwiperSlide>
            <Card img={card.img} title={card.title} Informacao={card.Informacao} link={card.link}/>
          </SwiperSlide>
        ))}
      </Slider>

      </>
  )
}

export default ContainerPortfolio