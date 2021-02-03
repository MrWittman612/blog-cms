import React from 'react';
import {List, Datagrid, TextField, ShowButton, EditButton} from 'react-admin';

export const BlogList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source='title' />
            <TextField source='content' />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);
