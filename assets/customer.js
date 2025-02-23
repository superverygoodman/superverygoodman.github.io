console.log("작동중?")
window.addEventListener('DOMContentLoaded', () => {
    fetch('https://worldtimeapi.org/api/timezone/Asia/Seoul')
    .then(response => response.json())
.then(resp => {console.log(resp)})
});
