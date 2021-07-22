import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a267/518c/02d841be106646f9c15dd0a1e2e66862"
        }}
        style={styles.ImageBackground_0_230}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f67f/686d/55c68bf22e46a83f58469d601f7f7a7c"
        }}
        style={styles.ImageBackground_0_231}
      />
      <View style={styles.View_0_232} />
      <View style={styles.View_0_233}>
        <View style={styles.View_0_234}>
          <View style={styles.View_0_236} />
          <View style={styles.View_0_235} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7bf/359a/2a7ea7254f151872d1e2ee6ca210f75c"
            }}
            style={styles.ImageBackground_0_239}
          />
        </View>
        <View style={styles.View_0_241}>
          <Text style={styles.Text_0_241}>Fashion App</Text>
        </View>
        <View style={styles.View_0_242}>
          <Text style={styles.Text_0_242}>Unlimited Shop</Text>
        </View>
      </View>
      <View style={styles.View_0_243}>
        <View style={styles.View_0_246} />
        <View style={styles.View_0_245} />
        <View style={styles.View_0_247}>
          <View style={styles.View_0_248}>
            <Text style={styles.Text_0_248}>join now</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0bb/1969/e4691b7c0f59e28cf086268c8d876962"
            }}
            style={styles.ImageBackground_0_251}
          />
        </View>
      </View>
      <View style={styles.View_0_252}>
        <Text style={styles.Text_0_252}>Skip this step</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_0_230: {
    width: wp("69.08212560386472%"),
    minWidth: wp("69.08212560386472%"),
    height: hp("126.91256830601093%"),
    minHeight: hp("126.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.082125603864732%"),
    top: hp("19.53551912568306%")
  },
  ImageBackground_0_231: {
    width: wp("114.73429951690821%"),
    minWidth: wp("114.73429951690821%"),
    height: hp("97.40437158469946%"),
    minHeight: hp("97.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6908212560386473%"),
    top: hp("-3.6885245901639343%")
  },
  View_0_232: {
    width: wp("101.69082125603866%"),
    minWidth: wp("101.69082125603866%"),
    height: hp("87.43169398907104%"),
    minHeight: hp("87.43169398907104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.4492753623188406%"),
    top: hp("36.33879781420765%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_233: {
    width: wp("36.71497584541063%"),
    minWidth: wp("36.71497584541063%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("6.693989071038252%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_234: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557376984%")
  },
  View_0_236: {
    width: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_235: {
    width: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_239: {
    width: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_241: {
    width: wp("26.811594202898554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_241: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_242: {
    width: wp("26.570048309178745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913047%"),
    top: hp("3.0054644808743154%"),
    justifyContent: "flex-start"
  },
  Text_0_242: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.700000047683716,
    textTransform: "none"
  },
  View_0_243: {
    width: wp("141.30434782608697%"),
    minWidth: wp("141.30434782608697%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-26.811594202898554%"),
    top: hp("100%")
  },
  View_0_246: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.78260869565218%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 224, 230, 1)"
  },
  View_0_245: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.78260869565218%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 224, 230, 1)"
  },
  View_0_247: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.78260869565218%"),
    top: hp("0%")
  },
  View_0_248: {
    width: wp("51.3405804472845%"),
    minWidth: wp("51.3405804472845%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185794252%"),
    justifyContent: "flex-start"
  },
  Text_0_248: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.888888955116272,
    textTransform: "uppercase"
  },
  ImageBackground_0_251: {
    width: wp("6.119162794472515%"),
    minWidth: wp("6.119162794472515%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057971016%"),
    top: hp("0%")
  },
  View_0_252: {
    width: wp("24.396135265700483%"),
    minWidth: wp("24.396135265700483%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.164251207729464%"),
    top: hp("113.66120218579235%"),
    justifyContent: "flex-start"
  },
  Text_0_252: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
