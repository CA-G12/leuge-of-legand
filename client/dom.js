const btn = document.querySelector('.search');
const searchInput = document.querySelector('.search-input');
const boxItems = document.querySelector('.box-items');
const skins = document.querySelector('.skins');

fetch('/data')
  .then((res) => res.json())
  .then((data) => {
    // eslint-disable-next-line no-use-before-define
    createItems(Object.values(data.data));
  })
  .catch((error) => {
    console.error('Error:', error);
  });

//----------------------------------------------
btn.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/search', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: searchInput.value }),

  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

function createSkins(data, name) {
  data.forEach((e) => {
    const skin = document.createElement('img');
    skins.appendChild(skin);
    skin.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_${e.num}.jpg`;
  });
}

function getSkin(e) {
  console.log(e);
  fetch(`https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion/${e}.json`).then((res) => res.json()).then((res) => res.data[e].skins)
    .then((res) => createSkins(res, e));
}

function createItems(data) {
  data.forEach((champion) => {
    const boxItem = document.createElement('figure');
    const div = document.createElement('div');
    div.addEventListener('click', () => {
      getSkin(champion.name);
    });
    boxItems.appendChild(div);
    div.appendChild(boxItem);
    const imgItem = document.createElement('img');
    imgItem.src = `https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${champion.image.full}`;
    const nameChampion = document.createElement('h3');
    nameChampion.textContent = champion.name;
    boxItem.appendChild(imgItem);
    boxItem.appendChild(nameChampion);
  });
}

searchInput.addEventListener('input', () => {
  fetch('/Inputsearch', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: searchInput.value }),

  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
