deploy:
	forge script script/DeployDevelopment.sol --broadcast --fork-url $$ETH_RPC_URL --private-key $$PRIVATE_KEY

update-abis:
	forge inspect UniswapV3Manager abi > ui/src/abi/Manager.json
	forge inspect UniswapV3Pool abi > ui/src/abi/Pool.json
	forge inspect UniswapV3Quoter abi > ui/src/abi/Quoter.json