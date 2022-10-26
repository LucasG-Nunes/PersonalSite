
//TIRAR DESCRIÇÃO E BOTAR PROPS.CHILDREN
const ArticleExperiencia = ({ocupacao,titulo,tempoDeTrabalho, children,icon}) => {
    return (
        <div className="Infos">
        <section className="ExpProfissional">

            <article className="ocupacao">
                <span className="titulo">{titulo}</span>
                <span className="tempoTrabalho">{tempoDeTrabalho}</span>
            </article>

            <article className="icon">
                {icon}
            </article>

            <article className="informacaoOcupacao">

                <span className="titulo">{ocupacao}</span>
                <p>{children}</p>

            </article>

        </section>
        </div>
    )
}

export default ArticleExperiencia