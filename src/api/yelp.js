import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.yelp.com/v3/businesses',
   headers: {
      Authorization: 'Bearer SKxVLZBiaHIEJoQRT5Mqg00PoipiqYeJro63PgpAPV8KsjIJSj6Y8EhtI2WfIpuT9lnlQmWeryTFy_9GJEejDsjkn5wrAqGPjqDUYfn70LIMrX4MIuoh9uxx56j-YHYx'
   }
});
