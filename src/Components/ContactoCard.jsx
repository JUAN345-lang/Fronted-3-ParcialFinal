import { useEffect, useState } from "react";
import styles from './Contacto.module.css'

const ContactoCard = () => {
  const [submitted, setSubmitted] = useState()
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e)
    console.log(name.match(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/))
    if (!name) {
      console.error('Please fill out all fields')
      setError('Please fill out all fields')
      return
    }
    if (!email.match(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/)) {
      console.error('Please set a valid color')
      setError('Please set a valid color')
      return
    }
    const user = {
      name,
      email,
    }
    console.log(user)
    setSubmitted(user)
    setName('')
    setEmail('')
    setError('')
  }

  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api passando o 
    //id do dentista que está vindo do react-router e carregar os dados em algum estado
  }, []);


  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>
      <h1>Contacto</h1>
      <section className={`card col-sm-12 col-lg-6 container ${ styles.container }`}>
      <form 
      className={ styles.form }
      onSubmit={ handleSubmit }>
        <div className={ styles.formItem }>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={ styles.formItem }>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className={ styles.button } type='submit'>Send Contact</button>
      </form>
      {error && <p>{error}</p>}
      {submitted && (
        <div>
          <h2>Game added!</h2>
          <p>Name: {submitted.name}</p>
          <p>imgUrl: {submitted.imgUrl}</p>
          <p>Score: {submitted.score}</p>
          <p>Color: {submitted.color}</p>
        </div>
      )}
      </section>
    </>
  );
};

export default ContactoCard;
