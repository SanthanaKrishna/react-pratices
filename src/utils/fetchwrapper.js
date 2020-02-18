import {ServerAuth} from '../auth/Auth'
import envConfig from '../../envConfig';
import { fetch } from 'domain-task';
import AppTracking from '../../AppTracking';
import { checkBrowser } from './utils';

const { baseUrl } = envConfig;
const baseUrlWithProtocol = baseUrl;
const TIMEOUT = 300000;

const headers = (additionalHeaders = {} as any) => { 
    const authDetails = ServerAuth.getAuthDetails();
    let accessToken, tokenId;
    if(authDetails){
        accessToken = authDetails.accessToken;
        tokenId = authDetails.tokenId;
    } else {
        accessToken = additionalHeaders.accessToken;
        tokenId = additionalHeaders.tokenId;   
    }

    const commonHeaders = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'TrackingId': `${AppTracking.id}`,
    };
    if(accessToken && tokenId){
        return {
            ...commonHeaders,
            'Authorization': `Bearer ${accessToken}`,
            'Authorization1': `${tokenId}`,
        } as any;
    }
    return commonHeaders;
};

/**
* @description function to handle the time out error
* @param  {Promise} promise - promise
* @param  {number} timeout - millseconds
* @param  {string} error - errorcode
* @return
*/
function timeoutPromise(promise, timeout, error) {
    return new Promise((resolve, reject) => {
        const clearTimeOut = setTimeout(() => {
        const err = { status: error };
            reject(err);
        }, timeout);
        promise.then((data) => {
        clearTimeout(clearTimeOut);
            resolve(data);
        }, (data) => {
        clearTimeout(clearTimeOut);
            reject(data);
        });
    });
}

export const statusCheck = (data) => {
    const { status } = data;
    if(status === 204){
        const res = {};
        const resData = { status, ...res };
        return Promise.resolve(resData);
    } else if (status === 401){
        const res = {};
        const resData = { status, ...res };
        return Promise.reject(resData);
    }else {
        return data.json().then((res) => {
            const resData = { status, ...res };
            if (data.status >= 200 && data.status < 300) {
                return Promise.resolve(resData);
            }
            return Promise.reject(resData);
        });
    }    
};

/** @description calls a native fetch method and returns a promise Object
 * @param {string} url
 * @param {string} urlPrefix
 * @returns {Promise}
 */
export const fetchURL = (url, urlPrefix = baseUrlWithProtocol) => {
    return timeoutPromise(fetch(
        url,
        Object.assign({}, {
            headers: headers(),
        }),
    ), TIMEOUT, 504);
};

/** @description Sending a GET request to JSON API.
 * doGet method resolves or rejects the promise that is obtained
 * from the fetchURl method
 * @param {string} url
 * @param {string} urlPrefix
 * @returns {object}
 */
export const doGet = (url, urlPrefix = baseUrlWithProtocol) => {
    const fetchData = fetchURL(url, urlPrefix).then(statusCheck);
    return fetchData;
};

/** @description Sending a POST request.
 * @param {string} url
 * @param {object} body
 * @param {string} urlPrefix
 * @returns {Promise}
 */
export const doPost = (url, body, action="homepage") => {
    const {
        recaptchaKeyV3,
        routes: {
            google:{
                isCaptcha,
            }
        }
    } = envConfig;
    const browser = checkBrowser();
    const AuthHeaders = headers();
    const IsLegacy = browser.toLowerCase() === 'ie 11';
    const {
        Authorization1,
        Authorization,
    } = AuthHeaders;

    if (isCaptcha){
        return ((Authorization1 && Authorization) || IsLegacy) ? (
            timeoutPromise(
                fetch(
                    url,
                    Object.assign({}, {
                        method: 'post',
                        headers: {
                            IsLegacy,
                            ...headers()
                        },
                        body: JSON.stringify(body),
                    }),
                ), TIMEOUT, 504
            )
            .then(statusCheck)
        ) : (
            window["grecaptcha"].execute(recaptchaKeyV3, {action: action})
                .then((token) => {
                    const reqBody = {
                        ...body,
                        "captcha": token
                    };
                    return timeoutPromise(
                        fetch(
                            url,
                            Object.assign({}, {
                                method: 'post',
                                headers: headers(),
                                body: JSON.stringify(reqBody),
                            }),
                        ), TIMEOUT, 504
                    )
                    .then(statusCheck);
                })
        );
    }    
    return timeoutPromise(
            fetch(
                url,
                Object.assign({}, {
                    method: 'post',
                    headers: {
                        ...headers()
                    },
                    body: JSON.stringify(body),
                }),
            ), TIMEOUT, 504
        )
        .then(statusCheck);
    
};

/** @description Sending a PUT request.
 * @param {string} url
 * @param {object} body
 * @param {string} urlPrefix
 * @returns {Promise}
 */
export const doPut = (url, body, urlPrefix = baseUrlWithProtocol) => {
    const reqBody = {
        ...body,
    };
    return timeoutPromise(fetch(
        url,
        Object.assign({}, {
        method: 'put',
        headers: headers(),
        body: JSON.stringify(reqBody),
        }),
    ), TIMEOUT, 504)
    .then(statusCheck);
};

/** @description Sending a DELETE request.
 * @param {string} url
 * @param {object} body
 * @param {string} urlPrefix
 * @returns {Promise}
 */
export const doDelete = (url, body, urlPrefix = baseUrlWithProtocol) => {
    // const urlWithAuthDetails = getUrlWithAuthDetails(url);
    return timeoutPromise(fetch(
        url,
        Object.assign({}, {
        method: 'delete',
        headers: headers(),
        body: JSON.stringify(body),
        }),
    ), TIMEOUT, 504)
    .then(statusCheck);
};

/** @description Sending a GET request with thunk for SSR.
 * @param {object} store
 * @param {object} baseUrl
 * @param {string} channelApi
 * @param {string} contentApi
 * @returns {Promise}
 */
export const doFetch = (store, baseUrl, channelApi, contentApi ) => {
    let userType = '';
    let idtoken = '';
    let accessToken = '';
    if (store.userAccessToken || store.Layout.accessToken) {
        userType = "?userType=" + (store.Layout.isSSRCompleted ? (store.Layout && store.Layout.userObj && store.Layout.userObj.userType) : (store.userobj && store.userobj.userType));
        idtoken = typeof window !== 'undefined' ? ServerAuth.getIdToken() : (store.Layout && store.Layout.idToken) || store.userIdToken;
        accessToken = typeof window !== 'undefined' ? ServerAuth.getAccessToken() : (store.Layout && store.Layout.accessToken) || store.userAccessToken;
    }
    let queryParam = store.Layout.isSSRCompleted ? '?inclMenu=false&inclDict=false' : userType;
    let endPointurl = (store.Layout.isSSRCompleted ? baseUrl : channelApi) + (contentApi + queryParam);

    const fetchTask =  fetch(
        endPointurl,
        Object.assign({}, {
            headers: headers({accessToken, idtoken}),
        })
    )
    .then(response => response.json() as Promise<any>);
    
    return fetchTask
}
