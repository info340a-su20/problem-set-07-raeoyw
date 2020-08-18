'use strict';
//User Interaction

//get the default thing, call it "readline"
import readline from 'readline-sync'; //Scanner in JavaScript
import * as model from './Model'; //*: everything
import { printTweets } from './View';

export function runSearch() {
    console.log("Hear are some tweets by @UW_iSchool");

    let recent = model.getRecentTweets(); //recent tweets
    printTweets(recent);

    let input = readline.question("Search tweets, or EXIT to quit: "); //like Scanner.get()
    if(input === "EXIT") {
        return;
    }
    let searchResults = model.searchTweets(input);
    printTweets(searchResults);
}

runSearch();