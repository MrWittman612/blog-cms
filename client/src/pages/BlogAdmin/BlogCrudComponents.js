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
            <TextInput source='content' options={{multiline: true}} />
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
            <TextInput source='content' />
        </SimpleForm>
    </Edit>
);
