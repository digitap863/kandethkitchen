import FooterSection from "@/components/common/FooterSection";
import ProductDetails from "@/components/products/productDetails/ProductDetails";
import RelatedProducts from "@/components/products/productDetails/RelatedProducts";

const ProductDetailsPage = () => {
  return (
    <>
      <ProductDetails />
      <RelatedProducts />
      <FooterSection />
    </>
  );
};

export default ProductDetailsPage;
