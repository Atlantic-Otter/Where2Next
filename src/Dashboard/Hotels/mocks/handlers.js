import { rest } from 'msw'


export const handlers = [
    rest.get('/hotels', (req, res, ctx) => {


      return res(ctx.json([]))
    }),
]