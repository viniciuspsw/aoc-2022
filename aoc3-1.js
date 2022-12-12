const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`

const rucksacks = input.split('\n')
let prioritySum = 0

for (const rucksack of rucksacks) {
  const compartmentSize = rucksack.length / 2
  const first = rucksack.slice(0, compartmentSize)
  const second = rucksack.slice(compartmentSize)

  const occurrences = []
  for (let i = 0; i < compartmentSize; i++) {
    for (let j = 0; j < compartmentSize; j++) {
      if (first[i] === second[j]) {
        occurrences.push(first[i])
      }
    }
  }

  const uniqueOccurrences = [...new Set(occurrences)]

  for (const occurrence of uniqueOccurrences) {
    const charcode = occurrence.charCodeAt(0)
    const isUppercase = charcode < 97;
    prioritySum += isUppercase ? charcode - 38 : charcode - 96;
  }
}

console.log(prioritySum)
