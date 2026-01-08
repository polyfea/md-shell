import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { expect, waitFor } from 'storybook/test';
import { html } from 'lit';
import { within as withinShadow } from 'shadow-dom-testing-library';
import '../src/polyfea-md-app';
import { PolyfeaMdApp } from '../src/polyfea-md-app';

interface PolyfeaMdAppProps {
  headline: string;
  shortHeadline: string;
  supportingText: string;
  tileImgSrc: string;
  iconSrc: string;
  materialIcon: string;
  tileImgDisabled: boolean;
  href: string;
  isActivePrefix: boolean;
  context: string;
  mode: 'tile' | 'drawer' | 'rail' | 'navigation' | null;
}

const meta = {
  title: 'Polyfea MD Shell/polyfea-md-app',
  component: 'polyfea-md-app',
  tags: ['autodocs'],
  render: args => html`
    <polyfea-md-app
      headline=${args.headline}
      short-headline=${args.shortHeadline}
      supporting-text=${args.supportingText}
      tile-img-src=${args.tileImgSrc}
      icon-src=${args.iconSrc}
      material-icon=${args.materialIcon}
      tile-img-disabled=${args.tileImgDisabled}
      href=${args.href}
      ?is-active-prefix=${args.isActivePrefix}
      context=${args.context}
      mode=${args.mode}
    ></polyfea-md-app>
  `,
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['tile', 'drawer', 'rail', 'navigation'],
    },
    context: {
      control: { type: 'select' },
      options: ['', 'drawer-content', 'rail-content', 'navigation-content'],
    },
    tileImgDisabled: { control: 'boolean' },
    isActivePrefix: { control: 'boolean' },
  },
  args: {
    headline: 'Application Name',
    shortHeadline: 'App',
    supportingText: 'Description of the application goes here.',
    tileImgSrc: 'https://picsum.photos/300/200',
    iconSrc: 'https://picsum.photos/48/48',
    href: '#42',
  },
} satisfies Meta<PolyfeaMdAppProps>;

export default meta;
type Story = StoryObj<PolyfeaMdAppProps>;

export const TileMode: Story = {
  args: {
    mode: 'tile',
  },

  play: async ({ canvasElement, args, step }) => {
    const canvas = withinShadow(canvasElement);
    const appElement = canvasElement.querySelector('polyfea-md-app') as PolyfeaMdApp;
    const shadow = canvasElement.querySelector('polyfea-md-app')?.shadowRoot;

    await step('Check tile elements are rendered', async () => {
      const headline = await canvas.findByShadowText(args.headline);
      await expect(headline).toBeInTheDocument();
      const supportingText = await canvas.findByShadowText(args.supportingText);
      await expect(supportingText).toBeInTheDocument();
      const link = await canvas.findByShadowRole('link');
      await expect(link).toBeInTheDocument();
      await waitFor(() => expect(link).toHaveAttribute('href', args.href));
      const img = shadow?.querySelector('img');
      await expect(img).toBeInTheDocument();
      await expect(img).toHaveAttribute('src', args.tileImgSrc);
    });

  },
};

export const TileModeWithDisabledImage: Story = {
  args: {
    mode: 'tile',
    tileImgDisabled: true,
  },

  play: async ({ canvasElement, args, step }) => {
    const canvas = withinShadow(canvasElement);
    const appElement = canvasElement.querySelector('polyfea-md-app') as PolyfeaMdApp;
    const shadow = canvasElement.querySelector('polyfea-md-app')?.shadowRoot;

    await step('Check tile elements are rendered', async () => {
      const headline = await canvas.findByShadowText(args.headline);
      await expect(headline).toBeInTheDocument();
      const supportingText = await canvas.findByShadowText(args.supportingText);
      await expect(supportingText).toBeInTheDocument();
      const link = await canvas.findByShadowRole('link');
      await expect(link).toBeInTheDocument();
      await waitFor(() => expect(link).toHaveAttribute('href', args.href));
      const img = shadow?.querySelector('img');
      await expect(img).toBeFalsy();
    });

    await step('Simulate navigation and check isActive updates', async () => {    });
  },
};



export const DrawerMode: Story = {
  args: {
    context: 'drawer-content',
    mode: 'drawer',
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = withinShadow(canvasElement);
    const appElement = canvasElement.querySelector('polyfea-md-app') as PolyfeaMdApp;
    const shadow = canvasElement.querySelector('polyfea-md-app')?.shadowRoot;

    await step('Check icon elements are rendered', async () => {
      const headline = await canvas.findByShadowText(args.shortHeadline);
      await expect(headline).toBeInTheDocument();
      const link = await canvas.findByShadowRole('link');
      await expect(link).toBeInTheDocument();
      await waitFor(() => expect(link).toHaveAttribute('href', args.href));
      const img = shadow?.querySelector('img');
      await expect(img).toBeInTheDocument();
      await expect(img).toHaveAttribute('src', args.iconSrc);
    });
    
  },
};

export const DrawerModeWithMaterialIcon: Story = {
  args: {
    context: 'drawer-content',
    mode: 'drawer',
    iconSrc: '',
    materialIcon: 'search',
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = withinShadow(canvasElement);
    const appElement = canvasElement.querySelector('polyfea-md-app') as PolyfeaMdApp;
    const shadow = canvasElement.querySelector('polyfea-md-app')?.shadowRoot;

    await step('Check icon elements are rendered', async () => {
      const headline = await canvas.findByShadowText(args.shortHeadline);
      await expect(headline).toBeInTheDocument();
      const link = await canvas.findByShadowRole('link');
      await expect(link).toBeInTheDocument();
      await waitFor(() => expect(link).toHaveAttribute('href', args.href));
      const img = shadow?.querySelector('img');
      await expect(img).not.toBeInTheDocument();
      const icon = shadow?.querySelector('md-icon');
      await expect(icon).toBeInTheDocument();
      await expect(icon).toHaveTextContent(args.materialIcon);
    });
  },
};

export const DrawerModeWithIconSlot: Story = {
  args: {
    context: 'drawer-content',
    iconSrc: '',
    materialIcon: '',
  },
  render: args => html`
    <polyfea-md-app
      .headline=${args.headline}
      .shortHeadline=${args.shortHeadline}
      .supportingText=${args.supportingText}
      .tileImgSrc=${args.tileImgSrc}
      .iconSrc=${args.iconSrc}
      .materialIcon=${args.materialIcon}
      .tileImgDisabled=${args.tileImgDisabled}
      .href=${args.href}
      .isActivePrefix=${args.isActivePrefix}
      .context=${args.context}
      .mode=${args.mode}
    >
      <md-icon slot="icon">home</md-icon>
    </polyfea-md-app>
  `,
  play: async ({ canvasElement, args, step }) => {
    const canvas = withinShadow(canvasElement);
    const appElement = canvasElement.querySelector('polyfea-md-app') as PolyfeaMdApp;
    const shadow = canvasElement.querySelector('polyfea-md-app')?.shadowRoot;

    await step('Check icon elements are rendered', async () => {
      const headline = await canvas.findByShadowText(args.shortHeadline);
      await expect(headline).toBeInTheDocument();
      const link = await canvas.findByShadowRole('link');
      await expect(link).toBeInTheDocument();
      await waitFor(() => expect(link).toHaveAttribute('href', args.href));
      const img = shadow?.querySelector('img');
      await expect(img).not.toBeInTheDocument();
      const iconSlot = shadow?.querySelector('slot[name="icon"]') as HTMLSlotElement;
      await expect(iconSlot).toBeInTheDocument();
      await expect(iconSlot.assignedElements()[0]).toHaveTextContent('home');
    });    
  },
};

export const RailMode: Story = {
  args: {
    context: 'rail-content',
    mode: 'rail',
  },
  play: DrawerMode.play,
};

export const NavigationMode: Story = {
  args: {
    mode: 'navigation',
    iconSrc: '',
    materialIcon: 'download',
  },
  play: DrawerModeWithMaterialIcon.play,
};


export const TEST_HistoryAPI_Coverage: Story = {
  tags: ['test'],
  name: '🧪 History API Coverage',
  args: {
    mode: 'tile',
    tileImgDisabled: true,
  },

  play: async ({ canvasElement, args, step }) => {
    const canvas = withinShadow(canvasElement);

    await step('Simulate navigation and check isActive updates', async () => {
      const oldNavigation = (globalThis as any).navigation;
      (globalThis as any).navigation = null;
      const oldHistoryPush = window.history.pushState;
      let pushedStateCalled = false;
      window.history.pushState = () => {
        pushedStateCalled = true;
      };

      try {
        const link = await canvas.findByShadowRole('link');
        await link.click();

        await waitFor(() => {
          expect(pushedStateCalled).toBe(true);
        });
      } finally {
        (globalThis as any).navigation = oldNavigation;
        window.history.pushState = oldHistoryPush;
      }
    });
  },
};

export const TEST_TileWithNavigationAPI_Coverage: Story = {
  tags: ['test'],
  name: '🧪 Navigation API Coverage for tile mod',
  args: {
    mode: 'tile',
    tileImgDisabled: true,
  },

  play: async ({ canvasElement, args, step }) => {
    const canvas = withinShadow(canvasElement);

    await step('Simulate navigation and check isActive updates', async () => {
      const oldNavigationNavigate = (globalThis as any).navigation.navigate;
      let navigateCalled = false;
      (globalThis as any).navigation.navigate = () => {
        navigateCalled = true;
      };
     

      try {
        const link = await canvas.findByShadowRole('link');
        await link.click();
        await waitFor(() => {
          expect(navigateCalled).toBe(true);
        });
      } finally {
        (globalThis as any).navigation.navigate = oldNavigationNavigate;
      }
    });
  },
};

export const TEST_IconWithNavigationAPI_Coverage: Story = {
  tags: ['test'],
  name: '🧪 Navigation API Coverage for icon mod',
  args: {
    mode: 'drawer',
    materialIcon: 'search',
  },

  play: async ({ canvasElement, args, step }) => {
    const canvas = withinShadow(canvasElement);

    await step('Simulate navigation and check isActive updates', async () => {
      const oldNavigationNavigate = (globalThis as any).navigation.navigate;
      let navigateCalled = false;
      (globalThis as any).navigation.navigate = () => {
        navigateCalled = true;
      };
     

      try {
        const link = await canvas.findByShadowRole('link');
        await link.click();
        await waitFor(() => {
          expect(navigateCalled).toBe(true);
        });
      } finally {
        (globalThis as any).navigation.navigate = oldNavigationNavigate;
      }
    });
  },
};

export const TEST_ActivePrefix: Story = {
  tags: ['test'],
  name: '🧪 Active Prefix Property',
  args: {
    mode: 'tile',
    tileImgDisabled: true,
    isActivePrefix: true,
    href: "/",
  },
  

  play: async ({ canvasElement, args, step }) => {
    const canvas = withinShadow(canvasElement);
    const appElement = canvasElement.querySelector('polyfea-md-app') as PolyfeaMdApp;
    const shadow = canvasElement.querySelector('polyfea-md-app')?.shadowRoot;

    await step('Verify in active mode', async () => {
        await waitFor(() => expect(appElement.isActive).toBe(true));
    });
  },
};

export const TEST_ActiveOnNavigationPrefix: Story = {
  tags: ['test'],
  name: '🧪 Active Flag set on navigationsuccess',
  args: {
    mode: 'tile',
    tileImgDisabled: true,
    isActivePrefix: true,
    href: "/nix",
  },
  

  play: async ({ canvasElement, args, step }) => {
    const canvas = withinShadow(canvasElement);
    const appElement = canvasElement.querySelector('polyfea-md-app') as PolyfeaMdApp;
    const shadow = canvasElement.querySelector('polyfea-md-app')?.shadowRoot;

    await step('Verify in inactive mode', async () => {
        await waitFor(() => expect(appElement.isActive).toBe(false));
    });

    await step('Verify in active mode after navigatesuccess', async () => {
        appElement.href = "/";
        globalThis.navigation?.dispatchEvent(new Event('navigatesuccess'));
        await waitFor(() => expect(appElement.isActive).toBe(true));
    });
  },
};
