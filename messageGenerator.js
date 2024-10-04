// Random message generator program

// Define different sets of data
const greetings = ['Hello', 'Hi', 'Greetings', 'Hey', 'Good day'];
const adjectives = ['wonderful', 'exciting', 'amazing', 'fantastic', 'incredible'];
const outcomes = ['day', 'experience', 'journey', 'adventure', 'time'];

// Function to generate a random index from an array
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

// Generate a random message
const generateMessage = () => {
  const greeting = getRandomElement(greetings);
  const adjective = getRandomElement(adjectives);
  const outcome = getRandomElement(outcomes);
  return `${greeting}! Have a ${adjective} ${outcome}!`;
};

// Output the random message
console.log(generateMessage());
