import axios from 'axios'

const instance = axios.create({     /** axios实例 **/
    baseURL:`http://${process.env.Host||'localhost'}:${process.env.PORT||3000}`,
    timeout:4000,
    headers:{
    }
})

export default instance