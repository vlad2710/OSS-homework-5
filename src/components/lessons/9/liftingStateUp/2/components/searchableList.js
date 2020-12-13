import React from 'react';
import { List, Search } from './';
import PropTypes from 'prop-types';

const byQuery = (query) => (item) =>
  !query || item.name.toLowerCase().includes(query.toLowerCase());

const SearchableList = ({ className, list, state, setState }) => {
  const [query, setQuery] = React.useState('');

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const filteredList = list.filter(byQuery(query));

  return (
    <div className={className}>
      <Search query={query} handleQuery={handleQuery} label="Search:" />
      <hr />
      <List list={filteredList} state={state} setState={setState} />
    </div>
  );
};

SearchableList.propTypes = {
  list: PropTypes.array.isRequired,
  state: PropTypes.array.isRequired,
  setState: PropTypes.func.isRequired,
  className: PropTypes.string
}

export { SearchableList };
export default SearchableList;
