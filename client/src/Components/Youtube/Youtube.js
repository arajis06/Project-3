import axios from 'axios';
const KEY = 'AIzaSyDJ8DkPft-HuKsbvQkK_LFBI6D7LvBcEFw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

// google-site-verification=HOwHtwgLuNrnxchDviKK9pT98bNr4FPqz-ntZ3e7AEE