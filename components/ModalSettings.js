import { Modal, TextInput, Textarea } from "@mantine/core";

export default function ModalSettings({opened, setOpened, title, setTitle, description, setDescription, slug}) {

    return (
        <Modal
            title="Modification des paramètres du poste"
            opened={opened}
            onClose={() => setOpened(false)}
        >
            <TextInput
                label="Titre"
                placeholder="Titre du poste"
                mb='sm'
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
            />
            <TextInput
                label="Slug"
                placeholder="slug"
                mb='sm'
                value={slug}
                disabled
            />
            <Textarea
                label="Description"
                placeholder="Description du poste"
                autosize
                mb='sm'
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
            />
        </Modal>
    );
  }
  