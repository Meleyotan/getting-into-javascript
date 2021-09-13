let eachNumber=document.querySelectorAll('button');
eachNumber.forEach(function(){
    document.querySelector('.result').innerText=eachNumber.innerText
});