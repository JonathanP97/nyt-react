import axios from "axios";

const base = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const key = "?api-key=cecdb7f428d1453f9c06b3d679b784eb&q=";

export default {
	search: function(query) {
		return axios.get(base + key + query);
	}
};