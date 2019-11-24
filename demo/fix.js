const prompts = require('prompts');
const log = require('simple-node-logger').createSimpleLogger();
const nextTick = require('..');

(async () => {
  log.info('Getting user age');

  // Comment this line to see the problem
  await nextTick();

  const response = await prompts({
    type: 'number',
    name: 'value',
    message: 'How old are you?',
    validate: value => value < 18 ? `Nightclub is 18+ only` : true
  });
 
  console.log(response); // => { value: 24 }
})();
