import { test, expect } from '@playwright/test';

test('e2e', async ({ page }) => {
  await page.goto('https://baggit-app.vercel.app/home')
  await page.getByRole('link', { name: 'account Account' }).click();
  await page.getByRole('link', { name: 'booking Booking' }).click();
  await page.getByRole('link', { name: 'home Home' }).click();
  await page.getByPlaceholder('Enter location to search').click();
  await page.getByPlaceholder('Enter location to search').fill('birmingham');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('div:nth-child(3) > div:nth-child(3)').first().click();
  await page.getByRole('button', { name: '×' }).click();
  await page.locator('div:nth-child(3) > div:nth-child(4)').first().click();
  await page.getByRole('link', { name: 'Details' }).click();
  await page.getByRole('link', { name: 'Terms and Conditions' }).click(); 
})