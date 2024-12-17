import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";  // Firebase設定をインポート

export const SignUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (err) {
    console.log(err)
  }
};

export default SignUp;