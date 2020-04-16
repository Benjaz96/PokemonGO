
let country_id = document.getElementById('place_id'),
    button_view = document.getElementsByClassName('button_copy');


const copyText = (e) => {
    window.getSelection().removeAllRanges();
    let range = document.createRange();
    range.selectNode(e.target.previousElementSibling);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}




let click_submenu = document.getElementById('click_submenu'),
    icon_event = document.getElementById('icon_event'),
    submenu = document.getElementById('submenu');

const submenuevent = () => {
    let submenulet = submenu.style.display;
    if (submenulet == 'flex') {
            submenu.style.display = 'none';
            icon_event.setAttribute('src','imagen/more.svg');
        } else {
            submenu.style.display = 'flex';
            icon_event.setAttribute('src','imagen/minus.svg');
    } 
}

click_submenu.addEventListener('click', submenuevent);



let eventHandler = e => {
    const className = e.target.className;
    switch (className) {
        case ('button_copy'):
            copyText(e);
            break;
        default:
            break;
    }
}
country_id.addEventListener('click', eventHandler);



    
const dia = (e) => {
    let day = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
    return day[e];
}
const mes = (e) => {
    let mes = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Set','Oct','Nov','Dic'];
    return mes[e];
}
const time = (e) =>{
    let timeFormat = ('0' + e).slice(-2);
    return timeFormat;
}
    
    
const tiempo = (tiempoFormat) => {
    let ahora = new Date(),
        remaintime = (new Date(tiempoFormat) - ahora + 1000)/1000,
        remainsecond = ('0' + Math.floor(remaintime % 60)).slice(-2),
        remaiminutes = ('0' + Math.floor(remaintime / 60 % 60)).slice(-2),
        remaihours = ('0' + Math.floor(remaintime / 3600 % 24)).slice(-2),
        remaidays = Math.floor(remaintime / (3600 * 24));
        return{
            remaintime,
            remainsecond,
            remainsecond,
            remaiminutes,
            remaihours,
            remaidays
        }
}



let community_day = document.getElementById('community_day');
let community_hour = document.getElementById('community_hour');

const local_day_hour = () => {
    setInterval(() => {
        let community_date = new Date(); 
        community_day.innerHTML = `${dia(community_date.getDay())}, 
                                   ${community_date.getDate()} de 
                                   ${mes(community_date.getMonth())} del 
                                   ${community_date.getFullYear()}`;
        community_hour.innerHTML = `${time(community_date.getHours())}:${time(community_date.getMinutes())}:${time(community_date.getSeconds())}`;
    }, 1000);   
}
local_day_hour();

window.onload = function () {
    let loader = document.getElementById('onload');
    loader.setAttribute('class','loader active');
}



