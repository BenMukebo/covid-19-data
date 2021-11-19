import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Items from './Items';

const Item = ({ items = [] }) => (
  <ul className="Home-grid">
    {items.map(({ name, confirmed }) => (
      <li key={name} className="Home-grid-item">
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
