import AddProductForm from "@/components/product/AddProductForm";
import ProductForm from "@/components/product/ProductForm";
import React from "react";
export default function ProductsNewPage() {
  return (
    <>
      <AddProductForm>
        <ProductForm />
      </AddProductForm>
    </>
  );
}
