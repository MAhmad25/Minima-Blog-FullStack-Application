import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import Keys from "../config/Keys";
import { Controller } from "react-hook-form";
import { RTELoader } from "./index";
const RTE = ({ name, control, label, defaultValues = "" }) => {
      const editorRef = useRef(null);
      const [loader, setLoader] = useState(true);
      const initEditor = (editor) => {
            editorRef.current = editor;
            setLoader(false);
      };
      return (
            <div>
                  {loader && <RTELoader />}
                  {label && <label htmlFor="content"></label>}
                  <Controller
                        name={name}
                        control={control}
                        defaultValue={defaultValues}
                        rules={{ required: "Please select at least one tag" }}
                        render={({ field: { onChange, value } }) => (
                              <Editor
                                    apiKey={Keys.editorKey}
                                    onInit={(_ignored, editor) => initEditor(editor)}
                                    init={{
                                          width: "100%",
                                          height: "30rem",
                                          menubar: true,
                                          plugins: ["advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "fullscreen", "insertdatetime", "media", "table", "help", "wordcount", "code", "emoticons", "directionality", "hr", "pagebreak", "nonbreaking", "toc", "quickbars"],
                                          toolbar: " blocks | bold italic underline | " + "code preview fullscreen | " + "forecolor backcolor | fontfamily fontsize | " + "alignleft aligncenter alignright alignjustify | " + "bullist numlist checklist outdent indent | " + "link image media | table | emoticons charmap hr pagebreak | " + "removeformat | a11ycheck help",
                                          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:18px; background-color: #FDF9EF; }",
                                          license_key: "gpl",
                                    }}
                                    value={value || defaultValues}
                                    onEditorChange={onChange}
                              />
                        )}
                  />
            </div>
      );
};

export default RTE;
