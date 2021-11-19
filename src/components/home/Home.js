import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faCog,
  faMicrophoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { fetchCountries } from '../../redux/countries/countries';
import formatNumber from '../utils/formatNumber';
import Item from './Item';
// import Icon from '../utils/Icon';
import Africa from '../../images/africa.svg';
import styles from '../css/home.module.css';

const Home = () => {
  const continent = 'Africa';

  const dispatch = useDispatch();
  const { items, totalConfirmed, loading } = useSelector((state) => ({
    ...state.countries,
    loading: state.loadingBar.default,
  }));

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchCountries(continent));
    }
  }, []);

  if (loading) {
    return null;
  }

  return (
    <section>
      <header className={styles.header}>
        {/* <Icon name="arrow_back_ios" /> */}
        <div className={styles['left-year']}>
          <span>
            <FontAwesomeIcon icon={faAngleLeft} className="fontawesome" />
          </span>
          <h4>2021</h4>
        </div>

        <h4 className={styles['header-title']}>Most views</h4>
        {/* <Icon name="mic" /> */}

        <div className={styles['right-icons']}>
          <span>
            <FontAwesomeIcon icon={faMicrophoneAlt} />
          </span>
          {/* <Icon name="settings" /> */}
          <span>
            <FontAwesomeIcon icon={faCog} />
          </span>
        </div>
      </header>

      <div className={styles['main-home']}>
        <div className={styles['home-img']}>
          <img src={Africa} alt="Africa-img" />
        </div>
        <div className={styles['details-title']}>
          <h1>{continent}</h1>
          <p>
            {`${formatNumber(totalConfirmed)} cases`}
          </p>
        </div>
      </div>

      <section className={styles.contries}>
        <h5>STATS By COUNTRY 2021</h5>
        <Item items={items} />
      </section>
    </section>
  );
};

export default Home;
