import fs from 'fs';
import brotliSize from 'brotli-size';
import esbuild from 'esbuild';

export function buildPackage(packageName) {
    if (!fs.existsSync(`./dist`)) {
        fs.mkdirSync(`./dist`, 0o744);
    }

    fs.readdirSync(`./builds`).forEach(file => {
        bundleFile(file, packageName);
    });
}

function bundleFile(file, packageName) {
    ({
        'cdn.js': () => {
            build({
                entryPoints: [`builds/${file}`],
                outfile: `dist/${file}`,
                bundle: true,
                platform: 'browser',
                define: { CDN: 'true' },
            });

            build({
                entryPoints: [`builds/${file}`],
                outfile: `dist/${file.replace('.js', '.min.js')}`,
                bundle: true,
                minify: true,
                platform: 'browser',
                define: { CDN: 'true' },
            }).then(() => {
                outputSize(packageName, `dist/${file.replace('.js', '.min.js')}`);
            });
        },

        'module.js': () => {
            build({
                entryPoints: [`builds/${file}`],
                outfile: `dist/${file.replace('.js', '.esm.js')}`,
                bundle: true,
                platform: 'neutral',
                mainFields: ['main', 'module'],
            });

            build({
                entryPoints: [`builds/${file}`],
                outfile: `dist/${file.replace('.js', '.cjs.js')}`,
                bundle: true,
                target: ['node10.4'],
                platform: 'node',
            });
        },
    })[file]();
}

function build(options) {
    options.define ||= {};
    options.define['process.env.NODE_ENV'] = process.argv.includes('--production') 
        ? `'production'` 
        : `'development'`;

    const buildOptions = {
        ...options,
    };

    if (process.argv.includes('--watch')) {
        buildOptions.watch = {
            onRebuild(error, result) {
                if (error) console.error('watch build failed:', error);
                else console.log('watch build succeeded');
            },
        };
    }

    return esbuild.build(buildOptions).catch(() => process.exit(1));
}

function outputSize(pkg, file) {
    let size = bytesToSize(brotliSize.sync(fs.readFileSync(file)));
    console.log("\x1b[32m", `${pkg}: ${size}`);
}

function bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes} ${sizes[i]}`;
    return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`;
}