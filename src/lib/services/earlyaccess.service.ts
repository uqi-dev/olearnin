import api from "@/appwrite/appwrite";

const earlyAccessCollectionId = "64a78dca2afaba2c1ef9";

export const joinEarlyAccess = async (email: string) => {
  return await api.createDocument(earlyAccessCollectionId, { email: email });
};
