import request from 'superagent'

export function getAllreviews() {
  return request.get('/api/v1/reviews').then((res) => {
    return res.body.reviews
  })
}
