const yaml = require('js-yaml');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/js/");

    eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents));

    // Return your Object options:
    return {
        markdownTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "public"
        }
    }
};