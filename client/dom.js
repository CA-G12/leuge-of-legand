const btn =document.querySelector('.search')

fetch('/data')
    .then(res => res.json())
    .then((data) => {
        /* console.log('Success:', data); */
    })
    .catch((error) => {
        console.error('Error:', error);
    });


btn.addEventListener('click', () => {
    fetch('/home', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },

        })
        .then(res => res.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
})