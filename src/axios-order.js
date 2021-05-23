import axios from 'axios';

const instance=axios.create({
    baseURL:'https://contact-manager-in-default-rtdb.firebaseio.com/'
});
export default instance;