import React from 'react';
import SocialLogin from './SocialLogin';
import Find from '../Find';

const RightNav = () => {
    return (
        <div className=' space-y-5'>
            <SocialLogin></SocialLogin>
            <Find></Find>
        </div>
    );
};

export default RightNav;