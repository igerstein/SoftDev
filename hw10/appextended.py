# Isaac Gerstein
# SoftDev2 pd6
# HW10 -- Flask App with Decorators
# 2016-04-13

import time

def find_time(fn):
    def inner(*args, **kwargs):
        start = time.time()
        returns = fn(*args, **kwargs)
        end = time.time()
        print "execution time: " + str(end - start)
        return returns
    inner.__name__ = fn.__name__
    return inner

def display_name(fn):
    def inner(*args, **kwargs):
        print fn.func_name + ": " + str(args) + " " + str(kwargs)
        return fn(*args, **kwargs)
    inner.__name__ = fn.__name__
    return inner

from bs4 import BeautifulSoup
from flask import Flask, render_template, request
import urllib2, json, urllib

@find_time
@display_name
def topRated():
    key = "bb8c8b5dede831baad7b87391d01d20c"
    uri = "https://api.themoviedb.org/3/movie/top_rated?api_key=%s"
    url = uri%(key)
    
    request = urllib2.urlopen(url)
    result = request.read()
    r = json.loads(result)

    topRated = []
    ids = []
    for item in r['results']:
        topRated.append(item['title'])
        ids.append(item['id'])
    #solely for aesthetic purposes to separate into two columbs
    firstHalf = []
    firstHalfIDs = []
    secondHalf = []
    secondHalfIDs = []
    count = 0
    for item in topRated:
        if count < 10:
            firstHalf.append(topRated[count])
            firstHalfIDs.append(ids[count])
        else:
            secondHalf.append(topRated[count])
            secondHalfIDs.append(ids[count])
        count += 1

    return render_template("topmovies.html", firstTopMovies = firstHalf, secondTopMovies = secondHalf, firstIDs = firstHalfIDs, secondIDs = secondHalfIDs )
        
@find_time
@display_name
def specMovie(movietitle):
    key = "bb8c8b5dede831baad7b87391d01d20c"
    creds = "append_to_response=credits"
    uri = "https://api.themoviedb.org/3/movie/%s?api_key=%s&%s"
    url = uri%(movietitle, key, creds)
    
    request = urllib2.urlopen(url)
    result = request.read()
    r = json.loads(result)

    cast = r["credits"]["cast"]

    actor = []
    character = []
    for i in range (0, len(cast)):
        actor.append(cast[i]["name"])
        character.append(cast[i]["character"])
    
    return render_template("quiz.html", actor=actor, character=character)


#specMovie("244786")

@find_time
@display_name
def results(id): 
    key = "bb8c8b5dede831baad7b87391d01d20c"
    creds = "append_to_response=credits"
    uri = "https://api.themoviedb.org/3/movie/%s?api_key=%s&%s"
    url = uri%(id, key, creds)

    requested = urllib2.urlopen(url)
    result = requested.read()
    r = json.loads(result)

    cast = r["credits"]["cast"]
    actor = []
    for i in range (0, len(cast)):
        actor.append(cast[i]["name"])

    for i in range (0, len(cast)):
        if actor[i] == request.form['name'+str(i)]:
            return True
        else:
            return False
