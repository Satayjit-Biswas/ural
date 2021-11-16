import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Share/Header/Header";
import Error from "./components/Error/Error";
import Footer from "./components/Share/Footer/Footer";
import Myorder from "./components/Myorder/Myorder";
import Login from "./components/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./components/PrivateRouter/PrivateRouter";
import Addservice from "./components/Addservice/Addservice";
import Manageorder from "./components/Manageorder/Manageorder";
import Packagedetails from "./components/Home/Packages/Packagedetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/myorder">
              <Myorder></Myorder>
            </PrivateRoute>
            <PrivateRoute path="/manageorder">
              <Manageorder></Manageorder>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <Addservice></Addservice>
            </PrivateRoute>
            <PrivateRoute path="/services/:id">
              <Packagedetails></Packagedetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
