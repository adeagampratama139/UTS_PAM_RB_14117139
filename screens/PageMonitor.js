import { Component } from "react";
import * as Battery from "expo-battery";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "../component/Navbar";

class PageMonitor extends Component {
  state = {
    batteryLevel: null,
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  async _subscribe() {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    this.setState({ batteryLevel });
    this._subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      this.setState({ batteryLevel });
      console.log("batteryLevel changed!", batteryLevel);
    });
  }

  _unsubscribe() {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  render() {
    return (
      <>
        <Navbar navigation ={this.props.navigation} />
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Sisa Baterai Anda :)
          </Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
            }}
          >
          </Text>
          <View style={styles.baterai}>
            <View
              style={{
                height: `${this.state.batteryLevel * 100}%`,
                width: 80,
                backgroundColor: "green",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 17,
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginVertical: "30%",
                }}
              >
                {Math.floor(this.state.batteryLevel * 100)}%
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              color: "red",
            }}
          >
            Jaga Kesehatan Baterai Anda!
          </Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: "70%",
  },
  baterai: {
    height: 120,
    width: 80,
    backgroundColor: "red",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 60,
    borderRadius: 8,
  },
});

export default PageMonitor;
