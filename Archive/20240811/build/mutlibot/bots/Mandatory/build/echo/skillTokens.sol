// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract SkillToken is ERC20, Ownable {
    using EnumerableSet for EnumerableSet.AddressSet;

    struct Identity {
        string name;
        string idCard;
        string payload;
        string campaign;
        string assigned;
        string signature;
        string signatures;
        string libertyOfEnterprise;
        string remuneration;
    }

    mapping(address => Identity) private identities;
    EnumerableSet.AddressSet private holders;

    event IdentityUpdated(address indexed holder, string name, string idCard, string payload, string campaign, string assigned, string signature, string signatures, string libertyOfEnterprise, string remuneration);

    constructor(uint256 initialSupply) ERC20("SkillToken", "SKT") {
        _mint(msg.sender, initialSupply);
    }

    function setIdentity(
        address holder,
        string memory name,
        string memory idCard,
        string memory payload,
        string memory campaign,
        string memory assigned,
        string memory signature,
        string memory signatures,
        string memory libertyOfEnterprise,
        string memory remuneration
    ) public onlyOwner {
        identities[holder] = Identity(name, idCard, payload, campaign, assigned, signature, signatures, libertyOfEnterprise, remuneration);
        holders.add(holder);
        emit IdentityUpdated(holder, name, idCard, payload, campaign, assigned, signature, signatures, libertyOfEnterprise, remuneration);
    }

    function getIdentity(address holder) public view returns (string memory, string memory, string memory, string memory, string memory, string memory, string memory, string memory, string memory) {
        Identity memory identity = identities[holder];
        return (identity.name, identity.idCard, identity.payload, identity.campaign, identity.assigned, identity.signature, identity.signatures, identity.libertyOfEnterprise, identity.remuneration);
    }

    function getAllHolders() public view returns (address[] memory) {
        return holders.values();
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        super.transfer(recipient, amount);
        _updateHolders(msg.sender);
        _updateHolders(recipient);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        super.transferFrom(sender, recipient, amount);
        _updateHolders(sender);
        _updateHolders(recipient);
        return true;
    }

    function _updateHolders(address holder) internal {
        if (balanceOf(holder) == 0) {
            holders.remove(holder);
        } else {
            holders.add(holder);
        }
    }
}
