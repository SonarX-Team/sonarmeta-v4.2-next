import {
  faPlus,
  faStore,
  faHammer,
  faInfoCircle,
  faWallet,
  faUsersGear,
  faDove,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// 导航栏链接常量
export const navLinks: { icon: IconProp; route: string; label: string }[] = [
  {
    icon: faDove,
    route: "/creations",
    label: "Creations",
  },
  {
    icon: faUsersGear,
    route: "/ip-daos",
    label: "IP DAOs",
  },
  {
    icon: faStore,
    route: "/marketplace",
    label: "Marketplace",
  },
  {
    icon: faPlus,
    route: "/create/creation",
    label: "Create",
  },
  {
    icon: faInfoCircle,
    route: "https://sonarx666.feishu.cn/docx/XyLndXhftoXz1GxkCYAcOIdrn1U?from=from_copylink",
    label: "About",
  },
];

// 首页Getting started部分的卡片内容
export const Guides = [
  {
    title: "Connect your wallet",
    description:
      "Install and connect a decentralized wallet by press the top-right cornor button, such as MetaMask, to link your decentralized account.",
    icon: faWallet,
  },
  {
    title: "Create/Join IP DAOs",
    description:
      "An IP DAO is the owner of co-creations, which authorizes derivatives, and distributes profit among its members.",
    icon: faUsersGear,
  },
  {
    title: "Bind and submit",
    description:
      "Mint a co-creation NFT and bind an account to it so that members within the IP DAO can submit their component NFTs to it.",
    icon: faHammer,
  },
  {
    title: "Authorize on the marketplace",
    description:
      "Mint authorization NFTs to a co-creation token-bound account and use that account to list them on the marketplace to connect others.",
    icon: faStore,
  },
];

// Auth常量
export const EXPIRE_AGE = 60 * 60 * 24 * 30; // JWT失效时间30天
export const COOKIE_NAME = "sonarmetaAuthToken";

// AliOSS常量
export const aliRoot = "https://sonarmeta.oss-cn-shenzhen.aliyuncs.com/";

// Mumbai合约地址
export const MAIN_CONTRACT = "0x1f22bcca683845cf6f4ac9c6495f6d549349d5cb";
export const CREATION_CONTRACT = "0x470d67f8de312a7674d9417aa18717cd114469b9";
export const AUTHORIZATION_CONTRACT = "0x50e160f7a2f54c74282c3022061b96273f9836ef";
export const MARKETPLACE_CONTRACT = "0x9817a7faaeab2ff87d270a6f192cb49bb8d81e85";
