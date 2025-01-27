import type { MetadataRoute } from "next";
import listPosts from "@/api/list-posts";

export const revalidate = 60;
export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await listPosts();

  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...posts.map((post) => ({
      url: `${process.env.NEXT_PUBLIC_URL}/blog/${post.json.link}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
