import testimonial from "../utils/TestimonialItems";

interface Testimonial {
  id: number;
  company: {
    name: string;
    logo: string;
  };
  review: string;
}

const Card: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.company.logo}
          alt={testimonial.company.name}
          className="w-12 h-12 rounded-lg object-contain bg-transparent"
        />
        <h3 className="ml-4 text-xl font-semibold text-blue-500">
          {testimonial.company.name}
        </h3>
      </div>
      <p className="text-lg italic text-gray-300">"{testimonial.review}"</p>
    </div>
  );
};

function Testimonials() {
  return (
    <div className="px-8 lg:px-24 lg:py-8 bg-gray-950">
      <h2 className="text-3xl font-bold py-8 text-center text-gray-100">
        What they say about SNSV?
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonial.map((testimonial) => (
          <Card key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
