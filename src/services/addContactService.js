import http from "./httpService";

export default function addOneContacts(data) {
    return http.post("/contacts/", data);
}