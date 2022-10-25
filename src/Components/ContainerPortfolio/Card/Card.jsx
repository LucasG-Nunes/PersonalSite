

const Card = ({title,Informacao,img,link}) => {
  return (
    <article  className="card">
        <img src={img} alt="" />
        <h1>{title}</h1>
      <p>{Informacao}</p>
      <a href={link} target="blank">Quer saber mais?</a>

    </article>
  )
}

export default Card