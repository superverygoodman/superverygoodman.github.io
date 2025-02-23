const now = new Date();
const utc = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
const koreaTimeDiff = 9 * 60 * 60 * 1000;
const korNow = new Date(utc+koreaTimeDiff);
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".reading-time").forEach(ele => {
        let post = new Date(ele.dataset.posttime);
        let time_difference = korNow.getTime() -post.getTime();
        console.log("post : "+post);
        console.log(time_difference)
        if (time_difference < 60 ) {
            ele.innerText = (parseInt(time_difference/1000)) + "초 전"
        } else if (time_difference < 3600000) {
            ele.innerText = (parseInt(time_difference/60/1000)) + "분 전"
        } else if (time_difference < 86400000) {
            ele.innerText = (parseInt(time_difference/3600/1000)) + "시간 전"
        } else if (time_difference < 2592000000 ) {
            ele.innerText = (parseInt(time_difference/86400/1000)) + " 일 전"
        } else if (time_difference < 31536000000 ) {
            ele.innerText = (parseInt(time_difference/2592000/1000)) + "개월 전"
        } else if (time_difference > 31536000000) {
            ele.innerText = (parseInt(time_difference/31536000/1000)) + "년 전"
        } else {

        }
    })
});

