module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*", // Match any network id
            from: "0x00a329c0648769A73afAc7F9381E08FB43dBEA72",
            gas: 5959115
        }
    }
};
