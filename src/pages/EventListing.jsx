import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Header from "../components/Header";

const EventListing = () => {
  const { data, loading, error } = useFetch(
    "https://gatherly-api.vercel.app/events"
  );
  const [eventType, setEventType] = useState("Both");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectEventType = (e) => {
    setEventType(e.target.value);
  };

  const handleSearchField = (searchedText) => {
    setSearchTerm(searchedText);
  };

  const renderEvent = data?.filter((event) => {
    const matchesType = eventType === "Both" || event.type === eventType;

    const lowerSearch = searchTerm.toLowerCase();

    const matchesSearch =
      searchTerm === "" ||
      event.title?.toLowerCase().includes(lowerSearch) ||
      event.topic?.toLowerCase().includes(lowerSearch) ||
      event.type?.toLowerCase().includes(lowerSearch);

    return matchesType && matchesSearch;
  });

  return (
    <>
      <Header handleSearchField={handleSearchField} />
      <div className="container mt-4 px-3 px-sm-4">
        <div className="row align-items-center mb-3">
          <div className="col-12 col-sm-8 mb-3 mb-sm-0">
            <h2 className="fw-bold">Gatherly Events</h2>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-2 ms-md-auto">
            <select
              id="eventType"
              type="select-one"
              className="form-select"
              onChange={handleSelectEventType}
            >
              <option>Select Event Type</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Both">Both</option>
            </select>
          </div>
        </div>

        {loading && (
          <div className="text-center py-4">
            <p>Loading events...</p>
          </div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}

        {renderEvent && renderEvent.length > 0 ? (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 g-md-4">
            {renderEvent.map((item) => (
              <div key={item._id} className="col">
                <figure className="figure position-relative shadow-sm rounded overflow-hidden h-100 m-0">
                  <span className="badge bg-dark position-absolute top-0 start-0 m-2 px-2 py-1">
                    {item.type} Event
                  </span>

                  <Link to={`/event-details/${item.title}`} className="d-block">
                    <img
                      src={item.thumbnail}
                      className="figure-img img-fluid rounded w-100 mb-0"
                      alt={item.title}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  </Link>

                  <div className="p-2">
                    <figcaption className="figure-caption text-muted">
                      {new Date(item.date).toDateString()}
                    </figcaption>
                    <strong className="d-block mt-1">{item.title}</strong>
                  </div>
                </figure>
              </div>
            ))}
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 g-md-4">
            {data?.map((item) => (
              <div key={item._id} className="col">
                <figure className="figure position-relative shadow-sm rounded overflow-hidden h-100 m-0">
                  <span className="badge bg-dark position-absolute top-0 start-0 m-2 px-2 py-1">
                    {item.type} Event
                  </span>

                  <Link to={`/event-details/${item.title}`} className="d-block">
                    <img
                      src={item.thumbnail}
                      className="figure-img img-fluid rounded w-100 mb-0"
                      alt={item.title}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  </Link>

                  <div className="p-2">
                    <figcaption className="figure-caption text-muted">
                      {new Date(item.date).toDateString()}
                    </figcaption>
                    <strong className="d-block mt-1">{item.title}</strong>
                  </div>
                </figure>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default EventListing;
