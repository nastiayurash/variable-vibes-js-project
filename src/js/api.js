import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const baseURL = "https://portfolio-js.b.goit.study";

export function apiGet() {
    const end_point = "/api/reviews";
    const url = `${baseURL}${end_point}`;

    return axios.get(url)
        .then(response => response.data)
        .catch(handleError);
}

export function apiPost(data) {
    const end_point = "/api/requests";
    const url = `${baseURL}${end_point}`;

    return axios.post(url, data)
        .then(response => response.data)
        .catch(handleError);
}

function handleError(error) {
    iziToast.error({
        title: 'Error!',
        message: 'Sorry, something went wrong. Please try again.',
        position: 'topRight',
    });
    throw error;
}