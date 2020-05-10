    
    //URL DA API COM OS DADOS
    const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';

    let req = new Request(url);
  
    let container = document.getElementById('cards');


    fetch(req)
        .then(function (respostaServer) {
            respostaServer.json().then(function (dadosAObjetos) {
                dadosAObjetos.forEach(function (article) {
                container.innerHTML += `
                
                <div class="card mb-3 ml-3 mr-3" style="width: 35rem;">
                    <a href="#" > <img class="card-img-top imgCard" src="${article.photo}" alt="Card image cap" height="250px"></a>
                    <a href="#" class ="linkCards" style="text-decoration:none; color:black" >
                        <div class="card-body">
                            <h5 class="card-title">${article.name}</h5>
                            <p class="card-text">Tipo: ${article.property_type}</p>
                            <p class="card-text"> Preço: ${article.price},00</p>
                         
                        </div>
                    </a>
                   
                </div>
            
                                  
                `
              })
                    
              
              

            })
        })


