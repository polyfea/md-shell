import { type ReactiveController, type ReactiveControllerHost } from "lit";

/**
 * A ReactiveController that uses ResizeObserver to monitor size changes of the host element.
 * It updates the host component whenever a resize is detected.
 *
 * @internal
 */
export class ResizeController implements ReactiveController {
  private host: ReactiveControllerHost & HTMLElement;
  private observer: ResizeObserver;

  public contentRect: DOMRectReadOnly | undefined;
  #mediaSize: "small" | "medium" | "large" | undefined;
  get mediaSize() {
    this.#updateMediaSize();
    return this.#mediaSize || "medium";
  }

  #smallBreakpointRem: number;
  #mediumBreakpointRem: number;

  constructor(
    host: ReactiveControllerHost & HTMLElement,
    smallBreakpointRem = 40,
    mediumBreakpointRem = 80
  ) {
    this.host = host;
    this.#smallBreakpointRem = smallBreakpointRem;
    this.#mediumBreakpointRem = mediumBreakpointRem;
    host.addController(this);

    this.observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.contentRect = entry.contentRect;
        this.#updateMediaSize(true);
      }
    });
  }

  setMediaBreakpoints(smallBreakpointRem: number, mediumBreakpointRem: number) {
    this.#smallBreakpointRem = smallBreakpointRem;
    this.#mediumBreakpointRem = mediumBreakpointRem;
    this.#updateMediaSize();
  }

  hostConnected() {
    this.observer.observe(this.host);
  }

  hostDisconnected() {
    this.observer.disconnect();
  }

  #updateMediaSize(force: boolean = false) {
    if (force || this.#mediaSize === undefined) {
      if (!this.contentRect?.width) {
        this.#mediaSize = undefined;
        return;
      }

      const rootStyle = getComputedStyle(document.documentElement);
      const rootFontSize = parseFloat(rootStyle.fontSize);
      const widthInRem = this.contentRect!.width / rootFontSize;

      const previousMediaSize = this.#mediaSize;
      if (widthInRem < this.#smallBreakpointRem) {
        this.#mediaSize = "small";
      } else if (widthInRem < this.#mediumBreakpointRem) {
        this.#mediaSize = "medium";
      } else {
        this.#mediaSize = "large";
      }

      if (previousMediaSize !== this.mediaSize) {
        this.host.requestUpdate();
      }
    }
  }
}
