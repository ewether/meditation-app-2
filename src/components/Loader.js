import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Loader = () => {
  return <View style={styles.container} />;
};

Loader.defaultProps = {};

Loader.propTypes = {};

export default Loader;
