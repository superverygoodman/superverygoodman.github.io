const now = new Date();
const utc = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
const koreaTimeDiff = 9 * 60 * 60 * 1000;
const korNow = new Date(utc+koreaTimeDiff);
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".reading-time").forEach(ele => {
        let post = ele.dataset.posttime;
        let time_difference = korNow.getTime() -post;
        console.log("post : "+post);
        console.log(time_difference)
        if (time_difference < 60 ) {
            ele.innerText = (parseInt(time_difference)) + "초 전"
        } else if (time_difference < 3600) {
            ele.innerText = (parseInt(time_difference/60)) + "분 전"
        } else if (time_difference < 86400) {
            ele.innerText = (parseInt(time_difference/3600)) + "시간 전"
        } else if (time_difference < 2592000 ) {
            ele.innerText = (parseInt(time_difference/86400)) + " 일 전"
        } else if (time_difference < 31536000 ) {
            ele.innerText = (parseInt(time_difference/2592000)) + "개월월 전"
        } else if (time_difference > 31536000) {
            ele.innerText = (parseInt(time_difference/31536000)) + "년 전"
        } else {

        }
    })
});
