# Experimenting with microfrontends

I set myself the task to see how far I can get with already existing popular frameworks to do microfrontends.

DISCLAIMER: this is an exercise and not meant to compete with anyone

## Requirements:

- Do as little as possible. Don't do custom frameworks
- use an ultra popular framework as a base(e.g single-spa is not enough. Will it ever have support for react server components?)
- get for free all the features of frameworks like nextjs(ssr, edge, routing, react server components, free improvements)
- be able to use any lib horizontally (e.g. svelte, vue, vanilla js)
- No CMS-es. I really like the idea of keeping "page template as code"

## What I got in the end:

- all the goodies of next and nuxt.
- First class support for page by page change of libs(e.g /about can be react, /contact can be vue) using a proxy
- Second class support for horizontal change of libs (you caaan load a vue microfrontend in nextjs but without ssr).
- no need for each team with a microfrontend to do infra. The microfrontend is used as a package.

## Getting started

```
nvm use
pnpm install
pnpm build
pnpm dev-proxy
go to localhost:3005/next or localhost:3005/nuxt
```

## Good starting point

`apps/nextjs/pages/index.tsx`

## My conclusion

It felt refreshing knowing we can use regular next and nuxt etc without worying we're gonna be behind features like good dx, documentation, edge etc.

Page by page support of different libs feels like a good compromise.

If really needed there is a escape hatch to load without ssr any microfrontend, sort of hacky tho. At the same time I can not think of a really good usecase for this. With multiple frameworks, bundle size is going to be a problem, server side rendered or not.

No "independent deploys" per se but does it matter tho? I would argue it's better to _not_ have it than have
