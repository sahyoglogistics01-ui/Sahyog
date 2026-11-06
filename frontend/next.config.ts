import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // We removed the strict CSP rule that was blocking Next.js scripts.
            // We will add a nonce-based CSP in production later.
            key: "Permissions-Policy",
            value: "camera=(self), microphone=(), geolocation=(self)",
          },
        ],
      },
    ];
  },
  poweredByHeader: false,
};

export default nextConfig;