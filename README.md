# text-editor

## Description
This app is a Progressive Web Application that uses data persistance techniques. This app was created to create notes or snippets with or without an internet connection and be able to reliably retrieve them for later use.

This project was very challenging but great hands on practice setting up a PWA Application. I was able to practice implementing methods for getting and storing data to an IndexedDB database, something that I had struggled with in the past, gaining a better understanding now.

Likewise, routing has been a consistent challenge for me, and this project was no excpetion. However, just like with storing and getting data from the database, consistent work and debugging has helped me greatly.

## Installation
1. Clone the repo to your local machine
2. Open the terminal
3. Run npm install which will install any dependencies
4. Run npm start which will start the server
5. Visit http://localhost:3000/

OR
1. Navigate to https://cc-text-editor.herokuapp.com/
2. Utilize the app

OR
1. Go to https://cc-text-editor.herokuapp.com/
2. Click "Install" on the top left corner
3. Accept Download
4. Navigate to the app where you downloaded the file
5. Open the app

## Usage
You can find the deployed application by clicking at this linkhttps://cc-text-editor.herokuapp.com/


Below are snippets of the live code:
Code to accept content to the database
```
export const putDb = async (content) => {
  console.log('Post to the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
```

Click Event Handler to install the button
```
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        console.log('clickEvent not working')
        return;
    }
    console.log('clickEvent working line 18')
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});
```

## Credits
Developed by Christian Castillo  
Received assistance from my classmates

## License
Copyright (c) [2022] [Christian J. Castillo]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
