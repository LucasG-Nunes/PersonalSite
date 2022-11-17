import img from "../../Files/download.jpg"
import file from "../../Files/LucasMeirelesCV.pdf"
import {Link} from "react-scroll"
import Information from "./InformationArticle/Information"
import Skills from "./SkillsArticle/Skills"

const ContainerAboutMe = () => {
  return (



      <section id="sectionAboutMe" className='centerDiv organizationSection '>

        <header>
        <h3>SOBRE</h3>
        <h1>Vou contar um pouco sobre meu trabalho...</h1>
        </header>

        <article className='articleImgIntroduction'>
          <img src={img} alt="ImagemDoChar"></img>
          <p>
            Me graduando em Análise e desenvolvimento de sistemas, venho estudando por diversas plataformas como: Udemy, Digital Innovation One e Rocketseat.
            Diversos cursos com foco para desenvolvimento web com react e typescript. Desenvolvendo projetos práticos e atuando como estagiário de desenvolvimento 
            com react e typescript. Venho me empenhando cada vez mais para me aprimorar.
          </p>
          
        </article>
        
        <article className='skills'>

         
          <section>
            <header>
            <h3>Perfil</h3>
            <p>Eu amo programação, me divirto muito e tomo bastante café durante meus projetos. </p>
            </header>
            <Information title={"Nome: "} information={"Lucas Gabriel"} />  
            <Information title={"Nascimento: "} information={"15/01/2002"} />  
            <Information title={"Cargo: "} information={"Front end Software Developer"} />  
            <Information title={"Email: "} information={"lucasgnam12@gmail.com"} />  
          </section>

          <section>
              <h3>Skills</h3>
              <Skills title={"Front End"} array={["HTML","CSS","JavaScript","React","SASS/SCSS","Typescript"]}/>
              <Skills title={"Back End"} array={["Node","Express"]}/>
              <Skills title={"Databases"} array={["MySQL","PostgreSQL","MongoDB"]}/>
              <Skills title={"ORM/ODM"} array={["Prisma","Mongoose"]}/>
          </section>

        </article>

        <article className="buttons">
          <Link className="contato" to="footer" smooth="true">
          Entre em contato
          </Link>
          <button className="downloadCV">
            <a className="a" target='blank' href={file}>Download CV</a>
          </button>
        </article>

      </section>


  )
} 

export default ContainerAboutMe