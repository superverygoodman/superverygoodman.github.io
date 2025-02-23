const now = new Date();
const utc = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
const koreaTimeDiff = 9 * 60 * 60 * 1000;
const korNow = new Date(utc+koreaTimeDiff);
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".reading-time").forEach(ele => {
        let post = ele.dataset.posttime;
        let time_diffrence = korNow.getTime() -post;
        console.log("post : "+post);
        console.log(time_diffrence)
        
    })
});
