/**
 * This code snippet is taken from : http://www.jessespevack.com/blog/2018/9/6/how-to-create-a-gmail-filter-with-google-apps-script
 * Certain Modifications have been made by me in order to match my requirement
 */

function classify() {
  // Wrap the entire function in a try / catch, in case there is an error, log it.
  try {
    // Looks for threads in the inbox you can make changes according to your requirements
    var threads = GmailApp.search('in:inbox', 0, 50);
    // If there are threads
    if (threads.length > 0) {
      // For each thread
      for (var t = 0; t < threads.length; t++) {
        // Get the current thread we are iterating over
        var thread = threads[t];

        // Get the first message in the thread
        var message = thread.getMessages()[0];

        var from = message.getFrom();
        var body = message.getPlainBody();
        var email = from.match(/<(.*?)\>/)[1];
        //if(email === 'your test email address goes here for testing purposes'){
        var url =
          'https://spamflask.herokuapp.com/classify?msg=' +
          encodeURIComponent(body);
        //Logger.log(url);
        var response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
        out = JSON.parse(response);
        if (out['spam'] > 0) {
          thread.moveToSpam();
        }
        //}
      }
    }
  } catch (e) {
    Logger.log(e.toString());
  }
}
