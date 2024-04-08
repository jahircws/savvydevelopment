
import crypto from 'crypto';

export const calculateSHA256Hash = (input) => {
    return crypto.createHash('sha256').update(input).digest('hex');
};