import {env, feed} from './config'

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
  constructor (f: feed){
      this.type = f.TYPE
      this.web3addr = f.WEB_ADDR
      this.ABIparams = f.ABI_PARAMS
      this.addr= f.ADDR
  }
}
