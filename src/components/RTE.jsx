import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import Keys from "../config/Keys";
const RealTimeEditor = () => {
      const editorRef = useRef(null);
      const [loader, setLoader] = useState(true);
      const initEditor = (editor) => {
            editorRef.current = editor;
            setLoader(false);
      };
      const log = (e) => {
            e.preventDefault();
            if (editorRef.current) {
                  console.log(editorRef.current.getContent({ format: "html" }));
            }
      };
      return (
            <div>
                  {loader && (
                        <div className="scale-50">
                              <svg version="1.1" id="L6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                                    <rect fill="none" stroke="currentColor" strokeWidth="4" x="25" y="25" width="50" height="50">
                                          <animateTransform attributeName="transform" dur="0.5s" from="0 50 50" to="180 50 50" type="rotate" id="strokeBox" attributeType="XML" begin="rectBox.end" />
                                    </rect>
                                    <rect x="27" y="27" fill="currentColor" width="46" height="50">
                                          <animate attributeName="height" dur="1.3s" attributeType="XML" from="50" to="0" id="rectBox" fill="freeze" begin="0s;strokeBox.end" />
                                    </rect>
                              </svg>
                        </div>
                  )}
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
                        initialValue="<h1>Start writing your content</h1>"
                  />
                  {
                        <button onClick={log} className="px-3  col-span-2 py-2 border-[1px] text-[var(--color-wht)] font-medium bg-[var(--color-bl)] rounded-xl cursor-pointer">
                              Publish Post
                        </button>
                  }
            </div>
      );
};

export default RealTimeEditor;
