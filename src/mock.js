const db = [
  { id: 1, name: 'iPhone', price: 10000, content: 'Apple iPhone 13' },
  { id: 2, name: 'Galaxy22', price: 11000, content: 'Samsung' },
  { id: 3, name: 'MacBook pro', price: 20000, content: 'Apple MacBook 14inch model' },
  { id: 4, name: 'iMac', price: 30000, content: 'iMac 2022 M2 model' },
];

export default {
  fetch() { return db },
  find(id) { return db.find(el => el.id === id) },
  asyncFind(id, callback) {
    setTimeout(() => {
      callback(db.find(el => el.id === id))
    }, 300)
  }
}