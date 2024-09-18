# Ejector Client 

The Ejector service plays an important role in PLS LSD stack. As users are free to `unstake` vPLS and `withdraw` PLS at anytime, the system needs to dynamically responed to these demands. Every validator should run an ejector service to properly handle the validator exiting process to facilitate the user requirements. 



## Installation

### Install Build Tools
On your Validating Node make sure you have the following tools installed, you will need these to continue.

Install `make`, `gcc` and `git`

```bash
sudo apt update
sudo apt install -y make gcc git build-essential
```

### Install Go

Here we will install Go and set the environment variables:
- Existing Go version binary will be removed
- Go will be installed in /usr/local/go
- the downloaded zipped file will be deleted
- File Path locations will be added to .bashrc

```bash
cd $HOME
wget -O go1.21.3.linux-amd64.tar.gz https://go.dev/dl/go1.21.3.linux-amd64.tar.gz
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.21.3.linux-amd64.tar.gz && rm go1.21.3.linux-amd64.tar.gz
echo 'export GOROOT=/usr/local/go' >> $HOME/.bashrc
echo 'export GOPATH=$HOME/go' >> $HOME/.bashrc
echo 'export GO111MODULE=on' >> $HOME/.bashrc
echo 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bashrc && . $HOME/.bashrc
go version
```

:::tip If you have issues with the above you can always install `go` by following the [official docs](https://golang.org/doc/install). Remember to set your `$PATH` environment variable, see above example.
:::


### Install Ejector Client
Below we will clone the requried Ejector repo from the Vouch github repository and install it.
- repo will be cloned into ~/pls-lsd-ejector
- install script will download required components and create an Ejector binary file called `pls-lsd-ejector`

```bash
cd $HOME
git clone https://github.com/Vouchrun/pls-lsd-ejector.git
cd pls-lsd-ejector
make install
```

::: warning This will install the `pls-lsd-ejector` application in the default `GOPATH` location which is `~/go/bin`. If you wish to change the applications location, simply move it to the location of your choice e.g. `/blockchain/ejector`
:::



## Running the Ejector Client

There are some configuration items which need to be set to run the Ejector Client. We will pass these items to the client at startup.

### Configuration Items

:bulb: The below exmaples are using Geth and Lighthouse, you will need to make sure the ports used match your client configuration. 

| config | description | example value |
| --- | --- | --- |
| execution_endpoint | Execution RPC endpoint | http://127.0.0.1:8545 |
| consensus_endpoint | Consensus (Beacon chain) RPC endpoint | http://127.0.0.1:5052 or public RPC |
| keys_dir | keystore path created by [pulse-staking-deposit-cli](https://github.com/Vouchrun/pulse-staking-deposit-cli) | ./validator_keys |
| withdraw_address | Contract address of NetworkWithdraw | `0xNETWORK_WITHDRAW` |

:::tabs

== Mainnet
Withdraw Address Setting: ```0xNETWORK_WITHDRAW```

Prority Fee Address Setting: ```0xFEE_POOL```

== Testnet
Withdraw Address Setting: ```0x555E33C8782A0CeF14d2e9064598CE991f58Bc74```

Prority Fee Address Setting: ```0x4C14073Fa77e3028cDdC60bC593A8381119e9921```
:::

### Start Command


:warning: You will need your Keystore password (the password you used when creating your keys), as we will be passing this to the client at startup when prompted.  


:::tabs

== Format
```bash
pls-lsd-ejector start \
    --consensus_endpoint 'BEACON_CHAIN_RPC_ENDPOINT' \
    --execution_endpoint 'EXECUTION_RPC_ENDPOINT'  \
    --keys_dir ./validator_keys \
    --withdraw_address '0x_NETWORK_WITHDRAW_CONTRACT_ADDR'
```


== Mainnet Example
```bash
# This assumes you have your keys in the /blockchain/validator_keys dir
# Change to suit your setup.

pls-lsd-ejector start \
    --consensus_endpoint http://127.0.0.1:5052 \
    --execution_endpoint https://rpc-pulsechain.g4mm4.io \
    --keys_dir /blockchain/validator_keys \
    --withdraw_address '0x_NETWORK_WITHDRAW_CONTRACT_ADDR'
```

== Testnet Example
```bash
# This assumes you have your keys in the /blockchain/validator_keys dir
# Change to suit your setup.

pls-lsd-ejector start \
    --consensus_endpoint http://127.0.0.1:5052 \
    --execution_endpoint https://rpc-testnet-pulsechain.g4mm4.io \
    --keys_dir /blockchain/validator_keys \
    --withdraw_address 0x555E33C8782A0CeF14d2e9064598CE991f58Bc74
```
:::

When you run the Ejector client using the above command, you will be requried to input the password used to secure the keystores running on the validator:

`> Enter the password for your imported accounts:`

That is it, just make sure the Ejector client runs at all times!



## Additional Configuration and Start Options

### Running using Tmux
It is preferred to run your Ejector client using something like `systemd` `TMUX` or `Screen` which will give you more control and flexibilty when running the client. You can use `TMUX` by doing the following: 

:bulb: 
If you are unfamiliar with Running `TMUX` you should learn how to navigate it first before running the below commands.
This [TMUX guide](https://tmuxcheatsheet.com/) might help.

```
sudo apt install tmux
tmux new-session -s ejector
```
Then Issue the above `Start Command` in the TMUX terminal using the instructions in the preceeding section.

### When Using Complex or Custom keys_dir Paths
If your environment has mulitple keys_dir locations or you have used multiple keystore passwords, it is possible to run mulitple version of the ejector client on the same Node. The ejector will also detect keystores in subdirectories if required.

In this case `TMUX` will be a big help for starting and monitoring your Ejector client.