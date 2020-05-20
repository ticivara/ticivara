#!/bin/bash

for i in ./assets/content/en/*.md; do
  name=`basename $i .md`
  texname="$name.tex"
  echo $(basename $i)" -> $texname"
  ./scripts/md_to_tex.sh "$i" ./tex/en/"$texname"
done

for i in ./assets/content/th/*.md; do
  name=`basename $i .md`
  texname="$name.tex"
  echo $(basename $i)" -> $texname"
  ./scripts/md_to_tex.sh "$i" ./tex/th/"$texname"
done
