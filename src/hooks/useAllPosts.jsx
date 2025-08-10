import { useEffect, useState } from "react";
import documentService from "../app/DocService";

const useAllPosts = () => {
      const [posts, setPosts] = useState([]);
      const showAllPosts = async () => {
            const { documents } = await documentService.listPosts();
            setPosts(documents);
      };
      useEffect(() => {
            showAllPosts();
      }, []);
      return { posts };
};

export default useAllPosts;
