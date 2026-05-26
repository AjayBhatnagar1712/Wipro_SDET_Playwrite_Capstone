// @ts-check
import { test } from '@playwright/test';
import { userProfileScenarios } from '../data/serviceScenarios.js';
import { runScenario } from '../support/serviceRunner.js';

test.describe('User profile and account service', () => {
  for (const scenario of userProfileScenarios) {
    test(`${scenario.id} ${scenario.name}`, async ({ page }) => {
      await runScenario(page, scenario);
    });
  }
});
