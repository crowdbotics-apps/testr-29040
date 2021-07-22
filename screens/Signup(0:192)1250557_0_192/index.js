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
        style={styles.ImageBackground_0_193}
      />
      <View style={styles.View_0_194} />
      <View style={styles.View_0_195}>
        <View style={styles.View_0_196}>
          <View style={styles.View_0_198} />
          <View style={styles.View_0_197} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7bf/359a/2a7ea7254f151872d1e2ee6ca210f75c"
            }}
            style={styles.ImageBackground_0_201}
          />
        </View>
        <View style={styles.View_0_203}>
          <Text style={styles.Text_0_203}>Fashion App</Text>
        </View>
        <View style={styles.View_0_204}>
          <Text style={styles.Text_0_204}>Unlimited Shop</Text>
        </View>
      </View>
      <View style={styles.View_0_205}>
        <View style={styles.View_0_207} />
        <View style={styles.View_0_208}>
          <View style={styles.View_I0_208_0_379} />
        </View>
        <View style={styles.View_0_209}>
          <View style={styles.View_0_210}>
            <Text style={styles.Text_0_210}>Login with Facebook</Text>
          </View>
          <View style={styles.View_0_211}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/641b/d14e/be391e183b8352c3fabe321165292cb9"
              }}
              style={styles.ImageBackground_I0_211_0_383}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/930c/eaf1/4a1bb7da73e160a70209e77dfa9138ec"
              }}
              style={styles.ImageBackground_I0_211_0_384}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_212}>
        <View style={styles.View_0_214} />
        <View style={styles.View_0_215}>
          <View style={styles.View_I0_215_0_367} />
        </View>
        <View style={styles.View_0_216}>
          <View style={styles.View_0_217}>
            <Text style={styles.Text_0_217}>Login with twitter</Text>
          </View>
          <View style={styles.View_0_218}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/641b/d14e/be391e183b8352c3fabe321165292cb9"
              }}
              style={styles.ImageBackground_I0_218_0_387}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b6f/8645/46ec996a722ec2bb0d2f5b48bbc1f47d"
              }}
              style={styles.ImageBackground_I0_218_0_388}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_219}>
        <View style={styles.View_0_220}>
          <Text style={styles.Text_0_220}>OR</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dbe/d37d/9ecd7b9cd0db8b2e8f3a39eeb47d3661"
          }}
          style={styles.ImageBackground_0_221}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dbe/d37d/9ecd7b9cd0db8b2e8f3a39eeb47d3661"
          }}
          style={styles.ImageBackground_0_222}
        />
      </View>
      <View style={styles.View_0_223}>
        <View style={styles.View_0_226} />
        <View style={styles.View_0_225} />
        <View style={styles.View_0_227}>
          <Text style={styles.Text_0_227}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.View_0_228}>
        <Text style={styles.Text_0_228}>Already have an account? Sign In </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_0_193: {
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
  View_0_194: {
    width: wp("101.69082125603866%"),
    minWidth: wp("101.69082125603866%"),
    height: hp("91.93989071038251%"),
    minHeight: hp("91.93989071038251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.4492753623188406%"),
    top: hp("31.830601092896178%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_195: {
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
  View_0_196: {
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
  View_0_198: {
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
  View_0_197: {
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
  ImageBackground_0_201: {
    width: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_203: {
    width: wp("26.811594202898554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_203: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_204: {
    width: wp("26.570048309178745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913047%"),
    top: hp("3.0054644808743154%"),
    justifyContent: "flex-start"
  },
  Text_0_204: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.700000047683716,
    textTransform: "none"
  },
  View_0_205: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("68.16939890710383%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_207: {
    width: wp("84.05797101449275%"),
    height: hp("8.743169398907105%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_208: {
    width: wp("84.05797101449275%"),
    height: hp("8.743169398907105%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_208_0_379: {
    flexGrow: 1,
    width: wp("84.05797101449275%"),
    height: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_209: {
    width: wp("70.04830917874396%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.570051552592845%"),
    top: hp("3.415300546448094%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_210: {
    width: wp("57.125603864734295%"),
    minWidth: wp("57.125603864734295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.79275129382737%"),
    top: hp("0.27209370514081854%"),
    justifyContent: "flex-start"
  },
  Text_0_210: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.8904000520706177,
    textTransform: "uppercase"
  },
  View_0_211: {
    width: wp("11.594202898550725%"),
    minWidth: wp("11.594202898550725%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579141%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_211_0_383: {
    flexGrow: 1,
    width: wp("11.594202898550725%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_211_0_384: {
    flexGrow: 1,
    width: wp("3.6532217753682157%"),
    height: hp("4.433552684679709%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169094%"),
    top: hp("1.0928961748633839%")
  },
  View_0_212: {
    width: wp("141.30434782608697%"),
    minWidth: wp("141.30434782608697%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-16.425120772946862%"),
    top: hp("81.28415300546447%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_214: {
    width: wp("84.05797101449275%"),
    height: hp("8.743169398907105%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.396135265700483%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_215: {
    width: wp("84.05797101449275%"),
    height: hp("8.743169398907105%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.396135265700483%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_215_0_367: {
    flexGrow: 1,
    width: wp("84.05797101449275%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 206, 238, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_216: {
    width: wp("72.94685990338165%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.74396135265701%"),
    top: hp("2.5956284153005527%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_217: {
    width: wp("59.78260869565217%"),
    minWidth: wp("59.78260869565217%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.04951543393342%"),
    top: hp("0.08889703802724114%"),
    justifyContent: "flex-start"
  },
  Text_0_217: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2.7799999713897705,
    textTransform: "uppercase"
  },
  View_0_218: {
    width: wp("11.594202898550725%"),
    minWidth: wp("11.594202898550725%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_218_0_387: {
    flexGrow: 1,
    width: wp("11.594202898550725%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_218_0_388: {
    flexGrow: 1,
    width: wp("7.306443550736431%"),
    height: hp("3.356641237853003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.17391304347826%"),
    top: hp("1.639344262295083%")
  },
  View_0_219: {
    width: wp("59.42028985507246%"),
    minWidth: wp("59.42028985507246%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.28985507246377%"),
    top: hp("94.39890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_220: {
    width: wp("5.797101449275362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.81159420289855%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_220: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.555554986000061,
    textTransform: "uppercase"
  },
  ImageBackground_0_221: {
    width: wp("18.357487922705314%"),
    height: hp("0.273224043715847%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_222: {
    width: wp("18.357487922705314%"),
    height: hp("0.273224043715847%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06280193236714%")
  },
  View_0_223: {
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
  View_0_226: {
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
  View_0_225: {
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
  View_0_227: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.78260869565218%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_227: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.888888955116272,
    textTransform: "uppercase"
  },
  View_0_228: {
    width: wp("60.14492753623188%"),
    minWidth: wp("60.14492753623188%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.28985507246377%"),
    top: hp("113.66120218579235%"),
    justifyContent: "flex-start"
  },
  Text_0_228: {
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
