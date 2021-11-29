const env = process.env.REACT_APP_ENV

let config = {
    baseURL: "http://localhost:3000",
}

if (env) {
    switch (env.toUpperCase()) {
        case "STAGE":
            console.log("staging environment");
            break;
        
        case "PRODUCTION":
            console.log("production environment");
            break;
    }
}