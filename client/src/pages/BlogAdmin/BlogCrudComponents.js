import React from 'react';
import {
    TextField,
    Create,
    SimpleForm,
    TextInput,
    Edit,
    TopToolbar,
    ListButton,
    ShowButton,
    Show,
    SimpleShowLayout,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const BlogShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source='title' />
            <TextField source='content' />
        </SimpleShowLayout>
    </Show>
);
export const BlogCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='title' />
            <RichTextInput source='content' options={{multiline: true}} />
        </SimpleForm>
    </Create>
);
const BlogEditActions = ({basePath, data}) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);
export const BlogEdit = (props) => (
    <Edit actions={<BlogEditActions />} {...props}>
        <SimpleForm>
            <TextInput disabled label='Id' source='id' />
            <TextInput source='title' />
            <RichTextInput source='content' />
        </SimpleForm>
    </Edit>
);
