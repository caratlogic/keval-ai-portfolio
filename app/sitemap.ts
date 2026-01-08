import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.kevalai.com/",
            lastModified: new Date("2026-01-08T20:07:15+00:00"),
            changeFrequency: "monthly",
            priority: 1,
        },
        // You can easily add more URLs here as your site grows
    ];
}
