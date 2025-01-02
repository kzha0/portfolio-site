import { useEffect, useRef } from "react";

import { renderCanvas } from "./waveGenerator";

interface CascadingWavesProps {
    show?: boolean
}

export const CascadingWaves: React.FC<CascadingWavesProps> = ({ show = true }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            renderCanvas(canvasRef.current, show);
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: "100%",
                height: "100%",
            }}
        />
    );
};
