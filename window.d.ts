export as namespace jdenticon;
export = jdenticon;

declare interface JdenticonConfig {
    hues?: string[];
    lightness?: {
        color?: number[];
        grayscale?: number[];
    };
    saturation?: {
        color?: number;
        grayscale?: number;
    };
    /* #rgb, #rgba, #rrggbb, #rrggbbaa */
    backColor?: string;
    replaceMode?: "once" | "never" | "observe";
}

/** @deprecated */
declare var jdenticon_config: JdenticonConfig;

declare namespace jdenticon {
    export function drawIcon(ctx: CanvasRenderingContext2D, hashOrValue: string | any, size: number, padding?: number): void;

    export function toSvg(hashOrValue: string | any, size: number, padding?: number): string;

    export function update(el: string | Element, hash?: string, padding?: number): void;

    export let config: JdenticonConfig;

    export const version: string;
}
