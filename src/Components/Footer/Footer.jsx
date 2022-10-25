import FormularioFooter from './FormularioFooter/FormularioFooter'

const Footer = () => {
  return (

    <footer>
      <section id='footer' className='header'>
      <span>Contato</span>
      <h1>Vamos lá?!</h1>
      <p className='introducao'>
      Preencha o formulário abaixo para esclarermos suas dúvidas e dar início ao seu projeto!
      </p>
      </section>
      <FormularioFooter/>
  </footer>

  )
}

export default Footer