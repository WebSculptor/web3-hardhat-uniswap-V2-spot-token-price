import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

const ABI = [
  "function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)",
];

console.log("--------------------CHECKING PROVIDER");

const provider = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${process.env.MAINNET_INFURA_V3}`
);

console.log("----------------------------------------");
console.log("----------------------------------------");

console.log("--------------------NO ISSUES WITH PROVIDER");

console.log("----------------------------------------");
console.log("----------------------------------------");

console.log("--------------------AMOUNT IN");

const amountIn = ethers.parseEther("1");

console.log(`--------------------AMOUNT IN IS ${amountIn}`);

console.log("----------------------------------------");
console.log("----------------------------------------");

const V2_INFO_UNISWZP_ETHER_ADDRESS =
  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const V2_INFO_UNISWZP_USDC_ADDRESS =
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

console.log("--------------------SETTING THE PATHS");

const path = [V2_INFO_UNISWZP_ETHER_ADDRESS, V2_INFO_UNISWZP_USDC_ADDRESS];

console.log("--------------------SUCCESSFULLY SET PATH");

console.log("----------------------------------------");
console.log("----------------------------------------");

console.log("--------------------INITIALIZING CONTRACT");

const router = new ethers.Contract(ADDRESS, ABI, provider);

console.log("--------------------CONTRACT INITIALIZED SUCCESSFULLY");

console.log("----------------------------------------");
console.log("----------------------------------------");

const main = async () => {
  console.log("--------------------CALLING THE GET_AMOUNTS_OUT FUNCTION");

  const amounts = await router.getAmountsOut(amountIn, path);

  console.log("--------------------FUNCTION CALLED SUCCESSFULLY");

  console.log("----------------------------------------");
  console.log("----------------------------------------");

  console.log("--------------------FORMATTING THE PRICE");

  const price = ethers.formatUnits(amounts[1].toString(), 6);

  console.log("--------------------PRICE FORMATTED SUCCESSFULLY");

  console.log("----------------------------------------");
  console.log("----------------------------------------");

  console.log(`--------------------PRICE: ${price} ✅`);
};

main().catch((err) => {
  console.log(err);
});
