import Profile from "./components/header/Profile";
import user from "./user.json";
import "./components/header/Profile.css";
import data from "./data.json";
import Statistics from "./components/statistics/Statistics";
import "./components/statistics/statistics.css";
import friends from "./friends.json";
import Friends from "./components/friends/FriendList";
import "./components/friends/FriendList.css";
import transactions from "./transactions.json";
import Transactions from "./components/Transactions/Transactions";
import "./components/Transactions/Transactions.css";

function App() {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics statistics={data} />
      <Friends friends={friends} />
      <Transactions items={transactions} />;
    </div>
  );
}

export default App;
