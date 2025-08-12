import { forwardRef, useId } from "react";

const Input = forwardRef(({ label, type = "text", placeholder = "Enter something", star = false, className = "", ...attributes }, ref) => {
      const id = useId();
      return (
            <div className="col-span-2">
                  {label && (
                        <label htmlFor={id}>
                              {label} {star && <span className="text-red-500">*</span>}
                        </label>
                  )}
                  <input ref={ref} id={id} className={`px-4 w-full py-2 block border-[0.5px] rounded-xl outline-none ${className}`} type={type} placeholder={placeholder} {...attributes} />
            </div>
      );
});

export default Input;
