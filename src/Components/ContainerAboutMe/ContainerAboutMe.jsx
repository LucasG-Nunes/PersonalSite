import img from "../../Files/download.jpg"
import file from "../../Files/LucasMeirelesCV.pdf"
import {Link} from "react-scroll"
const ContainerAboutMe = () => {
  return (

    <container id="containerAboutMe" className='centerDiv'>

      <section className='divContent'>

        <h3>SOBRE</h3>
        <h1>Vou contar um pouco sobre meu trabalho...</h1>

        <article className='divColumnImageIntro'>
          <img src={img} alt="ImagemDoChar"></img>
          <p>
            Me graduando em Análise e desenvolvimento de sistemas, venho estudando por diversas plataformas como: Udemy, Digital Innovation One e Rocketseat.
            Diversos cursos com foco para desenvolvimento web com react e typescript. Desenvolvendo projetos práticos e atuando como estagiário de desenvolvimento 
            com react e typescript. Venho me empenhando cada vez mais para me aprimorar.
          </p>
          
        </article>
        
        <article className='perfil_Skills'>

          <div>
            <h3>Perfil</h3>
            <p>Eu  programação, me divirto muito e tomo bastante café durante meus projetos. </p>
            <span>Nome:</span>
            <p>Lucas Gabriel</p>
            <span>Nascimento:</span>
            <p>15/01/2002</p>
            <span>Cargo:</span>
            <p>Front end Software Developer</p>
            <span>Email:</span>
            <p>lucasgnam12@gmail.com</p>
          </div>

          <div>
              <h3>Skills</h3>

              <span>Front End</span>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>SASS/SCSS</p>
                <p>TypeScript</p>

              <span>Back End</span>
                <p>Node</p>
                <p>Express.js</p>

              <span>Databases</span>
                <p>MySQL</p>
                <p>PostgreSQL</p>
                <p>MongoDB</p>

              <span>ORM/ODM</span>
                <p>Prisma</p>
                <p>Mongoose</p>
            </div>

        </article>

        <article className="buttons">
          <Link to="footer" smooth="true">
          <button className="contato">Entre em contato</button>
          </Link>
          <button className="downloadCV">
            <a className="a" href={file}>Download CV</a>
          </button>
        </article>

      </section>

    </container>
  )
}

export default ContainerAboutMe