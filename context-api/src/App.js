import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";

import UserContext from "./context/UserContext";

function App() {
  const [user, setUser] = useState("user");
  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <Header />
        <Login />
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
