import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return <>
  <NavBar/>
  <ItemListContainer greeting="Somos Haustar"/>
  </>
}

export default App;
