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
      // ! Document Operations
      async createPost({ title, slug = "Slug Value generate karnipare gi", content, tags, coverImage, readingTime, author, authorName }) {
            try {
                  return await this.databases.createDocument(secret.db_id, secret.article_collection_id, ID.unique(), {
                        title: title.trim(),
                        slug,
                        content: content.trim(),
                        tags,
                        coverImage,
                        readingTime,
                        author,
                        authorName,
                  });
            } catch (error) {
                  console.log("Unable to make a post ", error.message);
            }
      }
      async updatePost(id, previousPost) {
            try {
                  return await this.databases.updateDocument(secret.db_id, secret.article_collection_id, id, { ...previousPost });
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
                  const post = await this.databases.getDocument(secret.db_id, secret.article_collection_id, id);
                  if (post) return post;
                  else console.log("Ye wali post insert to karo");
            } catch (error) {
                  console.log("Unable to get the post ", error.message, " Post id: ", id);
            }
      }
      async listPosts() {
            try {
                  return await this.databases.listDocuments(secret.db_id, secret.article_collection_id, [Query.equal("status", "active")]);
            } catch (error) {
                  console.log("Unable to get the List of Post ", error.message);
            }
      }
      // ! Image Storage Operations
      async createFile(file) {
            try {
                  return await this.storage.createFile(secret.image_bucket_id, ID.unique(), file);
            } catch (error) {
                  console.log("Unable to upload image ", error.message);
            }
      }
      getFileView(id) {
            try {
                  return this.storage.getFileView(secret.image_bucket_id, id);
            } catch (error) {
                  console.log("Unable to Preview File: ", error.message);
            }
      }
      async deleteFile(id) {
            try {
                  await this.storage.deleteFile(secret.image_bucket_id, id);
                  return true;
            } catch (error) {
                  console.log("Unable to delete image ", error.message);
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
