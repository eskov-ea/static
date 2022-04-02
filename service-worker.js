self.addEventListener('push', e => {
  const data = e.data.json();
  console.log('SW data is ', data);
console.log("actions is: ", data.actions);
  self.registration.showNotification(data.title, {
      body: data.body,
      icon: "favicon.ico",
      image: data.image,

  });
});