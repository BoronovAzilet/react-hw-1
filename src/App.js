import Profile from "./components/header/Profile";
import user from "./user.json";
import "./components/header/Profile.css";
import data from "./data.json";
import Statistics from "./components/statistics/Statistics";
import "./components/statistics/statistics.css";
function App() {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics statistics={data} />
    </div>
  );
}

export default App;
