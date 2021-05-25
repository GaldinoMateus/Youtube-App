import axios from 'axios'

const KEY = 'AIzaSyAb4WmKpDS39vDRPFlySbmiORMNTf2mIPU';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY

    }
});