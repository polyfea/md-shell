import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html, nothing } from "lit";
import { within, within as withinShadow } from "shadow-dom-testing-library";
import { expect, fireEvent, waitFor } from "storybook/test";

import "../src/polyfea-md-shell";
import { PolyfeaMdShell } from "../src/polyfea-md-shell";
import "../src/polyfea-md-app";
import "../src/polyfea-md-apps";
import "../src/polyfea-md-drawer";
import "../src/polyfea-md-rail";
import "../src/polyfea-md-navigation-bar";
import "../src/polyfea-md-theme-control";
import "../src/polyfea-md-topbar";
import "../src/polyfea-md-locale-menu";
import { styleMap } from "lit-html/directives/style-map.js";
import { deepQuerySelector, deepQuerySelectorAll } from "./deep-query-selector";
import { PolyfeaMdThemeControl, type Theme } from "../src/polyfea-md-theme-control";
import { registerLocaleModule, setLocale } from "../src/localization";
import { combineArgs } from "storybook/internal/preview-api";

// Define a type for your component props
interface PolyfeaMdShellProps {
  applicationHeadline: string;
  topbarMoreDisabled: boolean;
  drawerDisabled: boolean;
  drawerCloseDisabled: boolean;
  railDisabled: boolean;
  navigationDisabled: boolean;
  themeMenu: boolean;
  localeMenu: boolean;
  topbarVariant: "centered" | "small" | "medium" | "large";
  vwWidth?: number;
  smallBreakpointRem?: number;
  mediumBreakpointRem?: number;
  locales?: string[];
  localesPath?: string;
  themePrimaryColor?: string;
  themeSecondaryColor?: string;

  mainContentContext?: Object;
  topbarLeadingContext?: Object;
  topbarTrailingContext?: Object;
  topBarMenuItemsContext?: Object;
  navigationContentContext?: Object;
  railPrimaryActionsContext?: Object;
  railContentContext?: Object;
  drawerContentContext?: Object;
}

const meta: Meta<PolyfeaMdShellProps> = {
  title: "Custom Elements/polyfea-md-shell",
  component: "polyfea-md-shell",
  tags: ["autodocs"],
  argTypes: {
    topbarVariant: {
      control: { type: "select" },
      options: ["centered", "small", "medium", "large"],
    },
    topbarMoreDisabled: { control: "boolean" },
    drawerDisabled: { control: "boolean" },
    drawerCloseDisabled: { control: "boolean" },
    railDisabled: { control: "boolean" },
    navigationDisabled: { control: "boolean" },
    themeMenu: { control: "boolean" },
    localeMenu: { control: "boolean" },
    vwWidth: {
      control: "number",
      table: {
        disable: true,
      },
    },
    smallBreakpointRem: {
      control: "number",
    },
    mediumBreakpointRem: {
      control: "number",
    },
    themePrimaryColor: {
      control: "color",
    },
    themeSecondaryColor: {
      control: "color",
    },

    // contexts
    mainContentContext: {
      name: "main-content",
      description:
        "Main content element(s). E.g . &lt;polyfea-md-apps&gt; for landing page or custom content on functionality pages." +
        " If no elements are provided then the shell will render elements with no slot specified",
      control: false,
      table: {
        category: "Polyfea Contexts",
      },
    },

    topbarLeadingContext: {
      name: "topbar-leading-icon",
      description:
        "Leading icon element. Only one element is taken from the context" +
        ' If no elements are provided then elements slotted to slot "topbar-leading" are used, or default hamburger menu icon is rendered',
      control: false,
      table: {
        category: "Polyfea Contexts",
      },
    },
    topbarTrailingContext: {
      name: "topbar-trailing-icon",
      description:
        "Trailing icon element. Only one element is taken from the context" +
        ' If no elements are provided then elements slotted to slot "topbar-trailing" are used, or default hamburger menu icon is rendered',
      control: false,
      table: {
        category: "Polyfea Contexts",
      },
    },

    topBarMenuItemsContext: {
      name: "topbar-menu-items",
      description:
        'Menu item elements. If no elements are provided then elements slotted to slot "topbar-menu-items" are used.',
      control: false,
      table: {
        category: "Polyfea Contexts",
      },
    },

    navigationContentContext: {
      name: "navigation-content",
      description:
        'Navigation content elements. Maximum 5 elements are taken from the context. Elements  &lt;polyfea-md-app&gt; are tuned for usage in this context. If no elements are provided then elements slotted to slot "navigation" are used. ',
      control: false,
      table: {
        category: "Polyfea Contexts",
      },
    },

    railPrimaryActionsContext: {
      name: "rail-primary-actions",
      description:
        'Rail primary actions (e.g. FAB). Only one element is taken. If no elements are provided then elements slotted to slot "rail-primary-action" are used. ',
      control: false,
      table: {
        category: "Polyfea Contexts",
      },
    },

    railContentContext: {
      name: "rail-content",
      description:
        'Rail navigation content. Maximum 7 elements are taken from the context. Elements  &lt;polyfea-md-app&gt; are tuned for usage in this context. If no elements are provided then elements slotted to slot "rail" are used.',
      control: false,
      table: {
        category: "Polyfea Contexts",
      },
    },

    drawerContentContext: {
      name: "drawer-content",
      description:
        'Drawer content elements (E.g. &lt;polyfea-md-app&gt; or &lt;polyfea-md-drawer-label&gt;). If no elements are provided then elements slotted to slot "drawer" are used.',
      control: false,
      table: {
        category: "Polyfea Contexts",
      },
    },
  },
  args: {
    applicationHeadline: "Polyfea Shell",
    topbarMoreDisabled: false,
    drawerDisabled: false,
    drawerCloseDisabled: false,
    railDisabled: false,
    navigationDisabled: false,
    themeMenu: true,
    localeMenu: true,
    topbarVariant: "small",
    smallBreakpointRem: 40,
    mediumBreakpointRem: 80,
    locales: ["en-us", "sk", "cs", "de"],
    localesPath: "./locales",
  },
  render: (args) => {
    const vwStyle = {
      boxSizing: "border-box",
      display: "block",
      top: "5px",
      left: "5px",
      right: "",
      width: "",
      minHeight: "40rem",
      height: "40rem",

      bottom: "5px",
      border: "1px solid #ccc",
    };
    if (!args.vwWidth) {
      vwStyle.right = "5px";
      vwStyle.width = "auto";
    } else {
      vwStyle.right = "auto";
      vwStyle.width = args.vwWidth + "rem";
    }

    return html`
      <div style=${styleMap(vwStyle)} class="viewport-wrapper">
        <polyfea-md-shell
          application-headline=${args.applicationHeadline}
          ?topbar-more-disabled=${args.topbarMoreDisabled}
          ?drawer-disabled=${args.drawerDisabled}
          ?drawer-close-disabled=${args.drawerCloseDisabled}
          ?rail-disabled=${args.railDisabled}
          ?navigation-disabled=${args.navigationDisabled}
          ?theme-menu=${args.themeMenu}
          ?locale-menu=${args.localeMenu}
          topbar-variant=${args.topbarVariant}
          small-breakpoint-rem=${args.smallBreakpointRem}
          medium-breakpoint-rem=${args.mediumBreakpointRem}
          .locales=${args.locales}
          locales-path=${args.localesPath}
          theme-primary-color=${args.themePrimaryColor || nothing}
          theme-secondary-color=${args.themeSecondaryColor || nothing}
        >
          <div style="padding: 20px;">
            <h2>Main Content</h2>
            <p>This is the main content area.</p>
          </div>
          <polyfea-md-app
            slot="drawer"
            headline="Search"
            material-icon="search"
            mode="drawer"
          ></polyfea-md-app>
          <polyfea-md-app
            slot="navigation"
            headline="Reports"
            material-icon="bar_chart"
            mode="navigation"
          ></polyfea-md-app>
          <polyfea-md-app
            slot="rail"
            headline="Favorites"
            material-icon="favorite"
            mode="rail"
          ></polyfea-md-app>
        </polyfea-md-shell>
      </div>
    `;
  },
};

export default meta;
type Story = StoryObj<PolyfeaMdShellProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The default configuration of the `polyfea-md-shell` component. It containts top bar, navigation rail, drawer, and navigation bar" +
          " with sample applications in each area. The content to this parts is loded via slots.",
      },
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = withinShadow(canvasElement);
    const shell = canvasElement.querySelector("polyfea-md-shell") as PolyfeaMdShell;

    // Simple existence checks using shadow DOM queries if elements inside render shadow dom
    // Note: Since shell uses slots, content is in light DOM of the wrapper in the story,
    // but structure is in shadow DOM of shell.

    // Assuming page element exists in shadow
    const page = shell.shadowRoot?.querySelector("page");
    await expect(page).toBeTruthy();
  },
};

export const MediumSize: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Shows how the shell renders in a medium-sized viewport (e.g., tablet). The layout behavior changes based on breakpoints attributes.",
      },
    },
  },
  args: {
    vwWidth: 60,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = withinShadow(canvasElement);
    const shell = canvasElement.querySelector("polyfea-md-shell") as PolyfeaMdShell;

    // Simple existence checks using shadow DOM queries if elements inside render shadow dom
    // Note: Since shell uses slots, content is in light DOM of the wrapper in the story,
    // but structure is in shadow DOM of shell.

    // Assuming page element exists in shadow
    const page = shell.shadowRoot?.querySelector("page");
    await expect(page).toBeTruthy();
  },
};

export const SmallSize: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Shows how the shell renders in a small-sized viewport (e.g., mobile). Elements like the rail are hidden and bottom navigation bar is shown.",
      },
    },
  },
  args: {
    vwWidth: 38,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = withinShadow(canvasElement);
    const shell = canvasElement.querySelector("polyfea-md-shell") as PolyfeaMdShell;

    // Simple existence checks using shadow DOM queries if elements inside render shadow dom
    // Note: Since shell uses slots, content is in light DOM of the wrapper in the story,
    // but structure is in shadow DOM of shell.

    // Assuming page element exists in shadow
    const page = shell.shadowRoot?.querySelector("page");
    await expect(page).toBeTruthy();
  },
};

export const LargeSize: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Shows how the shell renders in a large-sized viewport (e.g., desktop). Typically displays a persistent rail or drawer.",
      },
    },
  },
  args: {
    vwWidth: 100,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = withinShadow(canvasElement);
    const shell = canvasElement.querySelector("polyfea-md-shell") as PolyfeaMdShell;

    // Simple existence checks using shadow DOM queries if elements inside render shadow dom
    // Note: Since shell uses slots, content is in light DOM of the wrapper in the story,
    // but structure is in shadow DOM of shell.

    // Assuming page element exists in shadow
    const page = shell.shadowRoot?.querySelector("page");
    await expect(page).toBeTruthy();
  },
};

export const Responsive: Story = {
  parameters: {
    docs: {
      description: {
        story: "Size mode is responsive to viewport resizing. ",
      },
    },
  },
  args: {
    vwWidth: 100,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = withinShadow(canvasElement);
    const viewport = canvasElement.querySelector(".viewport-wrapper") as HTMLElement;
    const shell = canvasElement.querySelector("polyfea-md-shell") as PolyfeaMdShell;
    // Assuming page element exists in shadow
    const page = shell.shadowRoot?.querySelector("page");
    await expect(page).toBeTruthy();

    await step("page size at large width", async () => {
      await waitFor(async () => await expect(page).toHaveAttribute("size", "large"));
    });

    await step("resize to medium width", async () => {
      viewport.style.width = "70rem";
      await waitFor(async () => {
        await expect(page).toHaveAttribute("size", "medium");
      });
    });
  },
};

export const Localized: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The shell supports localization by providing context to register locale loaders and allowing to change the locale (see <polyfea-md-locale-menu> element)." +
          " this enables to dynamically load translation for ad hoc loaded modules through polyfea context and also enables to override translations by providing custom centralized loaders.",
      },
    },
  },
  args: {
    locales: ["en-us", "sk", "cs", "de"],
    localesPath: "./locales",
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = withinShadow(canvasElement);
    const shell = canvasElement.querySelector("polyfea-md-shell") as PolyfeaMdShell;

    await step("Check localization - force to en-us", async () => {
      setLocale("en-us");

      await waitFor(
        async () => {
          const mngmt = deepQuerySelector(
            'polyfea-md-app[headline="User Management"]',
            shell.shadowRoot!
          );
          await expect(mngmt).toBeInTheDocument();
          await expect(mngmt?.shadowRoot!).toHaveTextContent(/User Management/);
        },
        { timeout: 3000 }
      );
    });

    await step("switch to sk - app translated", async () => {
      setLocale("sk");
      await waitFor(
        async () => {
          const mngmt = deepQuerySelector(
            'polyfea-md-app[headline="User Management"]',
            shell.shadowRoot!
          );
          await expect(mngmt).toBeInTheDocument();
          await expect(mngmt?.shadowRoot!).toHaveTextContent(/Správa používateľov/);
        },
        { timeout: 3000 }
      );
    });

    await step("register new module locale loader and override mngmt translation", async () => {
      registerLocaleModule("test-module", ["sk"], () =>
        Promise.resolve({
          templates: {
            "user-management-title": "Používatelia - preklad z modulu",
            "dashboard-title": "Grafy a analýzy",
          },
        })
      );
      await waitFor(
        async () => {
          const mngmt = deepQuerySelector(
            'polyfea-md-app[headline="User Management"]',
            shell.shadowRoot!
          );
          await expect(mngmt).toBeInTheDocument();
          await expect(mngmt?.shadowRoot!).toHaveTextContent(/Správa používateľov/); // overrides shall still override

          const dashboard = deepQuerySelector(
            'polyfea-md-app[headline="Dashboard"]',
            shell.shadowRoot!
          );
          await expect(dashboard).toBeInTheDocument();
          await expect(dashboard?.shadowRoot!).toHaveTextContent(/Grafy a analýzy/);
        },
        { timeout: 3000 }
      );
    });

    await step("load-exception is ignored", async () => {
      registerLocaleModule("test-module-2", ["sk"], () => {
        throw new Error("Load exception");
      });
      await waitFor(
        async () => {
          const mngmt = deepQuerySelector(
            'polyfea-md-app[headline="User Management"]',
            shell.shadowRoot!
          );
          await expect(mngmt).toBeInTheDocument();
          await expect(mngmt?.shadowRoot!).toHaveTextContent(/Správa používateľov/); // overrides shall still override

          const dashboard = deepQuerySelector(
            'polyfea-md-app[headline="Dashboard"]',
            shell.shadowRoot!
          );
          await expect(dashboard).toBeInTheDocument();
          await expect(dashboard?.shadowRoot!).toHaveTextContent(/Grafy a analýzy/);
        },
        { timeout: 3000 }
      );
    });

    await step("reset to browser preference", async () => {
      setLocale("");
    });
  },
};

let query: MediaQueryList;

export const Theming: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The shell supports theming via CSS custom properties. Theme palettes and font types can be customized. ",
      },
    },
  },
  args: {
    themePrimaryColor: "#00695C", //teal
    themeSecondaryColor: "#C62828", //red
  },
  play: async ({ canvasElement, step, args }) => {

      const THEME_STORAGE_KEY = (PolyfeaMdThemeControl as any)._THEME_STORAGE_KEY;
      const shell = canvasElement.querySelector("polyfea-md-shell") as PolyfeaMdShell;

      await step("set initially to light theme", async () => {
        shell.dispatchEvent(
          new CustomEvent<Theme>(PolyfeaMdThemeControl.THEME_CHANGED_EVENT, {
            detail: { isDark: false, scale: 1, followSystemTheme: false },
            bubbles: true,
            composed: true,
          })
        );
        await waitFor(async () => {
          const page = deepQuerySelector("page", shell.shadowRoot!);
          await expect(page).toHaveAttribute("theme", "light");
        });
      });

      await step("Change to dark theme", async () => {
        shell.dispatchEvent(
          new CustomEvent<Theme>(PolyfeaMdThemeControl.THEME_CHANGED_EVENT, {
            detail: { isDark: true, scale: 1, followSystemTheme: false },
            bubbles: true,
            composed: true,
          })
        );
        await waitFor(async () => {
          const page = deepQuerySelector("page", shell.shadowRoot!);
          await expect(page).toHaveAttribute("theme", "dark");
        });
      });

      await step("Change media preference ", async () => {
        localStorage.setItem(
          THEME_STORAGE_KEY,
          JSON.stringify({ isDark: false, scale: 1, followSystemTheme: true })
        );
        window.dispatchEvent(
          new MediaQueryListEvent(PolyfeaMdThemeControl.THEME_CHANGED_EVENT, {
            matches: false,
            media: "(prefers-color-scheme: dark)",
            bubbles: true,
            composed: true,
          })
        );
        await waitFor(async () => {
          const page = deepQuerySelector("page", shell.shadowRoot!);
          await expect(page).toHaveAttribute("theme", "light");
        });
      });

      await step("ignore media preference when user preference set", async () => {
        localStorage.setItem(
          THEME_STORAGE_KEY,
          JSON.stringify({ isDark: false, scale: 1, locale: "en-us", followSystemTheme: false })
        );
        window.dispatchEvent(
          new MediaQueryListEvent(PolyfeaMdThemeControl.THEME_CHANGED_EVENT, {
            matches: true,
            media: "(prefers-color-scheme: dark)",
            bubbles: true,
            composed: true,
          })
        );
        await waitFor(async () => {
          const page = deepQuerySelector("page", shell.shadowRoot!);
          await expect(page).toHaveAttribute("theme", "light");
        });
      });
    
  },
};

export const Drawer: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Drawer behaviour depends on media size, here shown in medium size viewport. The drawer can be opened/closed via events or buttons in the top bar and drawer itself.",
      },
    },
  },
  args: {
    drawerDisabled: false,
    vwWidth: 72,
  },

  play: async ({ canvasElement, step, args }) => {
    const canvas = withinShadow(canvasElement);
    const shell = canvasElement.querySelector("polyfea-md-shell") as PolyfeaMdShell;
    const drawer = shell.shadowRoot?.querySelector("drawer");

    await step("Open drawer by event", async () => {
      shell.dispatchEvent(new CustomEvent("drawer-opened"));
      await waitFor(
        async () => {
          await expect(drawer).toHaveAttribute("open");
        },
        { timeout: 2000 }
      );
    });
    await step("Close drawer by event", async () => {
      shell.dispatchEvent(new CustomEvent("drawer-closed"));
      await waitFor(async () => {
        await expect(drawer).not.toHaveAttribute("open");
      });
    });
    await step("Open drawer by button", async () => {
      await waitFor(async () => {
      const open = deepQuerySelector(
        "md-icon-button.drawer-button",
        shell.shadowRoot!
      ) as HTMLElement;
      await expect(open).toBeInTheDocument();
      await withinShadow(open).getByShadowRole("button").click();
    });

      await waitFor(async () => {
        await expect(drawer).toHaveAttribute("open");
      });
    });
    await step("Close drawer by button", async () => {
      const close = deepQuerySelector(
        "md-icon-button.close-button",
        shell.shadowRoot!
      ) as HTMLElement;
      await expect(close).toBeInTheDocument();
      await withinShadow(close).getByShadowRole("button").click();

      await waitFor(async () => {
        await expect(drawer).not.toHaveAttribute("open");
      });
    });
    await step("Re-Open drawer", async () => {
      shell.dispatchEvent(new CustomEvent("drawer-opened"));
      await waitFor(
        async () => {
          await expect(drawer).toHaveAttribute("open");
        },
        { timeout: 2000 }
      );
    });
    await step("Close by clicking on drawer", async () => {
      const drawer = deepQuerySelector("drawer", shell.shadowRoot!) as HTMLElement;
      await expect(drawer).toBeInTheDocument();
      drawer.dispatchEvent(new MouseEvent("click", { bubbles: true, composed: true }));

      await waitFor(async () => {
        await expect(drawer).not.toHaveAttribute("open");
      }, { timeout: 3000 });
    });
    await step("Re-Open drawer", async () => {
      shell.dispatchEvent(new CustomEvent("drawer-opened"));
      await waitFor(
        async () => {
          await expect(drawer).toHaveAttribute("open");
        },
        { timeout: 2000 }
      );
    });
  },
};

export const ScrollableContent: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Top bar reflects scroll state of the main content area by applying specific  background-color  based on scroll position.",
      },
    },
  },
  args: {
    vwWidth: 30,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = withinShadow(canvasElement);
    const shell = canvasElement.querySelector("polyfea-md-shell") as PolyfeaMdShell;
    const topbar = deepQuerySelector("topbar", shell.shadowRoot!) as HTMLElement;
    await expect(topbar).toBeInTheDocument();
    const main = deepQuerySelector("main", shell.shadowRoot!) as HTMLElement;
    await expect(main).toBeInTheDocument();

    await waitFor(
      async () => {
        // make content scrollable
        const apps = deepQuerySelectorAll("polyfea-md-app", shell.shadowRoot!);
        expect(apps.length).toBeGreaterThan(3);
      },
      { timeout: 3000 }
    );
    await step("Check topbar is not scrolled initially", async () => {
      await waitFor(async () => {
        await expect(topbar).not.toHaveAttribute("scrolled");
      });
    });

    await step("Check topbar scrolled attribute on content scroll", async () => {
      main.scrollTop = 100;
      fireEvent.scroll(main, { target: { scrollTop: 100 }, bubbles: true, composed: true });

      await waitFor(async () => {
        await expect(topbar).toHaveAttribute("scrolled");
      });
    });

    await step("Check topbar scrolled attribute removed on scroll to top", async () => {
      main.scrollTop = 0;
      main.dispatchEvent(new Event("scroll"));

      await waitFor(async () => {
        await expect(topbar).not.toHaveAttribute("scrolled");
      });
    });

    await step("scroll againl", async () => {
      main.scrollTop = 300;
      fireEvent.scroll(main, { target: { scrollTop: 300 }, bubbles: true, composed: true });

      await waitFor(async () => {
        await expect(topbar).toHaveAttribute("scrolled");
      });
    });
  },
};

export const NoDrawer: Story = {
  parameters: {
    docs: {
      description: {
        story: "The drawer may be removed from the shell",
      },
    },
  },
  args: {
    drawerDisabled: true,
  },
};

export const NoRail: Story = {
  parameters: {
    docs: {
      description: {
        story: "The navigation rail may be removed from the shell",
      },
    },
  },
  args: {
    railDisabled: true,
  },
};

export const NoNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story: "The navigation bar may be removed from the shell (typically affects mobile views).",
      },
    },
  },
  args: {
    navigationDisabled: true,
  },
};

export const AllDisabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Configuration with all navigation areas (drawer, rail, navigation bar) disabled, showing mostly just the content and top bar.",
      },
    },
  },
  args: {
    drawerDisabled: true,
    railDisabled: true,
    navigationDisabled: true,
  },
};

export const TopbarVariants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Top bar variant may be also configured (e.g., centered, small, medium, large). This can affect headline size and positioning.",
      },
    },
  },
  args: {
    topbarVariant: "centered",
  },
};
