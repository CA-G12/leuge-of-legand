const btn =document.querySelector('.search')
const searchInput=document.querySelector('.search-input')
const boxItems=document.querySelector('.box-items')
fetch('/data')
    .then(res => res.json())
    .then((data) => {
        createItems(Object.values(data.data))

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

function createItems(data) {
    data.forEach(champion => {
        const boxItem=document.createElement('figure')
        const div=document.createElement('div')
        boxItems.appendChild(div)
        div.appendChild(boxItem)
        const imgItem=document.createElement('img')
        imgItem.src='https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/'+champion.image.full
        const nameChampion=document.createElement('h3')
        nameChampion.textContent=champion.name
        boxItem.appendChild(imgItem)
        boxItem.appendChild(nameChampion)

        





    });
    console.log(data);
    
}