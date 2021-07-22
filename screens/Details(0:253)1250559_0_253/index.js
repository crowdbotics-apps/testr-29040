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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0de7/19d2/a67f012c6a106dbab6be606b8985dabb"
        }}
        style={styles.ImageBackground_0_254}
      />
      <View style={styles.View_0_255} />
      <View style={styles.View_0_256}>
        <View style={styles.View_0_257}>
          <Text style={styles.Text_0_257}>Recommended</Text>
        </View>
        <View style={styles.View_0_258}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bc2/dfd1/1d045ca9e590f972dc274dfaa737af4c"
            }}
            style={styles.ImageBackground_0_260}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b713/f662/c7c28e076d4f1ab194f5b29e96773c70"
            }}
            style={styles.ImageBackground_0_259}
          />
        </View>
        <View style={styles.View_0_261}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d682/53ac/feeed8e6f182023c3d533a73222fd310"
            }}
            style={styles.ImageBackground_0_263}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b713/f662/c7c28e076d4f1ab194f5b29e96773c70"
            }}
            style={styles.ImageBackground_0_262}
          />
        </View>
        <View style={styles.View_0_264}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79e6/689e/43169580a3ed4979cdd72087e45f2824"
            }}
            style={styles.ImageBackground_0_266}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b713/f662/c7c28e076d4f1ab194f5b29e96773c70"
            }}
            style={styles.ImageBackground_0_265}
          />
        </View>
        <View style={styles.View_0_267}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/564d/b126/d540edb1f66970195d4f15580f49d4f1"
            }}
            style={styles.ImageBackground_0_269}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b713/f662/c7c28e076d4f1ab194f5b29e96773c70"
            }}
            style={styles.ImageBackground_0_268}
          />
        </View>
      </View>
      <View style={styles.View_0_270} />
      <View style={styles.View_0_271}>
        <View style={styles.View_0_272}>
          <Text style={styles.Text_0_272}>More details</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4f0/f7ed/e0dcff478f8c2829004a5a3f35a62db8"
          }}
          style={styles.ImageBackground_0_273}
        />
      </View>
      <View style={styles.View_0_274}>
        <View style={styles.View_0_275}>
          <View style={styles.View_0_276}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8445/5074/6e02ea5a3d1216a5ffbe103308a11d8f"
              }}
              style={styles.ImageBackground_I0_276_0_371}
            />
          </View>
          <View style={styles.View_0_277}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e5e/19e0/8b8d8930a75d148f2df07a252d254f9c"
              }}
              style={styles.ImageBackground_I0_277_0_375}
            />
          </View>
          <View style={styles.View_0_278}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e5e/19e0/8b8d8930a75d148f2df07a252d254f9c"
              }}
              style={styles.ImageBackground_I0_278_0_375}
            />
          </View>
          <View style={styles.View_0_279}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e5e/19e0/8b8d8930a75d148f2df07a252d254f9c"
              }}
              style={styles.ImageBackground_I0_279_0_375}
            />
          </View>
          <View style={styles.View_0_280}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e5e/19e0/8b8d8930a75d148f2df07a252d254f9c"
              }}
              style={styles.ImageBackground_I0_280_0_375}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da50/495f/fe650c56076608cdd591274ddaa33908"
          }}
          style={styles.ImageBackground_0_281}
        />
        <View style={styles.View_0_282}>
          <Text style={styles.Text_0_282}>Reviews</Text>
        </View>
      </View>
      <View style={styles.View_0_283}>
        <Text style={styles.Text_0_283}>
          Ralph Lauren lightweight cotton and chain-stitched signature
          embroidery join forces in Polo&#39;s take on the must-have jersey
          T-shirt.
        </Text>
      </View>
      <View style={styles.View_0_284}>
        <Text style={styles.Text_0_284}>Crewneck T-Shirt</Text>
      </View>
      <View style={styles.View_0_285}>
        <View style={styles.View_0_286}>
          <Text style={styles.Text_0_286}>$ 25.99</Text>
        </View>
        <View style={styles.View_0_287}>
          <Text style={styles.Text_0_287}>$ 45.99</Text>
        </View>
      </View>
      <View style={styles.View_0_288}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ade/8af3/5b446a927fd1280135933e05c854f15b"
          }}
          style={styles.ImageBackground_0_289}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09fa/04b7/bf346825df15abeb8e762297dead1ec3"
          }}
          style={styles.ImageBackground_0_291}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3172/52f3/30c56e511b4d82d3461ada41a471a28d"
          }}
          style={styles.ImageBackground_0_295}
        />
      </View>
      <View style={styles.View_0_299} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(222, 224, 230, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_0_254: {
    width: wp("70.04830917874396%"),
    minWidth: wp("70.04830917874396%"),
    height: hp("68.71584699453553%"),
    minHeight: hp("68.71584699453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.70048309178744%"),
    top: hp("15.300546448087433%")
  },
  View_0_255: {
    width: wp("101.69082125603866%"),
    minWidth: wp("101.69082125603866%"),
    height: hp("92.89617486338798%"),
    minHeight: hp("92.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.966183574879227%"),
    top: hp("59.15300546448088%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_256: {
    width: wp("100.72463768115942%"),
    minWidth: wp("100.72463768115942%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("127.59562841530054%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_257: {
    width: wp("19.565217391304348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_257: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_258: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601091%")
  },
  ImageBackground_0_260: {
    width: wp("22.463768115942027%"),
    height: hp("12.841530054644808%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_0_259: {
    width: wp("22.463768115942027%"),
    height: hp("12.841530054644808%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_0_261: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.086956521739136%"),
    top: hp("5.191256830601091%")
  },
  ImageBackground_0_263: {
    width: wp("22.463768115942027%"),
    height: hp("12.841530054644808%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_0_262: {
    width: wp("22.463768115942027%"),
    height: hp("12.841530054644808%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_0_264: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.17391304347826%"),
    top: hp("5.191256830601091%")
  },
  ImageBackground_0_266: {
    width: wp("22.463768115942027%"),
    height: hp("12.841530054644808%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_0_265: {
    width: wp("22.463768115942027%"),
    height: hp("12.841530054644808%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_0_267: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.26086956521739%"),
    top: hp("5.191256830601091%")
  },
  ImageBackground_0_269: {
    width: wp("22.463768115942027%"),
    height: hp("12.841530054644808%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_0_268: {
    width: wp("22.463768115942027%"),
    height: hp("12.841530054644808%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_0_270: {
    width: wp("83.57487922705315%"),
    minWidth: wp("83.57487922705315%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("113.3879781420765%"),
    backgroundColor: "rgba(206, 206, 206, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_271: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("107.10382513661203%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_272: {
    width: wp("16.183574879227052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_272: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_273: {
    width: wp("3.3816425120772946%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.67632850241546%")
  },
  View_0_274: {
    width: wp("84.54106280193237%"),
    minWidth: wp("84.54106280193237%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("117.89617486338797%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_275: {
    width: wp("18.357487922705314%"),
    minWidth: wp("18.357487922705314%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.45410628019323%"),
    top: hp("0.1366120218579283%")
  },
  View_0_276: {
    width: wp("2.898550724637681%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.45893719806763%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_276_0_371: {
    flexGrow: 1,
    width: wp("2.753623326619466%"),
    height: hp("1.4864038248531153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07246081955767636%"),
    top: hp("0.08196387786033199%")
  },
  View_0_277: {
    width: wp("2.898550724637681%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550733%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_277_0_375: {
    flexGrow: 1,
    width: wp("2.753623326619466%"),
    height: hp("1.4864038248531153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07246081955766215%"),
    top: hp("0.08196387786033199%")
  },
  View_0_278: {
    width: wp("2.898550724637681%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516911%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_278_0_375: {
    flexGrow: 1,
    width: wp("2.753623326619466%"),
    height: hp("1.4864038248531153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07246081955766215%"),
    top: hp("0.08196387786033199%")
  },
  View_0_279: {
    width: wp("2.898550724637681%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033822%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_279_0_375: {
    flexGrow: 1,
    width: wp("2.753623326619466%"),
    height: hp("1.4864038248531153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07246081955767636%"),
    top: hp("0.08196387786033199%")
  },
  View_0_280: {
    width: wp("2.898550724637681%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_280_0_375: {
    flexGrow: 1,
    width: wp("2.753623326619466%"),
    height: hp("1.4864038248531153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07246081955767636%"),
    top: hp("0.08196387786033199%")
  },
  ImageBackground_0_281: {
    width: wp("3.3816425120772946%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.15942028985506%")
  },
  View_0_282: {
    width: wp("10.628019323671497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_282: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_283: {
    width: wp("84.54106280193237%"),
    minWidth: wp("84.54106280193237%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("90.43715846994536%"),
    justifyContent: "flex-start"
  },
  Text_0_283: {
    color: "rgba(178, 178, 178, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_284: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("85.51912568306011%"),
    justifyContent: "flex-start"
  },
  Text_0_284: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_285: {
    width: wp("26.811594202898554%"),
    minWidth: wp("26.811594202898554%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("82.37704918032787%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_286: {
    width: wp("12.318840579710146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_286: {
    color: "rgba(0, 112, 214, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_287: {
    width: wp("12.077294685990339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.734299516908212%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_287: {
    color: "rgba(33, 34, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_288: {
    width: wp("83.57487922705315%"),
    minWidth: wp("83.57487922705315%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("4.371584699453552%")
  },
  ImageBackground_0_289: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_291: {
    width: wp("3.3816425120772946%"),
    minWidth: wp("3.3816425120772946%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.19323671497585%"),
    top: hp("0.27322404371584685%")
  },
  ImageBackground_0_295: {
    width: wp("3.140096618357488%"),
    minWidth: wp("3.140096618357488%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.80676328502416%"),
    top: hp("0.27322404371584685%")
  },
  View_0_299: {
    width: wp("83.57487922705315%"),
    minWidth: wp("83.57487922705315%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("124.18032786885247%"),
    backgroundColor: "rgba(206, 206, 206, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
