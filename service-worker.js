let visible = true;

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

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));

self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.addEventListener("message", (e) => {
  console.log(e.data);
  visible = e.data;
});
self.addEventListener("notificationclick", async function (event) {
    event.notification.close();
    let url = "https://web-notifications.ru/static/";
    event.waitUntil(
    clients.matchAll({type: 'window', includeUncontrolled: true,}).then( windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow("/static/");
            }
        })
    )
    // if (!visible) {
    //  clients.openWindow("/static/");
    // }
  },
  false
);