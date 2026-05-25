import path from 'path';
import sum, { sub } from './op.mjs';

export function calculator(a, b) {
  return {
    sum: sum(a, b),
    sub: sub(a, b),
    cwd: path.resolve(process.cwd()),
  };
}
