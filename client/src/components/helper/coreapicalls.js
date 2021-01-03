export const getBuckets = (userId, token) => {
    return fetch(`/api/buckets/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

export const createBucket = (userId, token, bucket) => {
    return fetch(`/api/bucket/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(bucket)
    }).then( response => {
        return response.json()
    }).catch(err => console.log(err))
}