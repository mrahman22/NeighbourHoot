const axios = require("axios");

const url = `https://rmx5oedl1b.execute-api.eu-west-2.amazonaws.com/development/birds`;

exports.getAllBirdsByArea = location => {
  return axios
    .get(`${url}${location}`)
    .then(response => {
      return JSON.parse(response.data.body);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getAllBirds = () => {
  return axios
    .get(url)
    .then(response => {
      console.log(response, "response");
    })
    .catch(err => console.log(err));
};

exports.postBird = (bird_name, img_url, user_id, location) => {
  const data = {
    bird_name,
    img_url,
    user_id,
    location
  };
  return axios
    .post(url, data)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err, "<<<<<<<<<<<ERRRROORR");
    });
};

// postBird('Robin', 'https://something', '33', { lat: 54.876, lon: -1.45765 });
