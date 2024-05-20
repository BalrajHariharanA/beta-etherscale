import Modular from "@/public/svgs/modular.svg";
import Decentralize from "@/public/svgs/decentralize.svg";
import Agnostic from "@/public/svgs/agnostic.svg";
import Secured from "@/public/svgs/secured.svg";

export const etherScaleFeatures = [
  {
    id: 1,
    name: "Secured by AVS",
    description: `<span>EtherScale fortifies security through the integration of EigenLayer's <span className="text-white">Actively Validated Services (AVS)</span>. By leveraging AVS, EtherScale ensures <span className="text-white">robust protection for transactions and operations </span>against vulnerabilities, maintaining high standards of <span className="text-white">data integrity and trust.</span></span>`,
    icon: Secured
  },
  {
    id: 2,
    name: "Chain Agnostic",
    description: `<span>EtherScale's <span className="text-white">chain-agnostic</span> design allows ScaleApps to <span className="text-white">seamlessly operate</span> across various blockchain protocols. This <span className="text-white">flexibility empowers DApps to choose the most suitable platform</span>, tapping into wider markets and leveraging the unique strengths of different blockchains. By not depending on a single chain environment, ScaleApps can optimize performance, <span className="text-white">reduce risks associated with single-chain</span> limitations, and enhance their adaptability to evolving blockchain technologies.</span>`,
    icon: Agnostic
  },
  {
    id: 3,
    name: "Decentralized",
    description: `<span>EtherScale emphasizes <span className="text-white">decentralization</span> with its use of <span className="text-white">decentralized sequencers and provers,</span> distributing control across the network. This approach enhances security by reducing <span className="text-white">central points of failure,</span> aligns with <span className="text-white">blockchain principles,</span> and fosters <span className="text-white">transparency</span> and user <span className="text-white">trust.</span></span>`,
    icon:Decentralize
  },
  {
    id: 4,
    name: "Modular",
    description: `<span>EtherScale's modular design seamlessly integrates <span className="text-white">diverse components and services,</span> tailored to developers' needs, supporting a <span className="text-white">wide range of applications</span> and adapting to evolving blockchain technologies.</span>`,
    icon: Modular
  },
];
export default etherScaleFeatures;
