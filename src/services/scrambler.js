const BASE_MOVES = ['F', 'R', 'U', 'B', 'L', 'D'];
const MODIFIERS = ['2', '\'', ''];
const DEFAULT_SCRAMBLE_LENGTH = 15;

const generateRandInt = (max) => (
  Math.floor(Math.random() * max) // Minimum is 0 max is not included
);

const generateScramble = (scrambleLength) => {
  const scrambleBase = Array(scrambleLength).fill(0);

  return scrambleBase.map(() => generateRandInt(BASE_MOVES.length));
};

const checkScrambleCorrect = (scramble) => (
  scramble.every((s, index) => scramble[index + 1] !== s)
);

const translateAndModScramble = (scramble) => (
  scramble.map((moveIndex) => {
    const move = BASE_MOVES[moveIndex];
    return `${move}${MODIFIERS[generateRandInt(MODIFIERS.length)]}`;
  })
);

export default {
  getScramble: (scrambleLength = DEFAULT_SCRAMBLE_LENGTH) => {
    let scramble;
    let scrambleCorrect = false; // used to start the while loop

    while (scrambleCorrect === false) {
      scramble = generateScramble(scrambleLength);
      scrambleCorrect = checkScrambleCorrect(scramble);
    }

    return translateAndModScramble(scramble);
  },
};
