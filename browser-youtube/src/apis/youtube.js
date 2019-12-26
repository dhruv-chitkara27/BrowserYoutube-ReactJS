import axios from 'axios';

const KEY = 'AIzaSyAEwloudHe7_9k2faRyF6BLq2Hj1oq_c5U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});