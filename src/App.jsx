import './App.css'
import Chatarea from './pages/Chatarea'
import { useState } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query';
import HomePage from './pages/HomePage';

const queryClient = new QueryClient ()

function App() {
  // Two states : black and white
  const [Mode, setMode] = useState ("black");
  const toggleMode = () => {
    if(Mode === "black"){
      setMode("white")
    }else{
      setMode("black")
    }
  }
  return (
    <div className="App">
      <HomePage mode={Mode} toggleMode={toggleMode}/>
      {/* <QueryClientProvider client={queryClient}>
        <Chatarea mode={Mode} toggle={toggleMode}/>
      </QueryClientProvider> */}
    </div>
  )
}

export default App
