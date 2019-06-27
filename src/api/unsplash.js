import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 117c0edfba2d85e22b93fd10316c1e0cc38562d2a586c12fa1bdfffcb7d88b42'
    }

})
