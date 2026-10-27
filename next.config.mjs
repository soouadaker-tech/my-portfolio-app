/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // site statique : le dossier "out" se déploie partout
  images: { unoptimized: true },
};
export default nextConfig;
