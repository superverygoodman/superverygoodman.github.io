console.log("작동중?")
    let cust_now;
    let vari;
window.addEventListener('DOMContentLoaded', async () => {
    cust_now = await loadTime();
    document.querySelectorAll(".reading-time").forEach(ele => {
        let post = new Date(ele.dataset.posttime);
        let time_diffrence = cust_now.getTime() -post.getTime();
        console.log(time_diffrence)
        
    })
});
async function loadTime () {
  const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Seoul');
  const data = await response.json();
  return new Date(data.datetime);
}

console.log("3차수정이요")
console.log("3차수정이요")
console.log("3차수정이요")
console.log("3차수정이요")
console.log("3차수정이요")
