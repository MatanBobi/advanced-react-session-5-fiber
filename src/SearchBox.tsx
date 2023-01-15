import React from "react";
import Spinner from "./Spinner/Spinner";

const SearchBox = ({
  inputValue,
  onChange,
  isLoading,
}: {
  inputValue: string;
  onChange: (value: string) => void;
  isLoading: boolean;
}) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        className="input"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search 🔍"
      />
      {/* {isLoading && (
        <div className="input-spinner-loading">
          <Spinner />
        </div>
      )} */}
    </div>
  );
};

export default SearchBox;
