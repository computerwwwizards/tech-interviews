
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { render } from "./ssr.dev.index";

async function prerender(pagePath: string, replaceCue = '<!-- here goes the content -->'){
  const prevContent = await readFile(pagePath, {
    encoding: 'utf-8'
  });

  const newContent = prevContent
    .replace(replaceCue,await render())

  await writeFile(pagePath, newContent);
}


prerender(join(process.cwd(), 'dist', 'index.html'))
prerender(join(process.cwd(), 'dist', '404.html'))