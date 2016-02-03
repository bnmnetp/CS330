(TeX-add-style-hook "syllabus"
 (lambda ()
    (LaTeX-add-labels
     "sub:final_project")
    (TeX-run-style-hooks
     "hyperref"
     "sectsty"
     "graphicx"
     "ifpdf"
     "geometry"
     "9.5in}"
     "centering"
     "inputenc"
     "utf8x"
     "ucs"
     "mathletters"
     "latex2e"
     "art11"
     "article"
     "11pt"
     "twocolumn")))

