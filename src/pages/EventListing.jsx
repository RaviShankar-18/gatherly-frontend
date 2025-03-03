import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Header from "../components/Header";

const EventListing = () => {
  const { data, loading, error } = useFetch(
    "https://gatherly-api.vercel.app/events"
  );
  const [eventType, setEventType] = useState("Both");

  const filteredEvent = data?.filter((item) => item.type === eventType);
  const handleSelectEventType = (e) => {
    setEventType(e.target.value);
  };

  const handleSearchField = (searchedText) => {
    setEventType(searchedText);
  };

  return (
    <>
      <Header handleSearchField={handleSearchField} />
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h2 className="mb-4 fw-bold">Gatherly Events</h2>
          </div>
          <div className="col-md-2">
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
        {loading && <p>Loading events...</p>}
        {error && <p className="text-danger">{error}</p>}

        {data && data.length > 0 && eventType === "Both" ? (
          <div className="row g-4">
            {data.map((item) => (
              <div key={item._id} className="col-md-6 col-lg-4">
                <figure className="figure position-relative shadow-sm rounded overflow-hidden">
                  <span className="badge bg-dark position-absolute top-0 start-0 m-2 px-2 py-1">
                    {item.type} Event
                  </span>

                  <Link to={`/event-details/${item.title}`}>
                    <img
                      src={item.thumbnail}
                      className="figure-img img-fluid rounded w-100"
                      alt={item.title}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  </Link>

                  <figcaption className="figure-caption text-muted mt-2">
                    {new Date(item.date).toDateString()}
                  </figcaption>
                  <strong className="d-block">{item.title}</strong>
                </figure>
              </div>
            ))}
          </div>
        ) : (
          <div className="row g-4">
            {filteredEvent?.map((item) => (
              <div key={item._id} className="col-md-6 col-lg-4">
                <figure className="figure position-relative shadow-sm rounded overflow-hidden">
                  {/* Event Type Badge */}
                  <span className="badge bg-dark position-absolute top-0 start-0 m-2 px-2 py-1">
                    {item.type} Event
                  </span>

                  {/* Event Image */}
                  <Link to={`/event-details/${item.title}`}>
                    <img
                      src={item.thumbnail}
                      className="figure-img img-fluid rounded w-100"
                      alt={item.title}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  </Link>

                  {/* Event Details */}
                  <figcaption className="figure-caption text-muted mt-2">
                    {new Date(item.date).toDateString()}
                  </figcaption>
                  <strong className="d-block">{item.title}</strong>
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
