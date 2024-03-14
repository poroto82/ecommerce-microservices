import request from 'supertest'
import { Database } from '../../database'
import { ServerApp } from '../../server'

const fixedDate = new Date(2020, 3, 1)

describe('/api/users', () => {
  beforeAll(async () => {
    jest.useFakeTimers('modern')
    jest.setSystemTime(fixedDate)
    await Database.connect()
  })

  it('GET /api/users', async () => {
    const app = ServerApp.getInstance()

    return request(app)
      .get('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect([])
  })

  it('POST /api/users', async () => {
    const app = ServerApp.getInstance()

    jest.spyOn(global.Math, 'random').mockReturnValue(10)

    return request(app)
      .post('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({
        id: 1,
        name: 'test10',
        birthday: '2020-04-01T03:00:00.000Z',
        updatedAt: '2020-04-01T03:00:00.000Z',
        createdAt: '2020-04-01T03:00:00.000Z'
      }
  )
  })
})
