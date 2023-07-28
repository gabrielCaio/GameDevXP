const canvas = document.getElementById("canvas");
const btn = document.getElementById("btn");

const ctx = canvas.getContext('2d');

document.body.addEventListener("keypress", (e) => {
    if(e.key === 'l') {
        ctx.beginPath();
        ctx.moveTo(20, 20);
        ctx.lineTo(20, 100);
        ctx.lineTo(70, 100);
        ctx.stroke();
    }
});