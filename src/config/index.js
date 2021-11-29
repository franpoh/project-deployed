const env = process.env.REACT_APP_ENV

let config = {
    baseURL: "http://localhost:3000",
}

if (env) {
    switch (env.toUpperCase()) {
        case "STAGE":
            config.caseURL = "http://stage.localhost/";
            console.log("staging environment");
            break;
        
        case "PRODUCTION":
            config.baseURL="http://localhost.com/"
            console.log("production environment");
            break;
    }
}