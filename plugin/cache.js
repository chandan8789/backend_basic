// cache.js
class InMemoryCache {
  constructor() {
    this.cache = new Map(); // { key: { value, expiry } }
  }

  set(key, value, ttlInSeconds) {
    const expiry = Date.now() + ttlInSeconds * 1000;
    this.cache.set(key, { value, expiry });
  }

  get(key) {
    const cached = this.cache.get(key);
    if (!cached) return null;

    if (Date.now() > cached.expiry) {
      this.cache.delete(key); // expired
      return null;
    }
    return cached.value;
  }

  delete(key) {
    this.cache.delete(key);
  }
}

// Example usage
export const cache = new InMemoryCache();

// // Set cache for 5 seconds
// cache.set("user_1", { name: "John Doe" }, 5);

// console.log("First read:", cache.get("user_1")); // { name: 'John Doe' }

// setTimeout(() => {
//   console.log("After 6 sec:", cache.get("user_1")); // null (expired)
// }, 6000);
