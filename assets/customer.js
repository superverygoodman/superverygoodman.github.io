window.addEventListener('DOMContentLoaded', async () => {
    const data_load = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Seoul');
    const data = await data_load.json();
    let cust_now = new Date(data.dateTime);
    console.log(cust_now.getTime())
    document.querySelectorAll(".reading-time").forEach(ele => {
        let post = ele.dataset.posttime;
        let time_diffrence = cust_now.getTime() -post;
        console.log("post : "+post);
        console.log(time_diffrence)
        
    })
});
