import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
}

function parseFrontmatter(content: string): { meta: Record<string, string>; body: string } {
  if (!content.startsWith("---")) {
    return { meta: {}, body: content };
  }

  const endIndex = content.indexOf("---", 3);
  if (endIndex === -1) {
    return { meta: {}, body: content };
  }

  const frontmatter = content.slice(3, endIndex).trim();
  const body = content.slice(endIndex + 3).trim();

  const meta: Record<string, string> = {};
  frontmatter.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key) {
      meta[key.trim()] = valueParts.join(":").trim();
    }
  });

  return { meta, body };
}

export function getBlogSlugs(): string[] {
  const blogsDir = path.join(process.cwd(), "blogs");
  if (!fs.existsSync(blogsDir)) return [];

  return fs
    .readdirSync(blogsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(process.cwd(), "blogs", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const { meta, body } = parseFrontmatter(content);

  return {
    slug,
    title: meta.title || slug.replace(/-/g, " "),
    date: meta.date || "",
    content: body,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogPost(slug))
    .filter((post): post is BlogPost => post !== null);

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
