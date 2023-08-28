/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Placement } from "@floating-ui/dom";
export { Placement } from "@floating-ui/dom";
export namespace Components {
    interface PostCollapsible {
        /**
          * If `true`, the element is initially collapsed otherwise it is displayed.
         */
        "collapsed"?: boolean;
        /**
          * Defines the hierarchical level of the collapsible header within the headings structure.
         */
        "headingLevel"?: number;
        /**
          * Triggers the collapse programmatically.
         */
        "toggle": (open?: boolean) => Promise<boolean>;
    }
    /**
     * @class PostIcon - representing a stencil component
     */
    interface PostIcon {
        /**
          * The name of the animation.
         */
        "animation"?: Animation | null;
        /**
          * The base path, where the icons are located (must be a public url).<br/>Leave this field empty to use the default cdn url.
         */
        "base"?: string | null;
        /**
          * When set to `true`, the icon will be flipped horizontally.
         */
        "flipH"?: boolean;
        /**
          * When set to `true`, the icon will be flipped vertically.
         */
        "flipV"?: boolean;
        /**
          * The name/id of the icon (e.g. 1000, 1001, ...).
         */
        "name": string;
        /**
          * The number of degree for the css rotate transformation.
         */
        "rotate"?: number | null;
        /**
          * The number for the css scale transformation.
         */
        "scale"?: number | null;
    }
    interface PostTabHeader {
        /**
          * The name of the panel controlled by the tab header.
         */
        "panel": HTMLPostTabPanelElement['name'];
    }
    interface PostTabPanel {
        /**
          * The name of the panel, used to associate it with a tab header.
         */
        "name": string;
    }
    interface PostTabs {
        /**
          * The name of the panel that is initially shown. If not specified, it defaults to the panel associated with the first tab.  **Changing this value after initialization has no effect.**
         */
        "activePanel": HTMLPostTabPanelElement['name'];
        /**
          * Shows the panel with the given name and selects its associated tab. Any other panel that was previously shown becomes hidden and its associated tab is unselected.
         */
        "show": (panelName: string) => Promise<void>;
    }
    interface PostTooltip {
        "class": string;
        "placement"?: Placement;
    }
}
export interface PostTabsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPostTabsElement;
}
declare global {
    interface HTMLPostCollapsibleElement extends Components.PostCollapsible, HTMLStencilElement {
    }
    var HTMLPostCollapsibleElement: {
        prototype: HTMLPostCollapsibleElement;
        new (): HTMLPostCollapsibleElement;
    };
    /**
     * @class PostIcon - representing a stencil component
     */
    interface HTMLPostIconElement extends Components.PostIcon, HTMLStencilElement {
    }
    var HTMLPostIconElement: {
        prototype: HTMLPostIconElement;
        new (): HTMLPostIconElement;
    };
    interface HTMLPostTabHeaderElement extends Components.PostTabHeader, HTMLStencilElement {
    }
    var HTMLPostTabHeaderElement: {
        prototype: HTMLPostTabHeaderElement;
        new (): HTMLPostTabHeaderElement;
    };
    interface HTMLPostTabPanelElement extends Components.PostTabPanel, HTMLStencilElement {
    }
    var HTMLPostTabPanelElement: {
        prototype: HTMLPostTabPanelElement;
        new (): HTMLPostTabPanelElement;
    };
    interface HTMLPostTabsElement extends Components.PostTabs, HTMLStencilElement {
    }
    var HTMLPostTabsElement: {
        prototype: HTMLPostTabsElement;
        new (): HTMLPostTabsElement;
    };
    interface HTMLPostTooltipElement extends Components.PostTooltip, HTMLStencilElement {
    }
    var HTMLPostTooltipElement: {
        prototype: HTMLPostTooltipElement;
        new (): HTMLPostTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "post-collapsible": HTMLPostCollapsibleElement;
        "post-icon": HTMLPostIconElement;
        "post-tab-header": HTMLPostTabHeaderElement;
        "post-tab-panel": HTMLPostTabPanelElement;
        "post-tabs": HTMLPostTabsElement;
        "post-tooltip": HTMLPostTooltipElement;
    }
}
declare namespace LocalJSX {
    interface PostCollapsible {
        /**
          * If `true`, the element is initially collapsed otherwise it is displayed.
         */
        "collapsed"?: boolean;
        /**
          * Defines the hierarchical level of the collapsible header within the headings structure.
         */
        "headingLevel"?: number;
    }
    /**
     * @class PostIcon - representing a stencil component
     */
    interface PostIcon {
        /**
          * The name of the animation.
         */
        "animation"?: Animation | null;
        /**
          * The base path, where the icons are located (must be a public url).<br/>Leave this field empty to use the default cdn url.
         */
        "base"?: string | null;
        /**
          * When set to `true`, the icon will be flipped horizontally.
         */
        "flipH"?: boolean;
        /**
          * When set to `true`, the icon will be flipped vertically.
         */
        "flipV"?: boolean;
        /**
          * The name/id of the icon (e.g. 1000, 1001, ...).
         */
        "name": string;
        /**
          * The number of degree for the css rotate transformation.
         */
        "rotate"?: number | null;
        /**
          * The number for the css scale transformation.
         */
        "scale"?: number | null;
    }
    interface PostTabHeader {
        /**
          * The name of the panel controlled by the tab header.
         */
        "panel"?: HTMLPostTabPanelElement['name'];
    }
    interface PostTabPanel {
        /**
          * The name of the panel, used to associate it with a tab header.
         */
        "name"?: string;
    }
    interface PostTabs {
        /**
          * The name of the panel that is initially shown. If not specified, it defaults to the panel associated with the first tab.  **Changing this value after initialization has no effect.**
         */
        "activePanel"?: HTMLPostTabPanelElement['name'];
        /**
          * An event emitted after the active tab changes, when the fade in transition of its associated panel is finished. The payload is the name of the newly shown panel.
         */
        "onTabChange"?: (event: PostTabsCustomEvent<HTMLPostTabPanelElement['name']>) => void;
    }
    interface PostTooltip {
        "class"?: string;
        "placement"?: Placement;
    }
    interface IntrinsicElements {
        "post-collapsible": PostCollapsible;
        "post-icon": PostIcon;
        "post-tab-header": PostTabHeader;
        "post-tab-panel": PostTabPanel;
        "post-tabs": PostTabs;
        "post-tooltip": PostTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "post-collapsible": LocalJSX.PostCollapsible & JSXBase.HTMLAttributes<HTMLPostCollapsibleElement>;
            /**
             * @class PostIcon - representing a stencil component
             */
            "post-icon": LocalJSX.PostIcon & JSXBase.HTMLAttributes<HTMLPostIconElement>;
            "post-tab-header": LocalJSX.PostTabHeader & JSXBase.HTMLAttributes<HTMLPostTabHeaderElement>;
            "post-tab-panel": LocalJSX.PostTabPanel & JSXBase.HTMLAttributes<HTMLPostTabPanelElement>;
            "post-tabs": LocalJSX.PostTabs & JSXBase.HTMLAttributes<HTMLPostTabsElement>;
            "post-tooltip": LocalJSX.PostTooltip & JSXBase.HTMLAttributes<HTMLPostTooltipElement>;
        }
    }
}
