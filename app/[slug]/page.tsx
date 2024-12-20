import listPosts from "@/api/list-posts";
import { VisitorData } from "@/components/atoms/visitor-data";
import BlogContent from "@/templates/blog-content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  try {
    const posts = await listPosts();
    return posts.map((post) => ({
      slug: post.json.link.toLowerCase(),
    }));
  } catch (error) {
    console.error("Erro ao listar posts:", error);
    return [];
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const posts = await listPosts();
  const post = posts.find(({ json }) => json.link.toLowerCase() === slug);

  if (!post) {
    return <p>Post não encontrado</p>;
  }

  return (
    <VisitorData id={post.id}>
      <BlogContent post={post} posts={posts} />
    </VisitorData>
  );
}
