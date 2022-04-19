import { Link, Route, Routes } from "react-router-dom";

import { AppBar } from "./components/Appbar";
import { LayoutRoot } from "./components/LayoutRoot";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { PageCalendar } from "./features/calendar/Calendar.page";
import { PageHome } from "./features/home/Home.page";
import { PageMealplan } from "./features/meal-plan/MealPlan.page";

function App() {
  return (
    <LayoutRoot>
      <AppBar>stuff in the app bar</AppBar>
      <Navbar>
        <ul>
          <li>
            <Link to="/meal-plan">meal plan</Link>
          </li>
        </ul>
      </Navbar>
      <Main>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/meal-plan" element={<PageMealplan />} />
          <Route path="/calendar" element={<PageCalendar />} />
        </Routes>
      </Main>
    </LayoutRoot>
  );
}

export default App;
