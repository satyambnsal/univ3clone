1. UniswapV3 pool: Implements liquidity management and swapping.
2. UniswapV3 Factory: The registry contract that deploys new pools and keeps a record of all deployed pools.
3. UniswapV3Manager: a Periphery contract that makes it easier to interact with the pool contract.
4. UniswapV3Quoter: Calculate Swap prices on-chain.
5. UniswapV3NFTManager: turing liquidity positions into NFT.



$ curl -X POST -H 'Content-Type: application/json' \
  --data '{"id":1,"jsonrpc":"2.0","method":"eth_chainId"}' \
  http://127.0.0.1:8545
{"jsonrpc":"2.0","id":1,"result":"0x7a69"}
$ curl -X POST -H 'Content-Type: application/json' \
  --data '{"id":1,"jsonrpc":"2.0","method":"eth_getBalance","params":["0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266","latest"]}' \
  http://127.0.0.1:8545
{"jsonrpc":"2.0","id":1,"result":"0x21e19e0c9bab2400000"}



```
  WETH address, 0x5fbdb2315678afecb367f032d93f642f64180aa3
  USDC address, 0xe7f1725e7734ce288f8367e1bb143e90bb3f0512
  Pool address, 0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0
  Manager address, 0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9
```


Second Deployment:
```
 WETH address, 0x5fbdb2315678afecb367f032d93f642f64180aa3
  USDC address, 0xe7f1725e7734ce288f8367e1bb143e90bb3f0512
  Pool address, 0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0
  Manager address, 0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9
  Quoter address, 0xdc64a140aa3e981100a9beca4e685f962f0cf6c9
```