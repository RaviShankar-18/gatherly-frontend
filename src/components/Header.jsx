import logo from "../assets/gatherly-logo.png";
import { Link } from "react-router-dom";

const Header = ({ handleSearchField }) => {
  const handleOnSearchField = (e) => {
    handleSearchField?.(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="row align-items-center py-2">
          <div className="col-12 col-sm-6 text-center text-sm-start mb-3 mb-sm-0">
            <Link
              to="/"
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              <h1 className="mb-0">
                <img
                  src={logo}
                  alt="Gatherly Logo"
                  className="img-fluid"
                  style={{
                    maxHeight: "100px",
                    width: "auto",
                    verticalAlign: "middle",
                  }}
                />
              </h1>
            </Link>
          </div>
          <div className="col-12 col-sm-6">
            <div className="d-flex justify-content-center justify-content-sm-end">
              <div className="position-relative" style={{ maxWidth: "300px" }}>
                <span className="position-absolute top-50 start-0 translate-middle-y ms-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search text-secondary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
                <input
                  className="form-control ps-5 py-2"
                  type="search"
                  name="searchField"
                  placeholder="Search by title, topic, type"
                  onChange={handleOnSearchField}
                  aria-label="Search events"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-2 mb-3" />
      </div>
    </>
  );
};

export default Header;
