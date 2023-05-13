class Confetti {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const numberOfParticles = 250;
        const pastelColors = ['#FFD1DC', '#FFE4E1', '#FFF0F5', '#F0FFF0', '#FFF5EE', '#F0FFFF'];
        for (let i = 0; i < numberOfParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 10 + 2,
                weight: Math.random() * 2 + 1,
                color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
            });
        }
    }

    animateParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(p.x, p.y, p.size, p.size);

            p.x += Math.random() - 0.5;
            p.y += p.weight;
            p.size -= 0.05;

            if (p.size < 0) {
                p.x = Math.random() * this.canvas.width;
                p.y = 0;
                p.size = Math.random() * 10 + 2;
                p.weight = Math.random() * 2 + 1;
            }
        }
        requestAnimationFrame(this.animateParticles.bind(this));
    }

    init() {
        this.createParticles();
        this.animateParticles();
    }
}

let audioHasPlayed = false;

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("confetti");
    const confetti = new Confetti(canvas);
    confetti.init();
    const mothersDayHeading = document.querySelector("h1");
   
});

document.getElementById("read-more").addEventListener("click", function () {
    const story = document.getElementById("story");
    story.classList.toggle("hidden");
    const mothersDayAudio = document.querySelector('audio');
    mothersDayAudio.classList.toggle('hidden')
    if (!audioHasPlayed) 
    {
        mothersDayAudio.play();
        audioHasPlayed = true;
    }
    if (document.getElementById("read-more").innerHTML === "Hide message") {
    document.getElementById("read-more").innerHTML = "Click for message &hearts;";
    } else {
    document.getElementById("read-more").innerHTML = "Hide message";
    }
});
