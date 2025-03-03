import { useState } from "react";

const Header = ({ handleSearchField }) => {
  const handleOnSearchField = (e) => {
    handleSearchField(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col m-2">
            <h1 className="">Gatherly</h1>
          </div>
          <div className="col m-2">
            <input
              className="float-end"
              type="text"
              name="searchField"
              placeholder="Search by title and type"
              onChange={handleOnSearchField}
            />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Header;
