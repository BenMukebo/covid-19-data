import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleRight,
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
  // console.log(All);
  const list = Object.entries(country).slice();
  console.log(list);

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

      <section className="Home-stats">
        <h4 className="App-section-title">Twon/City cases</h4>
        <ul>
          {list.map(([name, {
            population, location, abbreviation, recovered, confirmed, deaths, updated,
          }]) => (
            <li key={name} className="Details-item">
              <div>
                <div>
                  <h5>population</h5>
                  <p>{formatNumber(population)}</p>
                </div>
                <div>
                  <h5>location</h5>
                  <p>{formatNumber(location)}</p>
                </div>
                <div>
                  <h5>capital_city</h5>
                  <p>{formatNumber(abbreviation)}</p>
                </div>
                <div>
                  <h5>recovered</h5>
                  <p>{formatNumber(recovered)}</p>
                </div>
                <div>
                  <h5>confirmed</h5>
                  <p>{formatNumber(confirmed)}</p>
                </div>

                <div>
                  <h5>deaths</h5>
                  <p>{formatNumber(deaths)}</p>
                </div>
                <div>
                  <h5>Last updated</h5>
                  <p>{formatNumber(updated)}</p>
                </div>
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Details;

// abbreviation: "ZA"
// capital_city: "Pretoria"
// confirmed: 2926914
// continent: "Africa"
// country: "South Africa"
// deaths: 89515
// elevation_in_meters: "1,034"
// iso: 710
// lat: "-30.5595"
// life_expectancy: "51.1"
// location: "Southern Africa"
// long: "22.9375"
// population: 56717156
// recovered: 0
