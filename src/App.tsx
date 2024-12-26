import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Members from "./pages/members";
import Books from "./pages/books";
import Reservations from "./pages/reservations";
import Events from "./pages/events";
import Fines from "./pages/fines";
import Publishers from "./pages/publishers";
import Authors from "./pages/authors";
import Rooms from "./pages/rooms";
import Feedback from "./pages/feedback";
import Archives from "./pages/archives";
import Settings from "./pages/settings";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/books" element={<Books />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/events" element={<Events />} />
        <Route path="/fines" element={<Fines />} />
        <Route path="/publishers" element={<Publishers />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}

export default App;
