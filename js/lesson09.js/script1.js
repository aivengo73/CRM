"use strict";

// Задание 2
// Вам дан список ip-адресов -> IPv4
// задача: написать функцию, которая будет возвращать число равное количеству уникальных ip-адресов

const listIpv4 = {
   
    "10.143.250.143",
    "10.181.137.59",
    "10.228.172.128",
    "10.135.242.153",
    "10.25.124.143",
    "10.150.137.9",
    "10.188.194.209",
};

function equalNumberUniqueIpAddresses() {
const UniqueIpAddresses = new Set({
    "10.125.20.72",
    "10.143.250.143",
    "10.181.137.59",
    "10.228.172.128",
    "10.111.75.25",
    "10.248.130.41",
    "10.61.119.18",
    "10.214.91.201",
    "10.135.242.153",
    "10.25.124.143",
    "10.150.137.9",
    "10.188.194.209",
    "10.125.20.72",
    "10.143.250.143",
    "10.181.137.59",
    "10.228.172.128",
    "10.111.75.25",
    "10.248.130.41",
    "10.61.119.18",
    "10.214.91.201",
    "10.135.242.153",
    "10.25.124.143",
    "10.150.137.9",
    "10.188.194.209",});
console.log('UniqueIpAddresses: ', UniqueIpAddresses);

}

function equalNumberUniqueIpAddresses() {


	const UniqueIpAddresses = new Set(listIpv4);
	
	return [...new Set(UniqueIpAddresses)];
	}
	equalNumberUniqueIpAddresses();
	
	// const arr = [1, 2, 3, 4, 7, 1, 2, 6, 5, 7, 7, 9, 10, 0, 5, 6, 7];
	// console.log(Array.from(new Set(arr)));
	let num = fontSize(res)
