let a;
let date;
let time;

setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + '<br> on' + date;
}, 1000);

function onLoad() {
    location.reload();
}
