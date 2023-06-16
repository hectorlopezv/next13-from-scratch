import { getPostsMeta } from "@/lib/postsv2";
import ListItemV2 from "./ListItemV2";

type Props = {};

export default async function PostV2({}: Props) {
  const posts = await getPostsMeta();

  if (!posts) return <div>no Post available</div>;
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
      <ul className="w-full">
        {posts?.map((post) => (
          <ListItemV2 post={post} key={post.id} />
        ))}
      </ul>
    </section>
  );
}
