import UserList from "./components/UserList";
import Timer from "./components/Timer";
import Counter from "./components/Counter";
import ItemManager from "./components/ItemManager";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <div>
      <h1>Bugssss</h1>
      <UserList />
      <Timer />
      <Counter />
      <ErrorBoundary>
        <ItemManager />
      </ErrorBoundary>
    </div>
  );
}
