import axios from 'axios'

const KEY = 'AIzaSyB0bsHh9co3zoD67FNAcnfoRvFgtlx7-Qk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', //ovakvi parametri su specificni konkretno za yt API!
        maxResults: 10,
        key: KEY
    }
});