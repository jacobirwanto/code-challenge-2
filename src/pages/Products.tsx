import { Footer, Navbar, ProductList } from "../components";

function Products() {
  return (
    <div className="lg:animate-fadeIn">
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  );
}

export default Products;
