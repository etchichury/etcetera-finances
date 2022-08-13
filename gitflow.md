---
title: Git flow
nav_order: 3
---

# Git flow

The idea is to have a simple development process and flow. One thing to take in mind is that I'm working alone, so there are some things I wouldn't do in a project with other devs that I can do here.

## Branches

There are two branches `main` and `dev`. And the base flow is:

```
dev --> main
```

### Main

This is the stable branch. It's from here I will create new releases and deploy changes to production.

Not every commit in this branch will be a release. Most of them will just be candidates for a new one. See [releases](#releases) for more information.

### Dev

This is the place where I can messup the code, try new things and work in new features.
Don't expect things working and actually expect things to be in a "WIP" state.

Once I test and exercise the use cases, and only then, I will send the changes to main.

## Releases

TBD

### Versioning

TBD
