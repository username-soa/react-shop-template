import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import Home from "./pages/Home";
import FAQs from "./pages/FAQs";
import CartPage from "./pages/Cart";
import Product from "./pages/Product";
import AboutPage from "./pages/About";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import UserOrders from "./pages/UserOrders";
import Collection from "./pages/Collection";
import ContactPage from "./pages/ContactV2";
import UserAddress from "./pages/UserAddress";
import Collections from "./pages/Collections";
import UserProfilePage from "./pages/UserProfile";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import TermsConditions from "./pages/TermsConditions";
import { AuthProvider } from "./contexts/AuthContext";
import { ClientProvider } from "./contexts/ClientContext";
import { SearchHistoryProvider } from "./contexts/SearchHistoryContext";

function App() {
  const location = useLocation();
  return (
    <ClientProvider>
      <AuthProvider>
        <SearchHistoryProvider>
          <ScrollToTop />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/search/:p" component={SearchPage} />
              <Route exact path="/shopping-cart" component={CartPage} />
              <Route exact path="/account/login" component={LoginPage} />
              <Route exact path="/account" component={UserProfilePage} />
              <Route exact path="/account/orders" component={UserOrders} />
              <Route exact path="/account/address" component={UserAddress} />
              <Route exact path="/collections/all" component={Collections} />
              <Route exact path="/privacy-policy" component={PrivacyPolicy} />
              <Route exact path="/collections/:slug" component={Collection} />
              <Route exact path="/product-details/:slug" component={Product} />
              <Route exact path="/faqs" component={FAQs} />
              <Route
                exact
                path="/terms-conditions"
                component={TermsConditions}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </AnimatePresence>
        </SearchHistoryProvider>
      </AuthProvider>
    </ClientProvider>
  );
}

export default App;
