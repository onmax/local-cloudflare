import { PublicKey } from "@nimiq/core";

export default {
  async fetch(request, env, ctx) {
    const publicKey = '82d80b86d9bf7906832e9f0ba4fa69018792f59190075c396b0e85aeac444e55'
    const key = PublicKey.fromHex(publicKey);
    return new Response(key.toHex());
  },
};
