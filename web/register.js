if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
};
if ('Notification' in window) {
    Notification.requestPermission();
}
