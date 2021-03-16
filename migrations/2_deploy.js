const Railways = artifacts.require("Railways");

module.exports = function(deployer) {
    deployer.deploy(Railways);
};