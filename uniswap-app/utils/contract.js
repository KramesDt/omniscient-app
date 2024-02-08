import { ethers } from "ethers";
import OmniscientABI from "../utils/Omniscient.json";
import OmniSwapABI from "../utils/OmniSwap.json";

// const address = "0x6D2452E0F1A5a7C90611e1F4Dfa4017C43C5b28C";

export const tokenContract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethers.Contract(address, OmniscientABI.abi, signer);

    return contractReader;
  }
};

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethers.Contract(
      "0x6D2452E0F1A5a7C90611e1F4Dfa4017C43C5b28C",
      OmniSwapABI.abi,
      signer
    );


    return contractReader;
  }
};
