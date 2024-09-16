### Exit

Assuming you are using Prysm, voluntarily exiting your validator from the Ethereum network is a one time command using the prysmctl tool. Note that this operation was previously facilitated by a command exposed by the Prysm validator client, and can still be accessed that way. At a high level, you'll follow these steps to exit your validator:
- Ensure that you have access to a fully synced beacon node.
- Issue the validator exit command to your validator and allow the beacon node to access to your validator keys through the `--wallet-dir` flag or web3signer and the `--beacon-rpc-provider` flag (examples provided below).
- Select the account(s) that should be exited. This step can be skipped by specifying the account(s) via the --public-keys flag when issuing the validator exit command.
- Confirm your understanding of the consequences of exiting your validator by typing Exit my validator when prompted.

More details please follow the official documents for your client of choice:

[Prysm Exit Documentation](https://docs.prylabs.network/docs/wallet/exiting-a-validator).

[Lighthouse Exit Documentation](https://lighthouse-book.sigmaprime.io/voluntary-exit.html).


