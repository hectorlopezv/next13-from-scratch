import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPost";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";

type Props = {
  params: {
    userId: string;
  };
};
export default async function UserPage({ params: { userId } }: Props) {
  const user = getUser(userId);

  const userPosts = getUserPosts(userId);

  // const [userData, userPostsData] = await Promise.all([user, userPosts]);
  const userData = await user;
  if (!userData) {
    notFound();
  }
  return (
    <>
      <h2>{userData?.name}</h2>
      <br />
      <Suspense fallback={<h2>.....LOADING</h2>}>
        <UserPosts promise={userPosts} />
      </Suspense>
    </>
  );
}
export async function generateMetadata({
  params: { userId },
}: Props): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;
  if (!user) {
    return {
      title: "User not found",
    };
  }
  return {
    title: user.name,
    description: user.email,
  };
}
