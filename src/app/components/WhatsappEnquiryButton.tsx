// components/WhatsappEnquiryButton.tsx
"use client";
import React from "react";

type WhatsappEnquiryButtonProps = {
  sareeId: string;
  sareeName: string;
  sareePrice: string;
  sareeDescription: string;
};

export default function WhatsappEnquiryButton({
  sareeId,
  sareeName,
  sareePrice,
  sareeDescription,
}: WhatsappEnquiryButtonProps) {
  // Detect current site origin dynamically (works on localhost & live)
  console.log(window);

  const currentUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/product/${sareeId}`
      : `https://yoursite.com/product/${sareeId}`; // Fallback (SSR safe)

  const message = `🌸 Saree Name: ${sareeName}\n💰 Price: ${sareePrice}\n📜 Description: ${sareeDescription}\n\nView this saree online: ${currentUrl}`;

  const whatsappUrl = `https://wa.me/918999121345?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600 transition"
    >
      Enquire on WhatsApp
    </a>
  );
}
