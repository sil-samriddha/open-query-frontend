import "./App.css";
import Chatarea from "./pages/Chatarea";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const queryClient = new QueryClient();

function App() {
  // Two states : black and white
  const [Mode, setMode] = useState("black");
  const toggleMode = () => {
    if (Mode === "black") {
      setMode("white");
    } else {
      setMode("black");
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route
            path="/"
            element={<HomePage mode={Mode} toggleMode={toggleMode} />}
          />
          <Route
            path="/app"
            element={
              <QueryClientProvider client={queryClient}>
                <Chatarea mode={Mode} toggle={toggleMode} />
              </QueryClientProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
