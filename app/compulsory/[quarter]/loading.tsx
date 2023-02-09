import React from 'react';
import { Loader } from '@/components';

function Loading() {
    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
            <Loader />
        </div>
    );
}

export default Loading;