// Description:
//
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//

/*module.exports = function(robot) {
  //  YOUR CODE HERE
  //  Example
  robot.hear(/javascript/i, function(msg) {
      return msg.send("I love writing code!");

    });

  robot.respond(/What's your favorite food?/, function(res) {
  return res.send("I'm a robot--I don't eat food!");
  });

  robot.hear(/Hello!/, function(res) {
  return res.send("Hi there!");
});
 //   robot.respond(/(hi|hello| Hii) renu/i, function(msg) {
 //  return msg.send("Hey There!");
  // });
}
*/
module.exports = function(bot) {


    //Catches  'curse' words and responds with an attempt at being amusing
    bot.hear(/(damn.*)|(shit.*)|(hell)/i, function (msg) {
        if(msg.match[1]){
          return msg.send("It's getting real PG in here");
        }
        else if(msg.match[2]){
            return msg.send("Excuse your language!");
        }
        else if(msg.match[3]){
            return msg.send("Oh heck no");
        }
    });

    //Catches a common misspelling of embarrass and 'embarrasses' people by calling them out
    bot.hear(/(embarass me|embarass)/i, function(msg) {
            return msg.reply("*embarrass..idiot")
    });

    //Assigns array of different responses to a variable 'looks'
    var looks = ['like a 1','like a 5','like a 10', 'like Gods most wondrous creature','fug','Scrumtrulescent: definition- so great that any other word employed would be woefully insufficient, and would serve only to limit the sheer magnitude of the greatness intended as a descriptor']

    //Responds to the question: 'How do I look today?'and invokes msg.random with the 'looks' array as a parameter. 
    bot.respond(/(How do I look today\?)/i, function(msg) {
         return msg.send(msg.random(looks));
     });
}


/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/

/* Variables for random example */

// const squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

// module.exports = function(robot) {
//   /* Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" */
//   return robot.respond(/hi|hello/i, function(msg) {
//     return msg.send("Howdy!");
//   });

//   /* Random Example
//   If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers */
//   return robot.hear(/ship it/i, function(msg) {
//     return msg.send(msg.random(squirrels));
//   });
// };
