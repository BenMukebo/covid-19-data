import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faCog,
  faMicrophoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { fetchCountries } from '../../redux/countries/countries';
import formatNumber from '../utils/formatNumber';
import Africa from '../../images/africa.svg';
import styles from '../css/home.module.css';
import Item from './Item';

const Home = () => {
  const continent = 'Africa';

  const [searchBar, setSearchBar] = useState('');

  const dispatch = useDispatch();
  const { items, totalConfirmed, loading } = useSelector((state) => ({
    ...state.countries,
    loading: state.loadingBar.default,
  }));

  const [localItems, setLocalItems] = useState([...items]);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchCountries(continent));
    } else {
      setLocalItems(items);
    }
  }, [items]);

  if (loading) {
    return null;
  }

  const handleChange = (e) => {
    setSearchBar(e.target.value);
    if (!e.target.value) {
      setLocalItems(items);
    }
    const itms = [...items];
    const fil = itms.filter((el) => el.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setLocalItems(fil);
  };

  const flterStyle = {
    transform: 'translateY(-1.5rem)',
    marginLeft: '1rem',
  };
  const flterInput = {
    color: 'var(--light-secondary)',
    padding: '0.4rem',
    border: 'none',
    outline: 'none',
    width: '30%',
  };

  return (
    <section>
      <header className={styles.header}>
        <div className={styles['left-year']}>
          <span>
            <FontAwesomeIcon icon={faAngleLeft} className="fontawesome" />
          </span>
          <h4>2021</h4>
        </div>
        <h4 className={styles['header-title']}>Most views</h4>
        <div className={styles['right-icons']}>
          <span>
            <FontAwesomeIcon icon={faMicrophoneAlt} />
          </span>
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
        <div style={flterStyle}>
          <input placeholder="Search..." value={searchBar} onChange={handleChange} style={flterInput} />
        </div>
        <Item items={localItems} />
      </section>
    </section>
  );
};

export default Home;
