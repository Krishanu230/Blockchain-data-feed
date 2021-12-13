import {Task, FeedTask} from './task'
import {env} from './config'

let TaskList : Task[] = []
let ethFeed = new FeedTask('ETH')
TaskList.push(ethFeed)
const cron = require('node-cron');
cron.schedule("*/5 * * * * *", function() {
  for(var i = 0;i<TaskList.length;i++) {
    TaskList[i].do(console.log)
    }
    });
