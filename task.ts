import {env} from './config'

const Web3 = require("web3") // for nodejs only

export interface Task {
    do(callback: (input: any) => any): void;
}

export class FeedTask{
  private type: string;
  private web3addr: string;
  private ABIparams;
  private addr: string;
  public do(callback: (roundData: any) => any): void {
    const web3 = new Web3(this.web3addr)
    const priceFeed = new web3.eth.Contract(this.ABIparams, this.addr)
    priceFeed.methods.latestRoundData().call()
        .then((roundData:any) => {
            callback(roundData)
        })
  }
  constructor (type: string){
    if (type == env.ETH.TAG){
      this.type = env.ETH.TAG
      this.web3addr = env.ETH.WEB_ADDR
      this.ABIparams = env.ETH.ABI_PARAMS
      this.addr= env.ETH.ADDR
    }else{
      throw new Error('Unknown type of feed')
    }
  }
}
