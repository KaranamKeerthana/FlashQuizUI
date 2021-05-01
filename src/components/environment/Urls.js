
const baseURL = "http:localhost:8000";
const basefrontURL = "http://localhost:3000";

const URLS = {
    registerURL: `${baseURL}/create/`,
    displayURL: `${baseURL}/display`,
    signInURL: `${baseURL}/signin/`,
    signUpURL: `${baseURL}/signup/`,
    createURL: ``,
}

const frontURLS = {
    homePageURL: `${basefrontURL}/`,
    signInHomeURL: `${basefrontURL}/signInHome`,
    signInFrontURL:`${basefrontURL}/signIn`,
}


export { URLS , frontURLS };