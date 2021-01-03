export const getABucket = (userId, token, bucketId) => {
    return fetch(`/api/bucket/${bucketId}/${userId}`, {
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
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

export const getTodos = (userId, token, bucketId) => {
    return fetch(`/api/todos/${bucketId}/${userId}`, {
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


export const createTodo = (userId, token, bucketId, todo) => {
    return fetch(`/api/todo/create/${bucketId}/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(todo)
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

export const updateTodo = (userId, token, bucketId, todoId, todo) => {
    return fetch(`/api/todo/${todoId}/${bucketId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(todo)
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

export const deleteTodo = (userId, token, bucketId, todoId) => {
    return fetch(`/api/todo/${todoId}/${bucketId}/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}