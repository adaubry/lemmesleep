/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Protocole correct
        hostname: "images.unsplash.com", // Hostname correct
        pathname: "/**", // Path autorisé (ici tout le chemin)
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc", // Autre domaine que tu veux autoriser
        pathname: "/**",
      },
    ],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default nextConfig;
