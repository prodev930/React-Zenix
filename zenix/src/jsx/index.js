import React from "react";
import { useSelector } from "react-redux";

/// React router dom
import {  Routes, Route, Outlet  } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";
import "./step.css";


/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
import ScrollToTop from './pages/ScrollToTop';

/// Dashboard
import Home from "./components/Dashboard/Home";
import Wallet from "./components/Dashboard/Wallet";
import Transactions from "./components/Dashboard/Transactions";
import CoinDetails from "./components/Dashboard/CoinDetails";
import Portofolio from "./components/Dashboard/Portofolio";
import MarketCapital from "./components/Dashboard/MarketCapital";
//
////Theme
import DashboradLight from "./components/Dashboard/Demo/DashboradLight";
import Theme1 from "./components/Dashboard/Demo/Theme1";
import Theme2 from "./components/Dashboard/Demo/Theme2";
import Theme3 from "./components/Dashboard/Demo/Theme3";
import Theme4 from "./components/Dashboard/Demo/Theme4";
import Theme5 from "./components/Dashboard/Demo/Theme5";
import Theme6 from "./components/Dashboard/Demo/Theme6";
import Theme7 from "./components/Dashboard/Demo/Theme7";
import Theme8 from "./components/Dashboard/Demo/Theme8";


/// App
import AppProfile from "./components/AppsMenu/AppProfile/AppProfile";
import PostDetails from "./components/AppsMenu/AppProfile/PostDetails";
import ContactPage from "./components/AppsMenu/Contact/ContactPage";
import ContactCard from "./components/AppsMenu/Contact/ContactCard";
import ProjectCard from "./components/AppsMenu/Contact/ProjectCard";
import Compose from "./components/AppsMenu/Email/Compose/Compose";
import Inbox from "./components/AppsMenu/Email/Inbox/Inbox";
import Read from "./components/AppsMenu/Email/Read/Read";
import Calendar from "./components/AppsMenu/Calendar/Calendar";

/// Product List
import ProductGrid from "./components/AppsMenu/Shop/ProductGrid/ProductGrid";
import ProductList from "./components/AppsMenu/Shop/ProductList/ProductList";
import ProductDetail from "./components/AppsMenu/Shop/ProductGrid/ProductDetail";
import Checkout from "./components/AppsMenu/Shop/Checkout/Checkout";
import Invoice from "./components/AppsMenu/Shop/Invoice/Invoice";
import ProductOrder from "./components/AppsMenu/Shop/ProductOrder";
import Customers from "./components/AppsMenu/Shop/Customers/Customers";

/// Charts
import SparklineChart from "./components/charts/Sparkline";
import ChartJs from "./components/charts/Chartjs";
//import Chartist from "./components/charts/chartist";
import RechartJs from "./components/charts/rechart";
import ApexChart from "./components/charts/apexcharts";

/// Bootstrap
import UiAlert from "./components/bootstrap/Alert";
import UiAccordion from "./components/bootstrap/Accordion";
import UiBadge from "./components/bootstrap/Badge";
import UiButton from "./components/bootstrap/Button";
import UiModal from "./components/bootstrap/Modal";
import UiButtonGroup from "./components/bootstrap/ButtonGroup";
import UiListGroup from "./components/bootstrap/ListGroup";
//import UiMediaObject from "./components/bootstrap/MediaObject";
import UiCards from "./components/bootstrap/Cards";
import UiCarousel from "./components/bootstrap/Carousel";
import UiDropDown from "./components/bootstrap/DropDown";
import UiPopOver from "./components/bootstrap/PopOver";
import UiProgressBar from "./components/bootstrap/ProgressBar";
import UiTab from "./components/bootstrap/Tab";
import UiPagination from "./components/bootstrap/Pagination";
import UiGrid from "./components/bootstrap/Grid";
import UiTypography from "./components/bootstrap/Typography";

/// Plugins
import Select2 from "./components/PluginsMenu/Select2/Select2";
//import Nestable from "./components/PluginsMenu/Nestable/Nestable";
//import MainNouiSlider from "./components/PluginsMenu/Noui Slider/MainNouiSlider";
import MainSweetAlert from "./components/PluginsMenu/SweetAlert/SweetAlert";
import Toastr from "./components/PluginsMenu/Toastr/Toastr";
import JqvMap from "./components/PluginsMenu/JqvMap/JqvMap";
import Lightgallery from "./components/PluginsMenu/Lightgallery/Lightgallery";

//Redux
import Todo from "./pages/Todo";
//import ReduxForm from "./components/Forms/ReduxForm/ReduxForm";
//import WizardForm from "./components/Forms/ReduxWizard/Index";

/// Widget
import Widget from "./pages/Widget";

/// Table
import SortingTable from "./components/table/SortingTable/SortingTable";
import FilteringTable from "./components/table/FilteringTable/FilteringTable";
import DataTable from "./components/table/DataTable";
import BootstrapTable from "./components/table/BootstrapTable";

/// Form
import Element from "./components/Forms/Element/Element";
import Wizard from "./components/Forms/Wizard/Wizard";
import CkEditor from "./components/Forms/CkEditor/CkEditor";
import Pickers from "./components/Forms/Pickers/Pickers";
import FormValidation from "./components/Forms/FormValidation/FormValidation";

/// Pages
import ForgotPassword from "./pages/ForgotPassword";
import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";
import Setting from "./layouts/Setting";
// import { ThemeContext } from "../context/ThemeContext";

const Markup = () => {
  
  const allroutes = [
    /// Dashboard
    { url: "", element: <Home /> },
    { url: "dashboard", element: <Home /> },
    { url: "my-wallets", element: <Wallet /> },
    { url: "transactions", element: <Transactions /> },
    { url: "coin-details", element: <CoinDetails/> },
    { url: "portofolio", element: <Portofolio/> },
    { url: "market-capital", element: <MarketCapital/> },
   
   //themes
    { url: "dashboard-light", element: <DashboradLight/> },
    { url: "dark-sidebar", element: <Theme1/> },
    { url: "modern-sidebar", element: <Theme2/> },
    { url: "horizontal-sidebar", element: <Theme3/> },
    { url: "compact-sidebar", element: <Theme4/> },
    { url: "icon-hover", element: <Theme5/> },
    { url: "mini-sidebar", element: <Theme6/> },
    { url: "dark-mini", element: <Theme7/> },
    { url: "full-sidebar", element: <Theme8/> },  

    /// Apps
    { url: "app-profile", element: <AppProfile /> },
    { url: "post-details", element: <PostDetails/> },
    { url: "contact-list", element: <ContactPage/> },
    { url: "contact-card", element: <ContactCard/> },
    { url: "project-card", element: <ProjectCard/> },
    { url: "email-compose", element: <Compose/> },
    { url: "email-inbox", element: <Inbox/> },
    { url: "email-read", element: <Read/> },
    { url: "app-calender", element: <Calendar/> },

    
    /// Shop
    { url: "ecom-product-grid", element: <ProductGrid/> },
    { url: "ecom-product-list", element: <ProductList/> },
    { url: "ecom-product-detail", element: <ProductDetail/> },
    { url: "ecom-product-order", element: <ProductOrder/> },
    { url: "ecom-checkout", element: <Checkout/> },
    { url: "ecom-invoice", element: <Invoice/> },
    { url: "ecom-product-detail", element: <ProductDetail/> },
    { url: "ecom-customers", element: <Customers/> },

    /// Chart
    { url: "chart-sparkline", element: <SparklineChart/> },
	  { url: "chart-chartjs", element: <ChartJs/> },
	//{ url: "chart-chartist", element: Chartist },
    { url: "chart-apexchart", element: <ApexChart/> },
    { url: "chart-rechart", element: <RechartJs/> },

    /// Bootstrap
    { url: "ui-alert", element: <UiAlert/> },
    { url: "ui-badge", element: <UiBadge/> },
    { url: "ui-button", element: <UiButton/> },
    { url: "ui-modal", element: <UiModal/> },
    { url: "ui-button-group", element: <UiButtonGroup/> },
    { url: "ui-accordion", element: <UiAccordion/> },
    { url: "ui-list-group", element: <UiListGroup /> },
    { url: "ui-card", element: <UiCards/> },
    { url: "ui-carousel", element: <UiCarousel/> },
    { url: "ui-dropdown", element: <UiDropDown/> },
    { url: "ui-popover", element: <UiPopOver/> },
    { url: "ui-progressbar", element: <UiProgressBar/> },
    { url: "ui-tab", element: <UiTab/> },
    { url: "ui-pagination", element: <UiPagination/> },
    { url: "ui-typography", element: <UiTypography/> },
    { url: "ui-grid", element: <UiGrid/> },

    /// Plugin
    { url: "uc-select2", element: <Select2/> },
    //{ url: "uc-nestable", element: Nestable },
    //{ url: "uc-noui-slider", element: MainNouiSlider },
    { url: "uc-sweetalert", element: <MainSweetAlert/> },
    { url: "uc-toastr", element: <Toastr/> },
    { url: "map-jqvmap", element: <JqvMap/> },
    { url: "uc-lightgallery", element: <Lightgallery/> },

	  ///Redux
	  { url: "todo", element: <Todo/> },
	
    /// Widget
    { url: "widget-basic", element: <Widget/> },


    /// Form
	
    { url: "form-element", element: <Element/> },
	  { url: "form-wizard", element: <Wizard/> },
	  { url: "form-ckeditor", element: <CkEditor/> },
    { url: "form-pickers", element: <Pickers/> },
    { url: "form-validation", element: <FormValidation/> },

    /// table
	  { url: 'table-filtering', element: <FilteringTable/> },
    { url: 'table-sorting', element: <SortingTable/> },
    { url: "table-datatable-basic", element: <DataTable/> },
    { url: "table-bootstrap-basic", element: <BootstrapTable/> },

    /// pages
    //{ url: "page-register", element: <Registration /> },
    { url: "page-lock-screen", element: <LockScreen/> },
    //{ url: "page-login", element: <Login /> },
    { url: "page-forgot-password", element: <ForgotPassword /> },
    { url: "page-error-400", element: <Error400 /> },
    { url: "page-error-403", element: <Error403 /> },
    { url: "page-error-404", element: <Error404 /> },
    { url: "page-error-500", element: <Error500 /> },
    { url: "page-error-503", element: <Error503 /> },
  ];
  // let path = window.location.pathname;
  // path = path.split("/");
  // path = path[path.length - 1];
  // let pagePath = path.split("-").includes("page");
  
    setTimeout(function(){
		  let btn = document.querySelector("#main-wrapper");
		  let metisMenu = document.querySelector(".metismenu");
		  metisMenu.addEventListener("mouseenter", toggleFunc1);
		  metisMenu.addEventListener("mouseleave", toggleFunc2);
      function toggleFunc1() {
        return btn.classList.add("iconhover-toggle");
      }
      function toggleFunc2() {
        return btn.classList.remove("iconhover-toggle");
      }	
	  }, 200);
  
  
  return (
    <>
        <Routes>
          <Route path='page-lock-screen' element= {<LockScreen />} />
          <Route path='page-error-400' element={<Error400/>} />
          <Route path='page-error-403' element={<Error403/>} />
          <Route path='page-error-404' element={<Error404/>} />
          <Route path='page-error-500' element={<Error500/>} />
          <Route path='page-error-503' element={<Error503/>} />
          <Route  element={<MainLayout />} > 
              {allroutes.map((data, i) => (
                <Route
                  key={i}
                  exact
                  path={`${data.url}`}
                  element={data.element}
                />
              ))}
          </Route>
      </Routes>
        <Setting />
	      <ScrollToTop />
    </>
  );
};

function MainLayout(){
  // const { menuToggle } = useContext(ThemeContext);
  const sideMenu = useSelector(state => state.sideMenu);
  return (
    <div id="main-wrapper" className={`show ${ sideMenu ? "menu-toggle" : ""}`}>  
      <Nav />
      <div className="content-body" style={{ minHeight: window.screen.height - 60 }}>
          <div className="container-fluid">
            <Outlet />                
          </div>
      </div>
      <Footer />
    </div>
  )

};

export default Markup;
