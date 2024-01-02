import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: "ccf84b13-f223-45d8-9e6c-f8047e6b63d4",
      walletConnectors: [EthereumWalletConnectors],
    }}
  >
    <DynamicWidget />
  </DynamicContextProvider>
);

export default App;
