'use client';

import './SearchBar.css';

interface SearchBarProps {
  onChangeSearchText: (text: string) => void;
  searchText: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChangeSearchText, searchText }) => {
  return (
    <div id="InputContainer">
      <input
        id="SearchInput"
        type="text"
        placeholder="Search pose"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChangeSearchText(event.target.value)
        }
        value={searchText}
      />

      <span
        id="Cancel"
        onClick={() => onChangeSearchText('')}
        role="button"
        aria-label="Reset search text"
      >
        ⊗
      </span>
    </div>
  );
};

export default SearchBar;
