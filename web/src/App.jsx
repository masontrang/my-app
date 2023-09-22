import { Routes, Route } from "react-router-dom";
import Account from "./components/Account/Account";
import Collaboration from "./components/Collaboration/Collaboration";
import Home from "./components/Home/Home";
import Logout from "./components/Logout/Logout";

import ViewRecipes from "./components/ViewRecipes/ViewRecipes";
import AddRecipes from "./components/AddRecipes/AddRecipes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="viewRecipes" element={<ViewRecipes />} />
        <Route path="addRecipes" element={<AddRecipes />} />
        <Route path="collaboration" element={<Collaboration />} />
        <Route path="account" element={<Account />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
