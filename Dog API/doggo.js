const BREED_URL="https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");
const refresh = document.querySelector(".refresh");
//promise fetched the url and passed it in as response, response was passed in and changed to a json file
function addNewDog(){
    const promise = fetch(BREED_URL);
    promise.then(function(response){
        const processedPromise=response.json();
        return processedPromise;
    })

    .then(function(processedResponse){
        console.log(processedResponse);
        const img = document.createElement('img');
        img.src=processedResponse.message;
        img.alt='Cute dog';
        doggos.appendChild(img);
});
}
refresh.addEventListener('click', addNewDog);
console.log('This will log first');