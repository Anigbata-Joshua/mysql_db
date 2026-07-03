import crypto from 'crypto';

export const generateUserId=()=>{
    return `USER-$${crypto.randomBytes(6).toString('hex')}`;
}


