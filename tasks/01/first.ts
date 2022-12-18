// read from input

const filename = Deno.args[0];

const data = await Deno.readTextFile(filename);
const decodedData = data.split(/\r?\n/);
const elfsTotalCalories: number[] = decodedData.reduce(
  (elfs, foodColories) => {
    if (foodColories !== "") {
      const lastIndex = elfs.length - 1;
      elfs[lastIndex] += Number(foodColories);
    } else {
      elfs.push(0);
    }
    return elfs;
  },
  [0]
);
const maxCaloriesOfElf = elfsTotalCalories
  .sort((a, b) => b - a)
  .splice(0, 3)
  .reduce((acc, c) => acc + c, 0);

console.log({ maxCaloriesOfElf, elfsTotalCalories: elfsTotalCalories[0] });
