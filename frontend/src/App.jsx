import { useFetch } from "./hooks/useFetch.jsx";
import Dashboard from "./Components/Dashboard.jsx";

function App() {
  const { error, loading } = useFetch("/api/get-data");
  if (loading) return <>Loading...</>;
  if (error) return <>{error}</>;

  return <Dashboard />;
}

export default App;
