import { createStyles, Divider, Textarea } from '@mantine/core';
import { useState } from 'react';
import MDX from '@mdx-js/runtime';

import ErrorBoundary from '../utils/ErrorBoundary';

import components from '../utils/components'

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
  },
  child: {
    flex: '1',
    padding: 30
  },
  child_editor: {
    display: 'flex',
    alignItems: 'stretch',
  },
  child_preview: {
    overflowY: 'scroll',
  },
}));

export default function Test() {
  const { classes, cx } = useStyles();
  const [mdx, setMdx] = useState(`# Hello, world!

\`\`\`js
console.log(1)
\`\`\`

<div>Here is the scope variable: </div>`);

  const component = {
    h1: props => <h1 style={{color: 'tomato'}} {...props} />,
    ...components
  }


  return (
    <div className={classes.container}>
      <div className={cx(classes.child, classes.child_editor)}>
        <Textarea
          placeholder="Autosize with no rows limit"
          autosize
          size="xl"
          minRows={1000}
          styles={{
            root: { width: '100%', height: '100%' },
            wrapper: { height: '100%' },
          }}
          value={mdx}
          onChange={(e) => setMdx(e.currentTarget.value)}
        />
      </div>
      <Divider sx={{ height: '100%' }} orientation="vertical" />
      <div className={cx(classes.child, classes.child_preview)}>
        <ErrorBoundary>
          <MDX components={component}>{mdx}</MDX>
        </ErrorBoundary>
      </div>
    </div>
  );
}
