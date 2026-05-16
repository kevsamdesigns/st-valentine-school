export type Post = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  image?: string | null;
  video?: string | null;
};

const STORAGE_KEY = "site_blog_posts_v1";

const defaultPosts: Post[] = [
  {
    id: 1,
    title: "Innovative Classroom Strategies for 2026",
    date: "May 10, 2026",
    excerpt: "Active learning, project-based modules, and blended instruction are reshaping engagement.",
    content: "Active learning, project-based modules, and blended instruction are reshaping engagement.",
    image: "/blog-media/post1.svg",
    video: "https://www.youtube.com/embed/5MgBikgcWnY"
  },
  {
    id: 2,
    title: "How Technology Boosts Early Literacy",
    date: "May 4, 2026",
    excerpt: "Evidence shows targeted edtech supports literacy when used with teacher guidance.",
    content: "Evidence shows targeted edtech supports literacy when used with teacher guidance.",
    image: "/blog-media/post2.svg",
    video: null
  },
  {
    id: 3,
    title: "Student Wellbeing: Small Changes, Big Impact",
    date: "Apr 28, 2026",
    excerpt: "Simple routines and community activities dramatically improve school wellbeing metrics.",
    content: "Simple routines and community activities dramatically improve school wellbeing metrics.",
    image: "/blog-media/post3.svg",
    video: "https://www.youtube.com/embed/2Xc9gXyf2G4"
  },
  {
    id: 4,
    title: "Assessments That Motivate Learning",
    date: "Apr 20, 2026",
    excerpt: "Formative assessments and feedback cycles create intrinsic motivation for students.",
    content: "Formative assessments and feedback cycles create intrinsic motivation for students.",
    image: "/blog-media/post4.svg",
    video: null
  },
  {
    id: 5,
    title: "Preparing Students for a Changing World",
    date: "Apr 12, 2026",
    excerpt: "Teaching adaptability, digital literacy, and collaboration is essential for future success.",
    content: "Teaching adaptability, digital literacy, and collaboration is essential for future success.",
    image: "/blog-media/post5.svg",
    video: null
  }
];

function readStorage(): Post[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPosts));
      return defaultPosts.slice();
    }
    return JSON.parse(raw) as Post[];
  } catch (err) {
    console.error("blogData read error", err);
    return defaultPosts.slice();
  }
}

function writeStorage(posts: Post[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    // notify other tabs
    window.dispatchEvent(new Event("storage"));
  } catch (err) {
    console.error("blogData write error", err);
  }
}

export function getPosts(): Post[] {
  return readStorage();
}

export function getPostById(id: number): Post | undefined {
  return getPosts().find((p) => p.id === id);
}

export function addPost(post: Omit<Post, "id">) {
  const posts = readStorage();
  const id = posts.reduce((m, p) => Math.max(m, p.id), 0) + 1;
  const newPost: Post = { id, ...post };
  posts.unshift(newPost);
  writeStorage(posts);
  return newPost;
}

export function updatePost(updated: Post) {
  const posts = readStorage().map((p) => (p.id === updated.id ? updated : p));
  writeStorage(posts);
}

export function deletePost(id: number) {
  const posts = readStorage().filter((p) => p.id !== id);
  writeStorage(posts);
}
