import Company from "./pages/Company/Company";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </>
  );
};

export default App;
