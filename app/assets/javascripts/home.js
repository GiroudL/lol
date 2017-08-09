

function AfficherMasquer()
{
    divInfo = document.getElementById('centre');
        if (divInfo.style.display == 'none')
    divInfo.style.display = 'block';
        else
    divInfo.style.display = 'none';
}

function searchGoogle() {
    term=document.getElementById("form-search");
    window.open("https://google.com/#q="+term.value);
}


function PopUp() {
  alert ("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
}

setTimeout(PopUp, 10000);
