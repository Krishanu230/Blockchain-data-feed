1. Run:
 `npx ts-node get-feed.ts
`
## Code Structure
The code is divided into three files keeping in mind that addition of additinal feeds in future should be a an easy-to-do task:

1. config.ts: The file contains the config like interval and address of various feeds. To add a new feed we simply need to make another feed object.
2. task.ts: A task is anything that satifies a do method. A concrete implementation is the FeedTask class that calls the apis andgets the latest prices.
3. get-feed.ts: this files just puts all the tasks in list and executes them at the set intervals.

## Note
1. I got a few 'execution-reverted' errors while getting the prices. This, according to [this answer](https://stackoverflow.com/questions/66432758/execution-reverted-when-calling-a-method-of-my-contract-in-nodejs) is due to the fact that I am using infura mainnet. Because of less exposure to this currency-blockchains-area I could not get polygon mainnet to work. I tired a lot but a lot of times there were many errors I could not debug.

3. During my quick research I found that there were many plugins available like hardhat that would have made this an easy task. But I refrained from using them as I presume that the point of this excercise is to see me code a framework.

Most of my references are taken from the following sources:
4. addresses: https://docs.chain.link/docs/ethereum-addresses/
5. calls: https://docs.chain.link/docs/get-the-latest-price/
6. InfuraEndpoint: https://mainnet.infura.io/v3/5513040347184a928af9c2b2ea73bd1f
