import React, { useEffect } from 'react'

function UseEffects() {


    const APICall = () => {
        //using await
        let response = await fetch('localhost:3000');
        let commits = await response.json(); // read response body and parse as JSON
        alert(commits[0].author.login);

        //using pure promise
        fetch('localhost:3000', {
            headers: {
                Authentication: 'secret'
            }
        })
            .then(response => response.json())
            .then(commits => alert(commits[0].author.login));

        //POST 
        
            fetch('https://api.github.com/users/')
                .then(response => {
                    console.log(response.headers.get('Content-Type'));
                    console.log(response.headers.get('Date'));

                    console.log(response.status);
                    console.log(response.statusText);
                    console.log(response.type);
                    console.log(response.url);
                    return response.json()
                })
                .then(data => {
                    console.log(data) // Prints result from `response.json()` in getRequest
                })
                .catch(error => console.error(error))


            postRequest('https://appdividend.com/api/v1/users', { user: 'Krunal' })
                .then(data => console.log(data)) // Result from the `response.json()` call
                .catch(error => console.error(error))

            function postRequest(url, data) {
                return fetch(url, {
                    credentials: 'same-origin', // 'include', default: 'omit'
                    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
                    body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
                    ok: true,
                    redirect: false,
                    status: 200,

                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                });
  .then(response => response.json())
}
}
useEffect(() => {
    let promise = APICall();
    return () => {
        cleanup
    };
}, [input])
return (
    <div>

    </div>
)
}

export default UseEffects


// fetching data from an API with basic promise syntax (notice the use of arrow functions)
window.fetch('http://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => console.log(data));

// fetching same data from API with async/await
async function getPostData() {
const response = await window.fetch('http://jsonplaceholder.typicode.com/posts')
  // we need to resolve two promises using await to get the final data
const data = await response.json();
console.log(data);
}
getPostData();