console.log("작동중?")
    let cust_now;
    let vari;
window.addEventListener('DOMContentLoaded', () => {
    cust_now = loadTime();
    document.querySelectorAll(".reading-time").forEach(ele => {
        let post = new Date(ele.dataset.posttime);
        let time_diffrence = post.getTime() - cust_now.getTime()
        console.log(time_diffrence)
    })
});
async function loadTime () {
    await fetch('https://worldtimeapi.org/api/timezone/Asia/Seoul')
    .then(response => response.json())
    .then(response => {
        let time = new Date(response.datetime);
        console.log(time)
        console.log(response)
        vari = response;
        return time;
    })
}
