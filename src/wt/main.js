import { cpus } from 'os';
import { Worker } from 'worker_threads';
import getFilename from '../helpers/getFilename.js'


const performCalculations = async () => {
  const filePath = getFilename('./worker.js', import.meta.url);
  const cpu = cpus();

  const promises = await Promise.allSettled(cpu.map((item, i) => {
    return new Promise((res, rej) => {
      const worker = new Worker(filePath, { workerData: i + 10 });
      worker.on('message', res);
      worker.on('error', rej);
    });
  }));

  const result = promises.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error', data: status === 'fulfilled' ? value : null
  }));
  console.log(result);
};

await performCalculations();