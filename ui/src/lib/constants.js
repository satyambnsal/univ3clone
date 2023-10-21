import { ethers } from 'ethers';

const uint256Max = ethers.constants.MaxUint256;

const feeToSpacing = {
  3000: 60,
  500: 10
}

// forge inspect UniswapV3Pool bytecode| xargs cast keccak
const poolCodeHash = "0x3506a22505baf5e3bf86f8a831392b0cb0a44a6cb3358303c69f85320b0caa19";

export { uint256Max, feeToSpacing, poolCodeHash };