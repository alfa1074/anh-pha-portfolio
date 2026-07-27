import Link from "next/link";

import { site, contact, nav } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-content px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold">{site.name}</p>
            <p className="text-sm text-muted-foreground">{site.title}</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="transition-colors hover:text-foreground"
          >
            {contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
