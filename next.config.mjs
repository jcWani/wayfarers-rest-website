/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cjaylxcmzxbovendcgcs.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/room-images/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
