"use client";
import { useEffect, useState } from "react";

export default function WhatsappEnquiryButton({
  sareeId,
  sareeName,
  sareePrice,
}: // sareeDescription,
{
  sareeId: string;
  sareeName: string;
  sareePrice: string;
  // sareeDescription: string;
}) {
  const [whatsappLink, setWhatsappLink] = useState<string>("");

  useEffect(() => {
    const productUrl = `${window.location.origin}/product/${sareeId}`;
    const msg = `🌸 Saree Name: ${sareeName}%0APrice: ${sareePrice}%0AView Saree: ${productUrl}`;
    setWhatsappLink(
      `https://wa.me/918999121345?text=${encodeURIComponent(msg)}`
    );
  }, [sareeId, sareeName, sareePrice]);

  if (!whatsappLink) return null; // Avoid SSR mismatch by not rendering on server

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600 transition"
    >
      Enquire on WhatsApp
    </a>
  );
}
