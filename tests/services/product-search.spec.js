// @ts-check
import { test } from '@playwright/test';
import { productSearchScenarios } from '../data/serviceScenarios.js';
import { runScenario } from '../support/serviceRunner.js';

test.describe('Product and search service', () => {
  for (const scenario of productSearchScenarios) {
    test(`${scenario.id} ${scenario.name}`, async ({ page }) => {
      await runScenario(page, scenario);
    });
  }
});
