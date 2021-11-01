# celosubgraph
Celo Subgraph for Verified Attestations

Queries Endpoint: https://api.thegraph.com/subgraphs/id/QmWDxPtNrngVfeMjXCCKvWVuof7DbJQv1thAbnz4MDV6Xc

Example,
```graphql
{
	attestationsCompleteds (where: {id: "0x0002b30adf86bff6536b70874091994528b066b3"}) {
        id
        count
    }
}
```
