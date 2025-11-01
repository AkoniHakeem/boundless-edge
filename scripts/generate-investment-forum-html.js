#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Path to the built index.html
const indexPath = path.join(__dirname, '../dist/spa/index.html');
const investmentForumPath = path.join(
  __dirname,
  '../dist/spa/investment-forum-v1.html'
);

// Read the built index.html
let html = fs.readFileSync(indexPath, 'utf-8');

// Replace the default meta tags with investment forum specific ones
// Remove old Open Graph tags
html = html.replace(
  /<meta property=og:url content=https:\/\/boundlessedge\.com\/\s*>/g,
  ''
);
html = html.replace(/<meta property=og:title content="[^"]*">/g, '');
html = html.replace(/<meta property=og:description content="[^"]*">/g, '');
html = html.replace(
  /<meta property=og:image content=\/images\/Boundless_Edge_-Logo-nobg\.png>/g,
  ''
);
html = html.replace(/<meta property=og:image:width content=1200>/g, '');
html = html.replace(/<meta property=og:image:height content=630>/g, '');

// Remove old Twitter tags
html = html.replace(
  /<meta property=twitter:url content=https:\/\/boundlessedge\.com\/\s*>/g,
  ''
);
html = html.replace(/<meta property=twitter:title content="[^"]*">/g, '');
html = html.replace(/<meta property=twitter:description content="[^"]*">/g, '');
html = html.replace(
  /<meta property=twitter:image content=\/images\/Boundless_Edge_-Logo-nobg\.png>/g,
  ''
);

// Remove description and robots
html = html.replace(/<meta name=description content="[^"]*">/g, '');
html = html.replace(/<meta name=robots content="index, follow">/g, '');

// Remove canonical
html = html.replace(
  /<link rel=canonical href=https:\/\/boundlessedge\.com\/\s*>/g,
  ''
);

// Insert new meta tags for investment forum after the charset meta tag
const newMetaTags = `<meta charset=utf-8>
  <meta name=description content="An opportunity to invest in Nigeria's next foundational ventures. Have you ever thought about the real-world problems that, once solved, create entire new markets? Think about how PAYSTACK and MONIEPOINT unlocked digital payments. Imagine having the opportunity to be an early-stage investor in the companies that will do the same for other foundational sectors. What if you could invest in a company tackling several of these challenges at once? We are holding an online investment forum to present our full vision, financials, and the terms of this offer. Limited seats available.">
  <meta name=robots content="noindex, nofollow">
  <meta property=og:type content=website>
  <meta property=og:url content="https://boundlesedge.com/investment-forum/v1">
  <meta property=og:title content="AN OPPORTUNITY TO INVEST IN NIGERIA'S NEXT FOUNDATIONAL VENTURES">
  <meta property=og:description content="Have you ever thought about the real-world problems that, once solved, create entire new markets?

Think about how PAYSTACK and MONIEPOINT unlocked digital payments. Imagine having the opportunity to be an early-stage investor in the companies that will do the same for other foundational sectors.

What if you could invest in a company tackling several of these challenges at once?

We are holding an online investment forum to present our full vision, financials, and the terms of this offer.

⚠️ LIMITED SEATS AVAILABLE

Date: Wednesday, 5th November, 2025
Time: 12:00noon
Platform: Google Meet (A private link will be sent upon RSVP)

Follow the link below to register:
https://boundlesedge.com/investment-forum/v1">
  <meta property=og:image content="https://boundlesedge.com/images/boudless-edge-investment-forum-img.png">
  <meta property=og:image:alt content="Boundless Edge Investment Forum - WastePro, TVET, and Stint360 Ecosystem">
  <meta property=og:image:type content="image/png">
  <meta property=og:image:width content=1024>
  <meta property=og:image:height content=946>
  <meta property=og:image:secure_url content="https://boundlesedge.com/images/boudless-edge-investment-forum-img.png">
  <meta property=og:site_name content="Boundless Edge">
  <meta property=og:locale content=en_US>
  <meta property=twitter:card content=summary_large_image>
  <meta property=twitter:url content="https://boundlesedge.com/investment-forum/v1">
  <meta property=twitter:title content="AN OPPORTUNITY TO INVEST IN NIGERIA'S NEXT FOUNDATIONAL VENTURES">
  <meta property=twitter:description content="Have you ever thought about the real-world problems that, once solved, create entire new markets?

Think about how PAYSTACK and MONIEPOINT unlocked digital payments. Imagine having the opportunity to be an early-stage investor in the companies that will do the same for other foundational sectors.

What if you could invest in a company tackling several of these challenges at once?

We are holding an online investment forum to present our full vision, financials, and the terms of this offer.

⚠️ LIMITED SEATS AVAILABLE

Date: Wednesday, 5th November, 2025
Time: 12:00noon
Platform: Google Meet (A private link will be sent upon RSVP)

Follow the link below to register:
https://boundlesedge.com/investment-forum/v1">
  <meta property=twitter:image content="https://boundlesedge.com/images/boudless-edge-investment-forum-img.png">
  <meta property=twitter:image:alt content="Boundless Edge Investment Forum - WastePro, TVET, and Stint360 Ecosystem">
  <link rel=canonical href="https://boundlesedge.com/investment-forum/v1">`;

html = html.replace(/<meta charset=utf-8>/, newMetaTags);

// Write the new file
fs.writeFileSync(investmentForumPath, html);

console.log('✓ Generated investment-forum-v1.html with custom meta tags');
