import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const title = useParams();
  const { data, loading, error } = useFetch(
    `https://gatherly-api.vercel.app/events/title/${title.eventTitle}`
  );
  return (
    <>
      <Header />
      <section className="container">
        <p>{loading && "loading..."} </p>
        <p>{error && error}</p>
        <div className="row g-4">
          <div className="col">
            <h2 className="my-3">{data?.topic}</h2>
            <img
              src={`${data?.thumbnail}`}
              className="img-fluid"
              alt={data?.title}
            />
            <h3 className="my-2">Details:</h3>
            <p>{data?.description}</p>
            <h3 className="my-2">Additional Information</h3>
            <p>{data?.additionalInfo}</p>
            <h4 className="my-2">Event Tags:</h4>
            <p>
              {data?.tags.map((tag, index) => (
                <button key={index} className="btn btn-danger m-2">
                  {tag}
                </button>
              ))}
            </p>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card bg-white p-2" style={{ marginTop: "4.5rem" }}>
              <p>Session Timings: {data?.sessionTimings}</p>
              <p>Venue: {data?.venue}</p>
              <p>{data?.pricing}</p>
            </div>

            <div>
              <h4 className="my-2">Speakers: ({data?.speakers.length})</h4>
              <div className="d-flex flex-wrap gap-3">
                {data?.speakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="card p-3 shadow text-center"
                    style={{
                      width: "150px",
                      backgroundColor: "white",
                    }}
                  >
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                        speaker
                      )}&background=random&size=100`}
                      alt={speaker}
                      className="rounded-circle mx-auto"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                    <p className="mt-3 fw-semibold mb-0">{speaker}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetails;
