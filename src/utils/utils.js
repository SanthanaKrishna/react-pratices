import { doPost } from "./fetchWrapper";
import moment from 'moment';
import CryptoJS from 'crypto-js';
import envConfig from '../../envConfig';
{/* <input type="text" inputmode="numeric" aria-label="@Model.Enterzipcodelabel" 
pattern="[0-9]*" maxlength="5" 
oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"
 name="zipcode" value="" id="zipcode" novalidate=""></input> */}

const {
	cdnPath
} = envConfig;

export const getQueryString = (field, url) => {
	const reg = new RegExp(`[?&]${field}=([^&#]*)`, 'i');
	const string = reg.exec(url);
	return string ? string[1] : null;
};

export const allowOnlyNumber = (value) => {
	if (!value) {
		return '';
	}
	return value.replace(/[^\d]/g, '');
};

export const maxlengthRestrict = (value, maxlen) => {
	if (!value) {
		return '';
	}
	return value.slice(0, maxlen);
}

export const formatPhonenumber = (value) => {
	let finalValue = '';
	let numberLength, getNumbers, countryCode, phoneNumber;
	if (value) {
		getNumbers = value.replace(/[-\/\ /]/g, '');
		numberLength = getNumbers.length;
		if (numberLength === 10) {
			finalValue = getNumbers.replace(/(\d{3})(\d{3})(\d+)/, '$1-$2-$3');
		}
		else if (numberLength > 10) {
			countryCode = getNumbers.split('');
			phoneNumber = countryCode.splice(-10, 10);
			countryCode = (countryCode.length > 0) ? `${countryCode.join('')} ` : '';
			finalValue = `${countryCode}${phoneNumber.join('').replace(/(\d{3})(\d{3})(\d+)/, '$1-$2-$3')}`
		}
	}
	return finalValue;
}

export const getSuperScriptTags = (text) => {
	let finalText = '';
	if (text) {
		for (let x = 0; x < text.length; x++) {
			if (text[x].charCodeAt() == 8482 || text[x].charCodeAt() == 174) {
				finalText = finalText + `<sup>${text[x]}</sup>`;
			} else finalText = finalText + text[x];
		}
	}
	return finalText;
}
export const sanitize = (input) => {
	var output = '';
	if (input) {
		output = input.replace(/<script[^>]*?>.*?<\/script>/gi, '').
			replace(/<[\/\!]*?[^<>]*?>/gi, '').
			replace(/<style[^>]*?>.*?<\/style>/gi, '').
			replace(/<![\s\S]*?--[ \t\n\r]*>/gi, '');

	}
	return output;
};

export const decodeString = (input) => {
	var output = '';
	if (input) {
		output = input.replace(/&amp;/g, '&');
	}
	return output;
}

export const ascending = (key) =>
	(a, b) => {
		let AValue = a[key];
		let BValue = b[key];
		if (typeof AValue === 'string') {
			AValue = AValue.toString().toLowerCase();
		}
		if (typeof BValue === 'string') {
			BValue = BValue.toString().toLowerCase();
		}
		if (AValue === null) return 1;
		else if (BValue === null) return -1;
		else if (AValue < BValue) return -1;
		else if (AValue > BValue) return 1;
		return 0;
	};

export const descending = (key) =>
	(a, b) => {
		let AValue = a[key];
		let BValue = b[key];
		if (typeof AValue === 'string') {
			AValue = AValue.toString().toLowerCase();
		}
		if (typeof BValue === 'string') {
			BValue = BValue.toString().toLowerCase();
		}
		if (AValue === null) return 1;
		else if (BValue === null) return -1;
		else if (AValue < BValue) return 1;
		else if (AValue > BValue) return -1;
		return 0;
	};

export const formatDate = (value, isMyestimate?: any) => {
	if (!value) {
		return '';
	}
	const dateFrmt = isMyestimate ? 'MM/DD/YY' : 'MM/DD/YYYY'
	return moment(value).format(dateFrmt);
};

export const formatDateTime = (value, isHomeownerProfile?: any) => {
	if (!value) {
		return '';
	}
	const dateTimeFrmt = isHomeownerProfile ? 'MM/DD/YY hh:mm A' : 'MM/DD/YYYY hh:mm A'
	return moment(value).format(dateTimeFrmt);
};

export const getDateUTC = (value, format) => {
	if (!value) {
		return '';
	}
	return moment.utc(value).format(format);
};

export const getDateFormat = (value, format) => {
	if (!value) {
		return '';
	}
	return moment(value).format(format);
};

export const getCurrentTime = (format) => {
	return moment().format(format);
};

export const formatDateAfter60Days = (value, isMyestimate?: any) => {
	if (!value) {
		return '';
	}
	const dateFrmt = isMyestimate ? 'MM/DD/YY' : 'MM/DD/YYYY'
	return moment(value).add(+60, 'days').format(dateFrmt);
};

export const tableHeaderFormat = (obj) => {
	const { tableHeader, key } = obj;
	if (tableHeader) {
		return tableHeader.map((value, index) => {
			let config: any = {};
			const title: string = value.Text;
			if (key[index]) {
				config = {
					...key[index],
					title,
				};
			}
			return config;
		});
	}
	return null;
}

export const extractTableComponent = (data) => {
	if (data) {
		let info = {};
		const { Components: components = [] } = data;
		components.forEach((data) => {
			const { RenderingData: renderingData = {}, RenderingType: renderingType = "" } = data;
			const { Datasource: dataSource = [], Header: headerText = [], Customsearch: customSearch = {}, PageTitle = '' } = renderingData;
			const renderingDataTitle = renderingType.replace(/[/\s]/g, '');
			info = {
				...info,
				[renderingDataTitle]: {
					dataSource, headerText, customSearch, PageTitle
				}
			}
		})
		return info;
	}
	return;
}

export const extractHeaderText = (data) => {
	if (data) {
		let info = {};
		const { Components: components = [] } = data;
		components.forEach((data) => {
			const { RenderingData: renderingData = {}, RenderingType: renderingType = "" } = data;
			const { FirstLevelLinks: firstLevelLinks = [], Logo = {} } = renderingData;
			info = {
				...info,
				[renderingType]: {
					firstLevelLinks, Logo
				}
			}
		});
		return info;
	}
	return;
}

export const setContractorInfo = (search) => {
	const customerID = getQueryString('customerID', search);
	if (customerID) {
		sessionStorage.setItem('contractorId', customerID);
	}
};

export const removeContractorInfo = () => {
	sessionStorage.removeItem('contractorId');
};

export const getContractorId = () => {
	const contractorId = sessionStorage.getItem('contractorId');
	if (!contractorId || hasConciergeEntry()) {
		return false;
	}
	return contractorId;
};

export const getAccessToken = () => {
	const accessToken = sessionStorage.getItem('access_token');
	if (!accessToken) {
		return false;
	}
	return accessToken;
};

export const getIdToken = () => {
	const idToken = sessionStorage.getItem('id_token');
	if (!idToken) {
		return false;
	}
	return idToken;
};

export const checkContractorEntry = (urlQueryString) => {
	const hasContractorQuery = getQueryString('customerID', urlQueryString);
	const contractorId = getContractorId();
	if (contractorId) {
		return true;
	} else if (hasContractorQuery) {
		setContractorInfo(urlQueryString);
		return true;
	}
	return false;
};

export const hasConciergeEntry = () => {
	const isConcierge = sessionStorage.getItem('isConcierge');
	if (isConcierge === 'true') return true;
	return false;
};

export const checkConciergeEntry = (location) => {
	if (/concierge/.test(location.pathname)) {
		sessionStorage.setItem('isConcierge', "true");
		return true;
	}
	sessionStorage.removeItem('isConcierge');
	return false;
};


export const checkCZAuthentication = ({ location }) => {
	const urlQueryString = location.search;
	if (checkConciergeEntry(location) || checkContractorEntry(urlQueryString)) {
		return true;
	}
	return false;
};
export const extractDisclaimerText = (data) => {
	if (data) {
		let info = {};
		const { Components: components = [] } = data;
		components.forEach((data) => {
			const { RenderingData: renderingData = {}, RenderingType: renderingType = "" } = data;
			const { DisclaimerText = '', Inclusion = [], Exclusion = [] } = renderingData;
			const renderingDataTitle = renderingType.replace(/[/\s]/g, '');
			info = {
				...info,
				[renderingDataTitle]: {
					DisclaimerText, Inclusion, Exclusion
				}
			}
		})
		return info;
	}
	return;
}

export const roundToDecimal = (val) => {
	if (val) {
		const roundValue = (val / 100);
		return Math.ceil(roundValue);
	}
	return ''
}

export const numberWithCommas = (x) => {
	if (x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").split('.');
	}

}

const events = ['mousemove', 'keydown', 'wheel', 'DOMMouseScroll', 'mouseWheel', 'mousedown', 'touchstart', 'touchmove', 'MSPointerDown', 'MSPointerMove'];

export const createListener = (ele, eType, callBack) => {
	const element = ele || window;
	const eventType = eType || events;
	eventType.forEach((e) => element.addEventListener(e, callBack));
};

export const removeListener = (ele, eType, callBack) => {
	const element = ele || window;
	const eventType = eType || events;
	eventType.forEach((e) => element.removeEventListener(e, callBack));
};

export const titleCase = (str) => {
	var splitStr = str.toLowerCase().split(' ');
	for (var i = 0; i < splitStr.length; i++) {
		// You do not need to check if i is larger than splitStr length, as your for does that for you
		// Assign it back to the array
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}
	// Directly return the joined string
	return splitStr.join(' ');
}

export const timeFrameTextChanger = (str) => {
	if (str) {
		let days = '';
		const daysSplit = str.replace(/[a-zA-z\s]/g, '');
		const number = daysSplit.split('-');
		const findPlus = daysSplit.indexOf('+');
		if (findPlus === -1) {
			if (number[0] === "0") {
				days = `Within ${number[1]} days`;
			}
			else {
				days = `${number[0]} to ${number[1]} Days`;
			}
		}
		else {
			var daysSplitPlus = daysSplit.split('+');
			days = `More than ${daysSplitPlus[0]} Days`;
		}
		return days;
	}
	return ''
}

export const roleAccessCheck = (roles) => {
	if (roles) {
		const role = roles.find((item) => item.roleName === 'VIEW_RESPOND_LEADS');
		return Boolean(role);
	}
	return false
}


/**
 * Logs error in Azure Portal
 * @param page - string - name of ContentAPI (Name attribute in envConfig.routes) 
 * @param isServer - boolean - SSR or CSR
 * @param error - object - Error response
 */
export const logError = (page, isServer, error) => doPost('https://myroofint.gaf.com/api/v1.0/content', `Page: ${page} isServer: ${isServer} Error: ${JSON.stringify(error)}`);

export const extractComponent = (data, componentName = '', extractFrom = 'content') => {
	let res = {
		result: false,
		data: null
	};
	if (data) {
		const { [extractFrom]: content = {} } = data
		const { Components: components = [] } = content || {};
		let resData;
		if (componentName) {
			const component = components.find((item) => {
				const { RenderingType: renderingType = "" } = item;
				// 		  const renderingDataTitle = renderingType.replace(/[/\s]/g, '');
				return componentName === renderingType
			});
			resData = component && component.RenderingData;
		} else {
			resData = {};
			components.forEach((data) => {
				const { RenderingData: renderingData = {}, RenderingType: renderingType = "" } = data;
				const renderingDataTitle = renderingType.replace(/[/\s]/g, '');
				resData = {
					...resData,
					[renderingDataTitle]: renderingData
				}
			});
		}
		if (resData && Object.keys(resData).length) {
			res = {
				result: true,
				data: resData
			}
		}
	}
	return res;
}
export const extractPageData = (data, pageItem = '', extractFrom = 'content') => {
	let res = {
		result: false,
		data: null
	};
	if (data) {
		const { [extractFrom]: content = {} } = data
		let { Page: pageData = {} } = content || {};
		if (pageItem) {
			pageData = pageData[pageItem] || {};
		}
		if (pageData && Object.keys(pageData).length) {
			res = {
				result: true,
				data: pageData
			}
		}
	}
	return res;
}
export const extractPopUp = (data) => {
	if (data && Array.isArray(data)) {
		let info = {};
		data.forEach((data, index) => {
			let popup = { ...data }
			const { Title: title = '', CTAs: ctas = [] } = popup;
			if (popup.hasOwnProperty('CTAs')) popup['CTAs'] = extractCTAs(ctas);
			const popupTitle = title.replace(/[/\s]/g, '') || index;
			info = {
				...info,
				[popupTitle]: popup
			}
		})
		return info;
	}
	return null;
}
export const extractCTAs = (data) => {
	if (data && Array.isArray(data)) {
		let info = {};
		data.forEach((data, index) => {
			const { CTA: cta = {} } = data;
			const { Title: title = '' } = cta;
			const popupTitle = title.replace(/[/\s]/g, '') || index;
			info = {
				...info,
				[popupTitle]: cta
			}
		})
		return info;
	}
	return null;
}
export const extractDictionary = (data, extractFrom = 'dictionary') => {
	let res = {
		result: false,
		data: null
	};
	if (data) {
		const { [extractFrom]: dictionary = {} } = data
		let { Dictionary: dictionaryData = {} } = dictionary || {};
		if (dictionaryData && Object.keys(dictionaryData).length) {
			res = {
				result: true,
				data: dictionaryData
			}
		}
	}
	return res;
}
export const checkIsMobile = () => {
	let isMobile, orientationType;
	if (typeof navigator !== undefined) {
		isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		orientationType = (typeof window.orientation !== undefined) ? window.orientation == 90 ? 'landscape' : 'portrait' : null;
		if (/iPad/i.test(navigator.userAgent) && orientationType === 'landscape') {
			isMobile = false;
		}
		console.log("789897589347598347958347", isMobile);
	}
	return isMobile;
}

export const getMobileOS = () => {
	let	userAgent = navigator.userAgent || navigator.vendor;
	userAgent = userAgent.toLowerCase();
	if (/windows phone/i.test(userAgent)) {
		return "windows_phone";
	}
	else if (/android/i.test(userAgent)) {
		return "android";
	}
	else if (/ipad|iphone/.test(userAgent)) {
		return "ios";
	}
	return "unknown";
}

export const encryptdata = (text) => {
	return CryptoJS.AES.encrypt(text, envConfig.secretKey).toString();
}

export const decryptdata = (encodedText) => {
	const bytes = CryptoJS.AES.decrypt(encodedText, envConfig.secretKey);
	return bytes.toString(CryptoJS.enc.Utf8);
}

export const replaceNbsps = (str) => {
	var re = new RegExp(String.fromCharCode(160), "g");
	return str.replace(re, " ");
}

export const formatUSNumber = (value) => {
	if (!value) {
		return '';
	}
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatCurrency = (value) => {
	if (!value) {
		return '';
	}
	const amount = (/(\d{0,})[^.]*((?:\.\d{0,2})?)/g).exec(value.toString().replace(/[^\d.]/g, ''));
	const str = value.toString();
	const minusSymbol = str.indexOf('-') === 0 && str.length > 1 ? '-' : '';
	return formatUSNumber(minusSymbol + amount[1] + amount[2]);
};

export const extractFormLabel = (data, key = 'LabelType') => {
	let res = {
		result: false,
		data: null
	};
	if (data) {
		let resData;
		resData = {};
		data.forEach((item) => {
			const { [key]: LabelType = "" } = item;
			const LabelTypeName = LabelType.replace(/[/\s]/g, '');
			resData = {
				...resData,
				[LabelTypeName]: item
			}
		});

		if (resData && Object.keys(resData).length) {
			res = {
				result: true,
				data: resData
			}
		}
	}
	return res;
}

export const isHTMLType = (str) => {
	let formattedHtml = '';
	if (str && str.trim().toLowerCase().search('<p>') !== -1) {
		formattedHtml = str;
	} else {
		formattedHtml = ('<p>' + str + '</p>');
	}
	return formattedHtml;
}
export const findDictionaryVal = (dataObj, value) => {
	for (var key in dataObj) {
		if (dataObj.hasOwnProperty(key) && key === value) {
			return dataObj[key];
		}
	}
	return dataObj['error-response'];

}

export const urlConcatination = (imageUrl = '', isBackgroundUrl = false) => {
	let url = ''
	if (imageUrl !== '' && !isBackgroundUrl) {
		url = `${cdnPath}${imageUrl.trim()}`
	} else if (imageUrl !== '' && isBackgroundUrl) {
		url = `url(${cdnPath}${imageUrl.trim()})`
	}
	return url;
}

export const checkBrowser = () => {
	if(typeof navigator !== undefined){
		let ua = navigator.userAgent, tem,
			M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		if (/trident/i.test(M[1])) {
			tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
			return 'IE ' + (tem[1] || '');
		}
		if (M[1] === 'Chrome') {
			tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
			if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
		}
		M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
		if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
		return M.join(' ');
	}
}
