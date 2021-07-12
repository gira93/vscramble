const BASE_MOVES = ['F', 'R', 'U', 'B', 'L', 'D'];
const MODIFIERS = ['2', '\'', ''];
const DEFAULT_SCRAMBLE_LENGTH = 15;

const generateRandInt = (max) => (
  Math.floor(Math.random() * max) // Minimum is 0 max is not included
);

const pickRand = (iterable) => (
  iterable[generateRandInt(iterable.length)]
);

const generateScramble = (scrambleLength) => {
  const scramble = Array(scrambleLength).fill(0);
  let exclusionList = [];

  return scramble.map(() => {
    const possibleMoves = BASE_MOVES.filter((m) => !exclusionList.includes(m));
    const scrambleMove = pickRand(possibleMoves);

    if (exclusionList.length === 2) {
      exclusionList = exclusionList.slice(1);
    }
    exclusionList.push(scrambleMove);
    return scrambleMove;
  });
};

const addModsToScramble = (scramble) => (
  scramble.map((move) => (
    `${move}${pickRand(MODIFIERS)}`
  ))
);

export default {
  getScramble: (scrambleLength = DEFAULT_SCRAMBLE_LENGTH) => {
    const scramble = generateScramble(scrambleLength);
    return addModsToScramble(scramble);
  },
};
