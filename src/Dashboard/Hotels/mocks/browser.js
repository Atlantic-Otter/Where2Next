import { setupWorker, rest } from 'msw';
import handlers from './handlers';

const worker = setupWorker(
  rest.get('http://localhost:3000/hotels/san+francisco', (req, res, ctx) => {
    return res()
  })
)

worker.start()