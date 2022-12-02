import request from 'superagent'

const rootUrl = '/api/v1'

export function fetchGuides() {
  return request.get(rootUrl + '/guides').then((res) => {
    return res.body
  })
}
