    
    //URL DA API COM OS DADOS
    const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';

    let req = new Request(url);
  
    let container = document.getElementById('cards');
    let cardsObjs = [];
    let slide1 = document.getElementById('slide1');
    let slide2 = document.getElementById('slide2');
    let slide3 = document.getElementById('slide3');
    let slide4 = document.getElementById('slide4');
    let slide5 = document.getElementById('slide5');
    let slide6 = document.getElementById('slide6');
    let slide7 = document.getElementById('slide7');
    let slide8 = document.getElementById('slide8');


    fetch(req)
        .then(function (respostaServer) {
            respostaServer.json().then(function (dadosAObjetos) {
                
                dadosAObjetos.forEach(function (article,i) {
                    cardsObjs = article;
                   
                    
                   if(i== 0 || i==1 || i==2){

                        slide1.innerHTML += `
                        <div class="col-md-4">
                            <div class="card mb-2" >
                                <a href="#" > <img class="card-img-top imgCard" src="${article.photo}" alt="Card image cap" height="300px"></a>
                                <a href="#" class ="linkCards" style="text-decoration:none; color:black" >
                                    <div class="card-body">
                                        <h4 class="card-title">${article.name}</h4>
                                        <p class="card-text">Tipo: ${article.property_type}</p>
                                        <p class="card-text"> Preço: ${article.price},00</p>
                                    
                                    </div>
                                </a>
                            
                            </div>               
                        </div>  
                    
                                              
                        `

                   }
                   if(i== 3 || i==4 || i==5){

                    slide2.innerHTML += `
                    <div class="col-md-4">
                        <div class="card mb-2">
                            <a href="#" > <img class="card-img-top imgCard" src="${article.photo}" alt="Card image cap" height="350px"></a>
                            <a href="#" class ="linkCards" style="text-decoration:none; color:black" >
                                <div class="card-body">
                                    <h5 class="card-title">${article.name}</h5>
                                    <p class="card-text">Tipo: ${article.property_type}</p>
                                    <p class="card-text"> Preço: ${article.price},00</p>
                                
                                </div>
                            </a>
                    
                        </div>    
                    </div>    

                        
                    `
                 }
                 if(i== 6 || i==7 || i==8){

                    slide3.innerHTML += `

                    <div class="col-md-4">
                        <div class="card mb-2">
                            <a href="#" > <img class="card-img-top imgCard" src="${article.photo}" alt="Card image cap" height="350px"></a>
                            <a href="#" class ="linkCards" style="text-decoration:none; color:black" >
                                <div class="card-body">
                                    <h5 class="card-title">${article.name}</h5>
                                    <p class="card-text">Tipo: ${article.property_type}</p>
                                    <p class="card-text"> Preço: ${article.price},00</p>
                                
                                </div>
                            </a>
                    
                        </div>    
                    </div>                 
                    
                        
                    `
                 }
                   
                if(i== 9 || i==10 || i==11){

                    slide4.innerHTML += `

                    <div class="col-md-4">
                        <div class="card mb-2">
                            <a href="#" > <img class="card-img-top imgCard" src="${article.photo}" alt="Card image cap" height="350px"></a>
                            <a href="#" class ="linkCards" style="text-decoration:none; color:black" >
                                <div class="card-body">
                                    <h5 class="card-title">${article.name}</h5>
                                    <p class="card-text">Tipo: ${article.property_type}</p>
                                    <p class="card-text"> Preço: ${article.price},00</p>
                                
                                </div>
                            </a>
                    
                        </div>    
                    </div>                
                    
                        
                    `
                 }
                    
                 if(i== 12 || i==13 || i==14){

                    slide5.innerHTML += `

                    <div class="col-md-4">
                        <div class="card mb-2">
                            <a href="#" > <img class="card-img-top imgCard" src="${article.photo}" alt="Card image cap" height="350px"></a>
                            <a href="#" class ="linkCards" style="text-decoration:none; color:black" >
                                <div class="card-body">
                                    <h5 class="card-title">${article.name}</h5>
                                    <p class="card-text">Tipo: ${article.property_type}</p>
                                    <p class="card-text"> Preço: ${article.price},00</p>
                                
                                </div>
                            </a>
                    
                        </div>    
                    </div>          
                    
                        
                    `
                 }
                 if(i== 15 || i==16 || i==17){

                    slide6.innerHTML += `

                    <div class="col-md-4">
                        <div class="card mb-2">
                            <a href="#" > <img class="card-img-top imgCard" src="${article.photo}" alt="Card image cap" height="350px"></a>
                            <a href="#" class ="linkCards" style="text-decoration:none; color:black" >
                                <div class="card-body">
                                    <h5 class="card-title">${article.name}</h5>
                                    <p class="card-text">Tipo: ${article.property_type}</p>
                                    <p class="card-text"> Preço: ${article.price},00</p>
                                
                                </div>
                            </a>
                    
                        </div>    
                    </div>              
                    
                        
                    `
                 }
                 if(i== 18 || i==19 || i==20){

                    slide7.innerHTML += `
                    <div class="col-md-4">
                        <div class="card mb-2">
                            <a href="#" > <img class="card-img-top imgCard" src="${article.photo}" alt="Card image cap" height="350px"></a>
                            <a href="#" class ="linkCards" style="text-decoration:none; color:black" >
                                <div class="card-body">
                                    <h5 class="card-title">${article.name}</h5>
                                    <p class="card-text">Tipo: ${article.property_type}</p>
                                    <p class="card-text"> Preço: ${article.price},00</p>
                                
                                </div>
                            </a>
                    
                        </div>    
                    </div>               
                    
                        
                    `
                 }else if(i== 21 || i==22 || i==23){

                    slide8.innerHTML += `

                    <div class="col-md-4">
                        <div class="card mb-2">
                            <a href="#" > <img class="card-img-top imgCard" src="${article.photo}" alt="Card image cap" height="350px"></a>
                            <a href="#" class ="linkCards" style="text-decoration:none; color:black" >
                                <div class="card-body">
                                    <h5 class="card-title">${article.name}</h5>
                                    <p class="card-text">Tipo: ${article.property_type}</p>
                                    <p class="card-text"> Preço: ${article.price},00</p>
                                
                                </div>
                            </a>
                    
                        </div>    
                    </div>               
                    
                        
                    `
                 }
               
                
              })
                    
             
           
            })
          
          
           
        })



        // <div class="col-md-4">
        // <div class="card mb-2">
        //   <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" alt="Card image cap">
        //   <div class="card-body">
        //     <h4 class="card-title">Card title</h4>
        //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
        //       card's content.</p>
        //     <a class="btn btn-primary waves-effect waves-light">Button</a>
        //   </div>
        // </div>


        
    //     <div class="col-md-4">
    //     <div class="card mb-2 ml-2 mr-2" style="width: 25rem;">
    //         <a href="#" > <img class="card-img-top imgCard" src="${article.photo}" alt="Card image cap" height="350px"></a>
    //         <a href="#" class ="linkCards" style="text-decoration:none; color:black" >
    //             <div class="card-body">
    //                 <h5 class="card-title">${article.name}</h5>
    //                 <p class="card-text">Tipo: ${article.property_type}</p>
    //                 <p class="card-text"> Preço: ${article.price},00</p>
                
    //             </div>
    //         </a>
        
    //     </div>               
    // </div>  