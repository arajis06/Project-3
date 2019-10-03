import axios from 'axios';

const KEY = require("../config/keys");

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 4,
        key: KEY
    }
})

// google-site-verification=HOwHtwgLuNrnxchDviKK9pT98bNr4FPqz-ntZ3e7AEE