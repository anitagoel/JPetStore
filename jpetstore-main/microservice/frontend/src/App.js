import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

//import custom pages
import {
  HomePage,
  NotFoundPage,
  CataloguePage,
  ProductPage,
  SignInPage,
  AccountPage,
  CartPage,
  SearchResultPage,
  ItemPage,
  CheckoutPage,
  OrderConfirmationPage,
  OrderSummaryPage,
  ViewOrdersPage,
  ShippingDetailsPage,
  ViewOrderPage,
  RegisterPage,
  HelpPage,
} from "./Pages/index";

//import custom components
import { Header, Footer } from "./Components/index";

const App = () => {
  return (
    <div className="container App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/order/checkout" element={<CheckoutPage />} />
        <Route path="/order/checkout/more" element={<ShippingDetailsPage />} />
        <Route path="/order/all" element={<ViewOrdersPage />} />
        <Route path="/order/confirmation" element={<OrderConfirmationPage />} />
        <Route path="/order/summary" element={<OrderSummaryPage />} />
        <Route path="/order/view/:orderId" element={<ViewOrderPage />} />

        <Route path="/catalogue/:id" element={<CataloguePage />} />
        <Route path="/catalogue/:id/:productId" element={<ProductPage />} />
        <Route
          path="/catalogue/:id/:productId/:itemId"
          element={<ItemPage />}
        />
        <Route path="/search/:keywords" element={<SearchResultPage />} />
        {/* 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
