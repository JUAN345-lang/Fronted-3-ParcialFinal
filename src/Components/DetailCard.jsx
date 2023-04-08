import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios';

const DetailCard = () => {
  const { id } = useParams()
  const [dentist, setDentist] = useState({});

  async function handlerApi(){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${ id }`);
    setDentist(response.data)
  }

  useEffect(() => {
    handlerApi();
  }, [])

  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>
      <h1>Detail about Dentist {`${dentist?.name} ${dentist?.username}`} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
          className={`card-body row`}
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor-detail.png"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Name: {dentist?.name}</li>
              <li className="list-group-item">
                Username: {dentist?.username}
              </li>
              <li className="list-group-item">
                Address: {dentist?.address?.street}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailCard;
