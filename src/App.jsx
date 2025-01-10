import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import NavBar from "./component/navbar/NavBar";
import AddCoffeeForm from "./component/form/AddCoffeeForm";
import Footer from "./component/footer/Footer";
import Update from "./page/Update";
import LoginPage from "./page/LoginPage";
import Register from "./page/RegisterPage";
import Users from "./page/Users";
import { ToastContainer, } from 'react-toastify';
import CoffeeArticle from "./page/CoffeeArticle";
import Product from "./component/product/Product";
// import coffeesection from "../src/component/product/coffeesection"

function App() {
  return (
    <BrowserRouter>
     <ToastContainer />
      <Routes>
        {/* LoginPage without NavBar and Footer */}
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<Register/>} />

        {/* Other pages with NavBar and Footer */}
        <Route
          path="*"
          element={
            <>
              <NavBar />
              <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/AddCoffeeForm" element={<AddCoffeeForm />} />
                <Route path="/Update/:id" element={<Update />} />
                <Route path="/User" element={<Users/>} />
                <Route path="/articale" element={<CoffeeArticle/>}/>
                <Route path="/coffeesection" element={<Product/>} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
