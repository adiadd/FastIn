export interface User {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  headline: string;
  about: string;
  avatarUrl: string;
  bannerUrl: string;
  location: string;
  connections: number;
  followers: number;
  experience: Experience[];
  education: Education[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyLogoUrl: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  logoUrl: string;
  startYear: number;
  endYear: number;
}

export interface Post {
  id: string;
  authorId: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  reposts: number;
  createdAt: string;
}

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  content: string;
  createdAt: string;
}
