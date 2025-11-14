import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import figma from "@/public/assets//figma.svg"

interface CtaButtonsProps {
  className?: string
  pText: string
  spanText: string
  btnText: string
}

export const CtaButtons = ({ className = "", pText, spanText, btnText }: CtaButtonsProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button className="px-8 py-6 bg-white border rounded-lg hover:bg-gray-100 text-base">
        <Image src={figma} width={30} height={30} alt="Figma"/>
        <p className="text-gray-600 font-semibold">{pText}</p>
        <span className="text-gray-500 font-medium">{spanText}</span>
        <ChevronRight/>
      </Button>
      <Button className="px-8 py-6 bg-[#3758F9] text-base">
        {btnText} <ChevronRight/>
      </Button>
    </div>
  )
};