import { Client, ID, Databases, Storage, Query } from "appwrite";
import secret from "../config/Keys";
export class DocumentService {
      client = new Client();
      databases;
      storage;
      constructor() {
            this.client.setEndpoint(secret.base_url).setProject(secret.project_id);
            this.databases = new Databases(this.client);
            this.storage = new Storage(this.client);
      }
      // ?Document Operations
      async createPost({ title, slug, content, tages, coverImage }) {
            try {
                  return await this.databases.createDocument(secret.db_id, secret.article_collection_id, ID.unique(), {
                        title,
                        slug,
                        content,
                        tages,
                        coverImage,
                  });
            } catch (error) {
                  console.log("Unable to make a post ", error.message);
            }
      }
      async updatePost(id, obj) {
            try {
                  return await this.databases.updateDocument(secret.db_id, secret.article_collection_id, id, { ...obj });
            } catch (error) {
                  console.log("Unable to update the post ", error.message, " Post id: ", id);
            }
      }
      async deletePost(id) {
            try {
                  await this.databases.deleteDocument(secret.db_id, secret.article_collection_id, id);
                  return true;
            } catch (error) {
                  console.log("Unable to delete the post ", error.message, " Post id: ", id);
                  return false;
            }
      }
      async getSinglePost(id) {
            try {
                  await this.databases.getDocument(secret.db_id, secret.article_collection_id, id);
            } catch (error) {
                  console.log("Unable to get the post ", error.message, " Post id: ", id);
            }
      }
      async listPosts() {
            try {
                  await this.databases.listDocuments(secret.db_id, secret.article_collection_id, [Query.equal("status", "active")]);
            } catch (error) {
                  console.log("Unable to get the List of Post ", error.message);
            }
      }
      // ?Storage Operations
      async createFile(file) {
            try {
                  return await this.storage.createFile(secret.image_bucket_id, ID.unique(), file);
            } catch (error) {
                  console.log("Unable to upload image ", error.message);
            }
      }
      getFilePreview(id) {
            try {
                  this.storage.getFilePreview(secret.image_bucket_id, id);
            } catch (error) {
                  console.log("Unable to Preview File: ", error.message);
            }
      }
      async deleteFile(id) {
            try {
                  await this.storage.deleteFile(secret.image_bucket_id, id);
                  return true;
            } catch (error) {
                  console.log("Unable to upload image ", error.message);
                  return false;
            }
      }
      async updateFile(id) {
            try {
                  return await this.storage.updateFile(secret.image_bucket_id, id);
            } catch (error) {
                  console.log("Unable to update image ", error.message);
            }
      }
}
const documentService = new DocumentService();
export default documentService;
