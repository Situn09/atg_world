import { useState } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";

function App() {
  const [showAuthTab, setShowAuthTab] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Header setShowAuthTab={setShowAuthTab} isLogin={isLogin} />
      <MainBody
        loginStatus={{ isLogin, setIsLogin }}
        authTab={{ showAuthTab, setShowAuthTab }}
      />
    </>
  );
}

export default App;
