import { useEffect, useContext } from "react";
import Card from "../Components/Card";
import axios from 'axios';
import { ApiContext, actions } from "../contexts/ApiContext";

const HomeCard = (props) => {
  const { api ,dispatch } = useContext(ApiContext);
  const { outstanding } = props;
  

  async function handlerApi(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: actions.setAll, payload: response.data });
  }

  function handlerLocalStorage() {
    const data = JSON.parse(localStorage.getItem('favs')) || [];
    dispatch({ type: actions.setAsOutstandings, payload: data });
  }

  useEffect(() => { 
    handlerApi();
    handlerLocalStorage();
  }, []);

  return (
    <>
      <h1>{ !props.outstanding ? 'Home': 'Destacados'}</h1>
      <div className="card-grid container">{
        (outstanding ? api.outstandings : api.dentists).map((dentist) =>
        <Card
          key={dentist.id} 
          dentist={dentist} /> )
      }
      </div>
    </>
  );
};

export default HomeCard;
