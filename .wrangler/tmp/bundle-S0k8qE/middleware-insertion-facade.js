				import worker, * as OTHER_EXPORTS from "/Users/getutadesse/song/csong/.wrangler/tmp/pages-wPAhn5/nddow1p49eq.js";
				import * as __MIDDLEWARE_0__ from "/Users/getutadesse/song/csong/node_modules/.pnpm/wrangler@3.15.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "/Users/getutadesse/song/csong/.wrangler/tmp/pages-wPAhn5/nddow1p49eq.js";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;