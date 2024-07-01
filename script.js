async function getorder(){
    const response= await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const menu=await response.json();
    //console.log(menu);
    const orders = menu.recipes;
    //console.log(orders);
    const result=orders.map(function(ele){
        return`
        <div class='pizza'>
            <h2>${ele.title}</h2>
            <img src='${ele.image_url}'>
        </div>
        `
    }).join('');
    document.querySelector(".pizzaApi").innerHTML +=result;
     
}
getorder();