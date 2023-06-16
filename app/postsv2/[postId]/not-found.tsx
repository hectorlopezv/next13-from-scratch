import Link from "next/link";

type Props = {};

export default function NotFoundPost({}: Props) {
  return (
    <div className="text-center">
      <p className="mt-10">Sorry the request post does not exist.</p>
      <Link href="/">Back to home</Link>
    </div>
  );
}
