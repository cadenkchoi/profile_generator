const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? (Can also be your nickname!) ", answer => {
  const answers = {};
  answers['1'] = answer;
  rl.question("What's your favcurite hobby? (In a single word please!) " , answer => {
    answers['2'] = answer;
      rl.question("What's your favourite food to eat for dinner? " , answer => {
        answers['3'] = answer;
          rl.question("What's your favourite animal? " , answer => {
            answers['4'] = answer;
            console.log(`${answers['1']}'s favourite hobby is ${answers['2']}. ${answers['1']} likes to eat ${answers['3']} for dinner, and their favourite animal is a ${answers['4']}. \nNice! Thanks for responding ${answers['1']}!`);
            rl.close();
          });
      });
  });
});
