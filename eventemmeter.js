const EventEmitter=require("events");
const myEmitter= new EventEmitter();
//on method used for event listener
myEmitter.on('greet',(name)=>{console.log(`hello, ${name}! welcome to node.js`);});
myEmitter.on('exit',()=>{console.log("application closed");});
//emit() is used for trigger the event.
myEmitter.emit("greet","2nd year");
myEmitter.emit("exit");