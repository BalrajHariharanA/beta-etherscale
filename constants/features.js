import Modular from "@/public/svgs/modular.svg";
import Decentralize from "@/public/svgs/decentralize.svg";
import Agnostic from "@/public/svgs/agnostic.svg";
import Secured from "@/public/svgs/secured.svg";

export const etherScaleFeatures = [
  {
    id: 1,
    name: "Secured by AVS",
    description: `EtherScale fortifies security through the integration of EigenLayer's Actively Validated Services (AVS). By leveraging AVS, EtherScale ensures robust protection for transactions and operations against vulnerabilities, maintaining high standards of data integrity and trust.`,
    icon: Secured
  },
  {
    id: 2,
    name: "Chain Agnostic",
    description: `EtherScale's chain-agnostic design allows ScaleApps to seamlessly operate across various blockchain protocols. This flexibility empowers DApps to choose the most suitable platform, tapping into wider markets and leveraging the unique strengths of different blockchains. By not depending on a single chain environment, ScaleApps can optimize performance, reduce risks associated with single-chain limitations, and enhance their adaptability to evolving blockchain technologies.`,
    icon: Agnostic
  },
  {
    id: 3,
    name: "Decentralized",
    description: `EtherScale emphasizes decentralization with its use of decentralized sequencers and provers, distributing control across the network. This approach enhances security by reducing central points of failure, aligns with blockchain principles, and fosters transparency and user trust.`,
    icon:Decentralize
  },
  {
    id: 4,
    name: "Modular",
    description: `EtherScale's modular design seamlessly integrates diverse components and services, tailored to developers' needs, supporting a wide range of applications and adapting to evolving blockchain technologies.`,
    icon: Modular
  },
];
export default etherScaleFeatures;
