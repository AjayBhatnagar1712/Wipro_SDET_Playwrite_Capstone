// @ts-check
import { test } from '@playwright/test';
import { customerSupportScenarios } from '../data/serviceScenarios.js';
import { runScenario } from '../support/serviceRunner.js';

test.describe('Customer support and information service', () => {
  for (const scenario of customerSupportScenarios) {
    test(`${scenario.id} ${scenario.name}`, async ({ page }) => {
      await runScenario(page, scenario);
    });
  }
});
