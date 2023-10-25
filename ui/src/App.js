import { useState } from "react";
import MetaMask from './components/Metamask'
import { MetaMaskProvider } from './contexts/MetaMask'
import EventsFeed from "./components/EventFeed";
import SwapForm from "./components/SwapForm";

const App = () => {
  // const [pairs, setPairs] = useState([]);

  return (
    <MetaMaskProvider>
      <div className="App flex flex-col justify-between items-center w-full h-full">
        <MetaMask />
        <SwapForm />
        <footer>
          <EventsFeed />
        </footer>
      </div>


    </MetaMaskProvider>
  )
}

export default App;