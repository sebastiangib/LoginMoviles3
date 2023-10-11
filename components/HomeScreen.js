import { View,Text } from "react-native";
import {useForm,Controller} from 'react-hook-form'
import { TextInput,Button } from "react-native-paper";

export default function HomeScreen({navigation, route}) {
  const {
    control,
    handleSubmit,reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      idusername:"",
      fullname: "",
      email: "",
      password: "",
      uri: "",
      age: ""
    },
  })

  const onSubmit = (data) => console.log(data);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bienvenid@ {route.params.email}</Text>

        {/* Input Identificacion */}

        <Controller
        control={control}
        rules={{
          required: true,
          maxLength:12,
          minLength:4,
          pattern: /^[0-9]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Identificacion"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="iduser"
      />

      {errors.iduser?.type == "required" && <Text style={{color:'red'}}>Id del Usuario es obligatorio</Text>}
      {errors.iduser?.type == "maxLength" && <Text style={{color:'red'}}>La longitud maxima debe ser hasta 12 caracteres</Text>}
      {errors.iduser?.type == "minLength" && <Text style={{color:'red'}}>La longitud minima debe ser hasta 4 caracteres</Text>}
      {errors.iduser?.type == "pattern" && <Text style={{color:'red'}}>Debe ingresar solo números</Text>}

      {/* Input Nombre */}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:35,
          minLength:3,
          pattern: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          style={{marginTop:10}}
            placeholder="Nombre Completo"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullname"
      />

      {errors.fullname?.type == "required" && <Text style={{color:'red'}}>El nombre debe ser completo</Text>}
      {errors.fullname?.type == "maxLength" && <Text style={{color:'red'}}>La longitud maxima debe ser hasta 30 caracteres</Text>}
      {errors.fullname?.type == "minLength" && <Text style={{color:'red'}}>La longitud minima debe ser hasta 3 caracteres</Text>}
      {errors.fullname?.type == "pattern" && <Text style={{color:'red'}}>Debe ingresar solo letras y espacios</Text>}

      {/* Input Email */}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:30,
          minLength:10,
          pattern: /^^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          style={{marginTop:10}}
            placeholder="Correo electronico"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />

      {errors.email?.type == "required" && <Text style={{color:'red'}}>El correo es obligatorio</Text>}
      {errors.email?.type == "maxLength" && <Text style={{color:'red'}}>La longitud maxima debe ser hasta 30 caracteres</Text>}
      {errors.email?.type == "minLength" && <Text style={{color:'red'}}>La longitud minima debe ser hasta 10 caracteres</Text>}
      {errors.email?.type == "pattern" && <Text style={{color:'red'}}>Debe ingresar el caracter especial "@"</Text>}

      {/* Input Password */}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:20,
          minLength:8,
          pattern: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{marginTop:10}}
            placeholder="Contraseña"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />

      {errors.password?.type == "required" && <Text style={{color:'red'}}>La contraseña es requerida</Text>}
      {errors.password?.type == "maxLength" && <Text style={{color:'red'}}>La longitud maxima debe ser hasta 20 caracteres</Text>}
      {errors.password?.type == "minLength" && <Text style={{color:'red'}}>La longitud minima debe ser hasta 8 caracteres</Text>}
      {errors.password?.type == "pattern" && <Text style={{color:'red'}}>Debe ingresar una letra mayúscula, un número y un carácter especial</Text>}

      {/* Input Uri */}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:60,
          minLength:10,
          pattern: /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          style={{marginTop:10}}
            placeholder="Url"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="uri"
      />

      {errors.uri?.type == "required" && <Text style={{color:'red'}}>La direccion url es requerida</Text>}
      {errors.uri?.type == "maxLength" && <Text style={{color:'red'}}>La longitud maxima debe ser hasta 60 caracteres</Text>}
      {errors.uri?.type == "minLength" && <Text style={{color:'red'}}>La longitud minima debe ser hasta 10 caracteres</Text>}
      {errors.uri?.type == "pattern" && <Text style={{color:'red'}}>Debe tener protocolo "https", subdominio "www", nombre del dominio, ruta</Text>}

      {/* Input Edad */}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:100,
          minLength:1,
          pattern: /^[0-9]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          style={{marginTop:10}}
            placeholder="Edad"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="age"
      />

      {errors.age?.type == "required" && <Text style={{color:'red'}}>La edad es requerida</Text>}
      {errors.age?.type == "maxLength" && <Text style={{color:'red'}}>La longitud maxima debe ser hasta 100 caracteres</Text>}
      {errors.age?.type == "minLength" && <Text style={{color:'red'}}>La longitud minima debe ser hasta 1 caracteres</Text>}
      {errors.age?.type == "pattern" && <Text style={{color:'red'}}>Debe ingresar solo numeros positivos</Text>}


      <Button
        style={{ marginTop: 20, backgroundColor: 'powderblue' }}
        icon="content-save"
        mode="outlined"
        onPress={handleSubmit(onSubmit)}
      >
        Guardar
        </Button>
      </View>
    );
  }