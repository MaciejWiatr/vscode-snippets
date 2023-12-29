import fs from "node:fs";

interface Snippet {
  prefix: string;
  body: string[];
  description?: string;
  scope: string;
}

const globals = {
  scope: "typescript,typescriptreact",
};

const currentDirCapitalized =
  "${1:${TM_DIRECTORY/^.+[\\/\\\\]+(.*)$/${1:/capitalize}/}}";

const currentDir = "${1:${TM_DIRECTORY/^.+[\\/\\\\]+(.*)$/${1}/}}";

const currentDirPascalCase =
  "${1:${TM_DIRECTORY/^.+[\\/\\\\]+(.*)$/${1:/capitalize}/g}}";

const currentFilePascalCase =
  "${1:${TM_FILENAME_BASE/^.+[\\/\\\\]+(.*)$/${1:/capitalize}/g}}";

const snippets = {
  "Next.js Async Page": {
    ...globals,
    prefix: "nasp",
    body: [
      `export default async function ${currentDirCapitalized}Page() {`,
      `\treturn <main>${currentDirPascalCase} page</main>`,
      "}${2}",
    ],
    description: "Generate new async Next.js AppDir page",
  },
  "Next.js Page": {
    ...globals,
    prefix: "np",
    body: [
      `export default function ${currentDirPascalCase}Page() {`,
      `\treturn <main>${currentDirPascalCase} page</main>`,
      "}${2}",
    ],
    description: "Generate new Next.js AppDir page",
  },
  "Next.js client page": {
    ...globals,
    prefix: "ncp",
    body: [
      `'use client'`,
      ``,
      `export default function ${currentDirPascalCase}Page() {`,
      `\treturn <main>${currentDirPascalCase} page</main>`,
      "}${2}",
    ],
    description: "Generate new Next.js client page",
  },
  "React Arrow Function Function Component": {
    ...globals,
    prefix: "rafc",
    body: [
      `interface ${currentFilePascalCase}Props {}`,
      ``,
      `const ${currentFilePascalCase}:FC<${currentFilePascalCase}Props> = () => {`,
      `\treturn null`,
      "}${2}",
    ],
    description: "Generate new React Arrow Function Function Component",
  },
  "React Arrow Function Function Component Export": {
    ...globals,
    prefix: "rafce",
    body: [
      `interface ${currentFilePascalCase}Props {}`,
      ``,
      `export const ${currentFilePascalCase}:FC<${currentFilePascalCase}Props> = () => {`,
      `\treturn null`,
      "}${2}",
    ],
    description:
      "Generate new React Arrow Function Function Component with export",
  },
  "React Arrow Function Hook": {
    ...globals,
    prefix: "rah",
    description: "Generate new React Arrow Function Hook",
    body: [
      `interface Use${currentFilePascalCase}Options {}`,
      ``,
      `interface Use${currentFilePascalCase}Returns {}`,
      ``,
      `const use${currentFilePascalCase} = (options: Use${currentFilePascalCase}Options): Use${currentFilePascalCase}Returns => {`,
      `\tconst {} = options`,
      ``,
      `\t return {}`,
      "}${2}",
    ],
  },
  "React Arrow Function Hook Export": {
    ...globals,
    prefix: "rahe",
    description: "Generate new React Arrow Function Hook with export",
    body: [
      `interface Use${currentFilePascalCase}Options {}`,
      ``,
      `interface Use${currentFilePascalCase}Returns {}`,
      ``,
      `export const use${currentFilePascalCase} = (options: Use${currentFilePascalCase}Options): Use${currentFilePascalCase}Returns => {`,
      `\tconst {} = options`,
      ``,
      `\t return {}`,
      "}${2}",
    ],
  },
  "Import FC from react": {
    ...globals,
    prefix: "ifc",
    body: [`import { FC } from "react";`],
    description: "Import FC from react",
  },
  "Use client": {
    ...globals,
    prefix: "uc",
    body: [`'use client'`],
    description: "Adds use client",
  },
} satisfies Record<string, Snippet>;

// generate snippets.json

fs.writeFileSync("snippets.json", JSON.stringify(snippets, null, 2), "utf8");
