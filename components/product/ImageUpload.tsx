"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";

import { TbPhotoPlus } from "react-icons/tb";
export default function ImageUpload() {
  const [imageUrl, setImageUrl] = useState("");
  return (
    <>
      <CldUploadWidget
        onSuccess={(result, { widget }) => {
          if (result.event === "success") {
            widget.close();
            // @ts-ignore
            setImageUrl(result.info?.secure_url);
          }
          console.log(result);
        }}
        uploadPreset="yarbw3kb"
        options={{
          maxFiles: 1,
        }}
      >
        {({ open }) => (
          <>
            <div className="space-y-2">
              <label className="Otext-slate-800">Imagen Producto</label>
              <div
                onClick={() => open()}
                className="relative cursor-pointer hover:opacity-70 transition p-10
              border-neutral-300 flex flex-col justify-center items-center gap-4
              text-neutral-600 bg-slate-100"
              >
                <TbPhotoPlus size={50} onClick={() => open} />
                <p className="text-Ug font-semibold >Agregar Imagen</p>">
                  Agregar Imagen
                </p>
                {imageUrl && (
                  <div className="absolute inset-0 w-full">
                    <Image
                      fill
                      alt="Imagen del producto"
                      src={imageUrl}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                )}
              </div>
            </div>
            <input type="hidden" name="image" value={imageUrl} />
          </>
        )}
      </CldUploadWidget>
    </>
  );
}
