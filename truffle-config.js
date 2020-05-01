
    
    module.exports = {
    

        compilers: {
            solc: {
                version: "0.6.6",   // Fetch exact version from solc-bin (default: truffle's version)
                    docker: false,        // Use "0.5.1" you've installed locally with docker (default: false)
                    settings: {
                        optimizer: {
                            enabled: true, // Default: false
                             runs: 999     // Default: 200
                        },
                    evmVersion: "istanbul"  // Default: "byzantium"
                }
            },
        }
    }
    