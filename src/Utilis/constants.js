const API_KEY = 'AIzaSyD8Q3rr41F57CfXI13JpAC8841N-SU8Zv8';

export const YOUTUBE_LIST_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=' + API_KEY;

export const YOUTUBE_SUGGESSTION_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='