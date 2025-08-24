


import * as fs from 'fs';

let totalRulesCount = 0;
  const csvFilePath = 'cars.csv';

async function handleCar(car: string) {
      const writeStream = fs.createWriteStream(csvFilePath);
      writeStream.write(`"${car}"\n`);
}

async function task(car: string) {
    await handleCar(car);
}

async function main() {
  // Create write stream for CSV file

  const writeStream = fs.createWriteStream(csvFilePath);

  // Write CSV header
  writeStream.write('Name\n');

  const tasks: Promise<void>[] = [];

  const cars = ["BMW", "Volvo", "Mini"];

  for (const car of cars) {
    tasks.push(task(car));
  }

  await Promise.all(tasks);

  // Close write stream
  writeStream.end();
}

main().catch(console.error);

