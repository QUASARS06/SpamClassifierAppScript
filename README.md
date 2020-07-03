# SpamClassifierAppScript
This is a sample project which uses a ML Spam Classifier and actually sends incoming emails to the Spam in real-time

## ML Classifier Model Used
[Develop a NLP Model in Python & Deploy It with Flask, Step by Step](https://towardsdatascience.com/develop-a-nlp-model-in-python-deploy-it-with-flask-step-by-step-744f3bdd7776)

## How to make it work?
```
I have used the ML model specified above and hosted it on heroku to be used as an API, so if you want to test the App Script file you can just go to : (https://spamflask.herokuapp.com/classify?msg=) and just put whatever msg as value of the params which in essence would be the contents of the email which you want to check for spam. If you get !Internal server error! then you've not specified the msg params correctl, if that's not the case just refresh
```
