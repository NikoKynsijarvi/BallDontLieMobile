import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { filterByName } from "../Reducers/SettingsReducer";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = ({ clicked, setClicked }) => {
  const searchText = useSelector((state) => state.settings.filterText);
  const dispatch = useDispatch();
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    dispatch(filterByName(searchPhrase));
  }, [searchPhrase]);

  const handleCancel = () => {
    Keyboard.dismiss();
    setClicked(false);
    dispatch(filterByName(""));
  };

  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="white"
          value={searchText}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View
          style={{
            backgroundColor: "#080c24ff",
            height: "100%",
            borderRadius: 20,
            left: -30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            title="Cancel"
            onPress={() => {
              handleCancel();
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "60%",
    alignSelf: "center",
  },
  searchBar__unclicked: {
    padding: 10,
    height: "100%",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#151e34ff",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#080c24ff",
    color: "white",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    color: "white",
  },
});
