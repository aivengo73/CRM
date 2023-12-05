"use strict";

import {listIPv4} from './modules/ipv4.js';

function getUniqueIpAddresses() {
	const UniqueIpAddresses = new Set(listIPv4);

	return [...new Set(UniqueIpAddresses)];
}

let res = getUniqueIpAddresses(listIPv4);
console.log('res:', res);
