import { useContext, useEffect, useState } from "react";
import styles from "./Card.module.css";
import { Link } from 'react-router-dom'
import { ApiContext } from "../contexts/ApiContext";
import { actions } from "../contexts/ApiContext";

const Card = ({ dentist }) => {
  const { username, name, id } = dentist;
  const { dispatch } = useContext(ApiContext);
  const [ isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    isAsFavorite();
  }, [])

  function isAsFavorite() {
    const dentists = JSON.parse(localStorage.getItem('favs')) || []
    setFavorite(dentists.find((item) => item.id === id));
  }

  function addFav(e) {
    e.preventDefault();
    const dentists = JSON.parse(localStorage.getItem('favs')) || []
    if(!dentists.find((item) => item.id === id)) {
      localStorage.setItem('favs', JSON.stringify([...dentists, dentist]));
    } else {
      localStorage.setItem('favs', JSON.stringify(dentists.filter((item) => item.id !== id)));
    }
    isAsFavorite();
    dispatch({ type: actions.setAsOutstandings, payload: JSON.parse(localStorage.getItem('favs')) || [] })
  }

  return (
    <>
      <div className={ styles.card }>
        <img
          className={ styles.favicon }
          src={ isFavorite ? "/images/favorite.png": "/images/no-favorite.png" } alt=""
          onClick={addFav}
          />
        <img
          className="card-img-top"
          src="/images/doctor.png"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
            <Link to={`/dentist/${id}`}>
            <h5 className={`card-title ${styles.title}`}>{ name + ' ' + username }</h5>
            </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
