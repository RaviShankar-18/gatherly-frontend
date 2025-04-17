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
        {loading && <p className="text-center py-3">Loading...</p>}
        {error && <p className="alert alert-danger">{error}</p>}
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-8">
            <h2 className="my-3">{data?.topic}</h2>
            <img
              src={`${data?.thumbnail}`}
              className="img-fluid rounded shadow-sm"
              alt={data?.title}
            />
            <h3 className="my-3">Details:</h3>
            <p>{data?.description}</p>
            <h3 className="my-3">Additional Information</h3>
            <p>{data?.additionalInfo}</p>
            <h4 className="my-3">Event Tags:</h4>
            <div>
              {data?.tags?.map((tag, index) => (
                <button key={index} className="btn btn-danger btn-sm m-1 mb-2">
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="card bg-white p-3 shadow-sm"
              style={{ marginTop: "4.5rem" }}
            >
              <p>
                <strong>Session Timings:</strong> {data?.sessionTimings}
              </p>
              <p>
                <strong>Venue:</strong> {data?.venue}
              </p>
              <p className="mb-0">
                <strong>Pricing:</strong> {data?.pricing}
              </p>
            </div>

            <div className="mt-4">
              <h4 className="my-3">
                Speakers: ({data?.speakers?.length || 0})
              </h4>
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-2 row-cols-lg-2 g-3">
                {data?.speakers?.map((speaker, index) => (
                  <div key={index} className="col">
                    <div
                      className="card p-3 shadow-sm text-center h-100"
                      style={{
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
