import fs from 'fs';
import path from 'path';
import myst from 'mystjs';
import YAML from 'js-yaml';

const dir = 'content/blog';
const files = fs.readdirSync(dir).filter((n) => n.endsWith('.md'));
const m = new myst.MyST();

files.map((file) => {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath).toString();
  const mdast = m.parse(content);
  if (mdast.children[0].lang !== 'yaml') return;
  const frontmatter = YAML.load(mdast.children[0].value);
  if (frontmatter.thumbnail) return;
  const newContent = content.replace(
    '\n---\n\n',
    `\nthumbnail: thumbnails/${file.replace('.md', '.png')}\n---\n\n`
  );
  fs.writeFileSync(filePath, newContent);
});
