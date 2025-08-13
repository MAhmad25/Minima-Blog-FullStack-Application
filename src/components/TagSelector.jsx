import { FiX } from "react-icons/fi";
const AVAILABLE_TAGS = ["Technology", "Programming", "Web Development", "React", "Next.js", "JavaScript", "TypeScript", "Python", "Machine Learning", "AI", "Design", "UI/UX", "Figma", "Photography", "Art", "Business", "Entrepreneurship", "Marketing", "Finance", "Investing", "Health", "Fitness", "Nutrition", "Mental Health", "Wellness", "Travel", "Food", "Cooking", "Music", "Movies", "Books", "Writing", "Science", "Space", "Environment"];

const TagSelector = ({ value = [], onChange, error }) => {
      const handleTagClick = (tag) => {
            const newTags = value.includes(tag) ? value.filter((t) => t !== tag) : [...value, tag];
            onChange?.(newTags);
      };

      const handleRemoveTag = (tag, e) => {
            e.stopPropagation();
            const newTags = value.filter((t) => t !== tag);
            onChange?.(newTags);
      };

      return (
            <div className="space-y-6">
                  <div className="flex flex-wrap gap-3">
                        {AVAILABLE_TAGS.map((tag) => {
                              const isSelected = value.includes(tag);
                              return (
                                    <button key={tag} type="button" onClick={() => handleTagClick(tag)} className={`relative px-4 py-2 rounded-full border transition-all duration-200 hover:scale-105 ` + `focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ` + (isSelected ? "bg-[var(--color-bl)] text-[var(--color-wht)] border-border" : "bg-transparent border-border hover:border-foreground/50")}>
                                          <span className={`transition-all duration-200", ${isSelected ? "pr-6" : ""}`}>{tag}</span>
                                          {isSelected && <FiX className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => handleRemoveTag(tag, e)} />}
                                    </button>
                              );
                        })}
                  </div>

                  {error && <span className="text-red-500 text-xs sm:text-sm tracking-tighter leading-none">{error}</span>}

                  {value.length > 0 && (
                        <div className="pt-4 border-t">
                              <h3 className="text-sm font-medium mb-2">Selected ({value.length}):</h3>
                              <div className="flex flex-wrap gap-2">
                                    {value.map((tag) => (
                                          <span key={tag} className="px-3 py-1 bg-[var(--color-bl)] text-[var(--color-wht)] rounded-full text-sm">
                                                {tag}
                                          </span>
                                    ))}
                              </div>
                        </div>
                  )}
            </div>
      );
};
export default TagSelector;
