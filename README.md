# SpamClassifierAppScript
This is a sample project which uses a ML Spam Classifier and actually sends incoming emails to the Spam in real-time

## ML Classifier Model Used
[Develop a NLP Model in Python & Deploy It with Flask, Step by Step](https://towardsdatascience.com/develop-a-nlp-model-in-python-deploy-it-with-flask-step-by-step-744f3bdd7776)

## How to make it work?
I have used the ML model specified above and hosted it on heroku to be used as an API.
So if you want to test the App Script file you can just go to : (https://spamflask.herokuapp.com/classify?msg=) 
and just put whatever msg as value of the params which in essence would be the contents of the email which you 
want to check for spam. If you get an Internal server error then you've not specified the msg params correctly,
if that's not the case just refresh the URL


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





