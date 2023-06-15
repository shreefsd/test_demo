class API {
  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
    this.secure = this.isSecureURL(url);
  }

  isSecureURL(url) {
    return url.startsWith('https://');
  }

  updateURL(newUrl) {
    this.url = newUrl;
    this.secure = this.isSecureURL(newUrl);
  }

  isSecure() {
    return this.secure;
  }
}

module.exports = { API };

