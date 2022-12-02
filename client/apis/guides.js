import request from 'superagent'

const rootUrl = '/api/v1'

export function fetchGuides() {
  return request.get(rootUrl + '/guides').then((res) => {
    return res.body
  })
}

export function addGuide(newGuide) {
  return request
    .post(rootUrl + '/profiles/add')
    .send(newGuide)
    .then((res) => {
      return res.body
    })
}
