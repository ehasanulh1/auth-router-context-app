/*
------------------------
Basic Context API Setup
------------------------
1. Context API: Share auth stare with other components (across the application)
2. Create an UserContext
3. ContextProvider with passed children
4. set the UserContext in the index.js
5. Now to consume the context: export the AuthContext from UserContext
6. Now at Header or Home () or anywhere else: use useContext hook to get the info in the context
*/

/*
Auth Integration
1. use getAuth by passing the app form  firebase config
2. create a function named 'createUser' to return createUserWithEmailAndPassword(auth, email, password)
*/