// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Usuario } from "src/app/models/user.model";
import { doc, getFirestore, setDoc, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfd8_Lu8tD0pw9SgA6YY5vQ17KmUWSGyY",
    authDomain: "wordlepokemon-47d52.firebaseapp.com",
    projectId: "wordlepokemon-47d52",
    storageBucket: "wordlepokemon-47d52.appspot.com",
    messagingSenderId: "715670846430",
    appId: "1:715670846430:web:73264281e19b6e9c803b4f",
    measurementId: "G-QD194H8K7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function setUser(user: Usuario) {
    const userData = {
        id: user.getId,
        name: user.getName,
        password: user.getPassword,
        photo: user.getPhoto,
        imagenScore: user.getImageScore,
        easyScore: user.getEasyScore,
        hardScore: user.getHardScore,
        tryEasy: user.getTryEasy,
        tryHard: user.getTryHard,
        tryImage: user.getTryImage,
        maxScoreEasy: user.getMaxScoreEasy,
        maxScoreHard: user.getMaxScoreHard,
        maxScoreImage: user.getMaxScoreImage
    };

    await setDoc(doc(db, "users", user.getId), userData);
}

export async function getUsers() {
    let dataUsers = getDocs(collection(db, "users"));
    let users: Usuario[] = [];
    let element: any;

    (await dataUsers).forEach(doc => {
        let user: Usuario = new Usuario("0", "", "", "");
        element = doc.data();
        user.setId(element.id);
        user.setName(element.name);
        user.setPassword(element.password);
        user.setPhoto(element.photo);
        user.setImageScore(element.imagenScore);
        user.setEasyScore(element.easyScore);
        user.setHardScore(element.hardScore);
        user.setTryEasy(element.tryEasy);
        user.setTryHard(element.tryHard);
        user.setTryImage(element.tryImage);
        user.setMaxScoreEasy(element.maxScoreEasy);
        user.setMaxScorehard(element.maxScoreHard);
        user.setMaxScoreImage(element.maxScoreImage);

        users.push(user);
    })
    return users;
}