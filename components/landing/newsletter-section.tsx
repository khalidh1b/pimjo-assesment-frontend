import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const NewsletterSection = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-4xl flex items-center mx-auto px-6 text-center">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-white mb-4">Newsletter</h2>
          <p className="text-gray-300 mb-8">
            We'll occasionally send you news about the latest updates, special offers and new products. No spam.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border bg-[#9CA3AF] px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 px-8">
              Get Offers <ChevronRight/>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
};