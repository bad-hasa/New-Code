'use strict';

function madLibs() {
  const madLib1 = 'The [ADJECTIVE] brown [ANIMAL] [PAST_VERB] [PREPOSITION] the [ADJECTIVE] [PLURAL_ANIMAL].';

  // // fill out these words to complete the first mad lib!
  // const adjective1 = 'purple';
  // const animal1 = 'cat';
  // const pastVerb1 = 'ran';
  // const preposition1 = 'at';
  // const pluralAnimal1 = 'dogs';

  // const listOfMadLibsVariables1 = [adjective1, animal1, pastVerb1, preposition1, pluralAnimal1];

  // displayMadLib('#mad-lib-1', completeMadLib(madLib1, listOfMadLibsVariables1));





  // now, create your own mad lib
  const madLib2 = 'The mangy, [ADJECTIVE] [PLURAL_ANIMAL] [ANIMAL] [ADVERB] [PAST_VERB] [PREPOSITION] the grain-free, organic dog food.'
  // 'The [ADJECTIVE] brown [ANIMAL] [PAST_VERB] [PREPOSITION] the [ADJECTIVE] [PLURAL_ANIMAL].';
// getTextFromInput('')
//#input
  const adjective2 = getTextFromInput('#input1');
  const animal2 = getTextFromInput('#input2');
  const adverb2 = getTextFromInput('#input3');
  const pastVerb2 = getTextFromInput('#input4');
  const preposition2 = getTextFromInput('#input5');
  const pluralAnimal2 = getTextFromInput('#input6');

  const listOfMadLibsVariables2 = [adjective2, animal2, pastVerb2, preposition2, pluralAnimal2, adverb2];

  displayMadLib('#mad-lib-2', completeMadLib(madLib2, listOfMadLibsVariables2));
}






// ignore everything below this line

function completeMadLib(madLib, words) {
  const fillInRegex = /\[[A-Za-z0-9_\-]+\]/;
  return madLib.split(' ').map((word, index) => {
    if (fillInRegex.test(word)) {
      return word.replace(fillInRegex, words.shift());
    } else {
      return word;
    }
  }).join(' ');
}

function displayMadLib(cssSelector, string) {
  document.querySelector(cssSelector).textContent = string;
}

function getTextFromInput(cssSelector) {
  const element = document.querySelector(cssSelector);
  if (element) {
    return element.value;
  }
  return 'PLACEHOLDER';
}

madLibs();


