// const express = require("express");
// const Twit = require("twit");
// const path = require("path");

// const app = express();
// const port = 3000;

// // Twitter API credentials (Replace these with your actual credentials)
// const T = new Twit({
//   consumer_key: "PYblctkqkVhCNJyiT0Wh85wf6",
//   consumer_secret: "ofPwLKytMbuS1Ra6732eURn4rW72krDXLnq0iirEWRByuVZVuM",
//   access_token: "1761362965981216768-LhsztFox3EgR9bwe12w0NQWY3xPWUx",
//   access_token_secret: "KWd0zNvWh3JPZuRs97KleDxTJOkpnac1C864hnHjCetQA",
// });

// // Middleware to parse JSON data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // app.post("/tweet", (req, res) => {
// //   const tweetText = req.body.tweet;

// //   T.post(
// //     "tweets",
// //     {
// //       text: tweetText,
// //       tweet_mode: "extended",
// //     },
// //     (err, data, response) => {
// //       if (err) {
// //         console.log(err);
// //         res.status(500).send({ error: "Error tweeting" });
// //       } else {
// //         res.send({ success: "Tweet posted!" });
// //       }
// //     }
// //   );
// // });
// app.post("/tweet", (req, res) => {
//   const tweetText = req.body.tweet;

//   T.post("statuses/update", { status: tweetText }, (err, data, response) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send({ error: "Error tweeting" });
//     } else {
//       console.log(data); // Log the response from Twitter API

//       // Send response to client-side indicating success
//       res.send({ success: "Tweet posted successfully!" });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

//
//
//
//
//
//
//
// const express = require("express");
// const Twit = require("twit");
// const path = require("path");

// const app = express();
// const port = 3000;

// // Twitter API credentials (Replace these with your actual credentials)
// const T = new Twit({
//   consumer_key: "PYblctkqkVhCNJyiT0Wh85wf6",
//   consumer_secret: "ofPwLKytMbuS1Ra6732eURn4rW72krDXLnq0iirEWRByuVZVuM",
//   access_token: "1761362965981216768-LhsztFox3EgR9bwe12w0NQWY3xPWUx",
//   access_token_secret: "KWd0zNvWh3JPZuRs97KleDxTJOkpnac1C864hnHjCetQA",
// });

// // Middleware to parse JSON data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // app.post("/tweet", (req, res) => {
// //   const tweetText = req.body.tweet;

// //   T.post(
// //     "tweets",
// //     {
// //       text: tweetText,
// //       tweet_mode: "extended",
// //     },
// //     (err, data, response) => {
// //       if (err) {
// //         console.log(err);
// //         res.status(500).send({ error: "Error tweeting" });
// //       } else {
// //         console.log(data); // Log the response from Twitter API
// //         res.send({ success: "Tweet posted successfully!" });
// //       }
// //     }
// //   );
// // });
// app.post("/tweet", (req, res) => {
//   const tweetText = "Hello Twitter from my Node.js server!";

//   T.post("statuses/update", { status: tweetText }, (err, data, response) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send({ error: "Error tweeting" });
//     } else {
//       console.log(data); // Log the response from Twitter API
//       res.send({ success: "Tweet posted successfully!" });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

//
//
//
//
//
//
//

const express = require("express");
const Twit = require("twit");
const path = require("path");

const app = express();
const port = 3000;

// Twitter API credentials
const T = new Twit({
  consumer_key: "KcPtxS47NLXnL29ZVVq6Qce5q",
  consumer_secret: "wrLIGPHrG48pCVqaykp9wcGuJdzg8mPAK060QZcMo1iFPptug3",
  access_token: "1761362965981216768-LKGg3DbGkDXKFE4QxHmG4zca0EPeAV",
  access_token_secret: "oXqf0EzD0e4auu4yNxqYvCpj4o0wVRm0xLYoKIIjjYZZW",
  bearer_token:
    "AAAAAAAAAAAAAAAAAAAAAO1mswEAAAAAMiU%2FdcbkokwRxnC5xwvd6HeyJlk%3DusZ1GTtGV7nSODxIxwcGunmi8mCDG3pFYpHQ9yo6B6XhRBZQxw", // Optional for v2
});

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/tweet", (req, res) => {
  const tweetText = req.body.tweet;

  // Posting a tweet using Twitter API v2
  T.post(
    "tweets",
    {
      text: tweetText,
      tweet_mode: "extended",
    },
    (err, data, response) => {
      if (err) {
        console.log(err);
        res.status(500).send({ error: "Error tweeting" });
      } else {
        console.log(data); 
        res.send({ success: "Tweet posted successfully!" });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
