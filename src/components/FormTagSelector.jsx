import { Controller } from "react-hook-form";
import TagSelector from "./TagSelector";

const FormTagSelector = ({ name, control, label = "Tags", error, required = true }) => {
      return (
            <div className="w-full mt-10">
                  <label className="block text-xl font-medium mb-3">
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <Controller name={name} control={control} rules={{ required: "Please select at least one tag" }} render={({ field }) => <TagSelector value={field.value || []} onChange={field.onChange} error={error?.message} />} />
            </div>
      );
};

export default FormTagSelector;
