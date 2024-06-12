export const useMetamask = async (ethers, setSigner) => {
  try {
    if (!window.ethereum) return;

    const provider = new ethers.BrowserProvider(window.ethereum);

    setSigner(await provider.getSigner());
  } catch (error) {
    console.error(error);
  }
};
