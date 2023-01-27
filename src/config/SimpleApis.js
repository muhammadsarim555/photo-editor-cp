import axios from 'axios';

const createResource = (api, data, token) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${api}`, data, { headers: { Authorization: 'Bearer ' + token } })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const createResourceWithoutToken = (api, data, token) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${api}`, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getResource = (api, token) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${api}`, { headers: { Authorization: `Token ${token}` } })
      .then((response) => {
        console.log("🚀 ~ file: SimpleApis.js:34 ~ .then ~ response", response)
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getResourceById = (api, id, token) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${api}/${id}`, { headers: { 'x-auth-token': token } })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateResource = (api, token, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${api}`, data, {
        headers: { Authorization: 'Bearer ' + token }
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteResource = (api, token, data) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${api}`, {
        headers: { Authorization: 'Bearer ' + token },
        data
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export {
  createResource,
  getResource,
  getResourceById,
  updateResource,
  deleteResource,
  createResourceWithoutToken
};
