# MARVEL REACT APP

-   This is a React App that is created for my React workshop
-   Clone or Fork the Repo
-   Go to [Marvel's Developer Portal](https://developer.marvel.com/)
-   Sign up, give reason for using the API like "To use for a personal website, just to explore. Using it for Hobby."
    Any random reason.
-   After logging in go to [your account](https://developer.marvel.com/account)
-   Take note of the Public Key and Private Key
-   go to [MD5 Hash Generator](http://www.md5.cz/)
-   Assume your private key is "qwerty" and public key is "asdfg", then give input as "1qwertyasdfg" and generate MD5 Hash
-   Now create a ".env" file in the repo and add two keys,
    -   REACT_APP_MARVEL_API_KEY=<publickey>
    -   REACT_APP_MARVEL_API_MD5_HASH=<generatedhash>
-   First run "yarn"
-   Once the dependncies have installed then run "yarn start"
