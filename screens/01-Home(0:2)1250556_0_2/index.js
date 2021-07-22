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
      <View style={styles.View_0_3}>
        <View style={styles.View_0_4} />
        <View style={styles.View_0_5}>
          <View style={styles.View_0_6}>
            <View style={styles.View_0_7} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_0_8}
            />
            <View style={styles.View_0_9} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4d2/3b24/d86f1f137ffad298120b5fd762da7b96"
            }}
            style={styles.ImageBackground_0_12}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a436/d4ec/f58372332eecedb45160b556fa7984e2"
            }}
            style={styles.ImageBackground_0_16}
          />
          <View style={styles.View_0_19}>
            <View style={styles.View_0_20}>
              <Text style={styles.Text_0_20}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_21}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2eba/5038/14580f1d8a5f3960030acaf8b7ca6f19"
            }}
            style={styles.ImageBackground_0_22}
          />
          <View style={styles.View_0_25}>
            <View style={styles.View_0_26}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b00/c4e0/5660834b99248e2c6eecee3f84df15b9"
                }}
                style={styles.ImageBackground_0_29}
              />
            </View>
            <View style={styles.View_0_30}>
              <View style={styles.View_0_31} />
              <View style={styles.View_0_32}>
                <Text style={styles.Text_0_32}>18</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_33}>
          <View style={styles.View_0_34}>
            <View style={styles.View_0_36} />
            <View style={styles.View_0_35} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7bf/359a/2a7ea7254f151872d1e2ee6ca210f75c"
              }}
              style={styles.ImageBackground_0_39}
            />
          </View>
          <View style={styles.View_0_41}>
            <Text style={styles.Text_0_41}>Fashion App</Text>
          </View>
          <View style={styles.View_0_42}>
            <Text style={styles.Text_0_42}>Unlimited Shop</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_43}>
        <View style={styles.View_0_44}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f345/5b89/b8376dad7b10ef23df7ebe237817296f"
            }}
            style={styles.ImageBackground_0_46}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1877/8d61/238a64a0185e8ad80bc2cf5efeed06e6"
            }}
            style={styles.ImageBackground_0_45}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c8f/45c2/0f0be88abc050caa9ef848515a310501"
            }}
            style={styles.ImageBackground_0_47}
          />
        </View>
        <View style={styles.View_0_48}>
          <Text style={styles.Text_0_48}>Swaggers</Text>
        </View>
        <View style={styles.View_0_49}>
          <Text style={styles.Text_0_49}>
            Unleash your inner swag, in style.
          </Text>
        </View>
      </View>
      <View style={styles.View_0_50}>
        <View style={styles.View_0_51} />
        <View style={styles.View_0_52}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/089c/0e16/346c5c6e59dd18f21eba5b73dfaf3e6f"
            }}
            style={styles.ImageBackground_0_53}
          />
          <View style={styles.View_0_55}>
            <Text style={styles.Text_0_55}>Home</Text>
          </View>
          <View style={styles.View_0_56} />
        </View>
        <View style={styles.View_0_57}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09fa/04b7/bf346825df15abeb8e762297dead1ec3"
            }}
            style={styles.ImageBackground_0_58}
          />
          <View style={styles.View_0_62}>
            <Text style={styles.Text_0_62}>Cart</Text>
          </View>
        </View>
        <View style={styles.View_0_63}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37b6/c6d9/0e618b0143453c3dc56bad5733d67448"
            }}
            style={styles.ImageBackground_0_64}
          />
          <View style={styles.View_0_66}>
            <Text style={styles.Text_0_66}>Wishlist</Text>
          </View>
        </View>
        <View style={styles.View_0_67}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bfd/8175/0ecb085d0d8e5407ec4d4d5c8ddce0ee"
            }}
            style={styles.ImageBackground_0_68}
          />
          <View style={styles.View_0_71}>
            <Text style={styles.Text_0_71}>Account</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_72}>
        <View style={styles.View_0_73}>
          <View style={styles.View_0_74}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec3a/7284/0065f946943028ce8fda18cf5268dfc2"
              }}
              style={styles.ImageBackground_0_76}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b87/74a1/a93dcacc0ad793800790792675669e8f"
              }}
              style={styles.ImageBackground_0_75}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ab3/71d1/5af887aad7242abd1cdb6fc7188e69fa"
              }}
              style={styles.ImageBackground_0_77}
            />
          </View>
          <View style={styles.View_0_78}>
            <View style={styles.View_0_79}>
              <Text style={styles.Text_0_79}>Swaggers</Text>
            </View>
            <View style={styles.View_0_80}>
              <Text style={styles.Text_0_80}>
                Unleash your inner swag, in style.
              </Text>
            </View>
            <View style={styles.View_0_81}>
              <View style={styles.View_0_82} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ebf/1202/dc6878411c44230fd76ddede9436a45d"
                }}
                style={styles.ImageBackground_0_83}
              />
              <View style={styles.View_0_85}>
                <Text style={styles.Text_0_85}>SHOP NOW</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_86}>
          <View style={styles.View_0_87}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b87/74a1/a93dcacc0ad793800790792675669e8f"
              }}
              style={styles.ImageBackground_0_89}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b87/74a1/a93dcacc0ad793800790792675669e8f"
              }}
              style={styles.ImageBackground_0_88}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b65b/5349/e7965e3fdf3f658ce16d63b3164f19bd"
              }}
              style={styles.ImageBackground_0_90}
            />
          </View>
          <View style={styles.View_0_91}>
            <View style={styles.View_0_92}>
              <Text style={styles.Text_0_92}>Swaggers</Text>
            </View>
            <View style={styles.View_0_93}>
              <Text style={styles.Text_0_93}>
                Unleash your inner swag, in style.
              </Text>
            </View>
            <View style={styles.View_0_94}>
              <View style={styles.View_0_95} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90c8/769d/cf3f4a34e4b8ee65eaad248b5bb7ec04"
                }}
                style={styles.ImageBackground_0_96}
              />
              <View style={styles.View_0_98}>
                <Text style={styles.Text_0_98}>SHOP NOW</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_99}>
          <View style={styles.View_0_100}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b87/74a1/a93dcacc0ad793800790792675669e8f"
              }}
              style={styles.ImageBackground_0_102}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b87/74a1/a93dcacc0ad793800790792675669e8f"
              }}
              style={styles.ImageBackground_0_101}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b65b/5349/e7965e3fdf3f658ce16d63b3164f19bd"
              }}
              style={styles.ImageBackground_0_103}
            />
          </View>
          <View style={styles.View_0_104}>
            <View style={styles.View_0_105}>
              <Text style={styles.Text_0_105}>Swaggers</Text>
            </View>
            <View style={styles.View_0_106}>
              <Text style={styles.Text_0_106}>
                Unleash your inner swag, in style.
              </Text>
            </View>
            <View style={styles.View_0_107}>
              <View style={styles.View_0_108} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90c8/769d/cf3f4a34e4b8ee65eaad248b5bb7ec04"
                }}
                style={styles.ImageBackground_0_109}
              />
              <View style={styles.View_0_111}>
                <Text style={styles.Text_0_111}>SHOP NOW</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_112}>
        <View style={styles.View_0_113} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d8e/e944/e38a58ca82c433776e7a39bc207188ae"
          }}
          style={styles.ImageBackground_0_114}
        />
      </View>
      <View style={styles.View_0_115}>
        <View style={styles.View_0_116} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9b2/4084/02c22a1bcdb488d669ec8d5c5dba8c56"
          }}
          style={styles.ImageBackground_0_117}
        />
      </View>
      <View style={styles.View_0_118}>
        <View style={styles.View_0_119} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d37/f99f/1a843c8e85c48c487525bde541974584"
          }}
          style={styles.ImageBackground_0_120}
        />
      </View>
      <View style={styles.View_0_121}>
        <View style={styles.View_0_122} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f2e/0c87/2ecc3db5bb93eb324d4a449a3369765c"
          }}
          style={styles.ImageBackground_0_123}
        />
      </View>
      <View style={styles.View_0_124}>
        <View style={styles.View_0_125}>
          <Text style={styles.Text_0_125}>Your Favorite </Text>
        </View>
        <View style={styles.View_0_126}>
          <View style={styles.View_0_127}>
            <Text style={styles.Text_0_127}>View All</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/409d/b94e/d74e537d74f9e2438d7684227a6e2aec"
            }}
            style={styles.ImageBackground_0_128}
          />
        </View>
      </View>
      <View style={styles.View_0_130}>
        <View style={styles.View_0_131} />
        <View style={styles.View_0_132}>
          <Text style={styles.Text_0_132}>CATEGORY</Text>
        </View>
        <View style={styles.View_0_133}>
          <Text style={styles.Text_0_133}>MORE</Text>
        </View>
      </View>
      <View style={styles.View_0_134}>
        <View style={styles.View_0_135} />
        <View style={styles.View_0_136}>
          <Text style={styles.Text_0_136}>HOT DEALS</Text>
        </View>
        <View style={styles.View_0_137}>
          <Text style={styles.Text_0_137}>MORE</Text>
        </View>
      </View>
      <View style={styles.View_0_138}>
        <View style={styles.View_0_139}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4ea/6099/7e9ef3d83985ec970f30c7d8f8fba1db"
            }}
            style={styles.ImageBackground_0_140}
          />
          <View style={styles.View_0_141}>
            <Text style={styles.Text_0_141}>Add to Cart</Text>
          </View>
          <View style={styles.View_0_142}>
            <View style={styles.View_0_143}>
              <Text style={styles.Text_0_143}>
                women&#39;s blue denim shorts
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9b2/4084/02c22a1bcdb488d669ec8d5c5dba8c56"
              }}
              style={styles.ImageBackground_0_144}
            />
            <View style={styles.View_0_145}>
              <View style={styles.View_0_146}>
                <Text style={styles.Text_0_146}>$ 25.99</Text>
              </View>
              <View style={styles.View_0_147}>
                <Text style={styles.Text_0_147}>$ 45.99</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_148}>
          <Text style={styles.Text_0_148}>Women</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0794/7644/9b6f2b437b36c6fda6370c1dd5c531fb"
          }}
          style={styles.ImageBackground_0_149}
        />
        <View style={styles.View_0_150} />
      </View>
      <View style={styles.View_0_151}>
        <View style={styles.View_0_152}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebf3/3ef0/af83a2ce30df425e08e71cd209eb10fc"
            }}
            style={styles.ImageBackground_0_153}
          />
          <View style={styles.View_0_154}>
            <Text style={styles.Text_0_154}>Add to Cart</Text>
          </View>
          <View style={styles.View_0_155}>
            <View style={styles.View_0_156}>
              <Text style={styles.Text_0_156}>
                {" "}
                wearing red and white floral top
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9b2/4084/02c22a1bcdb488d669ec8d5c5dba8c56"
              }}
              style={styles.ImageBackground_0_157}
            />
            <View style={styles.View_0_158}>
              <View style={styles.View_0_159}>
                <Text style={styles.Text_0_159}>$ 25.99</Text>
              </View>
              <View style={styles.View_0_160}>
                <Text style={styles.Text_0_160}>$ 45.99</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_161}>
          <Text style={styles.Text_0_161}>Man</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0794/7644/9b6f2b437b36c6fda6370c1dd5c531fb"
          }}
          style={styles.ImageBackground_0_162}
        />
        <View style={styles.View_0_163} />
      </View>
      <View style={styles.View_0_164}>
        <View style={styles.View_0_165}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ab9/3f71/49ad00cc83a78e9cb24b41edad37efc0"
            }}
            style={styles.ImageBackground_0_166}
          />
          <View style={styles.View_0_167}>
            <Text style={styles.Text_0_167}>Add to Cart</Text>
          </View>
          <View style={styles.View_0_168}>
            <View style={styles.View_0_169}>
              <Text style={styles.Text_0_169}>man wearing brown fur caot</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9b2/4084/02c22a1bcdb488d669ec8d5c5dba8c56"
              }}
              style={styles.ImageBackground_0_170}
            />
            <View style={styles.View_0_171}>
              <View style={styles.View_0_172}>
                <Text style={styles.Text_0_172}>$ 25.99</Text>
              </View>
              <View style={styles.View_0_173}>
                <Text style={styles.Text_0_173}>$ 45.99</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_174}>
          <Text style={styles.Text_0_174}>Girls</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0794/7644/9b6f2b437b36c6fda6370c1dd5c531fb"
          }}
          style={styles.ImageBackground_0_175}
        />
      </View>
      <View style={styles.View_0_176}>
        <View style={styles.View_0_177}>
          <Text style={styles.Text_0_177}>HOT DEALS</Text>
        </View>
        <View style={styles.View_0_178}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b8e/ff19/ee5c984cc8971813eb736b89952cb208"
            }}
            style={styles.ImageBackground_0_179}
          />
          <View style={styles.View_0_180}>
            <Text style={styles.Text_0_180}>Orange knit cap </Text>
          </View>
          <View style={styles.View_0_181}>
            <View style={styles.View_0_182}>
              <Text style={styles.Text_0_182}>$ 25.99</Text>
            </View>
            <View style={styles.View_0_183}>
              <Text style={styles.Text_0_183}>$ 45.99</Text>
            </View>
          </View>
          <View style={styles.View_0_184}>
            <Text style={styles.Text_0_184}>Add to Cart</Text>
          </View>
        </View>
        <View style={styles.View_0_185}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3767/c6dd/58b3c6ff5d86e4a53d06f99fef653558"
            }}
            style={styles.ImageBackground_0_186}
          />
          <View style={styles.View_0_187}>
            <Text style={styles.Text_0_187}>girl&#39;s red top</Text>
          </View>
          <View style={styles.View_0_188}>
            <View style={styles.View_0_189}>
              <Text style={styles.Text_0_189}>$ 25.99</Text>
            </View>
            <View style={styles.View_0_190}>
              <Text style={styles.Text_0_190}>$ 45.99</Text>
            </View>
          </View>
          <View style={styles.View_0_191}>
            <Text style={styles.Text_0_191}>Add to Cart</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("268.1693989071038%") },
  View_0_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_5: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_6: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.01932367149759%"),
    top: hp("0.4098360655737703%")
  },
  View_0_7: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04553456124060817%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_0_8: {
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
  View_0_9: {
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
  ImageBackground_0_12: {
    width: wp("3.6231884057971016%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.4098360655737703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.18840579710145%")
  },
  ImageBackground_0_16: {
    width: wp("4.1062801932367154%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.4098360655737703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.8743961352657%")
  },
  View_0_19: {
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
  View_0_20: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_0_21: {
    width: wp("14.975845410628018%"),
    minWidth: wp("14.975845410628018%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.05314009661835%"),
    top: hp("7.377049180327869%")
  },
  ImageBackground_0_22: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.111111111111128%"),
    top: hp("0.6830601092896176%")
  },
  View_0_25: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_26: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896176%")
  },
  ImageBackground_0_29: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.1854050172482684%"),
    minHeight: hp("2.1854050172482684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_30: {
    width: wp("3.140096618357488%"),
    minWidth: wp("3.140096618357488%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584627%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_31: {
    width: wp("3.140096618357488%"),
    height: hp("1.366120218579235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(245, 166, 35, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_0_32: {
    width: wp("1.6908212560386473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%"),
    top: hp("0.13661202185792387%"),
    justifyContent: "flex-start"
  },
  Text_0_32: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 5,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_33: {
    width: wp("36.71497584541063%"),
    minWidth: wp("36.71497584541063%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("6.693989071038252%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_34: {
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
  View_0_36: {
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
  View_0_35: {
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
  ImageBackground_0_39: {
    width: wp("7.246376811594203%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_41: {
    width: wp("26.811594202898554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.45410628019324%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_41: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_42: {
    width: wp("26.570048309178745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("3.0054644808743154%"),
    justifyContent: "flex-start"
  },
  Text_0_42: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.700000047683716,
    textTransform: "none"
  },
  View_0_43: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("56.9672131147541%"),
    minHeight: hp("56.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("29.508196721311474%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_44: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("56.9672131147541%"),
    minHeight: hp("56.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_46: {
    width: wp("84.05797101449275%"),
    height: hp("56.9672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_45: {
    width: wp("84.05797101449275%"),
    height: hp("56.9672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_47: {
    width: wp("84.05797101449275%"),
    height: hp("56.9672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_48: {
    width: wp("22.463768115942027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555556%"),
    top: hp("46.03825136612022%"),
    justifyContent: "flex-start"
  },
  Text_0_48: {
    color: "rgba(33, 34, 36, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_49: {
    width: wp("38.84251175295327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555556%"),
    top: hp("49.4535519125683%"),
    justifyContent: "flex-start"
  },
  Text_0_49: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_50: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("262.8415300546448%")
  },
  View_0_51: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_52: {
    width: wp("7.971014492753622%"),
    minWidth: wp("7.971014492753622%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("1.9125683060109395%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_53: {
    width: wp("3.3816425120772946%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1739130434782616%")
  },
  View_0_55: {
    width: wp("6.521739130434782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792278%"),
    top: hp("2.7322404371585094%"),
    justifyContent: "flex-start"
  },
  Text_0_55: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_56: {
    width: wp("7.971014492753622%"),
    height: hp("0.273224043715847%"),
    top: hp("6.010928961748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(53, 59, 80, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_57: {
    width: wp("4.5893719806763285%"),
    minWidth: wp("4.5893719806763285%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("1.9125683060109395%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_58: {
    width: wp("3.3816425120772946%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396121%")
  },
  View_0_62: {
    width: wp("4.830917874396135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371585094%"),
    justifyContent: "flex-start"
  },
  Text_0_62: {
    color: "rgba(45, 45, 45, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_63: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.038647342995176%"),
    top: hp("1.9125683060109395%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_64: {
    width: wp("4.3478260869565215%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478258%")
  },
  View_0_66: {
    width: wp("8.695652173913043%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371585094%"),
    justifyContent: "flex-start"
  },
  Text_0_66: {
    color: "rgba(45, 45, 45, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_67: {
    width: wp("8.937198067632849%"),
    minWidth: wp("8.937198067632849%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.09178743961353%"),
    top: hp("1.9125683060109395%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_68: {
    width: wp("3.3816425120772946%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637687%")
  },
  View_0_71: {
    width: wp("9.178743961352657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371585094%"),
    justifyContent: "flex-start"
  },
  Text_0_71: {
    color: "rgba(45, 45, 45, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_72: {
    width: wp("260.1449275362319%"),
    minWidth: wp("260.1449275362319%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-80.19323671497585%"),
    top: hp("174.3169398907104%")
  },
  View_0_73: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.92270531400968%"),
    top: hp("0%")
  },
  View_0_74: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_76: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("27.147541150369282%"),
    minHeight: hp("27.147541150369282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_75: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("27.147541150369282%"),
    minHeight: hp("27.147541150369282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_77: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("27.147541150369282%"),
    minHeight: hp("27.147541150369282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_78: {
    width: wp("40.57971014492754%"),
    minWidth: wp("40.57971014492754%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.826085777098428%"),
    top: hp("4.797813540599378%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_79: {
    width: wp("32.53333418841523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_79: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.875,
    textTransform: "none"
  },
  View_0_80: {
    width: wp("40.533333008991924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601105%"),
    justifyContent: "flex-start"
  },
  Text_0_80: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_81: {
    width: wp("32.125603864734295%"),
    height: hp("4.644808743169399%"),
    top: hp("12.841530054644807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_82: {
    width: wp("31.999998968004604%"),
    height: hp("4.524590018017045%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_0_83: {
    width: wp("0.966183574879227%"),
    height: hp("0.9562841530054645%"),
    top: hp("1.8098341311261947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.533345835220416%")
  },
  View_0_85: {
    width: wp("14.133333583960786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193239%"),
    top: hp("1.3661202185792547%"),
    justifyContent: "flex-start"
  },
  Text_0_85: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_86: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_87: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_89: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("27.147541150369282%"),
    minHeight: hp("27.147541150369282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_88: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("27.147541150369282%"),
    minHeight: hp("27.147541150369282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_90: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("27.147541150369282%"),
    minHeight: hp("27.147541150369282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_91: {
    width: wp("40.57971014492754%"),
    minWidth: wp("40.57971014492754%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.8260857770984416%"),
    top: hp("4.797813540599378%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_92: {
    width: wp("32.53333418841523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_92: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.875,
    textTransform: "none"
  },
  View_0_93: {
    width: wp("40.533333008991924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601105%"),
    justifyContent: "flex-start"
  },
  Text_0_93: {
    color: "rgba(228, 225, 227, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_94: {
    width: wp("32.125603864734295%"),
    height: hp("4.644808743169399%"),
    top: hp("12.841530054644807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_95: {
    width: wp("31.999998968004604%"),
    height: hp("4.524590018017045%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_0_96: {
    width: wp("0.966183574879227%"),
    height: hp("0.9562841530054645%"),
    top: hp("1.8098341311261947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.533331092429044%")
  },
  View_0_98: {
    width: wp("14.133333583960786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154584%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_0_98: {
    color: "rgba(45, 45, 45, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_99: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("176.08695652173913%"),
    top: hp("0%")
  },
  View_0_100: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_102: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("27.147541150369282%"),
    minHeight: hp("27.147541150369282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_101: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("27.147541150369282%"),
    minHeight: hp("27.147541150369282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_103: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("27.147541150369282%"),
    minHeight: hp("27.147541150369282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_104: {
    width: wp("40.57971014492754%"),
    minWidth: wp("40.57971014492754%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.826085777098427%"),
    top: hp("4.797813540599378%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_105: {
    width: wp("32.53333418841523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_105: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.875,
    textTransform: "none"
  },
  View_0_106: {
    width: wp("40.533333008991924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601105%"),
    justifyContent: "flex-start"
  },
  Text_0_106: {
    color: "rgba(228, 225, 227, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_107: {
    width: wp("32.125603864734295%"),
    height: hp("4.644808743169399%"),
    top: hp("12.841530054644807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_108: {
    width: wp("31.999998968004604%"),
    height: hp("4.524590018017045%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_0_109: {
    width: wp("0.966183574879227%"),
    height: hp("0.9562841530054645%"),
    top: hp("1.8098341311261947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53334583522043%")
  },
  View_0_111: {
    width: wp("14.133333583960786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154598%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_0_111: {
    color: "rgba(45, 45, 45, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_112: {
    width: wp("21.497584541062803%"),
    minWidth: wp("21.497584541062803%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("21.584699453551913%")
  },
  View_0_113: {
    width: wp("21.497584541062803%"),
    minWidth: wp("21.497584541062803%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_114: {
    width: wp("16.168351104294043%"),
    minWidth: wp("16.168351104294043%"),
    height: hp("2.663934426229508%"),
    minHeight: hp("2.663934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.709784024003624%"),
    top: hp("1.178278688524589%")
  },
  View_0_115: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.29951690821256%"),
    top: hp("21.584699453551913%")
  },
  View_0_116: {
    width: wp("21.557971014492754%"),
    minWidth: wp("21.557971014492754%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_117: {
    width: wp("10.507246376811594%"),
    minWidth: wp("10.507246376811594%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.525362318840578%"),
    top: hp("1.4344262295081975%")
  },
  View_0_118: {
    width: wp("21.497584541062803%"),
    minWidth: wp("21.497584541062803%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.6280193236715%"),
    top: hp("21.584699453551913%")
  },
  View_0_119: {
    width: wp("21.497584541062803%"),
    minWidth: wp("21.497584541062803%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_120: {
    width: wp("11.65205176901702%"),
    minWidth: wp("11.65205176901702%"),
    height: hp("1.6905737704918034%"),
    minHeight: hp("1.6905737704918034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.967937377339972%"),
    top: hp("1.639344262295083%")
  },
  View_0_121: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.95652173913044%"),
    top: hp("21.584699453551913%")
  },
  View_0_122: {
    width: wp("21.557971014492754%"),
    minWidth: wp("21.557971014492754%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_123: {
    width: wp("8.212560386473431%"),
    minWidth: wp("8.212560386473431%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995162%"),
    top: hp("1.5027322404371581%")
  },
  View_0_124: {
    width: wp("84.05797101449275%"),
    minWidth: wp("84.05797101449275%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: hp("16.39344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_125: {
    width: wp("23.18840579710145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_125: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_126: {
    width: wp("14.251207729468598%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.27322404371584597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.80676328502416%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_127: {
    width: wp("11.594202898550725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_127: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_128: {
    width: wp("0.7246376811594203%"),
    height: hp("0.819672131147541%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.526570048309168%")
  },
  View_0_130: {
    width: wp("83.81642512077295%"),
    minWidth: wp("83.81642512077295%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("164.61748633879782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_131: {
    width: wp("44.44444444444444%"),
    height: hp("0.1366120218579235%"),
    top: hp("1.0928961748633697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(237, 237, 237, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_132: {
    width: wp("16.908212560386474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.73429951690821%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_132: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2333333045244217,
    textTransform: "none"
  },
  View_0_133: {
    width: wp("9.420289855072465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.65700483091787%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_133: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2333333045244217,
    textTransform: "none"
  },
  View_0_134: {
    width: wp("84.54106280193237%"),
    minWidth: wp("84.54106280193237%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("253.82513661202185%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_135: {
    width: wp("44.44444444444444%"),
    height: hp("0.1366120218579235%"),
    top: hp("1.0928961748633697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(237, 237, 237, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_136: {
    width: wp("17.391304347826086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.73429951690821%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_136: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2333333045244217,
    textTransform: "none"
  },
  View_0_137: {
    width: wp("9.420289855072465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.65700483091787%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_137: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2333333045244217,
    textTransform: "none"
  },
  View_0_138: {
    width: wp("85.5072463768116%"),
    minWidth: wp("85.5072463768116%"),
    height: hp("19.808743169398905%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("96.03825136612022%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_139: {
    width: wp("72.70531400966183%"),
    height: hp("15.437158469945356%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_140: {
    width: wp("21.497584541062803%"),
    height: hp("15.163934426229508%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_141: {
    width: wp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.29468599033816%"),
    top: hp("12.841530054644807%"),
    justifyContent: "flex-start"
  },
  Text_0_141: {
    color: "rgba(129, 137, 146, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2333333045244217,
    textTransform: "none"
  },
  View_0_142: {
    width: wp("45.410628019323674%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.29468599033816%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_143: {
    width: wp("44.927536231884055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_0_143: {
    color: "rgba(33, 34, 36, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_144: {
    width: wp("10.507246376811594%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_145: {
    width: wp("26.811594202898554%"),
    height: hp("2.459016393442623%"),
    top: hp("8.1967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_146: {
    width: wp("12.318840579710146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_146: {
    color: "rgba(0, 112, 214, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_147: {
    width: wp("12.077294685990339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.734299516908209%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_147: {
    color: "rgba(33, 34, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_148: {
    width: wp("4.1062801932367154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05537392436594235%"),
    top: hp("4.32879130045572%"),
    justifyContent: "flex-start"
  },
  Text_0_148: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_149: {
    width: wp("2.4154589371980677%"),
    height: hp("1.366120218579235%"),
    top: hp("13.797814207650276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792278%")
  },
  View_0_150: {
    width: wp("83.81642512077295%"),
    height: hp("0.1366120218579235%"),
    top: hp("19.672131147540966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792278%"),
    backgroundColor: "rgba(237, 237, 237, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_151: {
    width: wp("85.5072463768116%"),
    minWidth: wp("85.5072463768116%"),
    height: hp("19.808743169398905%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("119.80874316939891%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_152: {
    width: wp("72.70531400966183%"),
    height: hp("15.437158469945356%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_153: {
    width: wp("21.497584541062803%"),
    height: hp("15.163934426229508%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_154: {
    width: wp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.29468599033816%"),
    top: hp("12.84153005464482%"),
    justifyContent: "flex-start"
  },
  Text_0_154: {
    color: "rgba(129, 137, 146, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2333333045244217,
    textTransform: "none"
  },
  View_0_155: {
    width: wp("45.410628019323674%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.29468599033816%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_156: {
    width: wp("44.927536231884055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_0_156: {
    color: "rgba(33, 34, 36, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_157: {
    width: wp("10.507246376811594%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_158: {
    width: wp("26.811594202898554%"),
    height: hp("2.459016393442623%"),
    top: hp("8.1967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_159: {
    width: wp("12.318840579710146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_159: {
    color: "rgba(0, 112, 214, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_160: {
    width: wp("12.077294685990339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.734299516908209%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_160: {
    color: "rgba(33, 34, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_161: {
    width: wp("4.1062801932367154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05537392436594235%"),
    top: hp("7.197645844006161%"),
    justifyContent: "flex-start"
  },
  Text_0_161: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_162: {
    width: wp("2.4154589371980677%"),
    height: hp("1.366120218579235%"),
    top: hp("13.797814207650262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792278%")
  },
  View_0_163: {
    width: wp("83.81642512077295%"),
    height: hp("0.1366120218579235%"),
    top: hp("19.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792278%"),
    backgroundColor: "rgba(237, 237, 237, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_164: {
    width: wp("85.5072463768116%"),
    minWidth: wp("85.5072463768116%"),
    height: hp("15.437158469945356%"),
    minHeight: hp("15.437158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("142.89617486338798%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_165: {
    width: wp("72.70531400966183%"),
    height: hp("15.437158469945356%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_166: {
    width: wp("21.497584541062803%"),
    height: hp("15.163934426229508%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_167: {
    width: wp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.29468599033816%"),
    top: hp("12.841530054644807%"),
    justifyContent: "flex-start"
  },
  Text_0_167: {
    color: "rgba(129, 137, 146, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2333333045244217,
    textTransform: "none"
  },
  View_0_168: {
    width: wp("45.410628019323674%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.29468599033816%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_169: {
    width: wp("44.927536231884055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_0_169: {
    color: "rgba(33, 34, 36, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_170: {
    width: wp("10.507246376811594%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_171: {
    width: wp("26.811594202898554%"),
    height: hp("2.459016393442623%"),
    top: hp("8.196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_172: {
    width: wp("12.318840579710146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_172: {
    color: "rgba(0, 112, 214, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_173: {
    width: wp("12.077294685990339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.734299516908209%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_173: {
    color: "rgba(33, 34, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_174: {
    width: wp("4.1062801932367154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05537392436594235%"),
    top: hp("7.061033822148204%"),
    justifyContent: "flex-start"
  },
  Text_0_174: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_175: {
    width: wp("2.4154589371980677%"),
    height: hp("1.366120218579235%"),
    top: hp("13.797814207650248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792278%")
  },
  View_0_176: {
    width: wp("104.83091787439614%"),
    minWidth: wp("104.83091787439614%"),
    height: hp("35.79234972677596%"),
    minHeight: hp("35.79234972677596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033816%"),
    top: hp("211.33879781420765%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_177: {
    width: wp("28.26086956521739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_177: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.383333295583725,
    textTransform: "none"
  },
  View_0_178: {
    width: wp("50.24154589371981%"),
    height: hp("29.37158469945355%"),
    top: hp("6.420765027322403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_179: {
    width: wp("50.24154589371981%"),
    height: hp("19.12568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_180: {
    width: wp("49.75845410628019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.497267759562817%"),
    justifyContent: "flex-start"
  },
  Text_0_180: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_0_181: {
    width: wp("26.811594202898554%"),
    height: hp("2.459016393442623%"),
    top: hp("20.355191256830608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_182: {
    width: wp("12.318840579710146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_182: {
    color: "rgba(0, 112, 214, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_183: {
    width: wp("12.077294685990339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.734299516908216%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_183: {
    color: "rgba(33, 34, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_184: {
    width: wp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.77595628415301%"),
    justifyContent: "flex-start"
  },
  Text_0_184: {
    color: "rgba(129, 137, 146, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2333333045244217,
    textTransform: "none"
  },
  View_0_185: {
    width: wp("50.24154589371981%"),
    height: hp("29.37158469945355%"),
    top: hp("6.420765027322403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.589371980676326%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_186: {
    width: wp("50.24154589371981%"),
    height: hp("19.12568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_187: {
    width: wp("49.75845410628019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.497267759562817%"),
    justifyContent: "flex-start"
  },
  Text_0_187: {
    color: "rgba(53, 59, 80, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_0_188: {
    width: wp("26.811594202898554%"),
    height: hp("2.459016393442623%"),
    top: hp("20.355191256830608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_189: {
    width: wp("12.318840579710146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_189: {
    color: "rgba(0, 112, 214, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_190: {
    width: wp("12.077294685990339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.734299516908209%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_190: {
    color: "rgba(33, 34, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_191: {
    width: wp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.77595628415301%"),
    justifyContent: "flex-start"
  },
  Text_0_191: {
    color: "rgba(129, 137, 146, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2333333045244217,
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
