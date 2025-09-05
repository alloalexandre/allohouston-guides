import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Allohouston Guides",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Guides", link: "/docs/overview" },
        ],

        sidebar: [
            {
                text: "Guides",
                items: [
                    {
                        text: "Overview",
                        link: "/docs/overview",
                    },
                ],
            },
            {
                text: "Suprakit UI",
                items: [
                    { text: "Overview", link: "/docs/suprakit-ui/overview" },
                    { text: "Make a form", link: "/docs/suprakit-ui/make-a-form" },
                    { text: "Make a table", link: "/docs/suprakit-ui/make-a-table" },
                ],
            },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/allohouston" }],
    },
});
