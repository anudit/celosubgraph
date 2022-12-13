# Attestations Subgraph
Celo Subgraph for Attestations

Build completed: QmSqrbQPPSvBUJjxcbSyAztQCFFpZkt6fWa6D6joFNVEr9

Deployed to https://thegraph.com/explorer/subgraph/anudit/celo-subgraph

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/celo-subgraph

Example,
```graphql
{
  attestations(where: {account: "0x05b7f7c225b7caf9db746ff88ceeac409d18693c"}) {
    id
    identifier
    issuer
    account
    signer
    issuedOn
    publishedOn
    txnHash
    isRevoked
  }
}
```
