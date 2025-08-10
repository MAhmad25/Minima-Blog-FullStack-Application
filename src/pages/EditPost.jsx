import { useNavigate, useParams } from "react-router-dom";
import WritePost from "./WritePost";
import { useLayoutEffect, useState } from "react";
import documentService from "../app/DocService";

const EditPost = () => {
      document.title = "Wanna change something got for it";
      const navigate = useNavigate();
      const { id } = useParams();
      const [postObj, setPostObj] = useState({});
      useLayoutEffect(() => {
            if (id) {
                  try {
                        documentService.getSinglePost(id).then((postData) => {
                              setPostObj(postData);
                        });
                  } catch (error) {
                        console.log(error);
                        navigate("/");
                  }
            } else navigate("/");
      }, [id, navigate]);
      return (
            <div>
                  <WritePost editPost={postObj} />
            </div>
      );
};

export default EditPost;
