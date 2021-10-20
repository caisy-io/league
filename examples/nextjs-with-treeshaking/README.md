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

As you see the page-with-league imports the whole library instead of just the RichTextRenderer which should only add 1kb extra and not ~120kb (whole lib)

Here is a result with successful tree shaking:

```
Page                              Size     First Load JS
┌ ○ /                             567 B          67.6 kB
├   /_app                         0 B              67 kB
├ ○ /404                          194 B          67.2 kB
├ λ /api/hello                    0 B              67 kB
├ ○ /page-with-league             2.07 kB        69.1 kB
├ ○ /page-with-league-img         20.3 kB        87.3 kB
├ ○ /page-with-league-richtext    2.08 kB        69.1 kB
└ ○ /page-without-league          577 B          67.6 kB
```