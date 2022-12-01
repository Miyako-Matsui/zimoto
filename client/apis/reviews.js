import request from 'superagent'

const reviewUrl = '/api/v1'

// POST a review
export async function insertReviewAPI(review) {
  try {
    const res = await request.post(reviewUrl).send(review)
    return res.body
  } catch (err) {
    console.log(err.message)
  }
}

// PATCH update a review
export async function updateReviewAPI(reviewId, review) {
  try {
    const res = await request.patch(`${reviewUrl}/${reviewId}`).send(review)
    return res.body
  } catch (err) {
    console.log(err.message)
  }
}

// DELETE a review
export async function deleteReviewAPI(reviewId) {
  try {
    const res = await request.delete(`${reviewUrl}/${reviewId}`)
    return res.body
  } catch (err) {
    console.log(err.message)
  }
}

export function getReviewsApi() {
  return request.get(`${reviewUrl}/reviews`).then((res) => {
    return res.body
  })
}
