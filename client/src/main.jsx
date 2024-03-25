import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const customChain = {
  chainId: 296,
  rpc: ["https://testnet.hashio.io/api"],
  nativeCurrency: {
    decimals: 18,
    name: "Hedera",
    symbol: "HBAR",
  },
  shortName: "HBAR", 
  slug: "HBAR", 
  testnet: true,
  chain: "Hedera Testnet", 
  name: "Hedera Testnet",
};
root.render(
  <ThirdwebProvider activeChain={customChain} clientId="94ee5b973ae3c4ed3c2c43f5e77dc031" desiredChainId={ChainId.Hedera}> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)