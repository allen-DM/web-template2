import logo from './logo.svg';
import {HashRouter,Route,Switch} from "react-router-dom";
import './App.css';
import FirstPage from "./component/firstpage/FirstPage.js";
import SecondPage from "./component/secondpage/SecondPage.js";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={FirstPage}/>
      <Route path="/sec" component={SecondPage} />
    </HashRouter>
  );
}

export default App;
