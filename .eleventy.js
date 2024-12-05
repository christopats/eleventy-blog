export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/style.css");
  eleventyConfig.addPassthroughCopy("src/css/tailwind.css");
  eleventyConfig.addPassthroughCopy("static/logo-nav.png");
  return {
    passthroughFileCOpy: true,
    dir: {
      input: "src",
      output: "_site",
      includes: "includes",
      data: "data",
      layouts: "layouts",
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
