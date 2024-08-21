// resources/js/Pages/UserList.jsx

import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';

const UserList = ({ users }) => {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(`/admin/users/${id}`);
        }
    };

    return (
        <div>
            <h1>Users</h1>
            <InertiaLink href="/admin/users/create">Create New User</InertiaLink>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <InertiaLink href={`/admin/users/edit/${user.id}`}>Edit</InertiaLink>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
