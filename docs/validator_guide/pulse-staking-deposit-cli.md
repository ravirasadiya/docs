# Pulse-staking-deposit-cli Guide

## Using deposit-cli to generate key files

Before you can participate as a Solo or Trusted Validator on the Vouch protocol, you need to generate the requried keystores and deposit files, much like you would if you were operating a "normal" validator on the Pulsechain network. 

`pulse-staking-deposit-cli` is a tool for creating EIP-2335 format BLS12-381 keystores and a corresponding `deposit_data-*.json` file and `stake_data-*.json` file for use with the Vouch Protocol. This tool creates deposit files that are compatable with the Ethereum and Pulsechain Launchpads, however the output files are designed to be used exclusivly with the Vouch Protocol. 

:warning: Do not use the generated deposit file with the offical Pulschain Launchpad site.


## Installing pulse-staking-deposit-cli

:::warning 
Please generate your keystores on your own safe, completely offline device, and backup your mnemonic, keystores, and password securely.
:::

Github Repo：[pulse-staking-deposit-cli](https://github.com/Vouchrun/pulse-staking-deposit-cli)

:bulb: Advanced instructions can be found in the [ReadMe](https://github.com/Vouchrun/pulse-staking-deposit-cli/blob/main/README.md) file on the Githup Repo.

### Step 1. Check your Python version
Ensure you are using Python version >= Python3.8:

```sh
python3 -V
```

If required update your python version.


### Step 2. Clone the repo to a local directory

```sh
git clone https://github.com/Vouchrun/pulse-staking-deposit-cli
cd pulse-staking-deposit-cli
```

### Step 3. Installation

Install the dependencies:

```sh
pip3 install -r requirements.txt
python3 setup.py install
```

Or use the helper script:

```sh
./deposit.sh install
```

## Generate Keystore, Deposit and Staking Files




>[!CAUTION]
> You MUST set your WITHDRAWAL address correctly to the `Network_Withdraw` contract when generating your Keys.

Withdrawal Address set to the Vouch `Network_Withdraw` contract address

Node Prority Fee Address set to the Vouch `Fee_Pool` contract address

:::tabs

== Mainnet
Withdraw Address Setting: ```0xNETWORK_WITHDRAW```

Prority Fee Address Setting: ```0xFEE_POOL```

== Testnet
Withdraw Address Setting: ```0x555E33C8782A0CeF14d2e9064598CE991f58Bc74```

Prority Fee Address Setting: ```0x4C14073Fa77e3028cDdC60bC593A8381119e9921```
:::

## Running the Staking-cli Tool.

Extensive documention on using the staking-deposit-cli tool can be found in the [Github repository ReadMe file](https://github.com/Vouchrun/pulse-staking-deposit-cli).

Example Commands



:::tabs

== Mainnet
```
./deposit new-mnemonic --num_validators=10 --mnemonic_language=english --chain=pulsechain
```

== Testnet
```
./deposit new-mnemonic --num_validators=10 --mnemonic_language=english --chain=pulsechain-testnet-v4
```
:::






## WIP

Run a Node on ETH2 Mainnet
Run a node on ETH2 mainnet by Prysm
If you are a solo validator, please configure your fee recipient as 0x6fb2aa2443564d9430b9483b1a5eea13a522df45.

If you are a trust validator, please configure your fee recipient as 0xdc5a28885a1800b1435982954ee9b51d2a8d3bf0.

Otherwise you will be slashed by StaFi protocol. More details about the configuration, you can check here.

It may take hours or days for your validator to become fully activated. To learn more about the validator activation process, see Deposit Process. See Check node and validator status for detailed status monitoring guidance. In the meantime, leave your execution client, beacon node, and validator client terminal windows open and running; once your validator is activated, it will automatically begin proposing and validating blocks.

To check on the status of your validator, we recommend checking out the popular block explorers: beaconcha.in by Bitfly and beaconscan.com by the Etherscan team.