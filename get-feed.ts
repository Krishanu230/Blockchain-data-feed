import {Task, FeedTask} from './task'
import {env} from './config'

const cron = require('node-cron');
let TaskList : Task[] = []

function PrintHelper(info: string, res: any): any {
  console.log(info)
  console.log(res)
}

for(var i = 0;i<env.FEEDS.length;i++) {
  let feed = new FeedTask(env.FEEDS[i])
  TaskList.push(feed)
}

console.log("----Timer Interval: "+env.INTERVAL_SECS.toString()+" | Total Feeds: "+env.FEEDS.length.toString()+"----")

cron.schedule("*/"+env.INTERVAL_SECS.toString()+" * * * * *", function() {
  for(var i = 0;i<TaskList.length;i++) {
    TaskList[i].do(PrintHelper)
    }
  console.log("----****---")
});
