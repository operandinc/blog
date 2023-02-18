---
title: "Operator Log #1"
date: "2023-02-17"
description: "Early-access beta, developer documentation + new pricing scheme!"
tag: "log"
---

Welcome back to the Operator Log! This is our official change-log, and we'll be documenting/highlighting the changes and fixes we ship each week here.

The last few weeks were, to say the least, chaotic. Huge influx of new users (nearly 4x'ed our daily active user counts) in combination with some big moves by a high-volume customer of ours stretched our system to the breaking point. As such, users encountered a large number of indexing and search errors, and generally had a poor experience across the board.

To address this and other user feedback, we're announcing the following:

- We've launched and have been [actively testing our new beta system](https://beta.operand.ai) for the last few weeks. In that time, over 25M+ documents have already been created and the system is working reliably.
- We've put together and open-sourced a full set of [technical documentation](https://docs.operand.ai), including SDKs in three languages ([TypeScript](https://github.com/operandinc/typescript-sdk), [Go](https://github.com/operandinc/go-sdk) & [Python](https://github.com/operandinc/operand-py)). In addition, our [complete API reference](https://buf.build/operand/mcp) is now available.
- We've designed and are rolling out a new usage-based pricing scheme, designed to give developers the confidence they need to build + scale apps on Operand.

### Early-Access Beta

As of today, [beta.operand.ai](http://beta.operand.ai) is now publicly available. As you can likely tell, we've made some considerable changes to the look and feel of Operand. Specifically, we've:

- Made our UI/UX feel much more familiar, by taking inspiration from Dropbox, Google Drive, and OneDrive. Previously, we used complex terminology like "object" and "index" -- that's all gone now, everything is either a file or a folder.
- Added inline conversational Q&A, both alongside search results and directly alongside file content within the viewer window.
- Upgraded our indexing pipeline considerably for reliability and speed. For reference, [a complete list of file types we can process](https://docs.operand.ai/api/files#supported-file-types).

We haven't yet hit feature parity with our old system and this new system won't be out of beta until we've done so properly. In the meantime, we'll be slowly onboarding existing users and helping them migrate. In addition, we'll be releasing a blog post early next week detailing our transition plan from our current system ([operand.ai](https://operand.ai)) to our new system ([beta.operand.ai](https://beta.operand.ai)).

### Developers, Developers, Developers

It's been incredible to chat recently with so many developers building their projects and companies atop Operand, and specifically, the Operand API. One of the most common complaints and blockers for these developers was our lack of proper documentation and API reference, which led users to do some pretty horrific things (like inspect network traffic within our dashboard to figure out how our API worked).

Here's what we did about it:

- Launched [docs.operand.ai](https://docs.operand.ai), a set of technical documentation covering core functionality in addition to a getting started guide. Our docs themselves are [open source](https://github.com/operandinc/docs), and PRs are most certainly welcome.
- Updated our official SDKs, namely [TypeScript](https://github.com/operandinc/typescript-sdk), [Go](https://github.com/operandinc/go-sdk) and [Python](https://github.com/operandinc/operand-py).
- Released our complete [API reference](https://buf.build/operand/mcp) publicly.
- Added a "developer mode" toggle within our dashboard, allowing us to better tailor our UI/UX for developers (i.e. by showing more technical information etc).

### New Pricing

Some important terminology,**unified storage = raw storage size + index storage size.** In the next week or so, we'll release some additional documentation here with some examples of files and their storage sizes. As a rule of thumb, more text-heavy files will have a larger index storage size.

Here's the rundown:

- First 1 GB of unified storage for all users is free.
- Consumers and developers alike should upgrade to our pro plan, costing $9.99/mo, to extend their unified storage space to 15GB.
- Developers may opt into a usage-based subscription add-on which removes plan limits.
  - $10/mo per unified GB of storage used, computed hourly.
  - $1.50 per 1000 search queries, after the first 2,500 and 10,000 queries included with the free and pro plans, respectively.

In your account page, you're able to see a detailed breakdown of your billing and usage information which should help you to gauge when upgrading your plan is necessary. At the moment, limits are soft and we'll gently reach out and ask you to upgrade your plan if you hit them. In the future, we'll likely start enforcing them.

---

Thanks for reading! We're committing to release these publicly each week on Friday. As always, if you have any questions or feedback, please feel free to reach out to [support@operand.ai](mailto:support@operand.ai), or [join our Discord](https://operand.ai/discord), it's growing quick & we're generally super active on there.

~ Team Operand
