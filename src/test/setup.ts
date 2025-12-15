import "@testing-library/jest-dom/vitest"
import { afterAll, afterEach, beforeAll} from 'vitest'
import { cleanup } from '@testing-library/react'
import UserMocks from "./UserMocks.json"
import { setupServer } from 'msw/node';
import {http, HttpResponse} from 'msw'

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
})

const server = setupServer(
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json(UserMocks)
  }),
);

// Establish API mocking before all tests
beforeAll(() => server.listen());
// Reset any request handlers that are declared during the tests
afterEach(() => server.resetHandlers());
// Clean up once the tests are done
afterAll(() => server.close());