# `src/polyfea-md-app.ts`:

## class: `PolyfeaMdApp`, `polyfea-md-app`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name              | Privacy | Type                                                   | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                | Inherited From |
| ----------------- | ------- | ------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| `headline`        |         | `string`                                               | `''`    | The main title of the application.                                                                                                                                                                                                                                                                                                                                                                                                         |                |
| `shortHeadline`   |         | `string`                                               | `''`    | A shorter version of the headline, used in drawer, rail, or navigation variant rendering.                                                                                                                                                                                                                                                                                                                                                  |                |
| `supportingText`  |         | `string`                                               | `''`    | Additional text to display in the tile variant rendering.                                                                                                                                                                                                                                                                                                                                                                                  |                |
| `tileImgSrc`      |         | `string`                                               | `''`    | The URL of the image to display in the tile variant rendering.                                                                                                                                                                                                                                                                                                                                                                             |                |
| `iconSrc`         |         | `string`                                               | `''`    | The URL of the image to display in the drawer, rail, or navigation variant rendering.                                                                                                                                                                                                                                                                                                                                                      |                |
| `materialIcon`    |         | `string`                                               | `''`    | This property specifies the name of the Material Symbol icon to be used.&#xA;It's only utilized if the \`icon-src\` property is not set.&#xA;For more details on Material Symbols, refer to the \[Material Symbols documentation]\(https\://fonts.google.com/icons).                                                                                                                                                                       |                |
| `tileImgDisabled` |         | `boolean`                                              | `false` | This property disables the image in the tile variant rendering. If the \`tile-img-src\` property is not specified, the colored content is used instead.&#xA;When the tile image is disabled, only the \`headline\` and \`supporting-text\` properties are rendered.                                                                                                                                                                        |                |
| `href`            |         | `string`                                               | `''`    | This property specifies the URL to navigate to when the element is clicked.&#xA;The click handler uses either the Navigation API's \`navigate()\` method or the History API's \`pushState()\` method.&#xA;For more details, refer to the \[Navigation API]\(https\://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate) and \[History API]\(https\://developer.mozilla.org/en-US/docs/Web/API/History/pushState) documentation. |                |
| `isActivePrefix`  |         | `boolean`                                              | `false` | This property specifies whether the element is actived on all paths prefixed by href. By default, the element is only active&#xA;when the href matches the current path.                                                                                                                                                                                                                                                                   |                |
| `context`         |         | `string`                                               | `''`    | This property specifies the context in which the element is rendered.&#xA;It's typically set by the \`polyfea-context\` element.&#xA;For more details, refer to the \[\`polyfea-context\` documentation]\(https\://github.com/polyfea/core/blob/main/src/components/polyfea-context/readme.md).                                                                                                                                            |                |
| `mode`            |         | `'tile' \| 'drawer' \| 'rail' \| 'navigation' \| null` | `null`  | The mode in which the app anchor is rendered. If not specified then&#xA;the mode is determined by the context name prefix (e.g. \`drawer-content\` will be drawer mode, and \`navigation-icons\`&#xA;will be navigation mode). In all other cases, the default mode is \`tile\`.                                                                                                                                                           |                |
| `isActive`        |         | `boolean`                                              | `false` |                                                                                                                                                                                                                                                                                                                                                                                                                                            |                |

### Attributes

| Name              | Field           | Inherited From |
| ----------------- | --------------- | -------------- |
| `headline`        | headline        |                |
| `shortHeadline`   | shortHeadline   |                |
| `supportingText`  | supportingText  |                |
| `tileImgSrc`      | tileImgSrc      |                |
| `iconSrc`         | iconSrc         |                |
| `materialIcon`    | materialIcon    |                |
| `tileImgDisabled` | tileImgDisabled |                |
| `href`            | href            |                |
| `isActivePrefix`  | isActivePrefix  |                |
| `context`         | context         |                |
| `mode`            | mode            |                |

### CSS Properties

| Name                                   | Default | Description                                                                                                            |
| -------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `--app-card-height`                    |         | Specifies the height of the tile card. Default value is \`14rem\`.                                                     |
| `--app-card-width`                     |         | Specifies the width of the tile card. Default value is \`16rem\`.                                                      |
| `--app-card-tile-img-height`           |         | Specifies the height of the tile image. Default value is \`9rem\`.                                                     |
| `--app-card-tile-img-background-color` |         | Specifies the background color of the tile image. Default value is \`var(--md-sys-color-secondary-container, olive)\`. |
| `--app-card-tile-img-fit`              |         | Specifies the \`object-fit\` style for the tile image. Default value is \`cover\`.                                     |

### Slots

| Name   | Description                                                                                                                                 |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `icon` | icon to replace the icon shown in navigation, rail, and drawer variants. Takes priority over \`icon-src\` and \`material-icon\` properties. |

<hr/>

## Exports

| Kind                        | Name             | Declaration  | Module                | Package |
| --------------------------- | ---------------- | ------------ | --------------------- | ------- |
| `js`                        | `PolyfeaMdApp`   | PolyfeaMdApp | src/polyfea-md-app.ts |         |
| `custom-element-definition` | `polyfea-md-app` | PolyfeaMdApp | src/polyfea-md-app.ts |         |

# `src/polyfea-md-apps.ts`:

## class: `PolyfeaMdApps`, `polyfea-md-apps`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name                  | Privacy | Type     | Default          | Description                                                                                                                                                                                   | Inherited From |
| --------------------- | ------- | -------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `applicationsContext` |         | `string` | `"applications"` | name of the \[polyfe-context]\(https\://github.com/polyfea/core/blob/main/src/components/polyfea-context/readme.md) &#xA;element that will be used to render the applications web components. |                |

### Attributes

| Name                   | Field               | Inherited From |
| ---------------------- | ------------------- | -------------- |
| `applications-context` | applicationsContext |                |

### Slots

| Name | Description                                                                                                                                                                                                                                                                                            |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|      | This slot is for the content of the element, typically application tiles. You can use \[polyfea-md-app]\(../polyfea-md-app/readme.md) or any other component. If a context area is specified and available, the slot content is not rendered. Instead, elements provided by the context are displayed. |

<hr/>

## Exports

| Kind                        | Name              | Declaration   | Module                 | Package |
| --------------------------- | ----------------- | ------------- | ---------------------- | ------- |
| `js`                        | `PolyfeaMdApps`   | PolyfeaMdApps | src/polyfea-md-apps.ts |         |
| `custom-element-definition` | `polyfea-md-apps` | PolyfeaMdApps | src/polyfea-md-apps.ts |         |
