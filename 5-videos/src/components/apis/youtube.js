import axios from 'axios';

const KEY = 'AIzaSyDmLabMro_TEo9MGI9WuWoe7MRn67G0biE';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
