# PR Success guide

Guide line for PR review and success. Main goal is to optimize PR review and increse team performance.

### Problem presentation

* PRs have a high error rate
* PRs are having several iterations before merge
* PRs are iterating between REVIEW and IN PROGRESS for several days
* Overall team performance is suffering
* Goal of delivering beta at risk

### Current PR problems

* Code conventions need to be followed
* Component duplication
* Invalid props are being passed to html components
* Controlled components with lack of handlers
* PRs with 100+ files to review
* Component with visual bugs
* Lack or poor testing

## Proposal for solution

To overcome current problems we propose to follow this guide as a check list to make sure the basics for PR success are covered.

[] Follow code conventions, as a general rule we can use Airbnb's.

[] Before implementing a new component, make sure there is no other similar in Storybook. In case of dubt ask over slack.

[] Make sure to use props destructuring and pass down only required properties.

[] Avoid using `any` type on component props, type has to be specific.

[] Make sure to add the export of the created component to the index.ts file.

[] If your component has a value it also needs a way to set that value, pass an onChange event.

[] Always cut your branch off dev. *Do not merge other branches into you working branch*.

[] Always *use the branch name that linear suggests*, because this helps with ticket linking.

[] If PR is open for several days, make sure your PR is up to date with DEV.

[] If your PR has some conflicts, you are the owner and need to make sure those are fixed before reviews.

[] Avoid imports that may cause circular references, like `../..` or `..`.

[] IMPORTANT: Before submitting a PR for review, add a capture of component render and also a capture from figma to compare in the github PR. (zoom should be default 100% on both)

[] IMPORTANT: Before submitting a PR test the component in storybook.

## Dev precheck

[] Make sure the ticket has all the info for doing the job.

[] Verify that the figma includes all the details.

[] Make sure child components already exists.

[] If there are any incomplete dependencies, first address the dependencies. Missing child components go first.

[] Ask all questions on FE channel.

[] Make sure to not duplicate components.
