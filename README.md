# React Native Lubb-Tech-Assessment
 This Project is powered by React Native with Firebase Authentications and FireBase/Firestore Database 

# Prerequisites
 You must have React Native Environment Setup before following this Installation Guide. 
 In Case you don't have a React Native Environment set up. [Click here](https://reactnative.dev/docs/environment-setup)
# Installation Guide
1. Clone the Repository 
2. Download the Firebase Configuration files for Android and ios from [here](https://drive.google.com/drive/folders/13f6YdYqdQAadfTSy-B28pOJ9_dAYRFuI?usp=sharing)
3. Open the the Project on the editor of your Choice.
4. Now run the following command to install Node_Modules.
* **By using npm**
  
  ```sh
  npm install
  ```
* **By using yarn**
    
  ```sh
   yarn
  ```
  
* For ios you also need to install the Pod. Go to ios folder from your Terminal and hit the following command

  ```sh
   pod install --repo-update
  ```

# Android Guide

  * Put the google-services.json file in ```android/app``` folder.
  * Hit ```yarn android``` from you terminal to run the project on android

# ios Guide

  * Open the ```ios/RNBoilerPlates.xcworkspace``` in your Xcode.
  * From the Xcode Select ```Add file to the project`` and copy GoogleService-Info.plist file into your project.
  * Select the Project and navigate to Target and opne the ```info``` tab. Here you have to add the ```URL Types``` in order to Google Signin work on ios.
  * Copy the reverse_client_secrect from your GoogleService-Info.plist and add in ```URL Schemes```.
  * No either run the project from Xcode or open the terminal and run ```yarn ios```.
