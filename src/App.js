import Profile from "./components/header/Profile";
import user from "./user.json";
import "./components/header/Profile.css";
function App() {
  return (
    <div className="App">
      <Profile {...user} />
    </div>
  );
}

export default App;
