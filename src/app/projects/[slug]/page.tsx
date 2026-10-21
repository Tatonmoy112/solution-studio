import { notFound } from "next/navigation";

export async function generateStaticParams() {
  // Case study pages temporarily disabled
  return [];
}

export default async function ProjectDetailPage() {
  // Case study pages temporarily disabled
  notFound();
  return null;
}
