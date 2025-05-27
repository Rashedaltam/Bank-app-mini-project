import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router, useRouter } from "expo-router";
import { deleteToken } from "@/api/storage";
import { useQuery } from "@tanstack/react-query";
import { GetProfile } from "@/api/services";



const index = () => {

  interface myProfileType {
    image: string,
    username: string,
    balance: number,
  }

  const myProfileData:myProfileType = {
        image: "image",
    username: "username",
    balance: 100,

  }
const logoutHandeler = async()=>{
  await deleteToken()
  router.replace("/login/register")

}
 
const { data, isLoading, error } = useQuery({
  queryKey: ['myProfile'],
  queryFn: GetProfile,
});

 

if (isLoading) return <Text>Loading...</Text>;
if (error) return <Text>Error loading profile.</Text>;


// if (data) return
    return (
    <View>
    <Text> {data?.image}</Text>
      <Text> {data?.username} </Text>
      <Text> {data?.balance} </Text>

      <TouchableOpacity
              style={styles.registerButton}
              onPress={() => { logoutHandeler()}}>
      
              <Text style={styles.registerButtonText}>logout</Text>
            </TouchableOpacity>
    </View>
    )
};

export default index;

 const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    margin: 10,
    width: 250,
  },
  registerButton: {
    backgroundColor: "#4f46e5", // Indigo
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  mainView:{
    
  }
});
