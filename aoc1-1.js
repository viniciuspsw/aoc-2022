const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const list = input.split("\n");
const chunks = [];

let chunkIndex = 0;

for (let i = 0; i < list.length; i++) {
  if (list[i] === "") {
    chunkIndex++;
    continue;
  }
  if (!chunks[chunkIndex]) {
    chunks[chunkIndex] = 0;
  }
  chunks[chunkIndex] += parseInt(list[i], 10);
}

const max = Math.max(...chunks);

console.log(max);
