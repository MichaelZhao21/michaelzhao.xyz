function build() {
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
}

// Run build script
build();

// Rebuild when files change
require('chokidar').watch(['public', 'src'], { ignoreInitial: true }).on('all', (event, path) => {
    process.stdout.write(`${path} changed! Rebuilding...`, );
    build();
    console.log('Done! Serving at port 3000')
})

// Serve files statically
const file = new (require('node-static').Server)('./docs', { cache: 0 });
require('http')
    .createServer(function (request, response) {
        request
            .addListener('end', function () {
                file.serve(request, response);
            })
            .resume();
    })
    .listen(3000);
console.log('Serving static files at port 3000!');
