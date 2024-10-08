import ProductCard from "@/components/product/ProductCard";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });
  return products;
}

export default async function OrderPage({
  params,
}: {
  params: { category: string };
}) {
  const products = await getProducts(params.category);
  console.log(products);
  return (
    <>
      <div className="text-2xl font-bold text-center pb-4 capitalize">
        {params.category}
        <Heading>Elige tu pedido a continuacion.</Heading>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-start">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
