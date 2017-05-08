chrome.browserAction.onClicked.addListener(function(tab) {
  url = tab.url;
  var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);

  if (match && match[2].length == 11) {
    var videoId = match[2];
    chrome.tabs.update(tab.id, {url: "https://youtube.com/embed/" + videoId});
  }
});
