import {setupServer} from 'msw/node'
import {handlers} from './handlers'

// /handers:
// /browser: sets up Service Worker
// /mockServiceWorker: create with npx msw init public

// /mocks/server: sets up server to use the same mocking logic in node
// */setupTests: enables mocking for unit tests via beforeAll/ afterAll

export const server = setupServer(...handlers)