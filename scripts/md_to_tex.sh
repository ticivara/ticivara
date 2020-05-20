#!/bin/bash

SRC="$1"
DEST="$2"

cat "$SRC" |\
  sed 's/<\/*figure>//' |\
  # remove the link to -orig images
  sed 's/^[[]\(\![[][^]]\+[]]([^)]\+)\)[]]([^)]\+)/\1/' |\
  # remove alt text
  sed 's/^\![[][^]]\+[]]/![]/' |\
  # remove inline captions
  sed 's/[]](\([^ ]\+\.jpg\) \+"[^"]\+")/](\1)/g' |\
  # figure captions
  sed 's/<figcaption>\([^<]\+\)<\/figcaption>/\n\\photoCaption{\1}\n/' |\
  # <!-- noexport_latex_begin --> ... <!-- noexport_latex_end -->
  perl -0777 -pe "s/\n<!-- noexport_latex_begin -->\n(.*?)\n<!-- noexport_latex_end -->\n//gs" |\
  # <!-- latex ... -->
  perl -0777 -pe "s/\n<!-- latex\n(.*?)\n-->\n/\n\`\`\`{=latex}\n\1\n\`\`\`\n/gs" |\
  pandoc -f markdown+raw_attribute-auto_identifiers -t latex --top-level-division=chapter |\
  sed 's/\\includegraphics[{]\/img\//\\includegraphics{..\/static\/img\//' |\
  sed 's/\\includegraphics[{]/\\photo{/' |\
  cat -s > "$DEST"

# add a trailing blank
echo >> "$DEST"
