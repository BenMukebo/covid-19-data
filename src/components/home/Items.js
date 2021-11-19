import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import formatNumber from '../utils/formatNumber';
import covid from '../../images/covid.svg';
import styles from '../css/items.module.css';

const Items = ({ confirmed, name }) => (
  <div className={styles['item-content']}>
    <div className={styles['item-icon']}>
      <FontAwesomeIcon className={styles.icon} icon={faArrowCircleRight} />
    </div>
    <div className={styles['item-img']}>
      <img src={covid} alt="virus-img" />
    </div>
    <div className={styles['item-btns']}>
      <h4>{name}</h4>
      <p>{formatNumber(confirmed)}</p>
    </div>
  </div>
);

Items.propTypes = {
  confirmed: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Items;
