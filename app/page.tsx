import Link from "next/link";
import MyProfilePic from "./(components)/MyProfilePic";
import PostV2 from "./(components)/PostV2";
export const revalidate = 0;
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world</h1>
      <Link href="/about">Link to about page</Link>
      <Link href="/users">Link to users page</Link>
      <MyProfilePic />
      {/* <AddTodo />
      <TodoList /> */}
      {/* <Post /> */}
      <PostV2 />
    </div>
  );
}
