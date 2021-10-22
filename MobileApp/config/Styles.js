"use strict";

import { StyleSheet, Dimensions, Platform, I18nManager } from "react-native";
import ColorsApp from "./ColorsApp";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const PrimaryColor = ColorsApp.PRIMARY;
const SecondaryColor = ColorsApp.SECONDARY;
const BackgroundColor = ColorsApp.BACKGROUND;

module.exports = StyleSheet.create({
  //////////////////////// LOGIN/SIGNUP

  AuthTitle: {
    width: "100%",
    maxHeight: "100%",
    marginBottom: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  AuthLogo: {
    width: "100%",
    height: screenHeight / 12,
    maxHeight: "100%",
  },

  AuthContent: {
    marginHorizontal: 50,
  },

  AuthInput: {
    marginBottom: 10,
    backgroundColor: "#fff",
  },

  AuthButton: {
    marginTop: 15,
    borderRadius: 100,
  },

  AuthButtonContent: {
    paddingVertical: 10,
  },

  AuthButtonLabel: {
    letterSpacing: 0,
    fontWeight: "bold",
    color: "#fff",
  },

  AuthCheckBoxLabel: {
    textTransform: "capitalize",
    marginLeft: 5,
    letterSpacing: 0,
    color: "#b9b9b9",
    backgroundColor: "#fff",
  },

  AuthCheckBoxContent: {
    backgroundColor: "#fff",
  },

  AuthBottomText: {
    fontSize: 16,
  },

  AuthBottomContent: {
    marginTop: 20,
    alignItems: "center",
  },

  ForgotPass: {
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 10,
    alignSelf: "flex-end",
    marginHorizontal: 4,
    color: ColorsApp.PRIMARY,
  },

  textArea: {
    backgroundColor: "#fff",
  },

  //////////////////////// HOME

  headerBackground: {
    width: "100%",
    height: screenHeight * 0.38,
  },

  headerOverlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    height: screenHeight * 0.38,
    paddingHorizontal: screenHeight * 0.05,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 20,
    color: "#fff",
    marginVertical: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  headerButton: {
    backgroundColor: PrimaryColor,
    paddingHorizontal: 20,
    borderRadius: 100,
    paddingVertical: 10,
  },

  headerButtonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },

  homeOverlay: {
    width: "100%",
    height: screenHeight * 0.15,
    position: "absolute",
    top: 0,
    zIndex: 999,
    alignItems: "center",
    justifyContent: "center",
  },

  //////////////////////// DRAWER MENU

  Drawer: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingBottom: 30,
  },

  DrawerHeader: {
    paddingTop: screenHeight / 17,
    paddingBottom: screenHeight / 24,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  DrawerImage: {
    width: "70%",
    height: screenHeight / 12,
    maxHeight: "100%",
    // marginVertical: 2,
  },

  DrawerMenuItem: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 6,
  },

  DrawerTitleMenu: {
    fontSize: 16,
    // fontWeight: "bold",
  },

  DrawerIconMenu: {
    fontSize: 30,
    marginRight: 15,
  },

  DrawerIconRightMenu: {
    fontSize: 25,
    opacity: 0.3,
    color: ColorsApp.PRIMARY,
  },

  DrawerButton: {
    borderRadius: 6,
    marginHorizontal: 15,
    marginVertical: 10,
  },

  DrawerButtonLabel: {
    textTransform: "capitalize",
    fontSize: 17,
  },

  DrawerButtonContent: {
    height: 50,
    width: "100%",
  },

  DrawerTitleHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 8,
  },

  DrawerSubTitleHeader: {
    fontSize: 14,
  },

  DrawerFooter: {
    height: screenHeight * 0.1,
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    bottom: 0,
  },

  DrawerSearchInput: {
    marginHorizontal: 15,
    marginVertical: 15,
  },

  //////////////////////// RECIPE DETAILS

  recipeBackground: {
    width: "100%",
    height: screenHeight * 0.38,
    position: "relative",
  },

  recipeOverlay: {
    width: "100%",
    height: screenHeight * 0.15,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },

  recipeContent: {
    marginVertical: 10,
    marginHorizontal: 10,
  },

  recipeCategory: {
    fontWeight: "bold",
    fontSize: 18,
    color: PrimaryColor,
    marginBottom: 10,
  },

  recipeTitle: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
  },

  recipeMeta: {
    fontSize: 16,
    color: "#999",
    paddingHorizontal: 10,
  },

  recipeTotalikes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 50,
  },

  recipeTotalikesIcon: {
    marginRight: 5,
    fontSize: 18,
    color: "red",
  },

  recipeTotalikesLabel: {
    fontSize: 16,
    color: "#999",
  },

  recipeDescription: {
    fontSize: 16,
    color: "#999",
    marginBottom: 8,
    paddingHorizontal: 10,
  },

  recipeSection: {
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 10,
  },

  recipeIngredients: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 14,
  },

  recipeInstructions: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingRight: 25,
    marginBottom: 20,
  },

  recipeIngredientsIcon: {
    fontSize: 24,
    marginRight: 8,
    color: PrimaryColor,
  },

  recipeIngredientsNum: {
    fontWeight: "500",
    fontSize: 18,
    marginRight: 12,
    color: PrimaryColor,
  },

  recipeIngredientsLabel: {
    fontSize: 16,
  },

  recipeNutriCol: {
    justifyContent: "center",
    alignItems: "center",
  },

  recipeNutriColLabel: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 5,
  },

  recipeNutriColValue: {
    color: "#959595",
    fontSize: 16,
  },

  //////////////////////// MEMBER DETAILS

  memberContent: {
    marginVertical: 25,
    marginHorizontal: 10,
  },

  memberHeader: {
    width: "100%",
    height: screenHeight * 0.3,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  memberBadge: {
    color: "#2596f3",
  },

  memberNameView: {
    marginBottom: 3,
    marginTop: 15,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  memberName: {
    fontSize: 21,
    fontWeight: "bold",
    marginRight: 4,
  },

  memberEmail: {
    fontSize: 16,
    color: "#959595",
  },

  memberCol: {
    justifyContent: "center",
    alignItems: "center",
  },

  memberColLabel: {
    color: "#959595",
    fontSize: 16,
    marginBottom: 5,
  },

  memberColValue: {
    fontWeight: "600",
    fontSize: 18,
  },

  memberSection: {
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  //////////////////////// FEED

  feedActionLabel: {
    fontWeight: "300",
    fontSize: 16,
  },

  //////////////////////// SEARCH

  SearchBg: {
    backgroundColor: PrimaryColor,
    marginBottom: 20,
  },

  SearchInput: {
    marginHorizontal: 15,
    marginVertical: 15,
  },

  SearchInputStyle: {
    fontSize: 17,
  },

  SearchTotal: {
    fontSize: 17,
    color: "#959595",
  },

  SearchOrderBy: {
    fontSize: 17,
    letterSpacing: 0,
  },

  SearchBar: {
    shadowOpacity: 0,
    elevation: 0,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#dedede",
    marginBottom: 20,
  },

  SearchChipScroll: {
    flexGrow: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },

  SearchChip: {
    marginRight: 10,
    backgroundColor: "#fff",
  },

  SearchChipText: {
    fontSize: 16,
  },

  SearchListTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },

  SearchListDesc: {
    marginTop: 5,
    fontSize: 16,
    color: "#999",
  },

  SearchListStyle: {
    backgroundColor: "#fff",
  },

  SearchSelectModalTitle: {
    paddingVertical: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eee",
    marginTop: 3,
    marginBottom: 10,
  },

  SearchSelectModalHeight: {
    height: screenHeight * 0.4,
  },

  SearchSelectModalText: {
    fontWeight: "bold",
    fontSize: 16,
  },

  SearchSelectModalView: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },

  SearchSelectModalCheckbox: {
    fontSize: 16,
    marginHorizontal: 0,
  },

  SearchSelectable: {
    textTransform: "capitalize",
    letterSpacing: 0,
  },

  SearchShowResultsBtn: {
    backgroundColor: "#666",
    position: "absolute",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 23,
    zIndex: 999,
    flex: 1,
    bottom: 0,
    right: 0,
    left: 0,
  },

  SearchShowResultsBtnLabel: {
    color: "#fff",
    marginHorizontal: 7,
    fontWeight: "bold",
    fontSize: 16,
  },

  SearchStepperInputBg: {
    backgroundColor: "#fff",
    borderColor: PrimaryColor,
    borderWidth: 1,
  },

  //////////////////////// BUTTONS

  Button1: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    height: screenHeight * 0.065,
    borderRadius: 60,
    width: "100%",
    paddingHorizontal: 55,
    position: "relative",
    marginBottom: 20,
  },

  Button1Text: {
    color: "#000",
    fontSize: 16,
  },

  Button1IconLeft: {
    color: PrimaryColor,
    position: "absolute",
    left: 20,
    fontSize: 20,
  },

  Button1IconRight: {
    color: PrimaryColor,
    position: "absolute",
    right: 15,
    fontSize: 20,
  },

  //////////////////////// PROFILE

  HeaderProfile: {
    width: "100%",
    height: screenHeight * 0.3,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  ImageProfile: {
    borderRadius: 100,
    width: screenWidth * 0.28,
    height: "auto",
    minHeight: screenWidth * 0.28,
    marginBottom: 20,
  },

  ButtonProfile: {
    borderRadius: 60,
    width: "40%",
    marginHorizontal: 15,
    marginTop: 20,
  },

  ButtonLabelProfile: {
    fontWeight: "bold",
    fontSize: 16,
  },

  ButtonContentProfile: {
    height: screenHeight * 0.05,
    width: "100%",
  },

  SubTextProfile: {
    fontSize: 16,
    color: "rgba(0,0,0,0.5)",
  },

  TextProfile: {
    fontSize: 18,
    color: "#000",
    marginRight: 4,
    fontWeight: "bold",
    marginBottom: 5,
  },

  SignButton: {
    marginHorizontal: 15,
    marginVertical: 10,
  },

  SignButtonLabel: {
    color: "#fff",
  },

  SignButtonContent: {
    paddingVertical: 10,
    backgroundColor: PrimaryColor,
    width: "100%",
  },

  SignButtonTextContent: {
    backgroundColor: "#fff",
    marginVertical: 20,
    fontSize: 16,
  },

  //////////////////////// HEADING

  headingTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  headingSubTitle: {
    fontSize: 16,
    color: PrimaryColor,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  headingButton: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: PrimaryColor,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 50,
  },

  headingButtonText: {
    color: PrimaryColor,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  episodeBackground: {
    width: "100%",
    height: screenHeight * 0.4,
    position: "relative",
  },

  episodeOverlay: {
    width: "100%",
    height: screenHeight * 0.4,
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
  },

  episodeContent: {
    paddingHorizontal: 30,
    paddingTop: 120,
    flex: 1,
    height: screenHeight,
  },

  episodeTitle: {
    alignSelf: "center",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
  },

  episodeDivider: {
    height: 3,
    width: 40,
    backgroundColor: PrimaryColor,
    alignSelf: "center",
    marginBottom: 20,
  },

  //////////////////////// CARDS

  card1Image: {
    width: screenWidth * 0.7,
    borderRadius: 10,
    height: 170,
    marginLeft: 20,
  },

  card1Gradient: {
    width: "100%",
    height: "100%",
    padding: 20,
    justifyContent: "flex-end",
    flexDirection: "column",
    borderRadius: 6,
  },

  card1Title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  card1SubTitle: {
    fontSize: 14,
    color: "#fff",
  },

  card2View: {
    width: screenWidth * 0.23,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  card2Content: {
    justifyContent: "center",
    alignItems: "center",
  },

  card2Title: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },

  card3Image: {
    width: "100%",
    height: (screenWidth * 0.38) / 1.3,
  },

  card3Overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 20,
  },

  card3Title: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },

  card5Image: {
    width: "100%",
    height: screenHeight * 0.2,
    backgroundColor: "#000",
    borderRadius: 6,
    marginTop: 20,
  },

  card5Gradient: {
    width: "100%",
    height: "100%",
    padding: 25,
    justifyContent: "flex-end",
    flexDirection: "column",
    borderRadius: 6,
  },

  card5Title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    paddingRight: 15,
    lineHeight: 25,
  },

  card5SubTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: PrimaryColor,
    marginBottom: 8,
    textTransform: "uppercase",
  },

  card6: {
    marginBottom: 25,
    marginTop: 25,
    position: "relative",
    marginLeft: screenWidth * 0.05,
    width: screenWidth * 0.9,
    // shadowColor: "#000",
    // shadowOffset: { width: 1, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  cardButtons: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
  },
  cardTitle: {
    paddingTop: 20,

    justifyContent: "center",
    flexDirection: "row",
  },

  cardContent: {
    flex: 1,
    paddingTop: 10,
    justifyContent: "center",
    flexDirection: "row",
  },

  cardCenter: {
    // flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },

  fab: {
    position: "absolute",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    // backgroundColor: PrimaryColor,
    // marginTop: 10,
    right: 0,
    // bottom: 0,
    // marginTop: 20,
  },

  card6View: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    height: 175,
  },

  totalLikes: {
    position: "absolute",
    left: 10,
    top: 10,
    zIndex: 9,
    backgroundColor: "rgba(0,0,0,0.35)",
    padding: 3,
    paddingHorizontal: 12,
    borderRadius: 50,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "flex-start",
  },

  //////////////////////// MISC

  badgeRightTop: {
    position: "absolute",
    fontSize: 14,
    paddingHorizontal: 10,
    right: 10,
    color: "#fff",
    top: 10,
    zIndex: 9,
    backgroundColor: PrimaryColor,
  },

  ColProps: {
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  ColPropsImage: {
    width: 40,
    height: "100%",
  },

  ColPropsIcon: {
    backgroundColor: "#fff",
    width: 35,
    marginTop: 5,
    marginBottom: 8,
  },

  ColPropsText: {
    fontWeight: "500",
    fontSize: 16,
    marginRight: I18nManager.isRTL ? 0 : 10,
    marginLeft: I18nManager.isRTL ? 10 : 0,
  },

  ColProps2: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },

  ColProps2Text: {
    fontWeight: "500",
    fontSize: 18,
    color: "#999",
  },

  ColProps2Icon: {
    color: "#999",
    fontSize: 22,
    marginRight: 4,
  },

  ColProps3: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  ColProps3Text: {
    fontWeight: "500",
    fontSize: 18,
    color: "#fff",
  },

  ColProps3Icon: {
    color: "#fff",
    fontSize: 22,
    marginRight: 4,
  },

  TitleHome: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  TitleList: {
    color: "#000",
  },

  IconList: {
    marginTop: 15,
    fontSize: 14,
    backgroundColor: "#eee",
    borderRadius: 6,
  },

  FullHeightScreen: {
    width: "100%",
    paddingRight: 10,
    paddingVertical: 10,
    flex: 1,
    height: screenHeight,
  },

  MembersScreen: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },

  FullHeightScreen2: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 30,
  },

  AuthPage: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  SearchScreen: {
    width: "100%",
    paddingHorizontal: 10,
    flex: 1,
  },

  HomeScreen: {
    width: "100%",
    paddingBottom: 30,
    flex: 1,
  },

  PageScreen: {
    width: "100%",
    paddingVertical: 20,
    flex: 1,
  },

  TermsAboutPageScreen: {
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 30,
    flex: 1,
  },

  TransparentPageScreen: {
    width: "100%",
    paddingHorizontal: 25,
    paddingTop: Platform.OS === "ios" ? 110 : 100,
    flex: 1,
  },

  CommentsScreen: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },

  ContactPage: {
    marginTop: 100,
    flex: 1,
  },

  PageLogo: {
    width: "100%",
    height: screenHeight / 15,
    maxHeight: "100%",
    marginBottom: 50,
  },

  JustifyMiddle: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  FlexDirectionCenter: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  JustifyFlexStart: {
    alignItems: "flex-start",
  },

  JustifyFlexEnd: {
    alignItems: "flex-end",
  },

  LoadMore: {
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: PrimaryColor,
    width: "80%",
    height: screenHeight * 0.05,
    marginHorizontal: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  NoMoreItems: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    marginBottom: 60,
  },

  paddingHorizontal: {
    paddingHorizontal: 25,
  },

  statusbarOverlay: {
    width: "100%",
    height: screenHeight * 0.13,
  },

  title_card: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  subtitle_card: {
    color: "#FFF",
    fontSize: 16,
    opacity: 0.8,
    marginVertical: 6,
  },

  category_card: {
    marginBottom: 6,
    color: PrimaryColor,
    fontWeight: "bold",
    fontSize: 16,
  },

  gradient_card: {
    position: "absolute",
    padding: 15,
    left: 0,
    right: 0,
    bottom: 0,
    height: screenHeight * 0.23,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    borderRadius: 8,
  },

  background_card: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.23,
    alignItems: "flex-start",
    alignSelf: "center",
    justifyContent: "flex-end",
    padding: 15,
    marginBottom: 20,
  },

  selectModal: {
    height: screenHeight * 0.63,
    width: screenWidth * 0.8,
    alignSelf: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderRadius: 6,
  },

  buttonSelectModal: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PrimaryColor,
    paddingVertical: 10,
    borderRadius: 6,
  },
});
