import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
export const loginMethod = async (email, password) => {
  try {
    let ifUserExsist = await searchUser(email);
    if (ifUserExsist) {
      let res = await signInMethod(email, password);
      return res;
    } else {
      let res = await signUpMethod(email, password);
      return res;
    }
  } catch (e) {
    throw new Error(e);
  }
};
const signInMethod = async (email, password) => {
  try {
    let res = await auth().signInWithEmailAndPassword(email, password);
    if (res.user) {
      const user = await firestore()
        .collection('Users')
        .where('id', '==', res.user.uid)
        .get();
        
      return {uid:user.docs[0].id,...user.docs[0].data()};
    } else {
      throw new Error('Something went wrong');
    }
  } catch (e) {
    throw new Error(e);
  }
};
export const signUpMethod = async (email, password) => {
  try {
    const res = await auth().createUserWithEmailAndPassword(email, password);
    if (res.additionalUserInfo.isNewUser) {
      const newUser = await createUserInFirestore(email,res.user.uid)
      const userData = (await newUser.get()).data();
      return {uid:newUser.id, ...userData};
    }
  } catch (e) {
    throw new Error(e);
  }
};

export const googleSigninMethod = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn({prompt: 'select_account',});
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const res = await auth().signInWithCredential(googleCredential);
    let ifUserExsist = await searchUser(res.user.email);
    if(ifUserExsist){
      const user = await firestore()
      .collection('Users')
      .where('id', '==', res.user.uid)
      .get();
      return {uid:user.docs[0].id,...user.docs[0].data()};
    }
    else{
      const newUser = await createUserInFirestore(res.user.email,res.user.uid);
      const userData = (await newUser.get()).data();
      return {uid:newUser.id, ...userData};
    }
    // Sign-in the user with the credential
  } catch (e) {
    throw new Error(e)
  }
};

export const profileSubmit = async(uid,name,age,gender)=>{
  try{
    await firestore().collection('Users').doc(uid).update({
      name,
      age,
      gender
    });
  }
  catch(e){
    throw new Error(e)
  }
}

export const setNewUserToOld = async(uid)=>{
  try{
    const userRef = await firestore().collection('Users').doc(uid);
    userRef.update({
      newUser:false
    })
  }
  catch(e){
    throw new Error(e)
  }
}

const searchUser = async email => {
  try {
    // Check if the user with the given email exists in Firestore
    const querySnapshot = await firestore()
      .collection('Users')
      .where('email', '==', email)
      .get();
    return querySnapshot.docs.length !== 0;
  } catch (e) {
    throw new Error(e)
  }
};
const createUserInFirestore = async(email,uid)=>{
    try{
        const newUser = await firestore().collection('Users').add({
            id: uid,
            email: email,
            newUser: true,
          });
        return newUser
    }
    catch(e){
        throw new Error(e)
    }
}