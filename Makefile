LATEX=lualatex

LATEX_OPTS=-interaction=nonstopmode -halt-on-error

all: english thai

dist: dist-english dist-thai

generate:
	./scripts/generate-md-to-tex.sh

english:
	cd tex && $(LATEX) $(LATEX_OPTS) ticivara-english.tex

thai:
	cd tex && $(LATEX) $(LATEX_OPTS) ticivara-thai.tex

dist-english:
	cp tex/ticivara-english.pdf static/pdf/ticivara-english.pdf

dist-thai:
	cp tex/ticivara-thai.pdf static/pdf/ticivara-thai.pdf
