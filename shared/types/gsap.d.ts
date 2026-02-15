interface fromToOptions {
    scale?: number;
    opacity?: number;
    y?: number | string;
    ease?: string;
    stagger?: number,
}
interface fromToOptions2 extends fromToOptions {
    scrollTrigger?: {
        start?: string;
        end?: string;
        scrub?: number;
        toggleActions?: string;
    }
}