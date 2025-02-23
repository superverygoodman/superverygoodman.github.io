console.log("작동중?")
    let cust_now;
window.addEventListener('DOMContentLoaded', () => {
    fetch('https://worldtimeapi.org/api/timezone/Asia/Seoul')
    .then(response => response.json())
    .then(response => {
        cust_now = new Date(response.datetime)
        console.log(cust_now)
    })
});
