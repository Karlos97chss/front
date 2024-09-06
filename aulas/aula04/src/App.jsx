import Login from "../pages/Login";
import Home from "../pages/Home";

function App() {
  const index = 2;
  return (
    <>
      {index == 1 && <Login />}
      {index == 2 && <Home />}
    </>
  );
}

export default App;
