// @ts-check
import { test } from '@playwright/test';
import { cartScenarios } from '../data/serviceScenarios.js';
import { runScenario } from '../support/serviceRunner.js';

test.describe('Cart service', () => {
  for (const scenario of cartScenarios) {
    test(`${scenario.id} ${scenario.name}`, async ({ page }) => {
      await runScenario(page, scenario);
    });
  }
});
