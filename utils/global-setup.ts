// utils/global-setup.ts
import { chromium } from '@playwright/test';
import { loginWithUser } from './LoginHelper';
import * as dotenv from 'dotenv';
import path from 'path';
import { env } from 'process';

const envPath = path.resolve(__dirname, '../env/local.env');
dotenv.config({ path: path.resolve(__dirname, envPath) });

export default async function globalSetup() {
  const browser = await chromium.launch({headless: true});
  const context = await browser.newContext();

  await loginWithUser(context,process.env.USER1_EMAIL!, process.env.USER1_PASSWORD!);

  await context.storageState({ path: 'storageState.json' });
  await browser.close();
}
