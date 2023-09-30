const requestURLUsers = 'https://jsonplaceholder.typicode.com/users'
const requestURLPosts = 'https://jsonplaceholder.typicode.com/posts'
    
function sendRequest(method, url){
      
    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch(url, {
        method: method, 
        // body: JSON.stringify(body),
        headers: headers
    }).then(response =>{
        if (response.ok){
            return response.json()
        }
        
        return response.json().then(error => {
            const e = new Error('Что-то пошло не так')
            e.data = error
            throw e
        })
    })

}    
    sendRequest('GET', requestURLUsers)
    .then(data => console.log(data))
    .catch(err => console.log(err))
    
    sendRequest('GET', requestURLPosts)
    .then(data => console.log(data))
    .catch(err => console.log(err))
    // const body = { 
    //     name: 'Yulya',
    //     age: 17
    // }

    // sendRequest('POST', requestURL, body) // телом запроса являются объекты
    // .then(data => console.log(data))
    // .catch(err => console.log(err))