import getAllUsers from "@/lib/getAllUsers";
import { Metadata } from "next";
import Link from "next/link";
type Props = {};

export const metadata: Metadata = {
  title: "Users",
};
export default async function UsersPage({}: Props) {
  const users: User[] = await getAllUsers();
  return (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users.map((user) => (
        <div key={user.id}>
          <div className=""></div>
          <Link href={`/users/${user.id}`}>
            <p>{user.name}</p>
          </Link>
        </div>
      ))}
    </section>
  );
}

export async function generateStaticParams() {
  const users = await getAllUsers();
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
