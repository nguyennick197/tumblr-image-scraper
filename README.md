# tumblr-image-scraper

This is a NodeJs script that allows you to download all images from a selected Tumblr blog.

## Usage

- To use this script, you will first need register a Tumblr application here: https://www.tumblr.com/oauth/register to get your API key.

- Get your `consumer_key`, `consumer_secret`, `token`, and `token_secret` and add those to the `config.json` file.

- Add the blog you want to download images from to the `config.json` file.

- (Optional) If you would like, you can add any tags you would like to filter a blog's posts by to the `config.json` file in a comma separated list format. ex: `"wholesome,doodles,cute"`
 
- In this directory, run `npm install` to install the necessary node packages.

- In this directory, run `node index.js` which will download all the photos from the blog into a folder with the blogs name.

## Contributors 

 - [Nick Nguyen](https://github.com/nguyennick197)
