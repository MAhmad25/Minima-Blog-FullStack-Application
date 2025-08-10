import { useEffect, useState } from "react";
import documentService from "../app/DocService";
const useFileView = (postData) => {
      const [url, setUrl] = useState(undefined);
      useEffect(() => {
            if (!postData?.coverImage) return;
            const file = documentService.getFileView(postData?.coverImage);
            setUrl(file);
      }, [postData?.coverImage]);
      return { url };
};

export default useFileView;
