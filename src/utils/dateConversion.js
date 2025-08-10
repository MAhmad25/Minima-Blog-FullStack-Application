export default (isoString, locale = "en-US") => {
      if (!isoString) return "";
      const d = new Date(isoString);
      if (Number.isNaN(d.getTime())) return "";
      return d.toLocaleString(locale, { month: "long", day: "numeric", year: "numeric" });
};
