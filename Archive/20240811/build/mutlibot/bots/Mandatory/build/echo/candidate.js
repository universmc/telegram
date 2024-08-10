const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

// Configurer Web3
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// Charger le contrat SkillToken
const skillTokenPath = path.resolve(__dirname, 'build', 'SkillToken.json');
const { abi, networks } = JSON.parse(fs.readFileSync(skillTokenPath, 'utf8'));
const networkId = Object.keys(networks)[0];
const skillToken = new web3.eth.Contract(abi, networks[networkId].address);

async function setIdentity(account, identity) {
    const { name, idCard, payload, campaign, assigned, signature, signatures, libertyOfEnterprise, remuneration } = identity;
    await skillToken.methods.setIdentity(account, name, idCard, payload, campaign, assigned, signature, signatures, libertyOfEnterprise, remuneration).send({ from: account });
}

async function getIdentity(account) {
    const identity = await skillToken.methods.getIdentity(account).call();
    console.log(identity);
}

// Exemple d'utilisation
const account = '0xYourAccountAddress';
const Mandatory_Bot = {
    name: 'Mand_fine',
    idCard: 'ID123456',
    header:'knowledde 1-0-1',
    payload: 'Payload jwt.io',
    deFi: 'model: economie circulaire',
    campaign: 'Campaign 1',
    assigned: 'Assigned_CV',
    signature: 'Signature_TVA',
    signatures: 'Signatures_PBV',
    libertyOfEnterprise: 'Freedom to Enterprise',
    remuneration: 'Remuneration based on Skills'
};

setIdentity(account, identity)
    .then(() => getIdentity(account))
    .catch(console.error);
