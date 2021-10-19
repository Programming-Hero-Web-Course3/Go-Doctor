import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import Login from "./components/login/Login";
import Contact from "./components/Contact/Contact";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Cart from "./components/cart/Cart";
import SignUp from "./components/signup/Signup";
import { NotFound } from "http-errors";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route exact path="/courses">
              <Courses></Courses>
            </Route>

            <Route path="/courses:id">
              <CourseDetails></CourseDetails>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/cart">
              <Cart></Cart>
            </PrivateRoute>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
