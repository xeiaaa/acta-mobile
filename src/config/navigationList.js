// Navigation
import OnboardingScreen from '../screens/OnboardingScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import FeaturedProductsScreen from '../screens/FeaturedProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import EmailSentScreen from '../screens/FlashMessageScreens/EmailSentScreen';
import PhoneVerifiedScreen from '../screens/FlashMessageScreens/PhoneVerifiedScreen';
import OfferSentScreen from '../screens/FlashMessageScreens/OfferSentScreen';
import TransactionPendingScreen from '../screens/FlashMessageScreens/TransactionPendingScreen';
import ReservationPlacedScreen from '../screens/FlashMessageScreens/ReservationPlacedScreen';

const navigationList = [
  {
    name: 'OnboardingScreen',
    component: OnboardingScreen,
  },
  {
    name: 'SigninScreen',
    component: SigninScreen,
  },
  {
    name: 'SignupScreen',
    component: SignupScreen,
  },
  {
    name: 'ForgotPasswordScreen',
    component: ForgotPasswordScreen,
  },
  {
    name: 'HomeScreen',
    component: HomeScreen,
  },
  {
    name: 'FeaturedProductsScreen',
    component: FeaturedProductsScreen,
  },
  {
    name: 'ProductDetailsScreen',
    component: ProductDetailsScreen,
  },
  {
    name: 'PhoneVerifiedScreen',
    component: PhoneVerifiedScreen,
  },
  {
    name: 'EmailSentScreen',
    component: EmailSentScreen,
  },
  {
    name: 'OfferSentScreen',
    component: OfferSentScreen,
  },
  {
    name: 'TransactionPendingScreen',
    component: TransactionPendingScreen,
  },
  {
    name: 'ReservationPlacedScreen',
    component: ReservationPlacedScreen,
  },
];

export default navigationList;
