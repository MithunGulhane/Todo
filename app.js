let add = document.getElementById('add');
let point = document.getElementById('text');
let input = document.getElementById('todo');
add.addEventListener('click',function(){
    var para = document.createElement('p');
    para.innerText = input.value;
    point.appendChild(para);
    input.value ="";
    para.addEventListener('click', function(){
        para.style.textDecoration = 'line-through';
        
    })
    para.addEventListener('dblclick', function(){
        point.removeChild(para);
    })
})
