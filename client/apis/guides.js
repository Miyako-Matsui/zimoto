import request from 'superagent'

const rootUrl = '/api/v1'

export function getGuides() {
  return request.get(rootUrl + '/guides').then((res) => {
    console.log(res.body)
    return res.body
  })
}
