const btn = document.querySelector('.search');
const searchInput = document.querySelector('.search-input');
const boxItems = document.querySelector('.box-items');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const dataList = document.querySelector('#dataList');
const contSkin=document.querySelector('.skins-contiuner ')
const closeBtn =document.querySelector('.closeBtn')

let i = 0;

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
  dataList.textContent = '';
  fetch('/search', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: searchInput.value }),

  })
    .then((res) => res.json())
    .then((data) => {
      boxItems.textContent = '';
      const bigData = Object.values(data.data)[0];
      console.log(bigData);
      const boxItem = document.createElement('figure');
      const div = document.createElement('div');
      div.addEventListener('click', () => {
        getSkin(bigData.id);
      });
      boxItems.appendChild(div);
      div.appendChild(boxItem);
      const imgItem = document.createElement('img');
      imgItem.src = `https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${bigData.image.full}`;
      const nameChampion = document.createElement('h3');
      nameChampion.textContent = bigData.name;
      boxItem.appendChild(imgItem);
      boxItem.appendChild(nameChampion);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

function createSkins(data, name) {
  const imgSkin = document.querySelector('.img-skin');
  imgSkin.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_${data[i].num}.jpg`;

  left.addEventListener('click', () => {
    if (i > 0) {
      i -= 1;
      imgSkin.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_${data[i].num}.jpg`;
    }
  });

  right.addEventListener('click', () => {
    console.log(i);
    if (i < data.length) {
      i += 1;
      imgSkin.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_${data[i].num}.jpg`;
    }
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
      contSkin.style.display='block'
      i = 0;
      getSkin(champion.name);
    });
    closeBtn.addEventListener('click',()=>{
      console.log(11);
      contSkin.style.display='none'
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

function createOptions(data) {
  data.forEach((e) => {
    const option = document.createElement('option');
    option.value = e;
    dataList.appendChild(option);
    option.addEventListener('click', () => {
      searchInput.value = e;
    });
  });
  if (!searchInput.value) {
    dataList.textContent = '';
  }
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
    .then((data) => createOptions(data))
    .catch((error) => {
      console.error('Error:', error);
    });
});
