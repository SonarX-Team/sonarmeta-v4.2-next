"use client";

import { useRouter } from "next/navigation";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { requestIP } from "@/actions/ip.action";

import AppButton from "../ui/AppButton";

export default function RequestIP({
  userId,
  unionId,
  IPId,
  path,
  requested,
  joined,
}: {
  userId: string | undefined;
  unionId: string;
  IPId: string;
  path: string;
  requested: boolean;
  joined: boolean;
}) {
  const router = useRouter();
  
  async function subscribeAction() {
    if (!userId) return router.push("/sign-in");
    // await subscribeUnion({ userId, unionId, path });
  }

  async function requestAction() {
    await requestIP({ unionId, IPId, path });
  }

  return (
    <div className="flex items-start text-small-regular gap-3 leading-none h-[44px]">
      <form action={subscribeAction}>
        <AppButton text="+ 关注" pendingText="关注中..." type="submit" />
      </form>

      <form action={requestAction}>
        {!requested && !joined && <AppButton text="申请孵化" pendingText="加载中..." type="submit" />}
        {requested && <AppButton text="申请审核中" disabled={true} />}
        {joined && <AppButton text="孵化中" disabled={true} />}
      </form>
    </div>
  );
}
