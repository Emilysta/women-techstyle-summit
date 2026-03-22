import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('homepage', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page }, testInfo) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .analyze();

    await testInfo.attach('accessibility-scan-results', {
      body: JSON.stringify(accessibilityScanResults, null, 2),
      contentType: 'application/json'
    });

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
