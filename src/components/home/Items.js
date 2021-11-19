import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';
// import Icon from '../utils/Icon';
import formatNumber from '../utils/formatNumber';
import virus from '../../images/virus.svg';
// import styles from '../css/home.module.css';

const Items = ({ confirmed, name }) => (
  <div className="Home-item-content">
    <div className="Home-item-icon">
      {/* <Icon name="arrow_circle_right" /> */}
      <FontAwesomeIcon icon={faArrowCircleRight} />
    </div>
    <div className="Home-item-top">
      <img src={virus} alt="virus view" className="Home-item-image" />
    </div>
    <div className="Home-item-bottom">
      <h4 className="App-title">{name}</h4>
      <p className="App-subtitle">{formatNumber(confirmed)}</p>
    </div>
  </div>
);

Items.propTypes = {
  confirmed: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Items;
