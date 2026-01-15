import { Component, Event, EventEmitter, Host, Listen, Prop, State, h } from '@stencil/core';


export type ThemeMode = "light" | "dark"
export type Theme = { name: ThemeMode, textSize: number }

/** 
 * @slot headline - menu item headline to replace the default headline */
@Component({
  tag: 'polyfea-md-theme-control',
  styleUrl: 'polyfea-md-theme-control.css',
  shadow: true,
})
export class PolyfeaMdThemeControl {

  /**
   * This property controls the display variant of the theme control. It can be used to render the control 
   * as an icon button or a menu item. 
   * 
   * The "preset" variant doesn't render anything but initializes the theme based on user preferences stored in local storage. 
   * Include this in your document to ensure the theme is properly initialized.
   */
  @Prop() variant: "button" | "menu-item" | "preset" = "button";

  /**
   * This property specifies which aspect of the theme is controlled by this element.
   */
  @Prop() control: "theme-toggle" | "text-increase" | "text-decrease" | "reset-font" = "theme-toggle";

  /**
   * This event is fired when the theme is changed by the user. 
   */
  @Event() themeChanged: EventEmitter<Theme>;

  @State() theme: Theme = { name: 'light', textSize: 16 };

  private html: HTMLHtmlElement

  /** Listens to theme changes and ensures the current state is reflected in control appereance */
  @Listen('themeChanged', { target: 'window' })
  themeChangedHandler(event: CustomEvent<Theme>) {
    if (this.theme.name !== event.detail.name || this.theme.textSize !== event.detail.textSize) {
      this.theme = Object.assign({}, event.detail);
    }
  }

  componentWillLoad() {
    this.html = document.querySelector('html');
    const preset = this.load();

    if (this.variant === "preset") {
      this.html.style.fontSize = preset.textSize + 'px';
      document.documentElement.className = 'theme-' + preset.name;
    }
    this.theme = preset;
  }


  render() {
    let theme = this.load()
    if (this.variant === "preset") {
      return '';
    }

    let icon = "";
    let label = "";
    switch (this.control) {
      case "theme-toggle":
        icon = theme.name === 'light' ? 'dark_mode' : 'light_mode';
        label = theme.name === 'light' ? 'Dark mode' : 'Light mode';
        break;
      case "text-increase":
        icon = "text_increase";
        label = "Increase font size";
        break;
      case "text-decrease":
        icon = "text_decrease";
        label = "Decrease font size";
        break;
      case "reset-font":
        icon = "text_format";
        label = "Reset font size";
        break;
    }

    return (
      <Host variant={this.variant}>
        {this.variant === "button"
          ? <md-icon-button onclick={() => this.do()}>
            <md-icon>{icon}</md-icon>
          </md-icon-button>
          : this.variant === "menu-item"
            ? <md-menu-item onclick={() => this.do()}>
              <md-icon slot="start">{icon}</md-icon>
              <div slot="headline">{label}</div>
            </md-menu-item>
            : ''
        }
      </Host>
    );
  }


  renderButton(icon: string) {
    return (
      <md-icon-button onclick={() => this.do()}>
        <md-icon>{icon}</md-icon>
      </md-icon-button>
    );
  }

  private load(): Theme {
    let theme = JSON.parse(localStorage.getItem('theme'));
    if (!theme) {
      theme = {};
      theme.textSize = parseInt(window.getComputedStyle(this.html).fontSize);
      theme.name = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  }

  private do() {

    let theme = this.load();

    switch (this.control) {
      case "theme-toggle":
        theme.name = theme.name == 'light' ? 'dark' : 'light';
        break;
      case "text-increase":
        theme.textSize += theme.textSize * 0.2
        break;
      case "text-decrease":
        if (theme.textSize > 0.01) {
          theme.textSize -= theme.textSize * 0.2
        }
        break;
      case "reset-font":
        theme.textSize = 16;
        break;
    }
    if (this.theme.name !== theme.name) {
      this.theme = theme;
      localStorage.setItem('theme', JSON.stringify(theme));
      document.documentElement.className = 'theme-' + theme.name;
      this.themeChanged.emit(theme);
    }

    if (this.theme.textSize !== theme.textSize) {
      this.theme.textSize = theme.textSize;
      localStorage.setItem('theme', JSON.stringify(theme));
      this.html.style.fontSize = theme.textSize + 'px';
      this.themeChanged.emit(theme);
    }

  }



}
