
//AJUSTAR CSS DO FORM 
const FormularioFooter = () => {
  return (
    <form>
        <input placeholder='Nome *' type="text" />
        <input placeholder='Email *' type="text" />
        <input placeholder='Assunto *' type="text" />
        <textarea placeholder='Mensagem *'></textarea>
        <button>Enviar</button>
    </form>
  )
}

export default FormularioFooter