document.getElementById('error-message').style.display = 'none'
const searchPlayer = async () => {
    const searchField = document.getElementById('search-field');
    searchText = searchField.value;
    // clear data 
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none'

    // console.log(searchText)
    if (searchText == '') {
         displayError()
         document.getElementById('spinner').style.display='none'

    }
    else {
        // load data
        document.getElementById('spinner').style.display='none'
        const url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${searchText}`
        const res = await fetch(url)
        const data = await res.json()
        displaySearchResult(data.player);
        // console.log(url)

        /* const url=`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${searchText}`
        console.log(url)*/
       /*  fetch(url)
        .then(res=>res.json())
        .then(data=>displaySearchResult(data.player));  */
    }}

    const displayError = () => {
        const error = document.getElementById('error-message').style.display = 'block'
    }
    const displaySearchResult = players => {
        const searchResult = document.getElementById('search-result')
        console.log(players)
        //  clear data 
        //  searchResult.innerHTML=''
        // document.getElementById('player-detail').innerHTML=''
        searchResult.textContent = ''
        if (players == null) {
            
        //    alert('please')
        displayError()
        }
        players.forEach(player => {
            console.log(player);
            const div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = `
        <div onclick="loadPlayerDetail(${player.idPlayer})" class="card h-100">
          <img src="${player.strThumb} " class="card-img-top" alt="...">
          <div class="card-body">
            <h3 class="card-title">${player.strPlayer}  <small> Team :${player.strTeam} </small></h3>
            <h5> D.OB: ${player.dateBorn} Birth: ${player.strBirthLocation}
            <p class="card-text">${player.strGender}</p>
          </div>
        </div>
      </div>`
            searchResult.appendChild(div)
        })
    }

    const loadPlayerDetail = playerId => {
        const url = (`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${playerId}`)
        fetch(url)
            .then(res => res.json())
            .then(data => displayPlayerDetail(data.players[0]))
    }
    const displayPlayerDetail = player => 
    {
        //  console.log(player);
        const playerDetail = document.getElementById('player-detail')
        // clear data
        // document.getElementById('player-detail').innerHTML=''
        playerDetail.textContent = ''

        const div = document.createElement('div')
        div.classList.add('card')

        div.innerHTML = `
    <img src="${player.strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${player.strPlayer}</h5>
          <p class="card-text">${player.strGender} <br> details: ${player.strDescriptionCN}</p>
          <a href="${player.strFacebook}" class="btn btn-primary">Details</a>
        </div>`
        playerDetail.appendChild(div)
    }