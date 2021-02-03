import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Title} from 'react-admin';

export const AdminDashboard = () => (
    <Card>
        <Title title='Welcome to the administration' />
        <CardContent>Add Blog Content with react-admin</CardContent>
    </Card>
);
