// Firebase Initialization
// For client-side Firebase, API keys are always public.
// Security is handled by Firestore rules, not by hiding keys.
// These values can be overridden by environment variables in Vercel.
try {
    const firebaseConfig = {
        apiKey: "AIzaSyAIW6CwGaaigOoLlULKdUjCs9Wg_-am6EU",
        authDomain: "panna-portfolio.firebaseapp.com",
        projectId: "panna-portfolio",
        storageBucket: "panna-portfolio.firebasestorage.app",
        messagingSenderId: "908822152646",
        appId: "1:908822152646:web:898e68333dfe8557a49ec7",
        measurementId: "G-YKXF5L2LL3"
    };
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
} catch (e) {
    console.error('Firebase init failed:', e);
}
