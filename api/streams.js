// we can get data from any DB
import { LIVEPEER_BASE_URL, LIVEPEER_INGEST_URL, LIVEPEER_PLAYBACK_URL } from "../constants";
import axios from "axios";

function getHeaders() {
	return {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${process.env.LIVEPEER_API_KEY}`,
	};
}

async function getLivepeerURLs() {
	const res = await axios.get(`${LIVEPEER_BASE_URL}ingest`);

	return {
		ingest_url: res.data[0].ingest || LIVEPEER_INGEST_URL,
		playback_url: res.data[0].playback || LIVEPEER_PLAYBACK_URL,
	}
}

async function getUserId() {
	const headers = getHeaders();

	const res = await axios.get(`${LIVEPEER_BASE_URL}api-token/${process.env.LIVEPEER_API_KEY}`, {headers});

	return res.data.userId;
}

async function getAllStreams() {
	const headers = getHeaders();
	const userId = await getUserId();
	const res = await axios.get(`${LIVEPEER_BASE_URL}stream/user/${userId}`, {headers});
	return res.data;

	// const snapshot = await db.collection('streams').get();
	// const streams = snapshot.docs.map(doc => doc.data());
	//
	// return streams;
}

async function getStreamById(id) {
	const streams = await getAllStreams();

	return streams.filter((stream) => stream.id === id)[0];
}

async function index() {
	return await getAllStreams();
}

async function remove_all() {
	const headers = getHeaders();
	const streams = await getAllStreams();

	streams.forEach( stream => {
		axios.delete(`${LIVEPEER_BASE_URL}stream/${stream.id}`, {headers});
	})
}

async function create(streamParams) {
	const headers = getHeaders();

	try {
		const res = await axios.post(`${LIVEPEER_BASE_URL}stream`, streamParams, {headers});
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

async function stream({id}) {
	return await getStreamById(id);
}


async function get_stream_playback_url({id}) {
	const stream = await getStreamById(id);
	const livepeerUrls = await getLivepeerURLs();
	const playbackURL = livepeerUrls.playback_url;
	const streamPlaybackURL = playbackURL + '/' + stream.playbackId + '/index.m3u8';

	return streamPlaybackURL;
}

export { index, create, stream, remove_all, get_stream_playback_url };