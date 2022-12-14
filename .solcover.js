module.exports = {
  skipFiles: ["test/TestAvatar.sol", "test/TestFactory.sol", "test/TestMultisendEncoder.sol"],
  mocha: {
    grep: "@skip-on-coverage", // Find everything with this tag
    invert: true, // Run the grep's inverse set.
  },
};
