import { createStyles, Divider, Textarea, Button } from '@mantine/core';
import { useState } from 'react';
import MDX from '@mdx-js/runtime';

import { IconDeviceFloppy, IconSettings } from '@tabler/icons';

import ErrorBoundary from '../utils/ErrorBoundary';

import components from '../utils/components'
import useApi from '../components/api/useApi';
import posts from '../components/api/call/posts';
import ModalSettings from '../components/ModalSettings';

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
  buttons_container: {
    position: 'fixed',
    bottom: 0,
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function Test() {
  const { classes, cx } = useStyles();
  const createPost = useApi(posts.createPost)
  const [mdx, setMdx] = useState(`# Hello, world!

\`\`\`js
console.log(1)
\`\`\`

<div>Here is the scope variable: </div>`);

  const [opened, setOpened] = useState(false);
  const [title, setTitle] = useState("Titre par défaut");
  const [description, setDescription] = useState("Description par défault")

  const slug = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll(" ", "_").toLowerCase();

  const component = {
    h1: props => <h1 style={{color: 'tomato'}} {...props} />,
    ...components
  }

  const savePost = () => {
    createPost.request(mdx)
  }

  return (
    <>
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
        <div className={classes.buttons_container}>
          <Button color="yellow" size="xl" radius="50%" mb='sm' onClick={() => setOpened(true)}>
            <IconSettings size={48} style={{position: "absolute", right: "12%"}} />
          </Button>
          <Button color="teal" size="xl" radius="50%" onClick={savePost}>
            <IconDeviceFloppy size={48} style={{position: "absolute", right: "12%"}} />
          </Button>
        </div>
      </div>
      <ModalSettings opened={opened} setOpened={setOpened} title={title} setTitle={setTitle} description={description} setDescription={setDescription} slug={slug}/>
    </>
  );
}
