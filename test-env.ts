import "dotenv/config";
console.log("CLIENT:", process.env.GOOGLE_CLIENT_EMAIL);
console.log("KEY length:", process.env.GOOGLE_PRIVATE_KEY?.length);
