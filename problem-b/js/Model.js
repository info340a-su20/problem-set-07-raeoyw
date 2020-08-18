'use strict';

import tweetData from './uw_ischool_tweets';

let cleanedTweets = tweetData.map((tweetItem) => {
    let cleanedObj = {
        text: tweetItem.text,
        timestamp: Date.parse(tweetItem.created_at)
    }
    return cleanedObj;
});

export function getRecentTweets() {
    cleanedTweets.sort((tweet1, tweet2) => {
        return tweet2.timestamp - tweet1.timestamp;
    })
    return cleanedTweets.slice(0,5); //get a range of values
}

export function searchTweets(searchTerm) { //define function as export
    searchTerm = searchTerm.toLowerCase();
    let matchesSearch = cleanedTweets.filter((tweetItem) => {
        return (tweetItem.text.toLowerCase().indexOf(searchTerm) >= 0);
    })
    return matchesSearch;
}