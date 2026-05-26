// @ts-check
import { test } from '@playwright/test';
import { authenticationScenarios } from '../data/serviceScenarios.js';
import { runScenario } from '../support/serviceRunner.js';

test.describe('Authentication service', () => {
  for (const scenario of authenticationScenarios) {
    test(`${scenario.id} ${scenario.name}`, async ({ page }) => {
      await runScenario(page, scenario);
    });
  }
});
