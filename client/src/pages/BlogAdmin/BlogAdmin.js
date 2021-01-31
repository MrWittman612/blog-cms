import React from 'react';
import {Admin, Resource} from 'react-admin';
import Axios from 'axios';

const RestProvider = Axios('http://localhost:5000/');

export function BlogAdmin() {
    return (
        <Admin dataProvider={RestProvider}>
            <Resource name={'blogs'} />
        </Admin>
    );
}
