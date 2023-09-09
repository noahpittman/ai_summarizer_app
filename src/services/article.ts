import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
	method: "GET",
	url: "summarize",
	params: {
		url: "https://time.com/6266679/musk-ai-open-letter/",
		length: "3",
	},
	headers: {
		"X-RapidAPI-Key": "50ea36f870msh511f646a505895bp15070bjsnc70ba4061a4b",
		"X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
	},
};

export const articleApi = createApi({
	reducerPath: "articleApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
	}),
	endpoints: (builder) => ({
		getSummary: builder.query({
			query: (params) => `test`,
		}),
	}),
});
