# portfolio
Personal portfolio site

## Optimizations
I decided to spend some time optimizing this website as a fun exercise.

Here are a few optimizations:
```
Prefetch & preconnect fonts.googleapis.com - This allows for a much faster fetching of the fonts which previously took around 1.5s to get
&display=swap at the end of the font url - This will use a supported font and then swap whenever the third party font has been loaded in
Preload fonts & css file - Due to them preloading, loading times are improved
Fetch Poppins & Quicksand with one url - Instead of going through an url twice, I fetch both of them at once
Calculate size of images & scale them accordingly - Previously, the images were larger than they were displayed, causing extra data to be transferred
Setup CloudFront - CDN for assets, helps with loading content from other geographical areas
Lazy load images - Doesn't wait for the images to load in at first
```

TODO:
```
Only load in the specific font weights - Less data to be fetched
Load in smaller resolution images first - Some visible image before the full one is loaded in
```
