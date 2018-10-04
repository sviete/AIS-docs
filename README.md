[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

# AIS dom Documentation

This is the source for the [AIS dom documentation](https://ai-speaker.com/docs).

## Updating the docs

Documentation is build using [Docusaurus](https://docusaurus.io/docs/en/doc-markdown.html).

### Preparing environment

Running the documentation locally requires [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) to be installed. Inside a cloned fork of this repository, run:

```bash
$ script/setup
```

This will install [docusaurus](https://www.npmjs.com/package/docusaurus) amongst other things.

### Running docs locally

```bash
$ script/server
```

It will start a server at [localhost:3000](http://localhost:3000).

### Adding a page

 - Create new page in `docs/`
 - Add new doc to `website/sidebars.json`

You will need to restart the server when creating a new file or make changes to `sidebars.json`. If you're updating a document, you will only need to refresh your browser to get the latest changes.


### Adding a version

```bash
$ cd website
$ yarn run version 1.0.0
```

### Publish the page

```bash
$ cd website
$ yarn run build
$ GIT_USER=<user>   CURRENT_BRANCH=master   USE_SSH=false   yarn run publish-gh-pages
```
