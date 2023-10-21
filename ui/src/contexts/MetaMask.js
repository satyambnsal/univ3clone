import { createContext, useState } from "react";

export const MetaMaskContext = createContext();

export const MetaMaskProvider = ({ children }) => {
  const [status, setStatus] = useState('not_connected');
  const [account, setAccount] = useState(null);
  const [chain, setChain] = useState(null);

  const connect = () => {
    if (typeof (window.ethereum) === 'undefined') {
      return setStatus('not_installed');
    }

    Promise.all([
      window.ethereum.request({ method: 'eth_requestAccounts' }),
      window.ethereum.request({ method: 'eth_chainId' }),
    ])
      .then(([accounts, chainId]) => {
        setAccount(accounts[0])
        setChain(chainId)
        setStatus('connected')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const metamaskContext = {
    status,
    account,
    chain,
    connect
  }

  return (<MetaMaskContext.Provider value={metamaskContext}>
    {children}
  </MetaMaskContext.Provider>)
}