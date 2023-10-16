"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, sepolia, goerli, polygon, optimism, arbitrum, avalanche, bsc, bscTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, bsc, avalanche, optimism, arbitrum, sepolia, goerli, bscTestnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "SonarMeta V4 RainbowKit",
  projectId: "fcb70c4ddf11bbd77b7a93e5a4897edd",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function RainbowKit({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: "#7b3fe4",
          accentColorForeground: "white",
          borderRadius: "medium",
          overlayBlur: "small",
        })}
        locale="en-US"
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
