import { createNoise3D } from "simplex-noise";

const noise3D = createNoise3D();

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let canvasCentered: boolean;
let shouldRender: boolean;

function map(n: number, a: number, b: number, c: number, d: number) {
    return ((n - a) * (d - c)) / (b - a) + c;
}

function cosine(input: number, factor = 1) {
    return Math.cos(input % (Math.PI * 2)) * factor;
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function centerCanvas() {
    ctx.translate(canvas.width / 2, canvas.height / 2);
    canvasCentered = true;
}

function hsl(hue: number, sat: number, light: number, alpha = 1) {
    hue = hue % 360;
    hue += hue < 0 ? 360 : 0;
    return `hsl(${hue} ${sat}% ${light}% / ${alpha})`;
}

const setStrokeStyle = (
    strokeStyle: string | CanvasGradient | CanvasPattern,
    strokeWidth?: number
) => {
    ctx.strokeStyle = strokeStyle;
    if (strokeWidth) {
        ctx.lineWidth = strokeWidth;
    }

    return ctx.strokeStyle;
};

/* -------------------------------------------------------------------------- */


// todo:
// parameters for:
// frequency (how many oscillations on a wave, harmonies etc.)
// amplitude (maximum height of oscillations)
// speed (rate of change between frames/random oscillations)
// waves and segments count
// granularity (the "zoom" on the perlin noise, controls degree of variation or smoothness of each wave to each other. lower granularity gives a more chaotic look, higher granularity gives a more continuous or consistent look of oscillations between waves)
// spread - how far apart is each wave along the perlin noise map? how many dimensions or iterations is the interval between each wave?
// modes: 3d effect (dissapating/fading lines along z-axis), normal, string (fixed start and end point, varying along the middle), mouse-responsive (oscillate based on movement of mouse)

function draw(e: number) {
    const waveSegments: number = 100;
    const waveCount: number = 5;

    // incremental amounts for cell coordinates
    const incrementX = waveSegments == 1 ? 1 : 1 / (waveSegments - 1);
    const incrementY = waveCount == 1 ? 1 : 1 / (waveCount - 1);

    // time step - used as frequency multiplier for noise
    let time = e * 0.0001;
    const timeStep = 0.01;

    // create linear gradient
    const gradient = ctx.createLinearGradient(-canvas.width, 0, canvas.width, canvas.height);

    // take the modulo 1 of the time and treated as a boolean
    const t = time % 1;
    const tSide = Math.floor(time % 2) === 0;

    const hueA = tSide ? 340 : 210;
    const hueB = !tSide ? 340 : 210;

    // set left and right colors from hsl
    const colorA = hsl(hueA, 100, 50);
    const colorB = hsl(hueB, 100, 50);

    // assign colors to the gradient using t
    gradient.addColorStop(map(t, 0, 1, 1/3, 0 ), colorA);
    gradient.addColorStop(map(t, 0, 1, 2/3, 1/3), colorB);
    gradient.addColorStop(map(t, 0, 1, 1, 2/3), colorA);

    // reduce alpha value
    ctx.globalAlpha = map(cosine(time), -1, 1, 0.15, 0.3);
    // ctx.save();

    // ctx.restore();
    ctx.globalAlpha = 1;

    // new path and loop through y-count and x-count
    ctx.beginPath();
    for (let currentWave = 0; currentWave < waveCount; currentWave++) {
        const tj = currentWave * incrementY;
        const c = cosine(tj * (Math.PI * 2) * time) * 0.1;
        for (let currentSegment = 0; currentSegment < waveSegments; currentSegment++) {
            const t = currentSegment * incrementX;

            // generate noise using 3d noise
            const noise = noise3D(t, time, c);

            // scale the noise
            const y = noise * ((canvas.height * 0.4) / 2);
            const x = t * (canvas.width + 20) - (canvas.width / 2);

            // either moveTo or lineTo to draw the shape
            if (currentSegment) {
                ctx.lineTo(x, y)
            } else {
                ctx.moveTo(-canvas.width / 2, y);
            }
            // (currentSegment > 0 ? ctx.lineTo : ctx.moveTo)(x, y);
            // ctx.lineTo(x, y);
        }

        // increase time after every iteration
        time += timeStep;
    }
    ctx.globalCompositeOperation = "lighter";

    setStrokeStyle(gradient, 1.2);
    ctx.stroke();
    ctx.filter = "blur(5px)";

    setStrokeStyle(hsl(0, 0, 100, 0.2), 1.5);
    ctx.stroke();
    ctx.closePath();
}

function render(timestamp: number | undefined = 1) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (shouldRender) {
        ctx.save();

        if (!canvasCentered) {
            centerCanvas();
        }

        // compensates odd-numbered width and height of a canvas
        const offX = canvas.width % 2 ? 0.5 : 0;
        const offY = canvas.height % 2 ? 0.5 : 0;
        (offX || offY) && ctx.translate(offX, offY);

        draw(timestamp);

        ctx.restore();

        canvasCentered = false;
        window.requestAnimationFrame(render);
    }
}

export const renderCanvas = (targetCanvas: HTMLCanvasElement, show = true) => {
    canvas = targetCanvas;
    ctx = canvas.getContext("2d")!;
    shouldRender = show;

    document.body.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);
    render();
    resizeCanvas();
};
