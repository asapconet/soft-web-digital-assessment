"use client";

import { Route } from "./types";

export const NavRoutes: Route<string | any> = [
  { name: "Business Directory", link: "business-directory" },
  { name: "Features", link: "/features" },
  { name: "Pricing", link: "/pricing" },
  { name: "Blog", link: "/blog" },
];
