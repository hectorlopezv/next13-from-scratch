export default async function getUser(userId: string) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userId,
    {
      cache: "force-cache",
    }
  );
  if (!res.ok) {
    return undefined;
  }
  return res.json();
}
