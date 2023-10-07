import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Page/Home";
import APPETIZERS from "./Page/APPETIZERS";
import SALADS from "./Page/SALADS";
import KATIROLLS from "./Page/KATIROLLS";
import AFGHANIKABAB from "./Page/AFGHANIKABAB";
import KABABENTREES from "./Page/KABABENTREES";
import THALI from "./Page/THALI'S";
import CHICKENENTREES from "./Page/CHICKENENTREES";
import BEEFENTREES from "./Page/BEEFENTREES";
import LAMBENTREES from "./Page/LAMBENTREES";
import SEAFOODENTREES from "./Page/SEAFOODENTREES";
import RICE from "./Page/RICE&BIRYANI";
import DRINKS from "./Page/DRINKS";
import DESSERT from "./Page/DESSERT";
import GOATENTREES from "./Page/GOATENTREES";
import VEGETARIANSPECIALTIES from "./Page/VEGETARIANSPECIALTIES";
import BREAD from "./Page/BREAD";
import Items from "./Page/Items";
import About from "./Page/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/APPETIZERS" Component={APPETIZERS} />
        <Route path="/SALADS" Component={SALADS} />
        <Route path="/KATI ROLLS" Component={KATIROLLS} />
        <Route path="/AFGHANI KABAB" Component={AFGHANIKABAB} />
        <Route path="/KABAB ENTREES" Component={KABABENTREES} />
        <Route path="/THALI'S" Component={THALI} />
        <Route path="/CHICKEN ENTREES" Component={CHICKENENTREES} />
        <Route path="/BEEF ENTREES" Component={BEEFENTREES} />
        <Route path="/LAMB ENTREES" Component={LAMBENTREES} />
        <Route path="/SEAFOOD ENTREES" Component={SEAFOODENTREES} />
        <Route path="/RICE & BIRYANI" Component={RICE} />
        <Route path="/DRINKS" Component={DRINKS} />
        <Route path="/DESSERT" Component={DESSERT} />
        <Route path="/GOAT ENTREES" Component={GOATENTREES} />
        <Route path="/VEGETARIAN SPECIALTIES" Component={VEGETARIANSPECIALTIES} />
        <Route path="/BREAD / NAAN" Component={BREAD} />
        <Route path="/Items" Component={Items} />
        <Route path="/about" Component={About} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
