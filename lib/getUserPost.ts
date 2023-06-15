export default async function getUserPosts(userId: string): Promise<Post[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId
  );
  if (!res.ok) {
    throw new Error("Something went wrong, while fetching user POSTS");
  }
  return res.json();
}
