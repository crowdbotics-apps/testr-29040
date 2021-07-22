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
      <View style={styles.View_0_301}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80fc/7903/720676126fa313c11999f4073afba57d"
          }}
          style={styles.ImageBackground_0_302}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ad/9b54/4e68dca5903928d1b7d90d35ff6af4b6"
          }}
          style={styles.ImageBackground_0_303}
        />
      </View>
      <View style={styles.View_0_304}>
        <View style={styles.View_0_305}>
          <View style={styles.View_0_306} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_0_307}
          />
          <View style={styles.View_0_308} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4d2/3b24/d86f1f137ffad298120b5fd762da7b96"
          }}
          style={styles.ImageBackground_0_311}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a436/d4ec/f58372332eecedb45160b556fa7984e2"
          }}
          style={styles.ImageBackground_0_315}
        />
        <View style={styles.View_0_318}>
          <View style={styles.View_0_319}>
            <Text style={styles.Text_0_319}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_320}>
        <Text style={styles.Text_0_320}>FORGOT DETAILS?</Text>
      </View>
      <View style={styles.View_0_321}>
        <Text style={styles.Text_0_321}>CREATE ACCOUNT</Text>
      </View>
      <View style={styles.View_0_322}>
        <View style={styles.View_0_323}>
          <View style={styles.View_0_324} />
          <View style={styles.View_0_325}>
            <View style={styles.View_I0_325_0_379} />
          </View>
          <View style={styles.View_0_326}>
            <View style={styles.View_0_327}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/641b/d14e/be391e183b8352c3fabe321165292cb9"
                }}
                style={styles.ImageBackground_I0_327_0_383}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/930c/eaf1/4a1bb7da73e160a70209e77dfa9138ec"
                }}
                style={styles.ImageBackground_I0_327_0_384}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_328}>
          <View style={styles.View_0_329} />
          <View style={styles.View_0_330}>
            <View style={styles.View_I0_330_0_367} />
          </View>
          <View style={styles.View_0_331}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/641b/d14e/be391e183b8352c3fabe321165292cb9"
              }}
              style={styles.ImageBackground_I0_331_0_387}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b6f/8645/46ec996a722ec2bb0d2f5b48bbc1f47d"
              }}
              style={styles.ImageBackground_I0_331_0_388}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_332}>
        <View style={styles.View_0_333} />
        <View style={styles.View_0_334} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb53/1465/341c5c55e8797c86182fb9f9a78ee9a4"
          }}
          style={styles.ImageBackground_0_335}
        />
        <View style={styles.View_0_337}>
          <Text style={styles.Text_0_337}>shadhin@gmail.com</Text>
        </View>
        <View style={styles.View_0_338} />
      </View>
      <View style={styles.View_0_339}>
        <View style={styles.View_0_340} />
        <View style={styles.View_0_341} />
        <View style={styles.View_0_342}>
          <Text style={styles.Text_0_342}>SHOW</Text>
        </View>
        <View style={styles.View_0_343}>
          <Text style={styles.Text_0_343}>Password </Text>
        </View>
      </View>
      <View style={styles.View_0_344}>
        <View style={styles.View_0_345}>
          <Text style={styles.Text_0_345}>OR</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dbe/d37d/9ecd7b9cd0db8b2e8f3a39eeb47d3661"
          }}
          style={styles.ImageBackground_0_346}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dbe/d37d/9ecd7b9cd0db8b2e8f3a39eeb47d3661"
          }}
          style={styles.ImageBackground_0_347}
        />
      </View>
      <View style={styles.View_0_348}>
        <View style={styles.View_0_351} />
        <View style={styles.View_0_350} />
        <View style={styles.View_0_352}>
          <Text style={styles.Text_0_352}>Sign in</Text>
        </View>
      </View>
      <View style={styles.View_0_353}>
        <View style={styles.View_0_354}>
          <View style={styles.View_0_355}>
            <View style={styles.View_0_357} />
            <View style={styles.View_0_356} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7bf/359a/2a7ea7254f151872d1e2ee6ca210f75c"
              }}
              style={styles.ImageBackground_0_360}
            />
          </View>
          <View style={styles.View_0_362}>
            <Text style={styles.Text_0_362}>Fashion App</Text>
          </View>
          <View style={styles.View_0_363}>
            <Text style={styles.Text_0_363}>Unlimited Shop</Text>
          </View>
        </View>
        <View style={styles.View_0_364}>
          <Text style={styles.Text_0_364}>Skip this</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_0_301: {
    width: wp("115.94202898550725%"),
    minWidth: wp("115.94202898550725%"),
    height: hp("128.82513661202185%"),
    minHeight: hp("128.82513661202185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.4154589371980677%"),
    top: hp("-4.781420765027322%")
  },
  ImageBackground_0_302: {
    width: wp("114.00966183574879%"),
    minWidth: wp("114.00966183574879%"),
    height: hp("96.72131147540983%"),
    minHeight: hp("96.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584543%"),
    top: hp("0%")
  },
  ImageBackground_0_303: {
    width: wp("107.24637681159422%"),
    minWidth: wp("107.24637681159422%"),
    height: hp("80.81151409878757%"),
    minHeight: hp("80.81151409878757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47.950819672131146%")
  },
  View_0_304: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("0.9562841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_305: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.01932367149759%"),
    top: hp("0.4098360655737704%")
  },
  View_0_306: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04553456124060795%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_0_307: {
    width: wp("0.32078212010111784%"),
    minWidth: wp("0.32078212010111784%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555543%"),
    top: hp("0.5464480874316942%")
  },
  View_0_308: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439605%"),
    top: hp("0.318758604956455%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_0_311: {
    width: wp("3.6231884057971016%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.4098360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.18840579710145%")
  },
  ImageBackground_0_315: {
    width: wp("4.1062801932367154%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.4098360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.8743961352657%")
  },
  View_0_318: {
    width: wp("14.492753623188406%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_319: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_319: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_0_320: {
    width: wp("34.29951690821256%"),
    minWidth: wp("34.29951690821256%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("115.43715846994536%"),
    justifyContent: "flex-start"
  },
  Text_0_320: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_321: {
    width: wp("34.29951690821256%"),
    minWidth: wp("34.29951690821256%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.2463768115942%"),
    top: hp("115.43715846994536%"),
    justifyContent: "flex-start"
  },
  Text_0_321: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_322: {
    width: wp("44.68599033816425%"),
    minWidth: wp("44.68599033816425%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.77777777777778%"),
    top: hp("100%")
  },
  View_0_323: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_324: {
    width: wp("19.806763285024154%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_325: {
    width: wp("19.806763285024154%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_325_0_379: {
    flexGrow: 1,
    width: wp("84.05797101449275%"),
    height: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_326: {
    width: wp("11.594202898550725%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5700441811971615%"),
    top: hp("0.8196721311475272%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_327: {
    width: wp("11.594202898550725%"),
    minWidth: wp("11.594202898550725%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_327_0_383: {
    flexGrow: 1,
    width: wp("11.594202898550725%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_327_0_384: {
    flexGrow: 1,
    width: wp("3.6532217753682157%"),
    height: hp("4.433552684679709%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516904%"),
    top: hp("1.092896174863398%")
  },
  View_0_328: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8792270531401%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_329: {
    width: wp("19.806763285024154%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_330: {
    width: wp("19.806763285024154%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_330_0_367: {
    flexGrow: 1,
    width: wp("28.019323671497588%"),
    height: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 206, 238, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_331: {
    width: wp("11.594202898550725%"),
    minWidth: wp("11.594202898550725%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236707%"),
    top: hp("0.8196721311475272%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_331_0_387: {
    flexGrow: 1,
    width: wp("11.594202898550725%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_331_0_388: {
    flexGrow: 1,
    width: wp("7.306443550736431%"),
    height: hp("3.356641237853003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478265%"),
    top: hp("1.639344262295083%")
  },
  View_0_332: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("59.15300546448088%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_333: {
    width: wp("84.05797101449275%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_334: {
    width: wp("6.280193236714976%"),
    height: hp("3.551912568306011%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222223%"),
    backgroundColor: "rgba(53, 59, 80, 1)"
  },
  ImageBackground_0_335: {
    width: wp("2.1739130434782608%"),
    height: hp("0.819672131147541%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39613526570048%")
  },
  View_0_337: {
    width: wp("43.96135265700483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.31400966183575%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-start"
  },
  Text_0_337: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.31481480598449707,
    textTransform: "none"
  },
  View_0_338: {
    width: wp("0.24154589371980675%"),
    height: hp("2.73224043715847%"),
    top: hp("3.2786885245901587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.24154589371981%"),
    backgroundColor: "rgba(53, 59, 80, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_339: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("70.08196721311475%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_340: {
    width: wp("84.05797101449275%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_341: {
    width: wp("14.492753623188406%"),
    height: hp("3.551912568306011%"),
    top: hp("2.5956284153005527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.00966183574879%"),
    backgroundColor: "rgba(53, 59, 80, 1)"
  },
  View_0_342: {
    width: wp("8.454106280193237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.14975845410628%"),
    top: hp("3.415300546448094%"),
    justifyContent: "flex-start"
  },
  Text_0_342: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18518519401550293,
    textTransform: "none"
  },
  View_0_343: {
    width: wp("20.531400966183575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.31400966183575%"),
    top: hp("3.0054644808743234%"),
    justifyContent: "flex-start"
  },
  Text_0_343: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.31481480598449707,
    textTransform: "none"
  },
  View_0_344: {
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
  View_0_345: {
    width: wp("5.797101449275362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.81159420289855%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_345: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.555554986000061,
    textTransform: "uppercase"
  },
  ImageBackground_0_346: {
    width: wp("18.357487922705314%"),
    height: hp("0.273224043715847%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_347: {
    width: wp("18.357487922705314%"),
    height: hp("0.273224043715847%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06280193236714%")
  },
  View_0_348: {
    width: wp("141.30434782608697%"),
    minWidth: wp("141.30434782608697%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-26.811594202898554%"),
    top: hp("83.06010928961749%")
  },
  View_0_351: {
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
  View_0_350: {
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
  View_0_352: {
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
  Text_0_352: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.888888955116272,
    textTransform: "uppercase"
  },
  View_0_353: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
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
  View_0_354: {
    width: wp("36.71497584541063%"),
    height: hp("4.781420765027322%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_355: {
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
  View_0_357: {
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
  View_0_356: {
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
  ImageBackground_0_360: {
    width: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_362: {
    width: wp("26.811594202898554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_362: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_363: {
    width: wp("26.570048309178745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913047%"),
    top: hp("3.0054644808743154%"),
    justifyContent: "flex-start"
  },
  Text_0_363: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.700000047683716,
    textTransform: "none"
  },
  View_0_364: {
    width: wp("14.251207729468598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.08212560386472%"),
    top: hp("0.5464480874316928%"),
    justifyContent: "flex-start"
  },
  Text_0_364: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
