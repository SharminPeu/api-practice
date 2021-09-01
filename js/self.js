
const loadComments=()=>{

    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>displayBuddy(data))
}
loadComments();

const displayBuddy=buddies=>{
    const countryDiv=document.getElementById('countries')
    
    // const buddies2=buddies.results
    // console.log(buddies2)

 buddies.forEach(buddy=>{
    // console.log(buddy)
    const div=document.createElement('div')
    div.classList.add('country')
    div.innerHTML=`
    <h3>${buddy.name}</h3>
    <p>${buddy.capital}</p>
<button id="inner-button" onclick="loadCountryDetails('${buddy.name}')">Details</button>
    `
    countryDiv.appendChild(div)
 })
}

const loadCountryDetails=(name)=>{
    const url =`https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCountryDetail(data[0]))
}

const displayCountryDetail= country=>{
    console.log(country)
    const countryDetailDiv=document.getElementById('country-detail')
    // div.classList.add('country')
    countryDetailDiv.innerHTML=`
    <h3>${country.name}</h3>
    <p>${country.capital}</p>
<img width="200px" src="${country.flag}">`

}
