export type CategoryProduct = {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  category: string;
  subcategory: string;
  type: string;
  isNewArrival: boolean;
  isTrending: boolean;
};

const productSeeds = [
  ["Ivory Embroidered Suit Set", "Loom & Line", "₹2,499", "/instagram/4.jpg", "women", "indian-wear", "suit-sets"],
  ["Rose Printed Kurta", "Craft District", "₹1,899", "/instagram/6.jpg", "women", "indian-wear", "kurtas-kurtis"],
  ["Draped Celebration Saree", "Studio Nine", "₹3,299", "/catogery/women.jpg", "women", "indian-wear", "sarees"],
  ["Sculpted Gold Earrings", "Atelier Nine", "₹1,299", "/catogery/JEWELRY.jpg", "women", "jewellery", "earrings"],
  ["Tailored Linen Shirt", "Urban Thread", "₹1,599", "/catogery/men.jpg", "men", "clothing", "shirts"],
  ["Essential Cotton T-Shirt", "Mode House", "₹899", "/instagram/2.jpg", "men", "clothing", "t-shirts"],
  ["Floral Occasion Dress", "Kind Label", "₹1,499", "/catogery/kids.jpg", "kids", "girls", "dresses"],
  ["Everyday White Sneakers", "Thread Lab", "₹2,799", "/instagram/8.jpg", "footwear", "men", "sneakers"],
  ["Satin Finish Lip Colour", "Muse Beauty", "₹799", "/catogery/glam.jpg", "glam", "makeup", "lips"],
  ["Handwoven Accent Cushion", "House of Loom", "₹1,199", "/catogery/homedecor.jpg", "home-decor", "home-furnishings", "cushions"],
  ["Ivory Bridal Lehenga", "Gopi Vaid", "₹18,999", "/instagram/4.jpg", "wedding-occasion", "bridal", "bridal-lehengas"],
  ["Sculpted Statement Earrings", "Noib", "₹1,499", "/catogery/JEWELRY.jpg", "jewelry", "fashion-jewelry", "earrings"],
  ["Silk Hair Accessory", "Mode House", "₹699", "/instagram/2.jpg", "accessories", "fashion-accessories", "hair-accessories"],
] as const;

export const categoryProducts: CategoryProduct[] = productSeeds.map((product, index) => ({
  id: `category-product-${index + 1}`,
  name: product[0],
  brand: product[1],
  price: product[2],
  image: product[3],
  category: product[4],
  subcategory: product[5],
  type: product[6],
  isNewArrival: index % 2 === 0,
  isTrending: index % 3 !== 0,
}));

export function filterCategoryProducts(filters: Partial<Pick<CategoryProduct, "category" | "subcategory" | "type">>) {
  return categoryProducts.filter((product) =>
    Object.entries(filters).every(([key, value]) => !value || product[key as keyof CategoryProduct] === value),
  );
}
