import dotenv from 'dotenv'
dotenv.config()

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
}

// module.exports = {
//   moduleNameMapper: {
//     '\\.(css|scss)$': '<rootDir>/src/shared/styleMock.js',
//   }
// };
