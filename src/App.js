import { Route, Routes } from "react-router-dom";
import SharedTopMenu from "./components/SharedTopMenu";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedTopMenu/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
