'use client'

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe({width, height}) {
    const canvasRef = useRef();

    useEffect(() => {
        let phi = 0;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: height * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 5,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.05, color: "purple" },
                { location: [40.7128, -74.006], size: 0.05, color: "purple" }
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.0005;
            }
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div className="grid-paper">
            <canvas
             
                ref={canvasRef}
                style={{ width: width, height: height, maxWidth: "100%", aspectRatio: 1 }}
            />
        </div>
    );
}
