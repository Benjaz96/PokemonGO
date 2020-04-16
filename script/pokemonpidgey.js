
let country_id = document.getElementById('country_id'),
button_view = document.getElementsByClassName('button_view'),
block_country = document.getElementsByClassName('block_country');

const copyText = (e) => {
window.getSelection().removeAllRanges();
let range = document.createRange();
range.selectNode(e.target.previousElementSibling);
window.getSelection().addRange(range);
document.execCommand('copy');
window.getSelection().removeAllRanges();
e.target.nextElementSibling.innerHTML = "&#9989;";
setTimeout(() => {e.target.nextElementSibling.innerHTML = "";}, 1000);
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




const openClose = (index) => {
let Close = block_country[index].style.display;
    if (Close == 'block') {
        block_country[index].style.display = 'none';
        button_view[index].innerHTML ='Ver CC';
        button_view[index].style.backgroundColor ='transparent';
        button_view[index].style.color ='black';
        button_view[index].style.border ='1px solid black';
    } else {
        block_country[index].style.display = 'block';
        button_view[index].innerHTML ='Cerrar';
        button_view[index].style.backgroundColor ='red';
        button_view[index].style.color ='white';
        button_view[index].style.border ='1px solid red';
    } 
}


let eventHandler = e => {
const className = e.target.className;
switch (className) {
    case ('button'):
        copyText(e);
        break;
    case ('button_view'):
        openClose(e.target.dataset.index);
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

const currentTime = (offset, elem) => {
    const el = document.getElementById(elem);
    setInterval(() => {
        let d = new Date(),
        utc = d.getTime() + (d.getTimezoneOffset() * 60000),
        nd = new Date(utc + (3600000*offset));
        el.innerHTML = `${dia(nd.getDay())}, 
                        ${nd.getDate()} de 
                        ${mes(nd.getMonth())} - 
                        ${time(nd.getHours())}:${time(nd.getMinutes())}`;
    }, 1000);
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

const countdown = (timeFormatStart,timeFormatEnd,elem,local_our) => {
    const date = new Date(timeFormatStart),
        local = document.getElementById(local_our),
        el = document.getElementById(elem);

    local.innerHTML = `${dia(date.getDay())}, 
                        ${date.getDate()} de 
                        ${mes(date.getMonth())} - 
                        ${time(date.getHours())}:${time(date.getMinutes())}`;

    const timerupdate = setInterval(() => {
        let t = tiempo(timeFormatStart);
        if (t.remaintime > 1) {
            el.innerHTML = `<div>Comienza en: <span>${t.remaidays}</span><span>d </span>
                                <span>${t.remaihours}</span><span>h </span>
                                <span>${t.remaiminutes}</span><span>m </span>
                                <span>${t.remainsecond}</span><span>s </span></div>`;
        } else {
            let a = tiempo(timeFormatEnd);
            if (a.remaintime > 1) {
                el.innerHTML = `<div>Termina en: <span>${a.remaidays}</span><span>d </span>
                                        <span>${a.remaihours}</span><span>h </span>
                                        <span>${a.remaiminutes}</span><span>m </span>
                                        <span>${a.remainsecond}</span><span>s </span></div>`;
            } else {
                clearInterval(timerupdate);
                el.innerHTML = '<div>EVENTO FINALIZADO</div>';
            }
        }
    }, 1000);
}

const startRaidHour = 18,
  endRaidHour = startRaidHour + 1,
  startDayRaid = "Tue Apr 28 2020",
  endDayRaid = "Tue Apr 28 2020";

countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT+1400`,`${endDayRaid} ${endRaidHour}:00:00 GMT+1400`,"time_1","time_local_our_1");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT+1200`,`${endDayRaid} ${endRaidHour}:00:00 GMT+1200`,"time_2","time_local_our_2");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT+1000`,`${endDayRaid} ${endRaidHour}:00:00 GMT+1000`,"time_3","time_local_our_3");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT+0900`,`${endDayRaid} ${endRaidHour}:00:00 GMT+0900`,"time_4","time_local_our_4");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT+0800`,`${endDayRaid} ${endRaidHour}:00:00 GMT+0800`,"time_5","time_local_our_5");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT+0700`,`${endDayRaid} ${endRaidHour}:00:00 GMT+0700`,"time_6","time_local_our_6");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT+0530`,`${endDayRaid} ${endRaidHour}:00:00 GMT+0530`,"time_7","time_local_our_7");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT+0400`,`${endDayRaid} ${endRaidHour}:00:00 GMT+0400`,"time_8","time_local_our_8");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT+0300`,`${endDayRaid} ${endRaidHour}:00:00 GMT+0300`,"time_9","time_local_our_9");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT+0200`,`${endDayRaid} ${endRaidHour}:00:00 GMT+0200`,"time_10","time_local_our_10");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT+0100`,`${endDayRaid} ${endRaidHour}:00:00 GMT+0100`,"time_11","time_local_our_11");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT+0000`,`${endDayRaid} ${endRaidHour}:00:00 GMT+0000`,"time_12","time_local_our_12");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT-0200`,`${endDayRaid} ${endRaidHour}:00:00 GMT-0200`,"time_13","time_local_our_13");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT-0230`,`${endDayRaid} ${endRaidHour}:00:00 GMT-0230`,"time_14","time_local_our_14");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT-0300`,`${endDayRaid} ${endRaidHour}:00:00 GMT-0300`,"time_15","time_local_our_15");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT-0400`,`${endDayRaid} ${endRaidHour}:00:00 GMT-0400`,"time_16","time_local_our_16");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT-0500`,`${endDayRaid} ${endRaidHour}:00:00 GMT-0500`,"time_17","time_local_our_17");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT-0600`,`${endDayRaid} ${endRaidHour}:00:00 GMT-0600`,"time_18","time_local_our_18");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT-0700`,`${endDayRaid} ${endRaidHour}:00:00 GMT-0700`,"time_19","time_local_our_19");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT-0800`,`${endDayRaid} ${endRaidHour}:00:00 GMT-0800`,"time_20","time_local_our_20");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT-1000`,`${endDayRaid} ${endRaidHour}:00:00 GMT-1000`,"time_21","time_local_our_21");
countdown(`${startDayRaid} ${startRaidHour}:00:00 GMT-1100`,`${endDayRaid} ${endRaidHour}:00:00 GMT-1100`,"time_22","time_local_our_22");


currentTime(+14,"time_local_1");
currentTime(+12,"time_local_2");
currentTime(+10,"time_local_3");
currentTime(+09,"time_local_4");
currentTime(+08,"time_local_5");
currentTime(+07,"time_local_6");
currentTime(+5.5,"time_local_7");
currentTime(+04,"time_local_8");
currentTime(+03,"time_local_9");
currentTime(+02,"time_local_10");
currentTime(+01,"time_local_11");
currentTime(+00,"time_local_12");
currentTime(-02,"time_local_13");
currentTime(-2.5,"time_local_14");
currentTime(-03,"time_local_15");
currentTime(-04,"time_local_16");
currentTime(-05,"time_local_17");
currentTime(-06,"time_local_18");
currentTime(-07,"time_local_19");
currentTime(-08,"time_local_20");
currentTime(-10,"time_local_21");
currentTime(-11,"time_local_22");




let community_day = document.getElementById('community_day');
let community_hour = document.getElementById('community_hour');

const local_day_hour = () => {
setInterval(() => {
    let community_date = new Date(); 
    community_day.innerHTML = `${dia(community_date.getDay())}, 
                               ${community_date.getDate()} de 
                               ${mes(community_date.getMonth())}. del 
                               ${community_date.getFullYear()}`;
    community_hour.innerHTML = `${time(community_date.getHours())}:${time(community_date.getMinutes())}:${time(community_date.getSeconds())}`;
}, 1000);   
}
local_day_hour();


window.onload = function () {
let loader = document.getElementById('onload');
loader.setAttribute('class','loader active');
}

