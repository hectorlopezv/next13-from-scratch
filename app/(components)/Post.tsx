import { getSortedPostData } from "@/lib/post";
import ListItem from "./ListItem";

type Props = {};

export default function Post({}: Props) {
  const posts = getSortedPostData();

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem post={post} key={post.id} />
        ))}
      </ul>
    </section>
  );
}
