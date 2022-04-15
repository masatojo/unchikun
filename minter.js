$.getJSON("contract.json", function (result) {
  contractAddress = result.FoCNFTCert;
  abi = result.abi;
  console.log(contractAddress);
  $("#contractAddress").text(contractAddress);
});
