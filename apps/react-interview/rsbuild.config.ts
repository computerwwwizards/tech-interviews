import { defineConfig, logger, RequestHandler, SetupMiddlewaresContext } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export const serverRender =
  (serverContext: SetupMiddlewaresContext): RequestHandler =>
  async (_req, res, _next) => {
    const indexModule = await serverContext
      .environments
      .node
      .loadBundle<{
        render: () => Promise<string>;
      }>('index');

    const markup = await indexModule.render();

    const template = await serverContext
      .environments
      .client
      .getTransformedHtml('index');

    const html = template.replace('<!-- here goes the content -->', markup);

    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    res.end(html);
  };



export default defineConfig(({
  command
})=>{
  const isDev = command === 'dev'
  return {
  plugins: [pluginReact()],
  server: {
    base: isDev ? undefined : '/tech-interviews/' as string
  },
  dev: {
    setupMiddlewares: [
      ({ unshift }, serverContext) => {
        const serverRenderMiddleware = serverRender(serverContext);

        unshift(async (req, res, next) => {
          if (req.method === 'GET' && req.url === '/') {
            try {
              return await serverRenderMiddleware(req, res, next);
            } catch (err) {
              logger.error('SSR render error, downgrade to CSR...');
              logger.error(err);
              return next();
            }
          } 
          if(!/.js|.css|.js|.png|.json|.tsx|.ts/.test(req.url ?? ''))
            req.url = '/fallback'
          next();
          
        });
      },
    ],
    
  },
  environments: {
    client: {
      html: {
        template: './index.html',
      },
      source: {
        entry: {
          index: './src/index.tsx',
          '404': './src/fallback.index.tsx',
          ...(isDev? {
            fallback: './src/fallback.index.tsx'
          }:{})
        }
      }
    },
    node: {
      source: {
        entry: {
          index: isDev? './src/ssr.dev.index.tsx': './src/ssg.index.tsx'
        }
      },
      output: {
        target: 'node',
        filename: {
          js: '[name].cjs'
        },
        distPath : {
          root: isDev ? undefined : 'server'
        }
      }
    }
  }
}});
