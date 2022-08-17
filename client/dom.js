const btn =document.querySelector('.search')
const searchInput=document.querySelector('.search-input')
fetch('/data')
    .then(res => res.json())
    .then((data) => {
        /* console.log('Success:', data); */
    })
    .catch((error) => {
        console.error('Error:', error);
    });


btn.addEventListener('click', (e) => {
  e.preventDefault()
    fetch('/search', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name:searchInput.value}),

        })
        .then(res => res.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
})

searchInput.addEventListener('input', (e) => {

    fetch('/Inputsearch', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name:searchInput.value}),

        })
        .then(res => res.json())
        .then((data) => {
        console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });})