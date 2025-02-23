console.log("작동중?")
    let cust_now;
    let vari;
window.addEventListener('DOMContentLoaded', () => {
    cust_now = loadTime();
    document.querySelectorAll(".reading-time").forEach(ele => {
        let post = new Date(ele.dataset.posttime);
        let time_diffrence = post.getTime()
        console.log(time_diffrence)
        
    })
});
async function loadTime () {
    await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Seoul')
    .then(response => response.json())
    .then(response => {
        let time = new Date(response.datetime);
        console.log(time)
        console.log(response)
        vari = response;
        return time;
    })
}
console.log("이건커밋용")
console.log("이건커밋용")
console.log("이건커밋용")
