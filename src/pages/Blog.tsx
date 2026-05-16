import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { getPosts, Post } from "@/lib/blogData";
import { SEO } from "@/components/SEO";

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(getPosts());

    const onStorage = () => setPosts(getPosts());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <div className="container py-12">
      <SEO title="News | St Valentine Girls Senior School" description="Latest news and updates from St Valentine Girls Senior School" path="/news" />
      <PageHeader title="Education News & Insights" subtitle="Latest updates and practical ideas for schools" />

      <div className="grid gap-6 mt-8 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.id} className="bg-card border border-border rounded-lg overflow-hidden transition-transform hover:scale-[1.01]">
            <Link to={`/news/${p.id}`} className="block">
              <div className="w-full h-56 bg-muted overflow-hidden">
                <img src={p.image ?? "/blog-media/post1.svg"} alt={p.title} className="w-full h-full object-cover" />
              </div>
            </Link>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.date}</p>
              <p className="mt-3 text-sm leading-relaxed">{p.excerpt}</p>

              <div className="mt-4 flex items-center justify-between gap-4">
                <Link to={`/news/${p.id}`} className="text-sm font-medium text-primary-foreground/95 hover:underline">Read more →</Link>
                {p.video && (
                  <span className="text-xs text-muted-foreground">Includes video</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
