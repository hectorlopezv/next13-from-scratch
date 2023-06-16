import Link from "next/link";

type Props = {
  post: Meta;
};

export default function ListItemV2({ post }: Props) {
  const { id, title, date: formatDate } = post;
  //   const formatDate = getFormatDate(date);

  return (
    <li className="mt-4 text-2xl dark:text-white/90" key={id}>
      <Link
        href={`/postsv2/${id}`}
        className="underline hover:text-black/70
      dark:hover:text-white"
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{formatDate}</p>
    </li>
  );
}
