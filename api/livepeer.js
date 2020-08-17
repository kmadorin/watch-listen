import axios from "axios";
import {LIVEPEER_BASE_URL, LIVEPEER_INGEST_URL, LIVEPEER_PLAYBACK_URL} from "../constants";

async function get_urls() {
	const res = await axios.get(`${LIVEPEER_BASE_URL}ingest`);

	return {
		ingest_url: res.data[0].ingest || LIVEPEER_INGEST_URL,
		playback_url: res.data[0].playback || LIVEPEER_PLAYBACK_URL,
	}
}

export {get_urls}

