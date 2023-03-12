# Unfunk Shoe Store

An e-commerce concept mockup.

The user is initially greeted with a landing page that presents the visual identity of the store. As the user scrolls, the various sections – merchandise collections and blog posts – are shown. Collections provide an overview of related merchandise categories. Blog posts contain photo essays expressing the store’s cultural point-of-view. Individual products can be viewed and added to the shopping cart.

Implemented:

- Custom React hook for managing the state of shopping cart contents
- Parsing and typing of the data acquired from the CMS with Zod
- Testing of both component integration with React Testing Library, and end-to-end testing of user stories with Playwright

## Accessibility

The site is fully responsive on mobile and desktop screens.

## Challenge—Recursive Data Object

The JSON object returned by the headless CMS is overly complicated.

### Solution

Found and implemented a solution that provides end-to-end typing for Contentful CMS.
