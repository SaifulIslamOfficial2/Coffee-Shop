import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import NavBar from "./component/navbar/NavBar";
import AddCoffeeForm from "./component/form/AddCoffeeForm";
import Footer from "./component/footer/Footer";
import Update from "./page/Update";

function App() {
  return (
    <BrowserRouter>
      {/* NavBar for all components */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/AddCoffeeForm" element={<AddCoffeeForm />} />
        {/* Removed loader from the Route */}
        <Route path="/Update/:id" element={<Update />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
