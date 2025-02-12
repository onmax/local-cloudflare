// @ts-expect-error unkown file
import mod from './node_modules/@nimiq/core/web/main-wasm/index_bg.wasm'
import init, { PublicKey } from "@nimiq/core/web";

export default {
  async fetch(request, env, ctx) {
    await init(mod)
    const publicKey = '82d80b86d9bf1906832e9f0ba4fa69018792f59190075c396b0e85aeac444e55'
    const key = PublicKey.fromHex(publicKey);
    return new Response(key.toHex());
  },
};
