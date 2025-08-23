


import * as fs from 'fs';

let totalRulesCount = 0;

async function handleCar(car: string, writeStream: fs.WriteStream) {
      writeStream.write(`"Write something`);
}

async function task(car: string, writeStream: fs.WriteStream) {
    await handleCar(car, writeStream);
}

async function main() {
  // Create write stream for CSV file
  const csvFilePath = 'cars.csv';
  const writeStream = fs.createWriteStream(csvFilePath);

  // Write CSV header
  writeStream.write('Name\n');

  const tasks: Promise<void>[] = [];

  const cars = ["BMW", "Volvo", "Mini"];

  for (const car of cars) {
    tasks.push(task(car, writeStream));
  }

  await Promise.all(tasks);

  // Close write stream
  writeStream.end();
}

main().catch(console.error);

