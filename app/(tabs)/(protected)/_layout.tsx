import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Redirect, Stack } from "expo-router";
import { AuthContext } from "@/Context/Authcontext";

const _layoutProtected = () => {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return <Redirect href="/" />;
  }
  return <Stack></Stack>;
};

export default _layoutProtected;

const styles = StyleSheet.create({});
