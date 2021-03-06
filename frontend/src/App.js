import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Landing from "./Screens/LandingScreen/Landing";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Notes from "./Screens/MyNotes/Notes";
import Login from "./Screens/LoginScreen/Login";
import Register from "./Screens/RegisterScreen/Register";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Route path="/" component={Landing} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/mynotes" component={Notes} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
