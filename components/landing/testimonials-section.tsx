import { Code2, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TestimonialItem {
  name: string
  role: string
  rating: number
  text: string
};

const testimonials: TestimonialItem[] = [
  {
    name: "Jane Smith",
    role: "Product Designer",
    rating: 5,
    text: "This UI library has transformed our design workflow. The components are intuitive and incredibly well-crafted."
  },
  {
    name: "Sarah Anderson",
    role: "Senior Designer",
    rating: 5,
    text: "Absolutely love the attention to detail in every component. Makes designing premium products so much easier."
  },
  {
    name: "Mike Johnson",
    role: "UI/UX Designer",
    rating: 5,
    text: "The best Figma library I've used. Clean, professional, and saves hours of design time."
  },
  {
    name: "Emily Chen",
    role: "Lead Designer",
    rating: 5,
    text: "Game-changer for our team. The variety and quality of components is outstanding."
  },
  {
    name: "David Miller",
    role: "Creative Director",
    rating: 5,
    text: "Professional-grade components that actually work in production. Highly recommended!"
  },
  {
    name: "Amanda Taylor",
    role: "UX Designer",
    rating: 5,
    text: "Streamlined our entire design process. The semantic tokens and styles are brilliant."
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialItem }) => {
  return (
    <Card className="p-6 hover:shadow-lg transition">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-4">{testimonial.text}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
          <p className="text-xs text-gray-600">{testimonial.role}</p>
        </div>
      </div>
    </Card>
  )
};

export const TestimonialsSection = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="text-gray-500 text-base flex justify-center rounded-md gap-1 border w-32 mb-3">
          <Code2/>Testimonials
        </div>
        <h2 className="text-3xl md:text-4xl font-bold max-w-xl text-left text-gray-900 mb-4">
          Our Wall of Love - Words from Happy Customers
        </h2>
        <p className="text-gray-600 max-w-2xl text-left">
          Trusted by design professionals to create the awesome UI/UX
        </p>
      </div>

      <div className="grid grid-cols-1 bg-gray-50 px-9 py-10 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
};