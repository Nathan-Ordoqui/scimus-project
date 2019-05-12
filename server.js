const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');
const uuidv4 = require('uuid/v4');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    var session_id = uuidv4();
    var sample_id = 1;
    console.log('session id : '+session_id);
    res.render("index.ejs", {session_id: session_id, sample_id});
});

app.get('/rate', function(req, res) {
    var session_id = req.query.session_id;
    var sample_id = req.query.sample_id;
    if(sample_id>64){
        res.render("end.ejs");
    }else{
        res.render("rate.ejs", {session_id: session_id, sample_id});
    }
    console.log('sample id : '+sample_id);
});

app.get('/end', function(req, res) {
    res.render("end.ejs");
});

app.get('/details', function(req, res) {
    res.sendFile(__dirname+'/test_filtres/index.html');
});

// handle calls to details page

app.get('/test_filtres/:file', function(req, res) {
    res.sendFile(__dirname+'/test_filtres/'+req.params.file);
});

// handle calls to js
app.get('/js/:jsfile', function(req, res) {
    res.sendFile(__dirname+'/js/'+req.params.jsfile);
});

// handle calls to css
app.get('/css/:cssfile', function(req, res) {
    res.sendFile(__dirname+'/css/'+req.params.cssfile);
});

// handle calls to sounds directory
app.get('/sounds', function(req, res) {
    fs.readdir('sounds', function(err, items) {
        res.send(items);
    });
})

// handle calls to sounds
app.get('/sounds/:sample', function(req, res) {
    res.sendFile(__dirname+'/sounds/'+req.params.sample);
});

const scenes = [
  'RomanForum',
  'FairyForest',
  'ProvenceWalk',
  'ChinaTeahouse'
]

// post data
app.post('/post_results',function(req,res){
    var session_id = req.query.session_id;
    var sample_id = req.query.sample_id;
    var filter = req.query.filter;
    var criter1 = req.body.criter1;
    var criter2 = req.body.criter2;
    var criter3 = req.body.criter3;
    var criter4 = req.body.criter4;
    var criter5 = req.body.criter5;
    var comments = req.body.comments;
    console.log("Results :  "+criter1+", "+criter2+', '+criter3+', '+criter4+', '+criter5+', '+comments);
    var scenename = scenes[(sample_id-1)%4]
    var filename = session_id+"__"+scenename+"__"+filter+'.json';
    var writer = fs.createWriteStream("/tmp/"+filename);
    var data = {
        criter1: criter1,
        criter2: criter2,
        criter3: criter3,
        criter4: criter4,
        criter5: criter5,
        comments: comments
    }
    writer.write(JSON.stringify(data));
    console.log('results written to tmp');
    uploadFile('scimus-results-bucket', '/tmp/'+filename).then(function(){
        fs.unlink('/tmp/'+filename, (err) => {
          if (err) throw err;
          console.log(filename+' was deleted');
          res.end("done");
        });
    });
});

// handle 404
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('404 Not Found');
});


//##########################################################
// gsutil -m cp -R gs://scimus-results-bucket .
// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Your Google Cloud Platform project ID
const projectId = 'scimus-filters-project';

// Creates a client
const storage = new Storage({
  projectId: projectId,
});

// The name for the new bucket
const bucketName = 'scimus-results-bucket';

// Creates the new bucket
storage
  .createBucket(bucketName)
  .then(() => {
    console.log(`Created ${bucketName}.`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });


async function uploadFile(bucketName, filename) {
  // [START storage_upload_file]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'Local file to upload, e.g. ./local/path/to/file.txt';

  // Uploads a local file to the bucket
  await storage.bucket(bucketName).upload(filename, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    metadata: {
      // Enable long-lived HTTP caching headers
      // Use only if the contents of the file will never change
      // (If the contents will change, use cacheControl: 'no-cache')
      cacheControl: 'no-cache',
    },
  });

  console.log(`${filename} uploaded to ${bucketName}.`);
  // [END storage_upload_file]
}

//########################################################

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});


