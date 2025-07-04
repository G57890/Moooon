const g = 1.62;
let t;
let v;
document.getElementById("cal").onclick = function() {
    t = Number(t);
    t = document.getElementById("time").value 
    v = t * g
    document.getElementById("speed").textContent = `The speed is ${v} m/s`
}