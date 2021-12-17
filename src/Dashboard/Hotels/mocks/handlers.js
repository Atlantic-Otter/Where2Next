import { rest } from 'msw'

const handlers = [
    rest.get('http://localhost:3000/san+diego', (req, res, ctx) => {
      return res(ctx.json([]))
    }),
    // rest.get('http://localhost:3000/san+diego/1812291', (req, res, ctx) => {
    //   return res(ctx.json([]))
    // }),
    // rest.get('http://localhost:3000/san+diego/1812291/photos', (req, res, ctx) => {
    //   return res(ctx.json([]))
    // })
    // rest.get('http://localhost:3000/san+diego/1812291/propertyDetail', (req, res, ctx) => {
    //   return res(ctx.json([]))
    // })
]

export default handlers;