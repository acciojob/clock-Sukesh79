//your JS code here. If required.
function timing(){
	let timer = document.getElementById("timer");
	let time = new Date();
	timer.textContent = time.toLocaleString();
}
setInterval(timing, 1000);