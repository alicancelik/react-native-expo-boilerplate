import { Dimensions, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

let fontSizeMini = 16;
let fontSizeSmall = 18;
let fontSizeBase = 20;
let inputHeight = hp(5);
let fontSizeLarge = 22;
let fontSizeLargeLogo = 30;
let fontSizeXlarge = 24;
let fontSizeLarger = 26;

const makeSizeSmaller = () => {
  fontSizeMini = 9;
  fontSizeSmall = 11;
  fontSizeBase = 12;
  fontSizeLarge = 13;
  inputHeight = hp(8.5);
  fontSizeLargeLogo = 21;
  fontSizeXlarge = 14;
  fontSizeLarger = 18;
};

const makeSizeMiddle = () => {
  fontSizeMini = 10;
  fontSizeSmall = 12;
  inputHeight = hp(8);
  fontSizeBase = 14;
  fontSizeLarge = 16;
  fontSizeLargeLogo = 24;
  fontSizeXlarge = 18;
  fontSizeLarger = 22;
};

const makeSizeBiggest = () => {
  fontSizeMini = 18;
  fontSizeSmall = 20;
  fontSizeBase = 22;
  fontSizeLarge = 24;
  inputHeight = hp(4);
  fontSizeXlarge = 26;
  fontSizeLargeLogo = 34;
  fontSizeLarger = 28;
};

const makeSizeLarge = () => {
  fontSizeMini = 11;
  fontSizeSmall = 14;
  fontSizeBase = 16;
  inputHeight = hp(5);
  fontSizeLarge = 18;
  fontSizeLargeLogo = 26;
  fontSizeXlarge = 20;
  fontSizeLarger = 22;
};

const makeSizeXLarge = () => {
  fontSizeMini = 12;
  fontSizeSmall = 15;
  fontSizeBase = 18;
  inputHeight = hp(5);
  fontSizeLarge = 21;
  fontSizeLargeLogo = 29;
  fontSizeXlarge = 23;
  fontSizeLarger = 25;
};


if (Dimensions.get('window').width < 300) {
  makeSizeSmaller();
} else if (Dimensions.get('window').width > 299 && Dimensions.get('window').height < 668) {
  console.log('medium');
  makeSizeMiddle();
} else if (Dimensions.get('window').width > 767 && Dimensions.get('window').height > 1023) {
  console.log('biggest');
  makeSizeBiggest();
} else if (Dimensions.get('window').width > 374 && Dimensions.get('window').height < 813) {
  console.log('large');
  makeSizeLarge();
} else if (Dimensions.get('window').height > 750 && Dimensions.get('window').height < 1024) {
  makeSizeXLarge();
  console.log('xlarge');
}

export default {
  whiteLilac: '#f5f7fb',
  salmon: '#fc8372',
  emerald: '#4fc690',
  gray: '#8b8b8b',
  alabaster: '#f7f7f7',
  royalBlue: '#3e74f2',
  ocean: '#5075ea',
  sunglo: '#e37777',
  cornflowerBlue: '#7a63f0',
  fontFamilyMedium: 'MikadoMedium',
  fontFamilyBold: 'MikadoBold',
  fontFamily: 'Mikado',
  borderRadius: 2,
  fontSizeMini,
  fontSizeSmall,
  fontSizeBase,
  fontSizeLarge,
  fontSizeXlarge,
  fontSizeLarger,
  fontSizeLargeLogo,
  inputLayout: {
    marginHorizontal: wp('12%'),
    width: wp('90%'),
    height: hp('7.5%'),
    borderRadius: hp('3.5'),
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d0d8e7',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  babySitterGreenButtons: {
    borderRadius: wp('8%'),
    width: wp('90%'),
    paddingVertical: hp(0.8),
    alignSelf: 'center',
    marginTop: hp(1.5),
    elevation: 5,
    bottom: 30,
    position: 'absolute'
  },
  textInput: {
    width: wp('90%'),
    fontSize: fontSizeBase,
    height: inputHeight,
    color: '#8b8b8b',
    paddingLeft: wp('2.5%'),
    marginLeft: wp('2.5%'),
  },
  textInputStyle: {
    color: '#8b8b8b',
    marginTop: inputHeight / 2.5,
  },
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? hp(3) : 0
  },
};
