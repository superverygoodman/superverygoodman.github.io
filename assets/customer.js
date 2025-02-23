console.log("작동중?")
window.addEventListener('DOMContentLoaded', () => {
    let cust_now;
    fetch('https://worldtimeapi.org/api/timezone/Asia/Seoul')
    .then(response => response.json())
    .then(response => {
        cust_now = new Date(response.datetime)
        console.log(cust_now)
    })
});
