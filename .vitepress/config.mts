import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";

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
                text: "Cliston CLI",
                items: [
                    { text: "Overview", link: "/docs/cliston-cli/overview" },
                    { text: "Get started", link: "/docs/cliston-cli/get-started" },
                    { text: "Commands", link: "/docs/cliston-cli/commands" },
                ],
            },
            {
                text: "Suprakit UI",
                items: [
                    { text: "Overview", link: "/docs/suprakit-ui/overview" },
                    { text: "Hooks", link: "/docs/suprakit-ui/hooks" },
                    { text: "Components", link: "/docs/suprakit-ui/components" },
                    { text: "Make a form", link: "/docs/suprakit-ui/make-a-form" },
                    { text: "Make a table", link: "/docs/suprakit-ui/make-a-table" },
                ],
            },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/allohouston" }],
    },
    vite: {
        plugins: [llmstxt()],
    },
});
