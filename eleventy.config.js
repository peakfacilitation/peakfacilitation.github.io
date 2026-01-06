module.exports = function(eleventyConfig) {
  // Copy static assets to docs/
  eleventyConfig.addPassthroughCopy({ "css": "css" });
  eleventyConfig.addPassthroughCopy({ "images": "images" });
  eleventyConfig.addPassthroughCopy({ "fonts": "fonts" });

  // Don't process these as templates
  eleventyConfig.ignores.add("node_modules/**");

  return {
    dir: {
      input: "src",
      output: "docs",     // Output to docs/ for GitHub Pages
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
