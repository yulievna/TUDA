function generateColor(){
    var block = document.getElementById("block")
        r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256)),
        color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    block.style.background = color
}

function generateColorByNumber(){
    var block = document.getElementById("block2")
    var input = Number(document.getElementById("input2").value)

    if (!input){
        alert('Введите число')
        document.getElementById("input2").value = ""
        block.style.background = "black"
    }
    else if(input == 0){
        block.style.background = "black"
    } else if (input <= 0 ){
        block.style.background = "red"
    } else if (input > 0 && input <100) {
        block.style.background = "blue"
    } else if (input >= 100) {
        block.style.background = "green"
    }
    
}

const reqURL = 'https://jsonplaceholder.typicode.com/users'
    
    function sendRequest(method, url, body = null){
        return new Promise((resolve, reject) => { // resolve вызваем когда есть успех выполнения, в противном случае используем reject

            const xhr = new XMLHttpRequest()

            xhr.open(method, url) // открывает запрос

            xhr.responseType = 'json' // получить объекты
            xhr.setRequestHeader('Content-type', 'application/json')

            xhr.onload = () =>{ // обработать данные

                if (xhr.status >= 400){
                    reject(xhr.response)
                } else{
                    resolve(xhr.response) // получить объекты
                }
            }

            xhr.onerror = () =>{ // указывает на существующую ошибку
                reject(xhr.response) 
            }
        
            xhr.send(JSON.stringify(body)) // отправляет запрос
           
        })
    }    

    sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))

    // const body = { 
    //     name: 'Yulya',
    //     age: 17
    // }

    // sendRequest('POST', requestURL, body) // телом запроса являются объекты
    // .then(data => console.log(data))
    // .catch(err => console.log(err))