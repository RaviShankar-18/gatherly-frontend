import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventListing from "./pages/EventListing";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EventListing />} />
          <Route path="/event-details/:eventTitle" element={<EventDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
