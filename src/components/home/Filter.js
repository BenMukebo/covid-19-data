/* eslint-disable react/prop-types */
const flterStyle = {
  transform: 'translateY(-1.5rem)',
  marginLeft: '1rem',
};

const flterInput = {
  color: 'black',
  padding: '0.4rem',
  border: 'none',
  outline: 'none',
  width: '30%',
};

const Filter = ({ searchBar, onChange }) => (
  <div style={flterStyle}>
    <input placeholder="Search..." value={searchBar} onChange={onChange} style={flterInput} />
  </div>
);

export default Filter;
