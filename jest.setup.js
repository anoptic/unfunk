import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { loadEnvConfig } from '@next/env';

jest.mock('swiper/css', jest.fn());
jest.mock('swiper/css/navigation', jest.fn());
jest.mock('swiper/css/a11y', jest.fn());

// export {};
export default async () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};
