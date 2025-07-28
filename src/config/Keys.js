export default {
      base_url: String(import.meta.env.VITE_APPWRITE_BASE_URL),
      project_id: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
      db_id: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
      article_collection_id: String(import.meta.env.VITE_APPWRITE_ARTICLE_COLLECTION_ID),
      image_bucket_id: String(import.meta.env.VITE_APPWRITE_IMAGES_BUCKET_ID),
};
