# ChatGPT for Search

A browser extension to display ChatGPT response alongside **Google/Baidu/Toutiao/Bing** Search results, supports Chrome/Edge/Firefox.

![screenshot](screenshot.png)

## Credit

This project is based on [wong2/chat-gpt-google-extension](https://github.com/wong2/chat-gpt-google-extension) and brings the same functionality to **Baidu/Toutiao/Bing** Search.


## Installation

### Install to Chrome/Edge

1. Download `chrome.zip` from [Releases](https://github.com/doragd/chat-gpt-search-extension/releases)
2. Unzip the file
3. In Chrome/Edge go to the extensions page (`chrome://extensions` or `edge://extensions`).
4. Enable Developer Mode.
5. Drag the unzipped folder anywhere on the page to import it (do not delete the folder afterwards).

### Install to Firefox

1. Download `firefox.zip` from [Releases](https://github.com/doragd/chat-gpt-search-extension/releases)
2. Unzip the file
3. Go to `about:debugging`, click "This Firefox" on the sidebar
4. Click "Load Temporary Add-on" button, then select any file in the unzipped folder

## Build from source

1. Clone the repo
2. Install dependencies with `npm`
3. Run `./build.sh` for Chrome, `./build.sh firefox` for Firefox
4. Load the `build` directory to your browser



