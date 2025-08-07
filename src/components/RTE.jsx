import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import Keys from "../config/Keys";
import { Controller } from "react-hook-form";
import { RTELoader } from "./index";
const RTE = ({ control, label, defaultValues = "" }) => {
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
                        name="content"
                        control={control}
                        render={({ field: { onChange } }) => (
                              <Editor
                                    apiKey={Keys.editorKey}
                                    onInit={(_ignored, editor) => initEditor(editor)}
                                    init={{
                                          width: "64rem",
                                          height: "30rem",
                                          menubar: true,
                                          plugins: ["a11ychecker", "advlist", "advcode", "advtable", "autolink", "checklist", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "fullscreen", "formatpainter", "insertdatetime", "media", "table", "help", "wordcount", "code", "emoticons", "directionality", "hr", "pagebreak", "nonbreaking", "toc", "textcolor", "colorpicker", "textpattern", "quickbars"],
                                          toolbar: " blocks | bold italic underline | " + "code preview fullscreen | " + "forecolor backcolor | fontfamily fontsize | " + "alignleft aligncenter alignright alignjustify | " + "bullist numlist checklist outdent indent | " + "link image media | table | emoticons charmap hr pagebreak | " + "removeformat | a11ycheck help",
                                          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; background-color: #FDF9EF; }",
                                          license_key: "gpl",
                                    }}
                                    initialValue={defaultValues}
                                    onEditorChange={onChange}
                              />
                        )}
                  />
            </div>
      );
};

export default RTE;
