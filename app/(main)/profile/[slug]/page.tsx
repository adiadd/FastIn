import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getUsers, getUserBySlug } from "@/lib/data";
import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileAbout } from "@/components/profile/profile-about";
import { ExperienceList } from "@/components/profile/experience-list";
import { EducationList } from "@/components/profile/education-list";

interface ProfilePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const users = getUsers();
  return users.map((user) => ({ slug: user.slug }));
}

export async function generateMetadata({
  params,
}: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const user = getUserBySlug(slug);

  if (!user) {
    return { title: "Profile Not Found | FastIn" };
  }

  return {
    title: `${user.firstName} ${user.lastName} | FastIn`,
    description: user.headline,
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const user = getUserBySlug(slug);

  if (!user) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl space-y-4 py-6">
      <ProfileHeader user={user} />
      <ProfileAbout about={user.about} />
      <ExperienceList experience={user.experience} />
      <EducationList education={user.education} />
    </div>
  );
}
