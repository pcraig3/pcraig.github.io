#!/bin/sh
if [ -n "$(git status --porcelain)" ]
then
  echo "Error: cannot deploy until all changes are committed."
  exit 1
# else
#   echo "no changes";
fi

echo "-- Build the pages and export static HTML files"
npm run build # build and export static html files

echo "-- Creating a local README file"
echo "This branch contains only the static HTML export files." > ./out/README.md
echo "You probably want to check out [the dev branch](https://github.com/pcraig3/pcraig.github.io/tree/dev) instead." >> ./out/README.md

echo "-- Creating a CNAME file so my custom domain still works"
echo "pcraig.ca" > ./out/CNAME

echo "-- Creating root-level .nojekyll file so that files in underscore dirs aren't ignored"
echo "no!" > ./out/.nojekyll

git add .
git commit -m "build and export static html files"

echo "-- Create a local main branch containing only the /out folder"
git subtree split --prefix out -b main

echo "-- Force push the (new) main branch over the current github main branch"
git push -f origin main:main

echo "-- Delete the local main branch"
git branch -D main

echo "-- Remove the commit where the static HTML was exported. We don't need this in the history."

git reset --hard HEAD~1 #

echo "-- Hooray! New site should be up now and local side-effects have been undone."


# https://github.com/pcraig3/pcraig.github.io/tree/dev
