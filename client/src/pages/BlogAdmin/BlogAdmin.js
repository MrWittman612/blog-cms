import React from 'react';
import Axios from 'axios';
import {Admin, Resource} from 'react-admin';
import {AdminDashboard} from './AdminDashboard';
import {BlogList} from './BlogList';
import {BlogEdit, BlogCreate, BlogShow} from './BlogCrudComponents';

const setAuthToken = () => {
    const token = localStorage.getItem('admin-token');
    if (token) {
        Axios.defaults.headers.common['Authorization'] = `AdminBearer ${token}`;
    } else {
        delete Axios.defaults.headers.common['Authorization'];
    }
};

const saveAuthToken = (token) => {
    localStorage.setItem('admin-token', token);
    setAuthToken();
};

const authProvider = {
    // authentication
    login: async (data) => {
        try {
            const admin = await Axios.post(
                'http://localhost:5000/admin/api/login',
                data
            );
            saveAuthToken(admin.data.token);
            return admin;
        } catch (error) {
            return Promise.reject();
        }
    },
    checkError: (error) => Promise.resolve(),
    checkAuth: () => {
        let isAuthenticated = false;
        if (localStorage.getItem('admin-token')) {
            setAuthToken();
            isAuthenticated = true;
            return Promise.resolve({isAuthenticated});
        }
        return Promise.reject();
    },
    logout: () => {
        localStorage.clear();
        return Promise.resolve();
    },
    getIdentity: (props) => {
        console.log('🚀 ~ file: BlogAdmin.js ~ line 42 ~ props', props);
        return Promise.resolve();
    },
    // authorization
    getPermissions: (params) => Promise.resolve(),
};

export function BlogAdmin() {
    return (
        <Admin
            dashboard={AdminDashboard}
            dataProvider={dataProvider}
            authProvider={authProvider}
        >
            <Resource
                title='List og Blogs'
                name='blogs'
                list={BlogList}
                edit={BlogEdit}
                create={BlogCreate}
                show={BlogShow}
            />
        </Admin>
    );
}

function dbUrl(resource) {
    return `http://localhost:5000/admin/api/${resource}`;
}

function formattedResponse(dbRes) {
    return {
        data: dbRes.data?.map((resource) => ({
            ...resource,
            id: resource._id,
        })),
        total: dbRes.data.length,
    };
}

const getBlogs = async (resource, params) => {
    try {
        const dbRes = await Axios.get(dbUrl(resource), params);

        return formattedResponse(dbRes);
    } catch (error) {
        console.log(error);
    }
};

const getBlog = async (resource, params) => {
    try {
        const dbRes = await Axios.get(
            `http://localhost:5000/admin/api/${resource}/${params.id}`
        );

        const returnData = {
            data: {
                ...dbRes.data,
                id: dbRes.data._id,
            },
        };

        return returnData;
    } catch (error) {
        console.log(error);
    }
};

const dataProvider = {
    getList: getBlogs,
    getOne: getBlog,
    getMany: getBlogs,
    getManyReference: getBlogs,
    create: async (resource, params) => {
        try {
            const dbRes = await Axios.post(dbUrl(resource), params.data);
            const returnData = {
                data: {
                    ...dbRes.data,
                    id: dbRes.data._id,
                },
            };
            return returnData;
        } catch (error) {
            console.log(error);
        }
    },
    update: async (resource, params) => {
        try {
            const dbRes = await Axios.put(
                dbUrl(resource) + '/' + params.id,
                params.data
            );
            const returnData = {
                data: {
                    ...dbRes.data,
                    id: dbRes.data._id,
                },
            };
            return returnData;
        } catch (error) {
            console.log(error);
        }
    },
    updateMany: async (resource, params) => {
        console.log(
            '🚀 ~ file: BlogAdmin.js ~ line 60 ~ create: ~ params',
            params
        );
        try {
            const dbRes = await Axios.post(dbUrl(resource));
            return formattedResponse(dbRes);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (resource, params) => {
        console.log(
            '🚀 ~ file: BlogAdmin.js ~ line 139 ~ delete: ~ params',
            params
        );
        try {
            const dbRes = await Axios.delete(dbUrl(resource));
            return formattedResponse(dbRes);
        } catch (error) {
            console.log(error);
        }
    },
    deleteMany: async (resource, params) => {
        try {
            const dbRes = await Axios.delete(dbUrl(resource), {
                data: {params: params},
            });
            return {data: dbRes.data};
        } catch (error) {
            console.log(error);
        }
    },
};
