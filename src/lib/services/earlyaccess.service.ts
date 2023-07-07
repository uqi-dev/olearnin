import api from "@/appwrite/appwrite";

const earlyAccessCollectionId = "64a64f0ba5913b7c850c";

export const joinEarlyAccess = async (email: string) => {
  return await api.createDocument(earlyAccessCollectionId, { email: email });
};
