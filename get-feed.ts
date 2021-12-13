import {Task, FeedTask} from './task'
import {env} from './config'

let TaskList : Task[] = []

for(var i = 0;i<env.FEEDS.length;i++) {
  let feed = new FeedTask(env.FEEDS[i])
  TaskList.push(feed)
}
const cron = require('node-cron');
cron.schedule("*/5 * * * * *", function() {
  for(var i = 0;i<TaskList.length;i++) {
    TaskList[i].do(console.log)
    }
});
