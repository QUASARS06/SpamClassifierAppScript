# SpamClassifierAppScript
This is a sample project which uses a ML Spam Classifier and actually sends incoming emails to the Spam in real-time.

## Resources Used
**ML Classifier Model Used**\
[Develop a NLP Model in Python & Deploy It with Flask, Step by Step](https://towardsdatascience.com/develop-a-nlp-model-in-python-deploy-it-with-flask-step-by-step-744f3bdd7776)

**App Script Snippet**\
[HOW TO CREATE A GMAIL FILTER WITH GOOGLE APPS SCRIPT](http://www.jessespevack.com/blog/2018/9/6/how-to-create-a-gmail-filter-with-google-apps-script)

## How to make it work?
I have used the ML model specified above and hosted it on heroku to be used as an API.
So if you want to test the App Script file you can just go to : (https://spamflask.herokuapp.com/classify?msg=) 
and just put whatever msg as value of the params which in essence would be the contents of the email which you 
want to check for spam. If you get an Internal server error then you've not specified the msg params correctly,
if that's not the case just refresh the URL.


## API Docs
[Link to API](https://spamflask.herokuapp.com/classify?msg=Enter%20Your%20Spam%20Checking%20Body%20Here)\
The API uses the /classify route to classify an input body as SPAM or NOT.
To check a text for classification into spam or not use the msg params with value of whatever text which needs to be
checked for SPAM.\
Eg : https://spamflask.herokuapp.com/classify?msg=Free%20Free%20Free \
The Output returned is a JSON with key 'spam' having value either 1 or 0 [1:Spam, 0:Not Spam]

## File Structure
**ML Model and Flask**\
`api.py` contains the main code related to the model and flask routing.\
`Procfile`,`requirements.txt` used by heroku for hosting.

**Dataset Used for Training**\
`spamham.csv`

**App Script files**\
`email_spamify.js`

## Making it work in real-time
The `email_spamify.js` script file only sends an email to spam-box when manually ran from Google App Script, to make it work automatically you need to make triggers
which automatically fire this script after a specified amount of time (This is because there is no way to fire the script when the user receives a new email)\
More at : https://developers.google.com/apps-script/guides/triggers





