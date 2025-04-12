import { useCallback, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

import { useMousePosition } from "../../hooks/useMouseposition";
import { cn } from "../../../lib/utils";

export default function GithubCardShiny({ className, img }: { className?: string ,  img:any }) {
    const containerRef = useRef<any>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const update = useCallback(({ x, y }: { x: number; y: number }) => {
        if (!overlayRef.current) {
            return;
        }

        const { width, height } = overlayRef.current?.getBoundingClientRect() ?? {};
        const xOffset = x - width / 2;
        const yOffset = y - height / 2;

        overlayRef.current?.style.setProperty("--x", `${xOffset}px`);
        overlayRef.current?.style.setProperty("--y", `${yOffset}px`);
    }, []);

    // Endi bu qator to'g'ri ishlaydi
    useMousePosition(containerRef, update);

    return (
        <div
            ref={containerRef}
            className={cn(
                "group relative w-96 min-w-fit max-w-full flex items-center justify-center overflow-hidden rounded-md border border-border bg-zinc-700 p-6 text-zinc-200 shadow-lg",
                className,
            )}
        >
            <div
                ref={overlayRef}
                className="-z-1 absolute h-64 w-64 rounded-full bg-white opacity-0 bg-blend-soft-light blur-3xl transition-opacity group-hover:opacity-20"
                style={{
                    transform: "translate(var(--x), var(--y))",
                }}
            />

                <img src={img} className="z-20" alt="" />

           
        </div>
    );
}