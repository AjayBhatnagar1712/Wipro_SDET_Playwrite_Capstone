// @ts-check
import { test, expect } from '@playwright/test';
import path from 'path';
import { calculator } from './cal.mjs';

test('ES module import export practice used in test', async () => {
  const result = calculator(5, 2);

  console.log(path.resolve(process.cwd()));

  expect(result.sum).toBe(7);
  expect(result.sub).toBe(3);
  expect(result.cwd).toContain('Capstone Day 2 - Project Setup and First Tests');
});
