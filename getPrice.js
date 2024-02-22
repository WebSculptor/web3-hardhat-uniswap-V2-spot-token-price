import { ethers } from "ethers";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Address of the Uniswap v2 router contract
const ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

// ABI (Application Binary Interface) of the `getAmountsOut` function
const ABI = [
  "function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)",
];

console.log("--------------------CHECKING PROVIDER");

// Initialize a new provider using Infura
const provider = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${process.env.MAINNET_INFURA_V3}`
);

console.log("----------------------------------------");
console.log("----------------------------------------");

console.log("--------------------NO ISSUES WITH PROVIDER");

console.log("----------------------------------------");
console.log("----------------------------------------");

console.log("--------------------AMOUNT IN");

// Parse 1 Ether as the amount to be converted
const amountIn = ethers.parseEther("1");

console.log(`--------------------AMOUNT IN IS ${amountIn}`);

console.log("----------------------------------------");
console.log("----------------------------------------");

const V2_INFO_UNISWZP_ETHER_ADDRESS =
  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const V2_INFO_UNISWZP_USDC_ADDRESS =
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

console.log("--------------------SETTING THE PATHS");

// Set the path of the tokens to be converted (in this case, Ether to USDC)
const path = [V2_INFO_UNISWZP_ETHER_ADDRESS, V2_INFO_UNISWZP_USDC_ADDRESS];

console.log("--------------------SUCCESSFULLY SET PATH");

console.log("----------------------------------------");
console.log("----------------------------------------");

console.log("--------------------INITIALIZING CONTRACT");

// Initialize the Uniswap v2 router contract using the provider and ABI
const router = new ethers.Contract(ADDRESS, ABI, provider);

console.log("--------------------CONTRACT INITIALIZED SUCCESSFULLY");

console.log("----------------------------------------");
console.log("----------------------------------------");

const main = async () => {
  console.log("--------------------CALLING THE GET_AMOUNTS_OUT FUNCTION");

  // Call the `getAmountsOut` function to get the amount of USDC that can be obtained for 1 Ether
  const amounts = await router.getAmountsOut(amountIn, path);

  console.log("--------------------FUNCTION CALLED SUCCESSFULLY");

  console.log("--------------------FORMATTING THE PRICE");

  if (amounts.length >= 2) {
    // Format the USDC amount as a decimal number with 6 decimal places
    const price = ethers.formatUnits(amounts[1], 6);
    console.log(`--------------------PRICE: ${price} ✅`);
  } else {
    console.log("Error: amounts array has less than 2 elements");
  }

  console.log("----------------------------------------");
  console.log("----------------------------------------");
};

// Call the `main` function and handle any errors that may occur
main().catch((error) => {
  console.error("An error occurred in the main function:", error);
});
