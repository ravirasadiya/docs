# VOUCH Token

<!-- 
Diagram Generator:
https://www.mermaidchart.com/play#pako:eNplkVFrwjAUhf_KJQ9DH-LefRDWdWMPbgvaloEVjE3UYEhGmzpE_O_LbWKL-NRyz3d7zzm9kMoKSaaEUlrWpams2an9FF8BND_b1k1B6iMOIrLT9q868NpBlgSuyEajkmyK7_z1AzJ7lGZTkvEYgpq-_Vy86h_QEc8nNl_CnHnmGpFiscJ921YHWPiTsvbiOmh5ilreyDqVv7ZRbpASk6CWtGd4gqStzSCxbou1upHeqzLwsMys1aPgu7uLpnDWWR9HX1w3qw7hWijubA1fvq4GmfXNewZ0Ai9C-EgwoTPM2wcHSqEkaJAbAUupNbxL2ZTECzMfu88fwMbxo0QnEcjTWwdB_1TGSQGngSgW9wQm8MQA4CBIy_uPs_T-9jaa3Poe467vty96SBKqDv8ygn1klmIZvi0luFNm3xWCLaJMrv9ocbxd -->

 ## Introduction
 
 VOUCH is the protocols governance token and gives power to the community to determine the future of the protocol.




## Tokenomics

### Supply Dynamics


### Diagram

```mermaid
---
config:
  look: classic 
  theme: dark
  layout: elk
---

flowchart TD
  
  %% Nodes
  VT(("`VOUCH Token`")) 
  DEX{"`DEX
  VOUCH/vPLS LP`"} 
  VR["`Vouch Router`"]
  UD["`UserDeposit`"]
  BnB(["`Buy & Burn`"])
  PD["`Pulsechain Deposit Contract`"]
  Pool((("`Vouch PLS Pool`")))
  Vals[("`Valdiator 
  Nodes`")] 
%%   Lock["Timelock Contract"]
%%   Prop{{"`Proposal`"}} 
%%   Vote{{"`Voting`"}}

  %% Links 
  VT -. Add LP .-> DEX
  DEX -- "Buy and Sell Fees" --> VR 
  VR -- "stake PLS" --> UD
  UD -- "Minted vPLS" --> VR
  UD -- "Pooled PLS" --> Pool -- "Stake PLS" -->PD
  VR -- "buy and burn" --> BnB
  BnB -- "Buy & Burn VOUCH" --> DEX
%%   VT --> Prop
 
 subgraph Pulsechain Validating
  direction LR
  PD <-. Validating .-> Vals
 end
  
%%  subgraph Proposals
%%   direction TB
%%   Prop-->Lock-->Vote
%%  end
  
  
%%   style DEX2 stroke:#000000,fill:#E1F0D4 
%%   style VR2 stroke:#000000,fill:#C3EFE0 
```

