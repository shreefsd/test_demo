class API{
    constructor(url, method='GET'){
        this.url = url;
        this.method = method
    }
    #secure = false
    isSecureContext(){
        // if(this.url.split("://")[0] === "http"){
        //     return false;                             //another way
        // }else{
        //     return true;
        // }
        return this.url.split("://")[0] === "https";
    }
    updateUrl(newURL){
        this.url = newURL;
        this.#secure = this.isSecure()
    }
}
const s = new API("https://api.com/api/hello");
console.log(s.isSecure());

s.updateUrl("https://api.com/api/hello");
console.log(s.isSecure());

console.log(s.url);
module.export={API}
