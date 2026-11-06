# Project artwork

One folder per project, named after its `slug` in `src/data/projects.js`:

    public/images/projects/<slug>/cover.webp     card + project-page cover (1600x1200)
    public/images/projects/<slug>/01.webp ...    gallery images, shown in order

Keep images under ~1600px on the long side and WebP/JPG, ideally under 300 KB each.
Then add them to the project's `images` array in `src/data/projects.js`.
