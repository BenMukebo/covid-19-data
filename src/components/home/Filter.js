// eslint-disable-next-line react/prop-types
const Filter = ({ searchBar, onChange }) => (
  <div>
    <input placeholder="Search..." value={searchBar} onChange={onChange} style={{ color: 'black' }} />
  </div>
);

export default Filter;
