import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/components/SearchBar.scss";

interface Props {
  searchField: string;
  setSearchField: (value: string) => void;
}

const SearchBar = ({ searchField, setSearchField }: Props) => {
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push(`/items?search=${searchField}`);
  };
  return (
    <form className="header__search-bar search-bar" onSubmit={handleSubmit}>
      <label htmlFor="search-text-field" className="sr-only">
        Texto a buscar
      </label>
      <input
        aria-label="Escribe aquí lo que deseas buscar"
        type="text"
        id="search-text-field"
        placeholder="Nunca dejes de buscar"
        className="header__search-bar__text-field search-bar__text-field text-field"
        maxLength={120}
        autoFocus
        autoCapitalize="off"
        autoComplete="off"
        onChange={handleChange}
        value={searchField}
      />
      <button
        type="submit"
        className="header__search-bar__icon-container search-bar__icon-container"
        aria-label="Botón para buscar."
      >
        <i className="icon search-field__icon-container__icon"></i>
      </button>
    </form>
  );
};

export default SearchBar;
