import FirebaseAdmin from '../firebase/Admin';

const firebaseAuthentication = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: 'Authorization token not sent.',
    });
  }
  // 0 -> Token type (i.e. Bearer); 1-> Actual token
  const token = req.headers.authorization.split(' ')[1]; 
  try {
    const user = await FirebaseAdmin.auth().verifyIdToken(token);
    req.currentUser = user;
    next();
  } catch(err) {
    console.error(err);
    console.log("---");
    return res.status(400).json({
      message: 'Token is not valid.',
    });
  }
}

export default firebaseAuthentication;