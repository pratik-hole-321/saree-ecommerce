import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side - Logo / Name */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-gray-800">Vaitik</span>
            </Link>
          </div>
          {/* You can add more nav items on the right in the future */}
        </div>
      </div>
    </nav>
  );
}
