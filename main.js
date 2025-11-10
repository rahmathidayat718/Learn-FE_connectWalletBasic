// Ambil elemen dari HTML
const connectButton = document.getElementById("connectButton");
const walletAddress = document.getElementById("walletAddress");

// Saat tombol diklik
connectButton.addEventListener("click", async () => {
  // Cek apakah user punya MetaMask
    if (typeof window.ethereum !== "undefined") {
    try {
      // Minta izin koneksi ke wallet
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const address = accounts[0];

      // Tampilkan alamat wallet ke layar
        walletAddress.textContent = `Connected: ${address}`;
    } catch (error) {
        console.error(error);
        walletAddress.textContent = "Connection failed!";
    }
    } else {
    alert("MetaMask not detected! Please install it first.");
    }
});
