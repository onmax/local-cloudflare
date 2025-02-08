## Installation

```bash
pnpm install # or uninstall pnpm-lock.yaml and run npm/yarn install
```

```bash
pnpm dev # npm run dev or yarn dev
```

Open the browser and navigate to `http://localhost:8787` to make the request, then you will see the following error:

```
[wrangler:err] TypeError: Cannot read properties of undefined (reading '__wbindgen_malloc')
    at PublicKey.fromHex (file:///home/maxi/personal/local-cloudflare/node_modules/.pnpm/@nimiq+core@2.0.6/node_modules/@nimiq/core/bundler/main-wasm/index_bg.js:2453:50)
    at Object.fetch (file:///home/maxi/personal/local-cloudflare/index.ts:6:27)
    at fetchDispatcher (file:///home/maxi/personal/local-cloudflare/.wrangler/tmp/bundle-2TP1X7/middleware-loader.entry.ts:54:17)
    at __facade_invokeChain__ (file:///home/maxi/personal/local-cloudflare/node_modules/.pnpm/wrangler@3.107.3_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/wrangler/templates/middleware/common.ts:53:9)
    at Object.next (file:///home/maxi/personal/local-cloudflare/node_modules/.pnpm/wrangler@3.107.3_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/wrangler/templates/middleware/common.ts:50:11)
    at jsonError (file:///home/maxi/personal/local-cloudflare/node_modules/.pnpm/wrangler@3.107.3_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts:22:30)
    at __facade_invokeChain__ (file:///home/maxi/personal/local-cloudflare/node_modules/.pnpm/wrangler@3.107.3_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/wrangler/templates/middleware/common.ts:53:9)
    at Object.next (file:///home/maxi/personal/local-cloudflare/node_modules/.pnpm/wrangler@3.107.3_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/wrangler/templates/middleware/common.ts:50:11)
    at drainBody (file:///home/maxi/personal/local-cloudflare/node_modules/.pnpm/wrangler@3.107.3_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts:5:30)
    at __facade_invokeChain__ (file:///home/maxi/personal/local-cloudflare/node_modules/.pnpm/wrangler@3.107.3_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/wrangler/templates/middleware/common.ts:53:9)
[wrangler:inf] GET / 500 Internal Server Error (69ms)
```
