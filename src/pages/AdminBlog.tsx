import React, { useEffect, useState } from "react";
import { addPost, deletePost, getPosts, Post } from "@/lib/blogData";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminBlog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");

  useEffect(() => {
    setPosts(getPosts());
    const onStorage = () => setPosts(getPosts());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const reset = () => { setTitle(""); setDate(""); setExcerpt(""); setContent(""); setImage(""); setVideo(""); };

  const onAdd = () => {
    if (!title || !excerpt) { toast.error("Title and excerpt required"); return; }
    const newPost = addPost({ title, date: date || new Date().toLocaleDateString(), excerpt, content, image: image || null, video: video || null });
    toast.success("Post added");
    setPosts(getPosts());
    reset();
    // navigate to post? keep simple
  };

  const onDelete = (id: number) => {
    if (!confirm("Delete this post?")) return;
    deletePost(id);
    setPosts(getPosts());
    toast.success("Deleted");
  };

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <PageHeader title="Manage News Posts" subtitle="Create and remove posts stored locally" />
        </div>
        <div>
          <Link to="/news" className="text-sm text-primary-foreground hover:underline">View public news</Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <Label>Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} className="mb-3" />
            <Label>Date</Label>
            <Input value={date} onChange={(e) => setDate(e.target.value)} placeholder="May 16, 2026" className="mb-3" />
            <Label>Excerpt</Label>
            <Textarea rows={3} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className="mb-3" />
            <Label>Content</Label>
            <Textarea rows={6} value={content} onChange={(e) => setContent(e.target.value)} className="mb-3" />
            <Label>Image URL (or /blog-media/filename.svg)</Label>
            <Input value={image} onChange={(e) => setImage(e.target.value)} className="mb-3" />
            <Label>Video embed URL (YouTube embed URL)</Label>
            <Input value={video} onChange={(e) => setVideo(e.target.value)} className="mb-3" />
            <div className="flex gap-2">
              <Button onClick={onAdd}>Add Post</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Existing posts</h3>
            {posts.length === 0 ? (
              <p className="text-sm text-muted-foreground">No posts yet</p>
            ) : (
              <ul className="space-y-3">
                {posts.map((p) => (
                  <li key={p.id} className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium">{p.title}</div>
                      <div className="text-xs text-muted-foreground">{p.date}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link to={`/news/${p.id}`} className="text-sm text-primary-foreground hover:underline">View</Link>
                      <Button variant="destructive" onClick={() => onDelete(p.id)}><Trash2 className="w-4 h-4" /></Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold">Tips</h4>
            <ul className="text-sm list-disc list-inside mt-2 space-y-1 text-muted-foreground">
              <li>Use local images placed in <code className="bg-muted px-1 rounded">/public/blog-media/</code>.</li>
              <li>Video should be an embed URL (YouTube embed links work).</li>
              <li>Posts are stored in browser <strong>localStorage</strong> and will persist per browser.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
