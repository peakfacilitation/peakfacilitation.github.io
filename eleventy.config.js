module.exports = function(eleventyConfig) {
  // Static assets already exist in root - no passthrough copy needed
  // since we output to "." (in-place generation)

  // Don't process these directories
  eleventyConfig.ignores.add(".reference/**");
  eleventyConfig.ignores.add("node_modules/**");
  eleventyConfig.ignores.add("css/**");
  eleventyConfig.ignores.add("images/**");
  eleventyConfig.ignores.add("fonts/**");
  eleventyConfig.ignores.add("history/**");

  return {
    dir: {
      input: "src",
      output: ".",        // Output to root (in-place generation)
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
