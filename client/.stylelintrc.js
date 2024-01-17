module.exports = {
    extends: [
        'stylelint-config-recommended-scss'
    ],
    plugins: [
        'stylelint-order',
        'stylelint-color-format',
        'stylelint-scss'
    ],
    overrides: [
        {
            files: ["**/*.(css|html|vue)"],
            customSyntax: "postcss-html"
        },
        {
            files: ["*.scss", "**/*.scss"],
            customSyntax: "postcss-scss",
            extends: [
                "stylelint-config-standard-scss",
            ]
        }
    ],
    "rules": {
        "no-duplicate-selectors": true,
        "color-hex-length": "short",
        "color-named": "never",
        "selector-attribute-quotes": "always",
        "property-no-vendor-prefix": true,
        "value-no-vendor-prefix": true,
        "function-url-quotes": "always",
        "font-family-name-quotes": "always-where-recommended",
        "comment-whitespace-inside": "always",
        "comment-empty-line-before": "always",
        "at-rule-no-vendor-prefix": true,
        "rule-empty-line-before": ["never", {
            'except': ["after-single-line-comment", "first-nested"]
        }],
        "selector-no-vendor-prefix": true,
        "media-feature-name-no-vendor-prefix": true,
        "declaration-empty-line-before": "never",
        "block-no-empty": true,
        "shorthand-property-no-redundant-values": true,
        "order/order": [
            "custom-properties",
            "dollar-variables",
            "at-rules",
            "declarations"
        ],
        "order/properties-order": [
            "font",
            "font-family",
            "src",
            "font-size",
            "font-weight",
            "font-style",
            "font-variant",
            "font-size-adjust",
            "font-stretch",
            "line-height",
            "color",
            "text-shadow",
            "text-align",
            "text-align-last",
            "vertical-align",
            "white-space",
            "text-decoration",
            "text-emphasis",
            "text-emphasis-color",
            "text-emphasis-style",
            "text-emphasis-position",
            "text-indent",
            "text-justify",
            "letter-spacing",
            "word-spacing",
            "text-outline",
            "text-transform",
            "text-wrap",
            "text-overflow",
            "text-overflow-ellipsis",
            "text-overflow-mode",
            "word-wrap",
            "word-break",
            "position",
            "z-index",
            "top",
            "right",
            "bottom",
            "left",
            "display",
            "visibility",
            "float",
            "clear",
            "overflow",
            "overflow-x",
            "overflow-y",
            "clip",
            "zoom",
            "flex",
            "flex-flow",
            "flex-basis",
            "flex-direction",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "justify-content",
            "align-content",
            "align-items",
            "align-self",
            "order",
            "box-sizing",
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "table-layout",
            "empty-cells",
            "caption-side",
            "border-spacing",
            "border-collapse",
            "list-style",
            "list-style-position",
            "list-style-type",
            "list-style-image",
            "content",
            "quotes",
            "counter-reset",
            "counter-increment",
            "resize",
            "box-shadow",
            "opacity",
            "cursor",
            "user-select",
            "nav-index",
            "nav-up",
            "nav-right",
            "nav-down",
            "nav-left",
            "transition",
            "transition-delay",
            "transition-timing-function",
            "transition-duration",
            "transition-property",
            "transform",
            "transform-origin",
            "animation",
            "animation-name",
            "animation-duration",
            "animation-play-state",
            "animation-timing-function",
            "animation-delay",
            "animation-iteration-count",
            "animation-direction",
            "tab-size",
            "hyphens",
            "pointer-events",
            "border",
            "border-width",
            "border-style",
            "border-color",
            "border-top",
            "border-top-width",
            "border-top-style",
            "border-top-color",
            "border-right",
            "border-right-width",
            "border-right-style",
            "border-right-color",
            "border-bottom",
            "border-bottom-width",
            "border-bottom-style",
            "border-bottom-color",
            "border-left",
            "border-left-width",
            "border-left-style",
            "border-left-color",
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-right-radius",
            "border-bottom-left-radius",
            "border-image",
            "border-image-source",
            "border-image-slice",
            "border-image-width",
            "border-image-outset",
            "border-image-repeat",
            "outline",
            "outline-width",
            "outline-style",
            "outline-color",
            "outline-offset",
            "background",
            "background-color",
            "background-image",
            "background-repeat",
            "background-attachment",
            "background-position",
            "background-position-x",
            "background-position-y",
            "background-clip",
            "background-origin",
            "background-size",
            "box-decoration-break"
        ]
    }
}
