/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html', './main.js'],
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')],
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#001d4d",                 // Deep Navy (Institution trust)
                        secondary: "#FF7F27",               // Orange Accent (Warmth, joy)
                        "soft-cream": "#FFF7ED",            // Warm Cream (Background)
                        "pure-white": "#FFFFFF",            // Pure White (Cards)
                        foreground: "#1a2a3a",              // Navy-gray (Text)
                        muted: "#F1F0F0",                   // Light Muted (Subtle backgrounds)
                        border: "#d4cfc4",                  // Warm Border
                        destructive: "#DC2626",             // Red (Errors)
                        graphite: "#2b3a47",                // Graphite (Body copy)
                        "cool-grey": "#6B7A88",             // Grey (Captions)
                        "slate-blue": "#2F6B9A",
                        "sky-wash": "#EAF1F6",
                        "deep-amber": "#B35A12",
                        "warm-sand": "#FBE6D2",
                        
                        // Semantic mapping for code compatibility
                        "inverse-surface": "#23323f",
                        "surface-container-high": "#daeafb",
                        "on-secondary": "#062F55",          // Navy text on orange buttons
                        "on-secondary-container": "#062F55", // Navy text on orange container
                        "tertiary-container": "#322e27",
                        "on-primary": "#ffffff",
                        "on-tertiary": "#ffffff",
                        "on-primary-fixed": "#001c38",
                        "on-surface-variant": "#43474e",
                        "secondary-fixed": "#ffdbc7",
                        "outline-variant": "#c3c6cf",
                        "on-tertiary-fixed": "#1f1b15",
                        "on-background": "#0d1d29",
                        "secondary-container": "#E97B23",
                        "outline": "#73777f",
                        "surface-container-low": "#FDF4E9", // Soft Cream as surface-container-low
                        "surface-tint": "#062F55",
                        "surface": "#FDF4E9",               // Default surface background
                        "on-tertiary-container": "#9c958c",
                        "secondary-fixed-dim": "#ffb688",
                        "tertiary-fixed": "#eae1d6",
                        "surface-bright": "#ffffff",        // Pure White carries page
                        "on-tertiary-fixed-variant": "#4b463e",
                        "surface-dim": "#ccdced",
                        "tertiary-fixed-dim": "#cdc5bb",
                        "on-secondary-fixed": "#311300",
                        "on-secondary-fixed-variant": "#733600",
                        "on-primary-container": "#7898c3",
                        "surface-container": "#e1efff",
                        "tertiary": "#1d1913",
                        "on-primary-fixed-variant": "#27486f",
                        "surface-container-lowest": "#ffffff",
                        "background": "#ffffff",
                        "on-error": "#ffffff",
                        "surface-variant": "#d4e4f5",
                        "primary-fixed-dim": "#a9c9f7",
                        "error-container": "#ffdad6",
                        "surface-container-highest": "#d4e4f5",
                        "primary-fixed": "#d3e4ff",
                        "on-error-container": "#93000a",
                        "primary-container": "#062f55",
                        "inverse-primary": "#a9c9f7",
                        "inverse-on-surface": "#e7f2ff",
                        "error": "#ba1a1a"
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",                // 8px standard
                        "sm": "0.25rem",                    // 4px
                        "md": "0.75rem",                    // 12px
                        "lg": "1.0rem",                     // 16px (the card radius)
                        "xl": "1.5rem",                     // 24px
                        "2xl": "1.5rem",
                        "3xl": "2rem",
                        "full": "9999px"
                    },
                    boxShadow: {
                        DEFAULT: "0 4px 15px rgba(0, 29, 77, 0.12), 0 8px 25px rgba(0, 29, 77, 0.08)",
                        md: "0 6px 20px rgba(0, 29, 77, 0.15), 0 10px 35px rgba(0, 29, 77, 0.1)",
                        lg: "0 8px 30px rgba(0, 29, 77, 0.18), 0 15px 50px rgba(0, 29, 77, 0.12)",
                        xl: "0 12px 40px rgba(0, 29, 77, 0.2), 0 20px 70px rgba(0, 29, 77, 0.15)",
                        "clay": "0 8px 20px rgba(0, 29, 77, 0.15), 0 2px 4px rgba(0, 0, 0, 0.08)",
                        "clay-lg": "0 12px 35px rgba(0, 29, 77, 0.18), 0 4px 8px rgba(0, 0, 0, 0.1)",
                        "scandi": "0 4px 12px rgba(0, 0, 64, 0.06)"
                    },
                    spacing: {
                        "margin-desktop": "64px",
                        "margin-mobile": "16px",
                        "gutter": "24px",
                        "container-max": "1200px",
                        "base": "8px"
                    },
                    fontFamily: {
                        "display-mobile": ["Baloo 2", "sans-serif"],
                        "headline-sm": ["Baloo 2", "sans-serif"],
                        "label-caps": ["Comic Neue", "sans-serif"],
                        "headline-lg": ["Baloo 2", "sans-serif"],
                        "body-lg": ["Comic Neue", "sans-serif"],
                        "body-sm": ["Comic Neue", "sans-serif"],
                        "headline-md": ["Baloo 2", "sans-serif"],
                        "display": ["Baloo 2", "sans-serif"]
                    },
                    fontSize: {
                        "display-mobile": ["36px", { lineHeight: "42px", fontWeight: "600" }],
                        "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "500" }],
                        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.22em", fontWeight: "600" }],
                        "headline-lg": ["40px", { lineHeight: "46px", letterSpacing: "-0.015em", fontWeight: "600" }],
                        "body-lg": ["16px", { lineHeight: "26px", fontWeight: "400" }],
                        "body-sm": ["14px", { lineHeight: "22px", fontWeight: "400" }],
                        "headline-md": ["28px", { lineHeight: "34px", fontWeight: "600" }],
                        "display": ["56px", { lineHeight: "60px", letterSpacing: "-0.02em", fontWeight: "600" }]
                    }
                }
            }
        };
