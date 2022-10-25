import { Link } from "react-scroll"
const ContainerMain = () => {
    return (
        <>
            <container className="center">
                <article className="altura">
                    <h3>PORTFOLIO</h3>
                    <h1>Gabriel Nunes</h1>
                    <p>Front-End Developer</p>
                    <Link to="containerAboutMe" smooth="true">
                        <button className="button">Saiba mais</button>
                    </Link>
                </article>
                <article className="teste">
                    <a className="a" href="https://github.com/LucasG-Nunes"><i class="bi bi-github"></i></a>
                    <a href="https://www.linkedin.com/in/lucas-gnunes/"><i class="bi bi-linkedin"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=5581994532077&text=Ol%C3%A1%2C%20Vim%20pelo%20seu%20site!"><i class="bi bi-whatsapp"></i></a>
                </article   >
            </container>
        </>
    )
}

export default ContainerMain