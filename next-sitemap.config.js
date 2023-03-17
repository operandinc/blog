/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://blog.operand.ai",
  generateRobotsTxt: true, // (optional)
  exclude: ["/logs*", "/company*", "/case-studies*"],
  // ...other options
};
