import { Prism } from '@mantine/prism';

const demoCode = `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`;

export default function Demo({ children }) {
  return <Prism language="tsx">{children}</Prism>;
}