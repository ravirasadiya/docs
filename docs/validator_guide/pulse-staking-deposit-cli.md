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

### Before you Start

Prior to generating your keystores and the corresponding `deposit_data` and `staking_data` files, you need to take note of two things:
1. The Withdrawal Address must be set to the Vouch `Network_Withdraw` contract address when generating keys.
2. Your Nodes `suggested-fee-recipient` must be set to the Vouch `Fee_Pool` contract address (see below section).


>[!CAUTION]
> You MUST set your WITHDRAWAL address correctly to the `Network_Withdraw` contract address when generating your Keys.

:::tabs

== Mainnet Withdrawal Address
```
0xNETWORK_WITHDRAW
```

== Testnet Withdrawal Address
```
0x555E33C8782A0CeF14d2e9064598CE991f58Bc74
```

:::

### Running the Staking-cli Tool.

[Extensive documention](https://github.com/Vouchrun/pulse-staking-deposit-cli) on the staking-deposit-cli tool can be found in the Github repository ReadMe file. This will provide all the configurable settings and ways you can use the tool to generate keystores and deposit files using either new or existing mnemonic seed words. Please use that documentation and instructions for assistance with running the staking-cli-tool

Basic Example Commands for New Mnemonic:

:::tabs

== Mainnet
```sh
./deposit new-mnemonic --num_validators=10 --mnemonic_language=english --chain=pulsechain
```

== Testnet
```sh
./deposit new-mnemonic --num_validators=10 --mnemonic_language=english --chain=pulsechain-testnet-v4
```
:::

This command will generate a set of files (in your chosen output directory) which consists of 3 items:
1. `deposit_data-*.json` file, used for depositing inital 12Mil PLS validator stake (solo validators)
2. `staking_data-*.json` file, used to send remaining 20Mil PLS to Pulsechain staking contract.
3. One or more (10 in this example) Keystore files which need to be imported on your valdiator.


## Setting your Suggested Fee Recipient

When configuring your Validator clients it is important to configure your fee recipient address to the Vouch `FeePool` contract address, otherwise you will be slashed by the Vouch Protocol. 

>[!CAUTION]
> You MUST set your `suggested-fee-recipient` correctly to the `FeePool` contract when running your Validator Client.

FeePool Contract Address:

:::tabs

== Mainnet FeePool Address

```
0xFEE_POOL
```

== Testnet FeePool Address
```
0x4C14073Fa77e3028cDdC60bC593A8381119e9921
```
:::


It may take hours or days for your validator to become fully activated. In the meantime, leave your execution client, beacon node, and validator client terminal windows open and running; once your validator is activated, it will automatically begin proposing and validating blocks.

To check on the status of your validator, we recommend checking out the popular block explorers as you normally would when running a Validator on Pulsechain.