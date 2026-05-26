// @ts-check
import { test } from '@playwright/test';
import { wishlistCompareScenarios } from '../data/serviceScenarios.js';
import { runScenario } from '../support/serviceRunner.js';

test.describe('Wishlist and compare service', () => {
  for (const scenario of wishlistCompareScenarios) {
    test(`${scenario.id} ${scenario.name}`, async ({ page }) => {
      await runScenario(page, scenario);
    });
  }
});
