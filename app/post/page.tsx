import NextLink from "next/link";
import { tr } from "date-fns/locale";
import { compareDesc, format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";
import Title from "@/components/title";
import Container from "@/components/container";
import allPosts from "@/data/posts";

function getData() {
  const posts: any[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return posts;
}

export default function PostsPage() {
  const posts: Partial<Post>[] = getData();

  return (
    <>
      <Container>
        <Title>Medium yazıları</Title>
      </Container>

      <Container className="mt-20">
        <div className="space-y-8">
          {posts.map((post) => {
            return (
              <article key={post._id}>
                <header>
                  <h3 className="shine font-semibold">
                    <NextLink href={`${post.url}`}>
                      {post.title}
                    </NextLink>
                  </h3>
                  <p className="mt-1">{post.subtitle}</p>
                </header>

                <footer className="mt-1 flex items-center space-x-2">
                  <time dateTime={post.date}>
                    {format(parseISO(post.date), "d LLLL yyyy", {
                      locale: tr,
                    })}
                  </time>
                  <span className="opacity-50">·</span>
                  <span>{post.readingTime.text}</span>
                </footer>
              </article>
            );
          })}
        </div>
      </Container>
    </>
  );
}
