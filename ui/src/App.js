import { useState } from "react";
import MetaMask from './components/Metamask'
import { MetaMaskProvider } from './contexts/MetaMask'
import EventsFeed from "./components/EventFeed";
import SwapForm from "./components/SwapForm";

const config = {
  token0Address: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
  token1Address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
  poolAddress: '0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0',
  managerAddress: '0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9',
  ABIs: {
    'ERC20': require('./abi/ERC20.json'),
    'Pool': require('./abi/Pool.json'),
    'Manager': require('./abi/Manager.json')
  }
};

const App = () => {
  // const [pairs, setPairs] = useState([]);

  return (
    <MetaMaskProvider>
      <div className="App flex flex-col justify-between items-center w-full h-full">
        <MetaMask />
        <SwapForm config={config} />
        <footer>
          <EventsFeed config={config} />
        </footer>
      </div>

    </MetaMaskProvider>
  )
}

export default App;