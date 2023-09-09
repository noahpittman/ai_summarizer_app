import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
	method: "GET",
	url: "summarize",
	params: {
		url: "https://time.com/6266679/musk-ai-open-letter/",
		length: "3",
	},
	headers: {
		"X-RapidAPI-Key": `${import.meta.env.VITE_RAPID_API_KEY}`,
		"X-RapidAPI-Host": `${import.meta.env.VITE_BASE_URL}`,
	},
};

export const articleApi = createApi({
	reducerPath: "articleApi",
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_BASE_URL}`,
	}),
	endpoints: (builder) => ({
		getSummary: builder.query({
			query: (params) => `test`,
		}),
	}),
});
