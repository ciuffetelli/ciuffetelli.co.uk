import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent the site from being embedded in iframes on other origins (clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Stop browsers from guessing MIME types
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Don't send the Referer header when navigating to a different origin
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Restrict browser features not needed by a portfolio site
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // Force HTTPS for 1 year (Vercel already enforces this, belt-and-suspenders)
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
