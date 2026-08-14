import Link from "next/link";
import { navigationItems } from "@/app/data/navigation";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm font-medium text-text-primary hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
