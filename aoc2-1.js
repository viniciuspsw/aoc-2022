const input = `A Y
B X
C Z`

const rounds = input.split('\n');

const rules = {
  A: { draw: 'X', win: 'Y' },
  B: { draw: 'Y', win: 'Z' },
  C: { draw: 'Z', win: 'X' },
}

let points = 0;

for (let i = 0; i < rounds.length; i++) {
  const [opponent, me] = rounds[i].split(' ')
  if (me === 'X') points += 1;
  if (me === 'Y') points += 2;
  if (me === 'Z') points += 3;
  if (rules[opponent].win === me) {
    points += 6
    continue;
  }
  if (rules[opponent].draw === me) {
    points += 3
  }
}

console.log(points)
