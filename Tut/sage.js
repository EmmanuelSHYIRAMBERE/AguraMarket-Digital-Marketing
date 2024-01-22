import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import useAuthStore from "../hooks/UserAuthStore";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import axios from "axios";
import { setItemAsync } from "expo-secure-store";
const EditProfile = () => {
  const { AuthToken, AuthProfile, setAuthProfile } = useAuthStore(
    (state) => state
  );
  const [image, setProfileImage] = useState(AuthProfile?.profilePicture);
  const [phoneNumber, SetPhoneNumber] = useState(AuthProfile?.phone);
  const [DOB, setDOB] = useState(AuthProfile?.dateOfBirth);
  const [date, setDate] = useState(new Date(1598051730000));
  const [email, setEmail] = useState(AuthProfile.email);
  const [name, setName] = useState(AuthProfile.fullName);
  const [loadingImage, setLoadingImage] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const pickImage = async () => {
    setLoadingImage(true);
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
    if (status === "granted") {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });
      if (!response.canceled) {
        setProfileImage(response.assets[0].uri);
      }
    }
    setLoadingImage(false);
  };
  function getDateComponents(dateString) {
    let year = dateString.getFullYear();
    let month = dateString.getMonth() + 1;
    let day = dateString.getDate();
    let datee = `${year}-${month}-${day}`;
    return datee;
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    const fotmatDate = getDateComponents(currentDate);
    setDate(fotmatDate);
    setDOB(fotmatDate);
  };
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      display: "calendar",
      is24Hour: true,
    });
  };
  const showDatepicker = () => {
    showMode("date");
  };
  const saveChanges = async () => {
    setIsloading(true);
    const formData = new FormData();
    formData.append("phone", phoneNumber);
    formData.append("fullName", name);
    formData.append("dateOfBirth", DOB);
    formData.append("email", email);
    if (image) {
      formData.append("picture", {
        uri: image,
        name: "profile.jpg",
        type: "image/jpeg",
      });
    }
    try {
      const response = await axios.patch(
        "https://grocery-9znl.onrender.com/api/v1/auth/users/updateProfile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${AuthToken}`,
          },
        }
      );
      setAuthProfile(response?.data);
      setItemAsync("UserData", JSON.stringify(response.data));
      setIsloading(false);
      alert("Profile updated successfully");
    } catch (error) {
      console.error(error);
      alert("Error updating profile !");
      setIsloading(false);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 100}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-white border-t border-gray-400 h-screen"
      >
        <View className="py-4 relative  items-center">
          {image ? (
            <Image
              className="h-24 rounded-md  object-contain w-24"
              source={{ uri: image }}
              style={{ resizeMode: "contain" }}
            />
          ) : (
            <Image
              className="h-24 rounded-md  object-contain w-24"
              source={{
                uri: `https://ui-avatars.com/api/?name=${AuthProfile.fullName} s`,
              }}
              style={{ resizeMode: "contain" }}
            />
          )}
          <Pressable
            disabled={loadingImage}
            onPress={pickImage}
            className="relative z-10 bg-black/50 bottom-4 p-1 rounded-lg left-11"
          >
            {loadingImage ? (
              <ActivityIndicator />
            ) : (
              <Ionicons name="camera-outline" size={20} color="#08C25E" />
            )}
          </Pressable>
        </View>
        <View className="px-3 space-y-2 gap-3">
          <View className="">
            <Text className="text-xs text-gray-400 font-semibold">Name</Text>
            <TextInput
              onChangeText={(name) => setName(name)}
              className="border-b text-lg border-primary"
              value={name}
            />
          </View>
          <View className="">
            <Text className="text-xs text-gray-400 font-semibold">Email</Text>
            <TextInput
              className="border-b text-lg border-primary"
              value={email}
              keyboardType="email-address"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View className="">
            <Text className="text-xs text-gray-400 font-semibold">
              Date Of Birth
            </Text>
            <TouchableOpacity
              onPress={showDatepicker}
              className="border-b flex-row  bg-transparent text-lg border-primary"
            >
              <Text className="">{DOB || "Select Date"}</Text>
            </TouchableOpacity>
          </View>
          <View className="">
            <Text className="text-xs text-gray-400">Phone Number</Text>
            <TextInput
              className="border-b tracking-wider
                         text-lg border-primary"
              value={phoneNumber}
              onChangeText={(phoneNumber) => SetPhoneNumber(phoneNumber)}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View
          className="my-8"
          style={{ width: "100%", paddingHorizontal: 20, paddingBottom: 20 }}
        >
          <Pressable
            onPress={saveChanges}
            className="bg-primary w-11/12 mx-auto rounded-md py-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color={"#fff"} />
            ) : (
              <Text className="text-white text-center text-lg font-semibold">
                Save Changes
              </Text>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default EditProfile;
