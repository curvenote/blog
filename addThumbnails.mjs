import fs from 'fs';
import path from 'path';
import myst from 'mystjs';
import YAML from 'js-yaml';

const BlogThumbnails = {
  'creating-an-open-research-website': {
    title: 'Creating an Open Research Website',
    description:
      'Using the Curvenote CLI to create an open research website with a local Markdown based authoring experience.',
    tags: ['webinar'],
  },
  'international-data-week-metadata-reproducibility': {
    title: 'Metadata and Reproducibility: Tactics to improve informal research communication',
    description:
      'Curvenote participated in a BoF session on building enhanced FAIR Workflows through use of PIDs within and between interoperable research tools.',
    tags: ['presentation', 'open-science'],
  },
  'future-of-research-communication-and-collaboration': {
    title: 'Future of Research Communication & Collaboration',
    description:
      'A presentation given at the SimPEG Seminar on the FORCE11 Manifesto and tools that Curvenote is building.',
    tags: ['presentation', 'open-science'],
  },
  'deploy-a-scientific-website-in-five-minutes': {
    title: 'Creating & Sharing Scientific Websites',
    description:
      'We gave two lightning talks at Transform 2022: (1) deploying a scientific website in 4.5 minutes, and (2) highlights from the Force11 2021 Conference.',
    tags: ['presentation'],
  },
  'from-jupyter-notebook-to-scientific-paper': {
    title: 'From Jupyter Notebook to Scientific Paper',
    description:
      'In this tutorial we go over how to turn your Jupyter Notebooks into a scientific paper.',
    tags: ['tutorial'],
  },
  'reusing-and-remixing-science': {
    title: 'Reusing & Remixing Scientific Content',
    description:
      'Our goal with Curvenote is to introduce tools that can lower the barrier to linking, tracking, and enable the possibility to collaboratively act on improvements.',
    tags: ['article', 'open-science'],
  },
  'code-mark': {
    title: 'Creating Inline Code in a WYSIWYG Editor',
    description:
      'Editing inline code can be completely unintuitive, we present an open-source library to make it easy.',
    tags: ['open-source'],
  },
  'communicating-science': {
    title: 'Communicating Science',
    description:
      'How we share scientific ideas is disconnected from how scientists work on them. The disconnect between sharing and working prevents efficient feedback loops, delays publication, and stunts the evolution of ideas.',
    tags: ['article', 'open-science'],
  },
  'version-control-for-scientists': {
    title: 'Version Control for Scientists',
    description:
      'At Curvenote we are exploring version control and collaboration workflows that are designed specifically for the research workflow.',
    tags: ['article', 'open-science'],
  },
  'collaboration-in-scientific-writing': {
    title: 'Collaboration in Scientific Writing',
    description:
      'Reflections on distinct modes of collaboration in science including gathering feedback, asynchronous co-authoring and review, and real-time simultaneous editing.',
    tags: ['article'],
  },
  'how-to-export-to-pdf-latex-using-curvenote': {
    title: 'How to export to PDF & LaTeX using Curvenote',
    description:
      'Writing up research for submission to a particular conference, journal, or preprint service is a major task. Exporting to a PDF should be easy!',
    tags: ['tutorial'],
  },
  'data-driven-latex-templates': {
    title: 'Data driven LaTeX templates',
    description:
      'Introducing a lightweight templating engine, jtex, that provides a simple command line interface (CLI).',
    tags: ['open-source'],
  },
  'exporting-to-docx': {
    title: 'Curvenote Microsoft Word Export',
    description: 'Exporting to Microsoft Word is now a single click in Curvenote!',
    tags: ['update'],
  },
  'introducing-curvenote': {
    title: 'Introducing Curvenote',
    description:
      'The Curvenote brand embodies aspects of reuse, modularity and the connections behind ideas through building blocks that provide structure and can also be pulled apart, rearranged and used in unique ways.',
    tags: ['update'],
  },
  'introducing-curvenote-pro': {
    title: 'Introducing Curvenote Pro',
    description:
      'Introducing Curvenote Pro, which includes additional private projects, advanced publishing, and export to any professional template.',
    tags: ['update'],
  },
  'creative-destruction-lab': {
    title: 'Creative Destruction Lab',
    description:
      'Curvenote was chosen to participate in a science & technology innovation program called Creative Destruction Lab.',
    tags: ['update', 'presentation'],
  },
  'ycombinator-application': {
    title: 'YCombinator Application',
    description:
      'Curvenote was selected for YCombinator as one of 8 Canadian companies with over 16,000 global applications. From January to March 2021, we went through their Winter 21 accelerator program.',
    tags: ['update'],
  },
  'force11-2021': {
    title: 'FORCE11 2021 Conference',
    description: 'Curvenote is a Gold Sponsor of the upcoming the FORCE11 2021 conference.',
    tags: ['update', 'open-science'],
  },
  'force11-2021-recap': {
    title: 'FORCE11 2021 Recap',
    description:
      'Our notes from the FORCE11’s 2021 Annual Conference with over 1,300 participants.',
    tags: ['update', 'open-science'],
  },
  'writing-a-scientific-paper-in-jupyter': {
    title: 'Writing a paper with Curvenote and Jupyter Notebooks',
    description:
      'A webinar using Curvenote for scientific writing and integration with Jupyter notebooks.',
    tags: ['webinar'],
  },
  'research-workflows': {
    title: 'Research Workflows, with Dr. Lindsey Heagy',
    description:
      'An interview with Dr. Lindsey Heagy, an assistant professor in Earth Data Science and researcher at the University of British Columbia. Lindsey is also a Science Advisor for Curvenote.',
    tags: ['interview'],
  },
  'curvenote-for-individual-research-notes': {
    title: 'Curvenote for Individual Research Notes',
    description:
      'Using Curvenote’s Jupyter extension and editing tools to keep track of research notes and progress.',
    tags: ['interview'],
  },
  'curvenote-for-group-research-notes': {
    title: 'Curvenote for Group Research Notes',
    description:
      'Learn how the SimPEG team uses Curvenote for their weekly meetings, embedding interactive figures and references to notebook code and outputs.',
    tags: ['interview'],
  },
  'curvenote-for-reproducible-research': {
    title: 'Curvenote for Reproducible Research',
    description:
      'Improve reproducible research by linking together your articles and your Jupyter Notebooks. You can make it easy for others to view, edit, and use your data and research - whether that’s across disciplines, industries or just within your own department.',
    tags: ['interview'],
  },
  'creating-open-educational-resources': {
    title: 'Creating Open Educational Resources',
    description:
      'How to integrate open source and reproducibility practices into presenting educational materials.',
    tags: ['interview'],
  },
  'transition-to-open-science-dr-sun': {
    title: 'Transition to Open Science, with Dr. Jiajia Sun',
    description:
      'Open science is fundamentally changing how scientists and researchers approach scholarly communication and collaboration, from publishing preprints and interactive research results.',
    tags: ['interview'],
  },
  'jupyter-con-2020': {
    title: 'JupyterCon',
    description:
      'At JupyterCon 2020 we introduce Curvenote, allowing you to sync content between Jupyter Notebooks and a web-based, collaborative document editor.',
    tags: ['presentation', 'open-source'],
  },
  'software-underground-2020': {
    title: 'Software Underground',
    description:
      'Lightning talk at Transform 2020, on how we reuse ideas and move them forward together.',
    tags: ['presentation'],
  },
  'reflections-2020': {
    title: 'Reflections on 2020',
    description:
      'Research techniques have evolved, but our tools for communicating and collaborating have not. We aim to unify scientific research, education, publishing and software, by providing a platform where scientific ideas can be developed and published in an interactive and accessible way.',
    tags: ['presentation', 'article'],
  },
};

const dir = 'content/blog';
const files = fs.readdirSync(dir).filter((n) => n.endsWith('.md'));
const m = new myst.MyST();

files.map((file) => {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath).toString();
  const mdast = m.parse(content);
  if (mdast.children[0].lang !== 'yaml') return;
  const frontmatter = YAML.load(mdast.children[0].value);
  let newContent = content;
  const slug = file.replace('.md', '');
  if (!frontmatter.thumbnail) {
    newContent = newContent.replace('\n---\n\n', `\nthumbnail: thumbnails/${slug}.png\n---\n\n`);
  }
  if (!frontmatter.description && BlogThumbnails[slug]) {
    newContent = newContent.replace(
      "\ndescription: ''\n",
      `\ndescription: '${BlogThumbnails[slug].description}'\n`
    );
  }
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent);
  }
});
