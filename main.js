const connectButton = document.getElementById("connectButton");
const walletAddress = document.getElementById("walletAddress");
const walletBalance = document.getElementById("walletBalance");

connectButton.addEventListener("click", async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      // Minta izin connect ke MetaMask
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const address = accounts[0];
      walletAddress.textContent = `Connected: ${address}`;

      // ✅ Provider untuk ethers.js v5
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // ✅ Ambil saldo wallet (dalam wei)
      const balanceWei = await provider.getBalance(address);

      // ✅ Ubah dari wei ke ether
      const balanceEth = ethers.utils.formatEther(balanceWei);

      walletBalance.textContent = `Balance: ${balanceEth} ETH`;
    } catch (error) {
      console.error(error);
      walletAddress.textContent = "Connection failed!";
      walletBalance.textContent = "";
    }
  } else {
    alert("MetaMask not detected! Please install it first.");
  }
});
