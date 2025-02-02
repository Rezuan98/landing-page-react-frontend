import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-4 px-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div>© 2025 Pure Honey. All rights reserved.</div>
        <div className="flex items-center gap-2">
          <Phone size={20} />
          <span>+8801768261278</span>
        </div>
        <div>
          Developed by <a href="https://www.emanagerit.com/">eManagerIT</a>
        </div>
      </div>
    </footer>
  );
}
