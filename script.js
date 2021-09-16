function toggleLeftSide(){
    document.getElementById('leftSide').classList.toggle('active')
}

const form = document.getElementsByClassName('form-control');
addEventListener('submit', function(event){


    event.preventDefault();

    const name = document.getElementById("name").value
    console.log(`Ad: ${name}`)
    const surname = document.getElementById("surname").value
    console.log(`Soyad: ${surname}`)
    const age = document.getElementById("age").value
    console.log(`Yaş: ${age}`)
    const city = document.getElementById("city").value
    console.log(`İl: ${city}`)
    const phone = document.getElementById("phone").value
    console.log(`Telefon No: ${phone}`)
    
    
})
const cardBody = document.querySelector('.card-body')
console.log(cardBody)
let newData=[]
fetch( 'https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data=>{
    let allData=[]
    // const newData=data.map((value,index)=>{
    //     if(index<10){
    //         allData.push(value)
    //     }
    // }),
    newData=data.slice(0,10)

    card(newData)
})

const card =(data) =>{
    console.log(data)
  data.forEach(element => {
    const card=`<div class="card">
    <div class="card-image"></div>
    <div class="card-text" id="cardText">
      <h2>${element.title.slice(0-10)}</h2>
      <p>
      ${element.body}
      </p>
    </div>
    
  </div>`
  cardBody.innerHTML += card

  }
  );
}


function myFunction(){
   var input, filter;
   input = document.getElementById("myInput");
   filter = input.value.toUpperCase();
   
   const filteredData=newData.filter(item=>
     item.title.toUpperCase().includes(filter) || item.body.toUpperCase().includes(filter) )
   

   cardBody.innerHTML=""
   card(filteredData)
   
}
