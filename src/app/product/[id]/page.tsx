"use client";
import sarees from "@/data/sarees.json";
import React, { useState } from "react";
import Image from "next/image";
import WhatsappEnquiryButton from "@/app/components/WhatsappEnquiryButton";

export default function SareeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const saree = sarees.find((s) => s.id === id);

  // Always define state hooks, use conditional logic after hooks
  const [selectedImage, setSelectedImage] = useState(saree?.images?.[0] ?? "");

  if (!saree) {
    return <div className="p-4">Saree not found</div>;
  }

  return (
    <>
      {/* SEO Meta */}
      <meta property="og:image" content={saree.images[0]} />
      <meta property="og:title" content={`${saree.name} - ${saree.price}`} />
      <meta property="og:description" content={saree.description} />
      <meta
        property="og:url"
        content={`https://yoursite.com/product/${saree.id}`}
      />

      <div className="max-w-7xl mx-auto p-4">
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-12 gap-8">
          {/* Thumbnails */}
          <div className="col-span-2 flex flex-col gap-4 max-h-[550px] overflow-y-auto scrollbar-hide">
            {saree.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={`${saree.name} ${index + 1}`}
                width={100}
                height={150}
                className={`rounded cursor-pointer object-cover border ${
                  selectedImage === img
                    ? "border-green-600"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="col-span-5 relative aspect-[3/4]">
            <Image
              src={selectedImage}
              alt={saree.name}
              fill
              className="object-cover rounded"
              priority
            />
          </div>

          {/* Details */}
          <div className="col-span-5 space-y-4">
            <h1 className="text-3xl font-bold">{saree.name}</h1>
            <p className="text-xl text-green-600">{saree.price}</p>
            <p className="text-gray-700">{saree.description}</p>
            <WhatsappEnquiryButton
              sareeId={saree.id}
              sareeName={saree.name}
              sareePrice={saree.price}
            />
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden space-y-4">
          <div className="w-full h-[70vh] overflow-x-auto flex snap-x snap-mandatory gap-4">
            {saree.images.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-full snap-center relative"
              >
                <Image
                  src={img}
                  alt={`${saree.name} ${index + 1}`}
                  fill
                  className="object-cover object-top rounded"
                  priority
                />
              </div>
            ))}
          </div>
          <div className="space-y-4 mt-4">
            <h1 className="text-2xl font-bold">{saree.name}</h1>
            <p className="text-lg text-green-600">{saree.price}</p>
            <p className="text-gray-700">{saree.description}</p>
            <WhatsappEnquiryButton
              sareeId={saree.id}
              sareeName={saree.name}
              sareePrice={saree.price}
            />
          </div>
        </div>
      </div>
    </>
  );
}
