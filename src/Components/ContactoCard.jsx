import { useEffect, useState } from "react";
import styles from './Contacto.module.css'

const ContactoCard = () => {
  const [submitted, setSubmitted] = useState()
  const [success, setSuccess] = useState();
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e)
    if (!(name.length > 5)) {
      console.error('Please fill out all fields')
      setSubmitted('')
      setError('Please fill out all fields')
      return
    }
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      console.error('Please set a valid email')
      setSubmitted('')
      setError('Please set a valid email')
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
    setSuccess(`Gracias ${name}, te contactaremos cuando antes vía mail`)
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
      {error && <div className={styles.error}>{error}</div>}
      {submitted && (
        <div className={ styles.success }>
          {success}
        </div>
      )}
      </section>
    </>
  );
};

export default ContactoCard;
