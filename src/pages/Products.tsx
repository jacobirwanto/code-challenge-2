import { Footer, Navbar, ProductList, Testimonials } from "../components";

function Products() {
  return (
    <div className="lg:animate-fadeIn">
      <Navbar />
      <ProductList />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Products;
