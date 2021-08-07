import { useState } from "react";

const SearchInput = ({ onSearch, children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();

    onSearch(ev.target);
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <input
        placeholder="busqueda"
        name="searchTerm"
        value={searchTerm}
        onChange={ev => setSearchTerm(ev.target.value)}
      />
      {children}
      <button type="submit">Buscar</button>
    </form>
  </div>;
};

export default SearchInput;