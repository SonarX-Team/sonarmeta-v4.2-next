import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faDove,
  faEnvelope,
  faHandshakeAngle,
  faWallet,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

import { fetchUser, getCurrentUser } from "@/actions/user.action";
import CategoryTab from "@/components/shared/CategoryTab";

export default async function layout({ children, params }: { children: React.ReactNode; params: { id: string } }) {
  const { user } = await getCurrentUser();

  let tabNames: string[] = [];
  let tabRoutes: string[] = [];

  if (user && user.id === params.id) {
    tabNames = ["Overview", "IPs", "Unions", "Adaptations", "Reviews"];
    tabRoutes = ["", "/ips", "/unions", "/adaptations", "/review"];
  } else {
    tabNames = ["Overview", "IPs", "Unions", "Adaptations"];
    tabRoutes = ["", "/ips", "/unions", "/adaptations"];
  }

  const res = await fetchUser({ userId: params.id, isBasic: false });

  return (
    <div className="sm:flex w-full max-w-7xl mt-8 px-8">
      <div className="flex flex-col justify-start gap-8 basis-1/4">
        <div className="flex flex-col justify-start gap-3">
          <img
            className="w-[270px] h-[270px] bg-violet-300 hover:bg-violet-200 duration-200 border-2 border-zinc-400 rounded-full"
            src={res.avatar}
            alt="user-avatar"
          />

          <h1 className="text-heading2-semibold text-dark-1">{res.username}</h1>
          <p className="text-small-regular text-zinc-700 whitespace-pre-line">{res.bio}</p>
        </div>

        <div className="flex flex-col justify-start gap-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon className="w-[14px] h-[14px] text-slate-500" icon={faEnvelope} />
            <p className="text-small-regular text-zinc-700 leading-none">{res.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon className="w-[14px] h-[14px] text-slate-500" icon={faWallet} />
            <p className="text-small-regular text-zinc-700 leading-none">
              {res.walletAddresses ? res.walletAddresses : "No wallet connected"}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-start gap-3">
          {user?.id === params.id && (
            <Link
              className="bg-violet-200 hover:bg-violet-200/70 duration-200 text-small-regular text-center rounded-md px-3 py-2"
              href="/account"
            >
              Edit account
            </Link>
          )}
          <button
            className="bg-orange-500 hover:bg-orange-400 duration-200 disabled:bg-zinc-400 disabled:text-zinc-200 text-small-regular text-center rounded-md px-3 py-2"
            disabled={!user || user.id === params.id}
          >
            + Follow
          </button>
        </div>

        <div className="flex flex-col justify-start gap-4">
          <div className="flex items-center gap-2 text-zinc-700">
            <FontAwesomeIcon className="w-[14px] h-[14px]" icon={faDove} />
            <p className="text-small-semibold text-dark-1 leading-none">{res.IPs.length}</p>
            <p className="text-small-regular">IPs created</p>
          </div>
          <div className="flex items-center gap-2 text-zinc-700">
            <FontAwesomeIcon className="w-[14px] h-[14px]" icon={faHandshakeAngle} />
            <p className="text-small-semibold text-dark-1 leading-none">{res.unions.length}</p>
            <p className="text-small-regular">Unions joined</p>
          </div>
          <div className="flex items-center gap-2 text-zinc-700">
            <FontAwesomeIcon className="w-[14px] h-[14px]" icon={faWandMagicSparkles} />
            <p className="text-small-semibold text-dark-1 leading-none">{res.adaptations.length}</p>
            <p className="text-small-regular">Adaptations contributed</p>
          </div>
          <div className="flex items-center gap-2 text-zinc-700">
            <FontAwesomeIcon className="w-[14px] h-[14px]" icon={faBell} />
            <p className="text-small-semibold text-dark-1 leading-none">0</p>
            <p className="text-small-regular">Followers</p>
            <p className="text-small-regular">·</p>
            <p className="text-small-semibold text-dark-1 leading-none">0</p>
            <p className="text-small-regular">Follows</p>
          </div>
        </div>
      </div>

      <div className="basis-3/4 sm:pl-10 sm:mt-0 mt-6">
        <CategoryTab tabs={tabNames} routes={tabRoutes} root={`/space/${params.id}`} />

        {children}
      </div>
    </div>
  );
}
