# Running an Ejector Client 

The Ejector service plays an important role in PLS LSD stack. Every validator should run an ejector service to properly handle the validator exiting process, as users are free to `unstake` and `withdraw`.




# Installation

## Install Build Tools
On your Validating Node make sure you have the following tools installed.

Install `make`, `gcc` and `git`

```bash
sudo apt update
sudo apt install -y make gcc git build-essential
```

## Install Go

Install `go` by following the [official docs](https://golang.org/doc/install). Remember to set your `$PATH` environment variable, for example:

```bash
cd $HOME
wget -O go1.22.5.linux-amd64.tar.gz https://go.dev/dl/go1.22.5.linux-amd64.tar.gz
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.22.5.linux-amd64.tar.gz && rm go1.22.5.linux-amd64.tar.gz
echo 'export GOROOT=/usr/local/go' >> $HOME/.bashrc
echo 'export GOPATH=$HOME/go' >> $HOME/.bashrc
echo 'export GO111MODULE=on' >> $HOME/.bashrc
echo 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bashrc && . $HOME/.bashrc
go version
```

## Install Ejector service

```bash
git clone https://github.com/Vouchrun/pls-lsd-ejector.git
cd pls-lsd-ejector
make install
```


::: warning
This will install the pls-lsd-ejector application in the default `GOPATH` location which is `~/go/bin`.

If you wish to move the application simply copy it to the location of your choice e.g. `/blockchain/ejector`
:::



# Start Ejector service

## Config

| config | description | example value |
| --- | --- | --- |
| consensus_endpoint | Execution RPC endpoint | http://127.0.0.1:8545 |
| execution_endpoint | Consensus (Beacon chain) RPC endpoint | http://127.0.0.1:5052 or public RPC |
| keys_dir | keystore path created by https://github.com/Vouchrun/pulse-staking-deposit-cli | ./validator_keys |
| withdraw_address | Contract address of NetworkWithdraw | 0x_NETWORK_WITHDRAW_CONTRACT_ADDR |


## Start Command

```bash
eth-lsd-ejector start \
    --consensus_endpoint 'BEACON_CHAIN_RPC_ENDPOINT' \
    --execution_endpoint 'EXECUTION_RPC_ENDPOINT'  \
    --keys_dir ./validator_keys \
    --withdraw_address 0x_NETWORK_WITHDRAW_CONTRACT_ADDR`
```

`> Enter the password for your imported accounts:`

Once running you will be requried to input the password used to secure the keystores running on the validator.




## Additional Configuration and Start Options

### Running using Tmux
If you would like configure your service to start using your method of choice, i.e. `TMUX`, `Screen` etc.

```
sudo apt install tmux
tmux new-session -s ejector
```
Then Issue the above `Start Command` in the TMUX terminal

### When Using Complex or Custom keys_dir
If your environment has mulitple keys_dir locations or you have used multiple keystore passwords, it is possible to run mulitple version of the ejector client on the same Node. The ejector will also detecte keystores in subdirectories if required.