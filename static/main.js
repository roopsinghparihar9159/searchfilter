const url = window.location.href
const searchform = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')
const resultsBox = document.getElementById('results-box')

const csrf = document.getElementsByName('csrfmiddlewaretoken')[0].value

const sendSearchData = (game) =>{
    $.ajax({
        type:'POST',
        url:'search/',
        data:{
            'csrfmiddlewaretoken':csrf,
            'game':game,
        },
        success:(res)=>{
            console.log(res.data)
            const data = res.data
            if (Array.isArray(data)){
                // console.log('We have an array')
                resultsBox.innerHTML=""
                data.forEach(game=>{
                    resultsBox.innerHTML += `
                        <a href="" class="item">
                            <div class="row mt-2 mb-2">
                                <div class="col-2">
                                    <img src="${game.image}" class="game-img">
                                </div>
                                <div class="col-10">
                                    <h5>${game.name}</h5>
                                    <p class="text-muted">${game.studio}</p>
                                </div>
                            </div>
                        
                        </a>
                    `
                })
            }else{
                if(searchInput.value.length>0){
                    resultsBox.innerHTML = `<b>${data}</b>`
                }else{
                    if (searchInput.value.length>0){
                        resultsBox.innerHTML = '<b>${data}</b>'
                    }else{
                        resultsBox.classList.add('not-visible')
                    }
                }
            }
        },
        error:(err)=>{
            console.log(err)
        }
    })
}

searchInput.addEventListener('keyup',e=>{
    console.log(e.target.value)

    if(resultsBox.classList.contains('not-visible')){
        resultsBox.classList.remove('not-visible')
    }
    sendSearchData(e.target.value)
})