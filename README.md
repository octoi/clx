<p align="center">
    <img src="./public/images/logo.svg" alt="clx" width="50%" />
</p>


# CLX ๐

Lest shop online ๐

> CLX is an ecommerce platform where users can sell & buy products

<a href="https://clx-app.netlify.app/">__GET A DEMO HERE__</a>

<B><u>FEATURES ๐</u></B>

- Sign up with google
- Sell products
- Search for specific products
- Realtime chat with sellers
- View users

## SETUP ๐ท

> You need the following to get started.
>
> - Firebase account
> - Node js
> - Npm
> - Brain ( If you don't have one, sorry this project is not meant for you )

<B><u>DOWNLOAD โฌ๏ธ</u></B>

```bash
$ git clone <url of this project>
```

Or download as zip

<B><u>FIREBASE SETUP ๐ฅ</u></B>

Create new firebase project from <a href="https://console.firebase.google.com/">Firebaseย Console</a>.

- Enable authentication ( with google provider )

- Enable firestore ( start with test mode or with following security rules )

  ```
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow read, write: if true;
      }
    }
  }
  ```

- Enable storage

Copy the `firebase config` and head over to `src/firebase` & create a file named `firebaseConfig.js`, fill it with following code.

```javascript
const firebaseConfig = {
    // your firebase config
}

export default firebaseConfig;
```

<B><u>INSTALL DEPENDECIES ๐</u></B>

```bash
$ npm install
# Or using yanr
$ yarn install
```

<B><u>START SERVER ๐ป</u></B>

```bash
$ npm start
# Or using yarn
$ yarn start
```

Head over to http://localhost:3000/ and view the project

<br />

__๐จโ๐ป with ๐ by me__

