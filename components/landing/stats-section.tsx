import { Card } from "@/components/ui/card";
import Image from "next/image";
import widgets from "@/public/assets//wigets.svg";

interface StatItem {
  value: string
  label: string
  description: string
};

const statsData: StatItem[] = [
  {
    value: "400+",
    label: "Widgets & Examples",
    description: "Explore a rich collection of ready-to-use widgets and examples — built to inspire and speed up your design workflow."
  },
  {
    value: "10000+",
    label: "Components & Variant",
    description: "Discover hundreds of flexible components and variants — crafted to help you design faster and maintain consistency effortlessly."
  },
  {
    value: "658+",
    label: "Styles, Variables & Tokens",
    description: "Access well-structured styles, variables, and tokens — ensuring seamless scalability and visual harmony across every design."
  }
];

const StatCard = ({ stat }: { stat: StatItem }) => {
  return (
    <Card className="p-8 text-center hover:shadow-lg transition">
      <div className="w-14 h-14 border-2 p-2 rounded-2xl">
        <Image src={widgets} width={100} height={100} alt="Widgets"/>
      </div>
      <h2 className="text-4xl font-bold text-gray-900 text-left">{stat.value}</h2>
      <h3 className="text-xl text-gray-900 text-left mb-2">{stat.label}</h3>
      <p className="text-gray-600 text-left">{stat.description}</p>
    </Card>
  )
};

export const StatsSection = () => {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-4 border-b-1 pb-8">
          <h2 className="text-3xl md:text-4xl max-w-xl font-bold text-gray-900 mb-4">
            The perfect foundation to kickstart any project.
          </h2>
          <p className="text-gray-600 max-w-2xl">
            A comprehensive UI kit — thoughtfully crafted with Auto Layout 5.0, smart variants, variables, and built-in WCAG accessibility for a seamless design experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
};