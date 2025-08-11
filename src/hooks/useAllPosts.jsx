import { useEffect, useState } from "react";
import documentService from "../app/DocService";

const useAllPosts = () => {
      const [posts, setPosts] = useState([]);
      const showAllPosts = async () => {
            const allPosts = await documentService.listPosts();
            setPosts(allPosts?.documents);
      };
      useEffect(() => {
            showAllPosts();
      }, []);
      return { posts };
};

export default useAllPosts;
