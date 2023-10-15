import Link from "next/link";

export default function Topbar({ userId, username, avatar }: { userId: string; username: string; avatar: string }) {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <img className="sm:w-[180px] w-[150px]" src="/logo-full-light.png" alt="logo" />
      </Link>

      {username && avatar && (
        <Link
          className="flex items-center bg-zinc-800 hover:bg-zinc-700 duration-200 rounded-lg sm:px-4 sm:py-2 px-2 py-1 gap-2"
          href="/account"
        >
          <img src={avatar} alt="user-avatar" className="w-[36px] h-[36px] rounded-full" />
          <p className="sm:block hidden sm:text-base-regular text-small-regular text-zinc-300">{username}</p>
        </Link>
      )}

      {(!username || !avatar) && (
        <div className="flex items-center text-small-regular gap-3 leading-none">
          <Link
            className="bg-zinc-600 hover:bg-zinc-500 duration-200 text-zinc-200 rounded-md px-4 py-2"
            href="/sign-in"
          >
            Sign in
          </Link>
          <Link
            className="bg-violet-600 hover:bg-violet-500 duration-200 text-zinc-200 rounded-md px-4 py-2"
            href="/sign-up"
          >
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
}
