import PropTypes from 'prop-types';
import Icon from '../utils/Icon';
import formatNumber from '../utils/formatNumber';
// import './Home.css';
import virus from '../../images/virus.svg';

const Items = ({ confirmed, name }) => (
  <div className="Home-item-content">
    <div className="Home-item-icon">
      <Icon name="arrow_circle_right" />
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
