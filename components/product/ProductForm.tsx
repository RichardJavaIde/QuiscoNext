import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import ImageUpload from "./ImageUpload";

async function getCategories() {
  return await prisma.category.findMany();
}
export default async function ProductForm() {
  const categories = await getCategories();
  return (
    <>
      <div className="space-y-2">
        <div className=" flex flex-col lg:flex-row lg:justify-between gap-5">
          <Link
            href={"/admin/products"}
            className="bg-amber-400  hover:bg-amber-600 text-xl px-5 py-2 mb-3 text-center font-bold cursor-pointer"
          >
            Atras
          </Link>
        </div>
        <label className="text-slate-800" htmlFor="name">
          Nombre:
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="block w-full p-3 bg-slate-100"
          placeholder="Nombre Producto"
        />
      </div>

      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="price">
          Precio:
        </label>
        <input
          id="price"
          name="price"
          className="block w-full p-3 bg-slate-100"
          placeholder="Precio Producto"
        />
      </div>

      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="categoryId">
          Categoría:
        </label>
        <select
          className="block w-full p-3 bg-slate-100"
          id="categoryId"
          name="categoryId"
        >
          <option value="">-- Seleccione --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <ImageUpload />
    </>
  );
}
