import {
  Account,
  Client as Appwrite,
  Databases,
  ID,
  Permission,
  Query,
  Storage,
} from "appwrite";

const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID;

let api: any = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }
    let appwrite = new Appwrite();
    appwrite
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(process.env.NEXT_PUBLIC_PROJECT_ID!);
    const account = new Account(appwrite);
    const database = new Databases(appwrite);
    const storage = new Storage(appwrite);

    api.sdk = { database, account, storage };
    return api.sdk;
  },

  getAccount: () => {
    let account = api.provider().account;
    return account.get();
  },

  createSession: (loginBody: any) => {
    return api
      .provider()
      .account.createEmailSession(loginBody.email, loginBody.password);
  },

  deleteCurrentSession: () => {
    return api.provider().account.deleteSession("current");
  },

  createDocument: (
    collectionId: string,
    data: JSON,
    permissions: Permission
  ) => {
    return api
      .provider()
      .database.createDocument(
        databaseId,
        collectionId,
        "unique()",
        data,
        permissions
      );
  },
  getDocuments: (collectionId: string, limit: number, offset: number) => {
    return api
      .provider()
      .database.listDocuments(databaseId, collectionId, [
        Query.limit(limit || 10),
        Query.offset(offset || 0),
      ]);
  },

  getDocument: (collectionId: string, documentId: string) => {
    return api
      .provider()
      .database.getDocument(databaseId, collectionId, documentId);
  },

  updateDocument: (collectionId: string, documentId: string, data: JSON) => {
    return api
      .provider()
      .database.updateDocument(databaseId, collectionId, documentId, data);
  },

  deleteDocument: (collectionId: string, documentId: string) => {
    return api
      .provider()
      .database.deleteDocument(databaseId, collectionId, documentId);
  },

  createFile: (file: any) => {
    return api
      .provider()
      .storage.createFile(process.env.NEXT_PUBLIC_BUCKET_ID, ID.unique(), file);
  },

  getFilePreview: (fileId: string) => {
    return api
      .provider()
      .storage.getFileView(process.env.NEXT_PUBLIC_BUCKET_ID, fileId);
  },
};

export default api;
