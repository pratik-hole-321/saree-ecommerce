import sarees from "@/data/sarees.json";
import SareeCard from "./components/SareeCard";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold my-4 text-center">Saree Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        {sarees.map((saree) => (
          <SareeCard key={saree.id} saree={saree} />
        ))}
      </div>
    </div>
  );
}
