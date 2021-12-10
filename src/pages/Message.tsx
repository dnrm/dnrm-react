import React from 'react';
import Layout from '../components/Layout';

const Message = () => {
    return (
        <Layout>
            <h1 className="font-bold text-4xl">Hello there darling,</h1>
            <p className="mt-2">
                Hover:{' '}
                <span className="text-gray-500 bg-gray-500 hover:text-white hover:bg-transparent">
                    Is it too much to ask, if you could send some prs O_o
                </span>
            </p>
        </Layout>
    );
};

export default Message;
