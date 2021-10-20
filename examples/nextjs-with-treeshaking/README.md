# example of @caisy/leauge tree shaking

This result shows up, if tree shaking is not working right: 
```
Page                              Size     First Load JS
┌ ○ /                             567 B          67.6 kB
├   /_app                         0 B              67 kB
├ ○ /404                          194 B          67.2 kB
├ λ /api/hello                    0 B              67 kB
├ ○ /page-with-league             124 kB          191 kB
└ ○ /page-without-league          577 B          67.6 kB
```

as you see the page-with-league imports the whole library instead of just the RichTextRenderer which should only add 1kb extra and not ~120kb (whole lib)