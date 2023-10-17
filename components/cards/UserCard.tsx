import Link from "next/link";

export default function UserCard({
  id,
  username,
  avatar,
  bio,
}: {
  id: string;
  username: string;
  avatar: string;
  bio: string;
}) {
  return (
    <Link
      href={`/space/${id}`}
      className="flex items-center bg-light-1 shadow-sm hover:shadow-md duration-200 rounded-xl gap-4 p-2"
    >
      <div>
        <img className="w-[48px] h-[48px] rounded-full" src={avatar} alt="user-avatar" />
      </div>

      <div className="flex-1">
        <h1 className="text-body-bold text-dark-2 mb-1">{username}</h1>
        <p className="text-small-regular text-zinc-700 line-clamp-2">{bio}</p>
      </div>
    </Link>
  );
}
