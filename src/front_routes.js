import React from 'react';

const Home = React.lazy(() => import('./frontviews/Home/Home'));
const SearchSection = React.lazy(() => import('./frontviews/Home/Component/SearchSection'));
const WhatWeDo = React.lazy(() => import('./frontviews/Home/Component/WhatWeDo'));
const PropertyOwner = React.lazy(() => import('./frontviews/Home/Component/PropertyOwner'));
const BuyProperty = React.lazy(() => import('./frontviews/Home/Component/BuyProperty'));
const ReviewsSection = React.lazy(() => import('./frontviews/Home/Component/ReviewsSection'));
const Breadcrumb = React.lazy(() => import('./frontviews/Home/Component/Breadcrumb'));
const PageBottomImage = React.lazy(() => import('./frontviews/Home/Component/PageBottomImage'));

const RentPropertyList = React.lazy(() => import('./frontviews/PropertyList/RentPropertyList'));
const Sidebar = React.lazy(() => import('./frontviews/PropertyList/RentPropertyComponent/Sidebar'));
const PropertyLists = React.lazy(() => import('./frontviews/PropertyList/RentPropertyComponent/PropertyLists'));
const Pagination = React.lazy(() => import('./frontviews/PropertyList/RentPropertyComponent/Pagination'));
const SearchInList = React.lazy(() => import('./frontviews/PropertyList/RentPropertyComponent/SearchInList'));

const PropertyDetails = React.lazy(() => import('./frontviews/PropertyDetails/PropertyDetails'));
const PropertyInformation = React.lazy(() => import('./frontviews/PropertyDetails/PropertyDetailsComponent/PropertyInformation'));
const PropertyGallery = React.lazy(() => import('./frontviews/PropertyDetails/PropertyDetailsComponent/PropertyGallery'));
const PropertySidebar = React.lazy(() => import('./frontviews/PropertyDetails/PropertyDetailsComponent/PropertySidebar'));
const PropertyDetailsList = React.lazy(() => import('./frontviews/PropertyDetails/PropertyDetailsComponent/PropertyDetailsList'));

const AboutUs = React.lazy(() => import('./frontviews/Pages/AboutUs'));
const ContactUs = React.lazy(() => import('./frontviews/Pages/ContactUs'));
const PrivacyPolicy = React.lazy(() => import('./frontviews/Pages/PrivacyPolicy'));
const TermsAndConditions = React.lazy(() => import('./frontviews/Pages/TermsAndConditions'));
const FAQ = React.lazy(() => import('./frontviews/Pages/FAQ'));

// const LandlordResidentialPricing = React.lazy(() => import('./frontviews/Packages/Rent/Landlord/LandlordResidentialPricing'));
// const LandlordCommercialPricing = React.lazy(() => import('./frontviews/Packages/Rent/Landlord/LandlordCommercialPricing'));
// const TenantPricing = React.lazy(() => import('./frontviews/Packages/Rent/Tenant/TenantPricing'));

const ResidentialLandlordPricing = React.lazy(() => import('./frontviews/Pricing/RentalPricing/Residential/ResidentialLandlordPricing'));
const ResidentialTenantPricing = React.lazy(() => import('./frontviews/Pricing/RentalPricing/Residential/ResidentialTenantPricing'));
const CommercialLandlordPricing = React.lazy(() => import('./frontviews/Pricing/RentalPricing/Commercial/CommercialLandlordPricing'));
const CommercialTenantPricing = React.lazy(() => import('./frontviews/Pricing/RentalPricing/Commercial/CommercialTenantPricing'));

const PostAProperty = React.lazy(() => import('./frontviews/PostAProperty/PostAProperty'));

const UserProfile = React.lazy(() => import('./frontviews/UserProfile/UserProfile'));
const MyProfile = React.lazy(() => import('./frontviews/UserProfile/UserProfileComponent/MyProfile'));
const MyProperties = React.lazy(() => import('./frontviews/UserProfile/UserProfileComponent/MyProperties'));
const MyFavoritedProperties = React.lazy(() => import('./frontviews/UserProfile/UserProfileComponent/MyFavoritedProperties'));





// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
 // { path: '/home/', exact: true, name: 'ComingSoon1' },
   { path: '/', exact: true, name: 'Home', component: Home },


  // { path: '/home/propertylist', exact: true, name: 'RentPropertyList', component: RentPropertyList },
   { path: '/property/rent/:area/:search' , exact: true, name: 'RentPropertyList', component: RentPropertyList },
 
  
 //  { path: '/home/propertydetails', exact: true, name: 'PropertyDetails', component: PropertyDetails },
  { path: '/property/details/:property_id', exact: true, name: 'PropertyDetails', component: PropertyDetails },

  { path: '/aboutus', exact: true, name: 'AboutUs', component: AboutUs },
  { path: '/contactus', exact: true, name: 'ContactUs', component: ContactUs },
  { path: '/privacy-policy', exact: true, name: 'PrivacyPolicy', component: PrivacyPolicy },
  { path: '/terms-and-conditions', exact: true, name: 'TermsAndConditions', component: TermsAndConditions },
  { path: '/faq', exact: true, name: 'FAQ', component: FAQ },
  
  // { path: '/landlord-residential-pricing', exact: true, name: 'LandlordResidentialPricing', component: LandlordResidentialPricing },
  // { path: '/landlord-commercial-pricing', exact: true, name: 'LandlordCommercialPricing', component: LandlordCommercialPricing },
  // { path: '/tenant-pricing', exact: true, name: 'TenantPricing', component: TenantPricing },
  
  { path: '/residential/landlord-pricing', exact: true, name: 'ResidentialLandlordPricing', component: ResidentialLandlordPricing },
  { path: '/residential/tenant-pricing', exact: true, name: 'ResidentialTenantPricing', component: ResidentialTenantPricing },

  { path: '/commercial/landlord-pricing', exact: true, name: 'CommercialLandlordPricing', component: CommercialLandlordPricing },
  { path: '/commercial/tenant-pricing', exact: true, name: 'CommercialTenantPricing', component: CommercialTenantPricing },

  { path: '/post-a-property', exact: true, name: 'PostAProperty', component: PostAProperty },
   { path: '/user-profile', exact: true, name: 'UserProfile', component: UserProfile },
	
];

export default routes;
