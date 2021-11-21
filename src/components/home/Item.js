import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Items from './Items';
import styles from '../css/items.module.css';

const Item = ({ items = [] }) => (
  <ul className={styles.container}>
    {items.map(({ name, confirmed }) => (
      <li key={name} className={styles['container-items']}>
        <Link to={`/country/${name}`}>
          <Items confirmed={confirmed} name={name} />
        </Link>
      </li>
    ))}
  </ul>
);

Item.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)).isRequired,
};

export default Item;
