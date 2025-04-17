import { Link } from "react-router-dom";

const Header = ({ handleSearchField }) => {
  const handleOnSearchField = (e) => {
    handleSearchField(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col m-2">
            <Link
              to="/"
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              <h1>Gatherly</h1>
            </Link>
          </div>
          <div className="col m-2 mt-4">
            <input
              className="float-end"
              type="search"
              name="searchField"
              placeholder="Search by title, topic, type"
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
