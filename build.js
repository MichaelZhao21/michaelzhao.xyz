// Build js
require('esbuild').buildSync({
    entryPoints: ['src/app.js'],
    bundle: true,
    sourcemap: true,
    outdir: 'docs',
    loader: {
        '.html': 'text',
    },
});

// Copy over static files
require('fs-extra').copySync('public', 'docs');
