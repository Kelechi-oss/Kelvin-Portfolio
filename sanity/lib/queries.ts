import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  name,
  tagline,
  shortBio,
  longBio,
  email,
  phone,
  location,
  github,
  linkedin,
  financialAppUrl,
  resumeFile{ asset->{url, originalFilename} },
  presentationFile{ asset->{url, originalFilename} },
  headshot{ asset->{url, metadata{ lqip, dimensions }} },
  contactCta
}`;

export const semestersQuery = groq`*[_type == "semester"] | order(order asc){
  _id,
  title,
  status,
  order,
  notes,
  courses[]{ name, status }
}`;

export const experiencesQuery = groq`*[_type == "experience"] | order(order asc){
  _id,
  company,
  title,
  location,
  startDate,
  endDate,
  current,
  bullets,
  order
}`;

export const certificationsQuery = groq`*[_type == "certification"] | order(issuedAt desc){
  _id,
  name,
  issuer,
  issuedAt,
  credentialId,
  pdfFile{ asset->{url, originalFilename} },
  externalUrl,
  description
}`;

export const skillsQuery = groq`*[_type == "skillCategory"] | order(order asc){
  _id,
  category,
  skills,
  order
}`;

export const projectsQuery = groq`*[_type == "project"] | order(order asc){
  _id,
  title,
  type,
  description,
  team,
  status,
  highlights,
  links,
  pdfFile{ asset->{url, originalFilename} },
  thumbnail{ asset->{url, metadata{ lqip }} },
  tags,
  order
}`;

export const articlesQuery = groq`*[_type == "article"] | order(publishedAt desc){
  _id,
  title,
  category,
  author,
  team,
  abstract,
  publishedAt,
  pdfFile{ asset->{url, originalFilename} },
  cover{ asset->{url, metadata{ lqip }} },
  tags
}`;

export const financialAppQuery = groq`*[_type == "financialApp"][0]{
  title,
  summary,
  capabilities,
  appUrl,
  presentationFile{ asset->{url, originalFilename} },
  screenshots[]{ asset->{url, metadata{ lqip }} }
}`;
