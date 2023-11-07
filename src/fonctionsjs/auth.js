import { auth } from '../../firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'


// Cette fonction permet de se connecter avec un email et un mot de passe

export const loginByEmail = async (email , password) => {

    try {

        return signInWithEmailAndPassword(auth , email , password)

    } catch (error) {
        
        return error
    }
}

// Cette fonction permet de se déconnecter 

export const logout = () => {

    signOut(auth)

}

