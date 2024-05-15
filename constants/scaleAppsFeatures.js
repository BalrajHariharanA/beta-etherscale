import Settings from "@/public/svgs/settings.svg";
import NativeStable from "@/public/svgs/native-stable.svg";
import Automatic from "@/public/svgs/automatic.svg";
import DataAvailability from "@/public/svgs/data-availability.svg";
import CrossRollup from "@/public/svgs/cross-rollup.svg";
import Cloud from "@/public/svgs/cloud.svg";
import Wallet from "@/public/svgs/wallet.svg";
import Explorer from "@/public/svgs/explorer.svg";
import Indexer from "@/public/svgs/indexer.svg";
import Staking from "@/public/svgs/staking.svg";
import TestNetSupport from "@/public/svgs/testnet-support.svg";
import Support from "@/public/svgs/support.svg";
const scaleAppsFeatures = [
  {
    name: "Indexers",
    description: "Improve data query efficiency across the platform to boost ScaleApps performance.",
    href: "#",
    icon: Indexer,
  },
  {
    name: "Smart Contract Toolkit",
    description: " Pre-configured smart contract templates and development tools customised for ScaleApps.",
    href: "#",
    icon: Settings,
  },
  {
    name: "Data Availability",
    description: "Guarantee continuous availability and security of vital data for all network participants.",
    href: "#",
    icon: DataAvailability,
  },

  {
    name: "Cross-rollup Messaging",
    description: "Enable seamless communication between ScaleApps for interoperability.",
    href: "#",
    icon: CrossRollup,
  },
  {
    name: "Oracle Services",
    description: "Provide real-time data to smart contracts for dynamic DApp functions.",
    href: "#",
    icon: Cloud,
  },
  {
    name: "Wallet Service",
    description: "Integrate wallet with MPC services for streamlined asset management in ScaleApps.",
    href: "#",
    icon: Wallet,
  },

  {
    name: "Explorer",
    description: "Offer a holistic view of network transactions to enhance transparency.",
    href: "#",
    icon: Explorer,
  },
  {
    name: "Testnet Faucets",
    description: "Supply developers with test tokens for DApp testing in sandbox environments.",
    href: "#",
    icon: TestNetSupport,
  },
  {
    name: "Native Stable Coins",
    description: "Incorporate native stablecoins within ScaleApps to streamline stable and secure transactions.",
    href: "#",
    icon: NativeStable,
  },
  {
    name: "Staking for ScaleApps",
    description: "Allow token staking within ScaleApps for network security and reward earning..",
    href: "#",
    icon: Staking,
  },
  {
    name: "Automatic Monitoring",
    description: "Monitor network conditions and DApp performance, delivering automated alerts and analytics.",
    href: "#",
    icon: Automatic,
  },
  {
    name: "Support",
    description: "Offer strong technical support and engage with the community to aid developers and users.",
    href: "#",
    icon: Support,
  },
];
export default scaleAppsFeatures;
