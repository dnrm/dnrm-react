import React from 'react';
import '../styles/create.css';
import { toast } from 'react-hot-toast'

interface Props {
    update: Function;
}

export default function CreateUser(props: Props) {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        makeRequest(`https://${process.env.REACT_APP_HOSTNAME}/create-user`, {
            name: e.target[0].value,
            lastname: e.target[1].value,
            birthDate: e.target[2].value,
        });
        props.update();
    };

    const makeRequest = async (url: string, options: Object) => {
        let body = {
            ...options,
            img: 'https://source.unsplash.com/random/800x800',
        };

        console.log(body);

        const response = await fetch(url, {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const json = await response.json()

        if (response.ok) {
            console.log(json)
            toast.success('User created successfully!')
        } else {
            toast.error('User creation failed!')
        }
    };

    return (
        <div className="create-user-container">
            <h1 className="create-user-heading">Create User</h1>
            <br />
            <hr />
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-fields">
                    <div className="input">
                        <p>Name</p>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            className="rounded-lg"
                            required
                        />
                    </div>
                    <div className="input">
                        <p>Lastname</p>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Lastname"
                            className="rounded-lg"
                            required
                        />
                    </div>
                    <div className="input">
                        <p>Birth date</p>
                        <input
                            type="text"
                            name="birthdate"
                            id="birthdate"
                            placeholder="Birth date"
                            className="rounded-lg"
                            required
                        />
                    </div>
                </div>
                <br />
                <button id="create-user-button" className="text-gray-800">
                    Create user
                </button>
            </form>
        </div>
    );
}
