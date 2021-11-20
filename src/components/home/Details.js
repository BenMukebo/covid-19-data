import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faCog,
  faMicrophoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { fetchCountry } from '../../redux/countries/countries';
import formatNumber from '../utils/formatNumber';
import image from '../../images/covid.svg';
import styles from '../css/details.module.css';

const Details = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { country, loading } = useSelector((state) => ({
    loading: state.loadingBar.default,
    country: state.countries.selected,
  }));

  useEffect(() => {
    dispatch(fetchCountry(name));
  }, []);

  if (loading || !country) {
    return null;
  }

  const { All } = country;
  const list = Object.entries(country).slice();

  return (
    <section>
      <header className={styles.header}>
        <span className={styles.left}>
          <Link to="/">
            <FontAwesomeIcon icon={faAngleLeft} className="fontawesome" />
          </Link>
        </span>
        <h4 className={styles['header-title']}>town/city views</h4>
        <div className={styles['right-icons']}>
          <span>
            <FontAwesomeIcon icon={faMicrophoneAlt} />
          </span>
          <span>
            <FontAwesomeIcon icon={faCog} />
          </span>
        </div>
      </header>

      <div className={styles['main-details']}>
        <div className={styles['details-img']}>
          <img src={image} alt="virus-img" className="App-map" />
        </div>
        <div className={styles['header-title']}>
          <h1>{All.country}</h1>
          <p>
            {`${formatNumber(
              All.confirmed,
            )} cases`}
          </p>
        </div>
      </div>

      <section className={styles['details-section']}>
        <h4 className={styles['details-title']}>Twon/City cases</h4>
        <ul className={styles['details-container']}>
          {list.map(([name, {
            population, location, abbreviation, continent, recovered, confirmed, deaths, updated,
          }]) => (
            <li key={name} className={styles['details-items']}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <h5>population</h5>
                  <p>{formatNumber(population)}</p>
                </div>
                <div className={styles.item}>
                  <h5>location</h5>
                  <p>{formatNumber(location)}</p>
                </div>
                <div className={styles.item}>
                  <h5>abbreviation</h5>
                  <p>{formatNumber(abbreviation)}</p>
                </div>
                <div className={styles.item}>
                  <h5>continent</h5>
                  <p>{formatNumber(continent)}</p>
                </div>
                <div className={styles.item}>
                  <h5>recovered</h5>
                  <p>{formatNumber(recovered)}</p>
                </div>
                <div className={styles.item}>
                  <h5>confirmed</h5>
                  <p>{formatNumber(confirmed)}</p>
                </div>
                <div className={styles.item}>
                  <h5>deaths</h5>
                  <p>{formatNumber(deaths)}</p>
                </div>
                <div className={styles.item}>
                  <h5>Last updated</h5>
                  <p>{formatNumber(updated)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Details;
