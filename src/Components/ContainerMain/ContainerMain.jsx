import { Link } from "react-scroll"

const ContainerMain = () => {
    return (
        <>
            <section className="center">

                <article className="altura">
                    <header>
                    <h3>PORTFOLIO</h3>
                    <h1>Gabriel Nunes</h1>
                    </header>

                    <p>Front-End Developer</p>
                    <Link className="button" to="sectionAboutMe" smooth="true">
                       Saiba mais
                    </Link>
                </article>

                <article className="secondArticle">
                    <a className="a" href="https://github.com/LucasG-Nunes" target="blank"><i class="bi bi-github"></i></a>
                    <a href ="https://www.linkedin.com/in/lucas-gnunes/" target="blank"><i class="bi bi-linkedin"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=5581994532077&text=Ol%C3%A1%2C%20Vim%20pelo%20seu%20site!" target="blank"><i class="bi bi-whatsapp"></i></a>
                </article>

            </section>
        </>
    )
}

export default ContainerMain