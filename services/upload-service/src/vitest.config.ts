import {defineWorkersConfig} from '@cloudflare/vitest-pool-workers/config';

export default defineWorkersConfig({
    test: {
        poolOptions: {
            workers: {
                main: './index.ts',
                wrangler: {configPath: '../wrangler.toml'},
                miniflare: {bindings: {SHARED_AUTH_SECRET: 'test'}},
            }
        },
    },
});
