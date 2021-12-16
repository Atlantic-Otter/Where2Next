import { setupWorker, rest } from 'msw';

const worker = setupWorker(
  rest.get('/hotels/san+francisco', (req, res, ctx) => {
    return res()
  })
)

worker.start()