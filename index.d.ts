// Type definitions for Jdenticon 1.3.2
// Project: http://jdenticon.com/
// Definitions by: Martin Thorsen Ranang <https://github.com/mtr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
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
    export function toSvg(hashOrValue: string | any, size: number, padding?: number): string;

    export function toPng(hashOrValue: string | any, size: number, padding?: number): Buffer

    export let config: JdenticonConfig;

    export const version: string;
}
