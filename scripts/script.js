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


    //Assigns array of different responses to a variable 'looks'
    module.exports = function(robot) {
    var looks = ['like a 1','like a 5','like a 10', 'like Gods most wondrous creature','Beautiful','Scrumtrulescent: definition- so great that any other word employed would be woefully insufficient, and would serve only to limit the sheer magnitude of the greatness intended as a descriptor']

    //Responds to the question: 'How do I look today?'and invokes msg.random with the 'looks' array as a parameter. 
    robot.hear(/(How do I look today\?)/i, function(msg) {
         return msg.send(msg.random(looks));
     });

     robot.hear(/(embarass me|embarass)/i, function(msg) {
            return msg.reply("It's spelled as embarrass..");
    });

     robot.hear(/(What is my Zodiac sign\?)/i, function(msg){
             return msg.reply("What month are you born?");

             let month;
              if (month == January){
             	return msg.reply("your zodiac sign is leo");
             } else if (month == Feb) {
             	return msg.reply("yor zodiac sign is virgo");
             }
             else{
             	return msg.reply("enter a valid month");
             }
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
