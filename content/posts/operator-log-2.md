---
title: "Operator Log #2"
date: "2023-02-24"
description: "Smart folders, converse API, URL importing, developer landing page"
tag: "log"
---

Hope everyone had a great week! Making some huge progress this week towards properly transitioning [beta.operand.ai](https://beta.operand.ai) → [operand.ai](https://operand.ai), though we’re not there yet.

At a glance, here’s what we got done this week:

Shipped “smart folders”, a way for you to import data from other apps (and the web in general) into Operand. At the moment, we support Linear, Discord and Notion, in addition to web-based RSS feeds and sitemaps.

Launched our Converse API endpoint to developers, allowing them to build conversational experiences within their apps with ease. We’ve also thrown a few goodies in there already :)

Added URL importing, i.e. an easy way to import content from the web into your file tree. Available both in the dashboard, and in the API.

Shipped our landing page tailored for developers ([beta.operand.ai/developers](https://beta.operand.ai/developers)), which includes details of our new usage-based pricing scheme.

### Smart Folders (Beta)

Much of the knowledge and information that you and I see on a daily basis happens in different apps, be it Slack, Discord, or Notion. In order to properly leverage this knowledge, we’ve now added a new feature called “smart folders”, but you can think of them as folders that we populate automatically.

We currently support the following smart folders:

- Notion
- Discord
- Linear
- RSS
- Sitemap

To create a smart folder, you can click New → Smart Folder in the dashboard, and you’ll be prompted to enter the name of the folder you wish to create, as well as the type of smart folder you want. After that, depending on the folder type, we might redirect you through an OAuth flow or something to get authenticated.

Proper API documentation for smart folders will be coming next week, i.e. you’ll be able to create smart folders on behalf of your users too. Additionally, we’ll be shipping support for Slack, GitHub repositories, and Google Meet / Zoom / Microsoft Teams shortly.

Note: Smart folders should be considered in early, early beta. There are a few known issues with them, specifically, there’s no way to know their progress currently and they’ll silently error if something goes wrong. Expect updates here in the coming weeks.

### Converse API

Our [Converse API](https://buf.build/operand/mcp/docs/main:operand.v1#operand.v1.OperandService.Converse) is now stable, and ready for use in end-user applications! Specifically, this endpoint allows you to build conversational experiences for your users, by referencing content found within files you upload.

A few other features / notes:

- Everything is streamed from the server, i.e. the endpoint feels very responsive and your users will start seeing text being written extremely quickly after asking a question.

- As we [hinted at on Twitter](https://twitter.com/morgallant/status/1628887169858248705?s=20), there’s a few goodies within the Converse API that aren’t well documented yet. Specifically, you can use it to summarize a document (of arbitrary length) just by asking it too. We’re going to release more documentation here in the future, but you can certainly expect a good number of these “conversational API” features.

We’re currently working on finishing up our documentation for this endpoint, as we’re putting together some examples of how it works and how best to use it / expose results to users.

As per pricing, we’re charging $25 per 1000 requests and the endpoint is available as part of our usage add-on.

### URL Importing

Rather than uploading files directly, many users prefer to ingest content from the internet. This was one of our most used features on the old stack, and we’ve begun moving it over to beta.

You can import files in two ways, on the dashboard or via the API. Simply click New → Link, or right click within the app. If you copy+paste a link to a PDF for example, we’ll go ahead and download the file into the folder you’re currently looking at. API users can use the [new ImportFromURL endpoint](https://buf.build/operand/mcp/docs/main:file.v1#file.v1.FileService.ImportFromURL), available in our File API.

In the future, we’ll bring back some of the “smart” options we had previously, namely, the ability to index YouTube videos (and other common stuff on the web) in addition to auto-detecting sitemaps etc.

### Developer Landing Page

As of yesterday, our [landing page for developers](https://beta.operand.ai/developers) is now live. This page includes some additional information about our system, has an FAQ section, links to proper documentation, and includes detailed pricing information.

Will be publishing some additional documentation on pricing in the upcoming weeks, but in general, it’s important for us to be able to support both hobbyist and larger commercial use cases. We ourselves are hackers at heart, and thus we’ve included a generous free plan with an option to remove limits by subscribing to a usage add-on (i.e. for production environments).

### Smaller Fixes / Improvements

- Lots of dashboard improvements under-the-hood, cleaned up some technical debt in addition to making things feel much snappier.

- We now take into account titles of files (when relevant) during indexing.

- Added proper error messages to our Python SDK. Previously, if the server returned an error, a generic, confusing exception would be raised.

- Some under the hood back-end changes to support file moving (i.e. from one folder to another), though this feature isn’t quite ready yet and shouldn’t be used by API users yet. Aiming to make this possible on the dashboard + API properly next week.

- Added an option to our Search API endpoint to include N adjacent results for each content match. Great for showing surrounding context within a search results UI, or including additional information in a large-language-model prompt. For more information, read the [docs](https://docs.operand.ai/api/operations#search).
