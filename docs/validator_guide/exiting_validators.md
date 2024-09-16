# Exiting Validators

There are two ways in which Vouch valdiators are exited from the Pulsechain Network:

## Voluntarily Exited (Ejected) Automatically 
This is a feature of the Vouch Protocol, which monitors each of the Solo or Trusted Valdiators, and will request an Ejection of a Validator as required. This may be due to vPLS unstaking demand or to expel a misbehaving validator. Each Validaor runs an Ejector client which facilitates this process.


## Voluntarily Exited Manually

Voluntarily exiting your validator from the Pulsechain network is a one time command for your chosen Validator Client. and is exactly the same process in the Vouch Protocol as if you were running a "normal" Validator on the Pulsechain network (because you are). 

You'll follow these steps to exit your validator:
- Ensure that you have access to a fully synced beacon node.
- Issue the validator exit command to your validator client and allow the beacon node to access to your validator keys through the `--wallet-dir` flag or web3signer and the `--beacon-rpc-provider` flag (examples provided below).
- Select the account(s) that should be exited. This step can be skipped by specifying the account(s) via the --public-keys flag when issuing the validator exit command.
- Confirm your understanding of the consequences of exiting your validator by typing `Exit my validator` when prompted.

For more details please follow the official documents for your Validator client of choice:

[Prysm Exit Documentation](https://docs.prylabs.network/docs/wallet/exiting-a-validator).

[Lighthouse Exit Documentation](https://lighthouse-book.sigmaprime.io/voluntary-exit.html).


