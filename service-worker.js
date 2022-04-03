const visible = true;

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log("SW data is ", data);
  console.log("actions is: ", data.actions);
  const actions = [{ action: "reply", title: "Reply" }];
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "favicon.ico",
    image: data.image,
    actions: actions,
  });
});

self.addEventListener("message", (e) => {

});

self.addEventListener(
  "notificationclick",
  function (event) {
    event.notification.close();

    if (hidden) {
      clients.openWindow("/static/");
    }
  },
  false
);
