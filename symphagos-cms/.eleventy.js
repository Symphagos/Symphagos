module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addCollection("specimens", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/specimens/*.md").sort((a, b) => {
      return a.data.specimenNumber - b.data.specimenNumber;
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
