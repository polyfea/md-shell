import { ReactiveController, ReactiveControllerHost } from 'lit';
/**
 * A ReactiveController that uses ResizeObserver to monitor size changes of the host element.
 * It updates the host component whenever a resize is detected.
 *
 * @internal
 */
export declare class ResizeController implements ReactiveController {
    #private;
    private host;
    private observer;
    contentRect: DOMRectReadOnly | undefined;
    get mediaSize(): "small" | "medium" | "large";
    constructor(host: ReactiveControllerHost & HTMLElement, smallBreakpointRem?: number, mediumBreakpointRem?: number);
    setMediaBreakpoints(smallBreakpointRem: number, mediumBreakpointRem: number): void;
    hostConnected(): void;
    hostDisconnected(): void;
}
