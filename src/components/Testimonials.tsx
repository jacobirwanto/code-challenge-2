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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.company.logo}
          alt={testimonial.company.name}
          className="w-10 h-10 rounded-full"
        />
        <h3 className="ml-4 text-xl font-semibold">
          {testimonial.company.name}
        </h3>
      </div>
      <p className="text-lg italic">"{testimonial.review}"</p>
    </div>
  );
};

function Testimonials() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">What they say about SNSV?</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonial.map((testimonial) => (
          <Card key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
