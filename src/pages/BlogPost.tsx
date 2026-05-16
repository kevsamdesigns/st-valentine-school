import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { getPostById, Post } from "@/lib/blogData";
import { SEO } from "@/components/SEO";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | undefined>(undefined);

  useEffect(() => {
    if (!id) return;
    setPost(getPostById(Number(id)));

    const onStorage = () => setPost(getPostById(Number(id)));
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [id]);

  if (!post) {
    return (
      <div className="container py-12">
        <PageHeader title="Post not found" subtitle="The requested blog post was not found" />
        <p className="mt-6">Return to the <Link to="/news" className="text-primary-foreground hover:underline">news list</Link>.</p>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <SEO title={`${post.title} | St Valentine Girls Senior School`} description={post.excerpt ?? "Latest news from St Valentine Girls Senior School"} path={`/news/${post.id}`} />
      <PageHeader title={post.title} subtitle={post.date} />

      <div className="mt-8 bg-card border border-border rounded-lg overflow-hidden">
        <div className="w-full h-72 bg-muted overflow-hidden">
          <img src={post.image ?? "/blog-media/post1.svg"} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <p className="leading-relaxed text-sm">{post.content}</p>

          {post.video && (
            <div className="mt-6">
              <div className="aspect-video">
                <iframe
                  src={post.video}
                  title={post.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          )}

          <div className="mt-6">
            <Link to="/news" className="text-sm font-medium text-primary-foreground/95 hover:underline">← Back to news</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
