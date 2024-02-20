import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "http://localhost:8095/auth",
    realm: "keycloak_react_auth",
    clientId: "react-auth",
});

export default keycloak;