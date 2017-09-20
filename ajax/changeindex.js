/**
 * Created by 13675 on 2017/8/20.
 */
window.onload = ()=>{
    let btn = document.querySelector('#btn1');
    btn.onclick = getData;
}

function getData() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4){
            if((xhr.status >= 200 && xhr.status <300)||xhr.status==304){
                document.querySelector('#else').innerHTML = xhr.responseText;
            }
            else {
                console.log(xhr.status);
            }
        }
    }
    xhr.open('get','http://localhost:3000/',true)
    xhr.send(null);
}