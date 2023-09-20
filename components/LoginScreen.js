import { useState,useEffect } from "react";
import { View,Text } from "react-native";
import { TextInput,Avatar,Button } from "react-native-paper";
import { styles } from "../assets/styles/styles";
// Firebase
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from "../firebaseConfig";

export default function LoginScreen(){
    const [email,setEmmail] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');
    const [showPass,setShowPass] = useState(false)
    
    return(
        <View style={styles.container}>
            <Avatar.Image
                style={{ marginBottom: 20 }}
                size={100}
                source={require('../assets/imgs/imglogin.jpg')} />
            <View style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 10, padding: 50 }}>
                <TextInput
                    autoFocus
                    label="Correo Electrónico"
                    right={<TextInput.Icon icon="email" />}
                    onChangeText={(email) => setEmmail(email)}
                    value={email}
                />
                <TextInput
                    style={{ marginTop: 20 }}
                    label="Contraseña"
                    secureTextEntry={!showPass}
                    right={<TextInput.Icon icon={showPass ? "eye" : "eye-off"} onPress={()=>setShowPass(!showPass)} />}
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                />
                <Button
                    style={{ marginTop: 20, backgroundColor: 'orange' }}
                    icon="login"
                    mode="outlined"
                    // onPress={handleSignIn}
                >
                    Iniciar Sesión
                </Button>
                <Button
                    style={{ marginTop: 20, backgroundColor: 'yellow' }}
                    icon="account"
                    mode="outlined"
                    // onPress={handleCreateAccount}
                >
                    Crear Cuenta
                </Button>
                <Text style={{color:'green'}}>{message}</Text>
            </View>
        </View>
    );
}