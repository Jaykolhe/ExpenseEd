import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Registration from "./components/Registration";
import Login from "./components/Login";
import ExpenseForm from "./components/ExpenseForm";
import NavBar from "./components/NavBar";
import User from "./components/User";
import FinancialEducation from './components/FinancialEducation';
import Scholarships from "./components/Scholarships";
import Loans from "./components/Loans";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="bg-primary">ExpenseEd</h1>
        <NavBar />
        {/* //Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Spend smarter, save more!</h2>
                <h3>
                  Gain valuable insights into your spending habits and identify
                  areas from Where you can save more and optimize your finances .
                </h3>
              </>
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/expenses" element={<ExpenseForm />} />
          <Route path="/userPage/:user_id" element={<User />} />
          <Route
            path="/userPage"
            element={<h1>Wrong UserName or password!!</h1>}
          />


<Route path="/financial-education" element={<FinancialEducation />} />
<Route path="/scholarships" element={<Scholarships />} />
          <Route path="/loans" element={<Loans />} />
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
