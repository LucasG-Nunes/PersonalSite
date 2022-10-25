import ArticleExperiencia from "./ArticleExperiencia/ArticleExperiencia"

const ContainerExperiencia = () => {


  return (
    <>

      <container className='center_Div'>

        <section className="header">
          <article>
            <h3>Resumo</h3>
            <h1>Minhas qualificações</h1>
          </article>

          <article className="introducao">
            <p >Um pouco sobre minha tragetória no mundo da programação</p>
            <h3>Experiência Profissional:</h3>
          </article>

        </section>
      </container>


        <ArticleExperiencia 
        tempoDeTrabalho="2022 - Presente" 
        titulo="DB" 
        ocupacao="Estagiário de Desenvolvimento de
        Software" 
        icon={<i class="bi bi-terminal-x"></i>}
          >
                        Desenvolvimento web full-stack utilizando
                      react com typescript e jest para testes no
                      front e node com typescript para o back
          </ArticleExperiencia>

        <ArticleExperiencia 
        tempoDeTrabalho="2022 - Presente" 
        titulo="EY" 
        ocupacao=" Desenvolvedor PEGA" 
        icon={<i class="bi bi-terminal-x"></i>}
          >
          Desenvolver soluções tecnológicas em
          PEGA participando de dailys, refinamentos
          técnicos e handover funcionais.

          </ArticleExperiencia>

        <ArticleExperiencia 
        tempoDeTrabalho="2021 - 2021" 
        titulo="CRM7" 
        ocupacao=" Estagiário de Desenvolvimento de
        Software" 
        icon={<i class="bi bi-terminal-x"></i>}

          >
          Implementar e auxiliar os clientes na
          utilização de todas as funcionalidades das
          ferramentas nativas e desenvolver em
          JavaScript buscando a satisfação do cliente.

          </ArticleExperiencia>
      <container className="center_Div">
        <section className="header">
          <article className="introducao">
            <h3>Educação</h3>
          </article>
          
        </section>
        
      </container>
           <ArticleExperiencia 
        tempoDeTrabalho="2021 - 2023" 
        titulo="ADS" 
        ocupacao="Universitário"
        icon={<i class="bi bi-book-half"></i>}

          >
            Iniciei o superior em Análise e Desenvolvimento de sistemas em abril de 2020. Desde então venho estudando desenvolvimento web
            focado ao front com React e Typescript, usando Jest e React Testing Library para testes, node com express com mongodb para o backend.
          </ArticleExperiencia>
    </>

  )
}

export default ContainerExperiencia