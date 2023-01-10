const tumblr = require('tumblr.js');
const clientSettings = require('./config.json')

const client = tumblr.createClient(clientSettings);

const blog = "positivedoodles"
const tags = ["doodles", "doodle"]

function getBlogPosts(offset){
    return new Promise(resolve => {
        client.blogPosts(blog, { type: 'photo', offset, tag: tags}, function (err, resp) {
            resolve({ err, resp });
        })
    })
}

async function getTumblrImages(offset = 0) {
    const { err, resp } = await getBlogPosts(offset);
    if (err) console.err(err);
}

async function main(){
    getTumblrImages()
}

main()
