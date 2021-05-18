import { CognitoUserPool } from 'amazon-cognito-identity-js';

const pool = {
    UserPoolId: "us-east-1_iCqL3E2Ux",
    ClientId: '6mu9mq4ujoaqkhlq2s75dopqf4'
}

export default new CognitoUserPool(pool);