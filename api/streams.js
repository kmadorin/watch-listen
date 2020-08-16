// we can get data from any DB
import {LIVEPEER_BASE_URL} from "../constants";
import axios from "axios";

async function getDataFromDB() {
	return (await require("axios").get(`https://reqres.in/api/users?page=1`))
		.data;
}

async function index() {
	let res = await getDataFromDB();

	// some business logic
	let ret = res.data.map(el => {
		return {
			id: el.id,
			full_name: el.first_name + " " + el.last_name,
			highlight: el.first_name.charAt(0) === "J"
		};
	});
	ret = ret.sort(() => 0.5 - Math.random());

	return ret;
}

async function create(streamParams) {
	const headers = {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${process.env.LIVEPEER_API_KEY}`,
	};
	try {
		const res = await axios.post(`${LIVEPEER_BASE_URL}stream`, streamParams, {headers});
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

export { index, create };