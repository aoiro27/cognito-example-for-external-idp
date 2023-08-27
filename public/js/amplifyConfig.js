let CognitoRegion = 'ap-northeast-1';
let CognitoUserPool = 'ap-northeast-1_8dtPkBQv8';
let CognitoUserPoolClient = '4nh7ft145co6attlmvscadcg64';

let CognitoDomainPrefix = 'braincoweb515b2153-515b2153-webdev';

let amplifyConfig = {
    Auth: {
        region: CognitoRegion,
        userPoolId: CognitoUserPool,
        userPoolWebClientId : CognitoUserPoolClient,
        oauth: {
            domain: `${CognitoDomainPrefix}.auth.${CognitoRegion}.amazoncognito.com`,
            scope: ['openid'],
            redirectSignIn: 'http://localhost:8080/',
            redirectSignOut: 'http://localhost:8080/',
            responseType: 'code'
        }
    }
};