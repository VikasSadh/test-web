import React from 'react';



const Dashboard = React.lazy(() => import('./views/Dashboard'));
// User

const BuilderUserList = React.lazy(() => import('./adminviews/Users/BuilderUserList'));

const IndividualUserList = React.lazy(() => import('./adminviews/Users/IndividualUserList'));
const AddIndividualUser = React.lazy(() => import('./adminviews/Users/AddIndividualUser'));
const EditIndividualUser = React.lazy(() => import('./adminviews/Users/EditIndividualUser'));

//Admin User 

const AdminUserList = React.lazy(() => import('./adminviews/AdminUsers/AdminUserList'));
const AddAdminUser = React.lazy(() => import('./adminviews/AdminUsers/AddAdminUser'));
const RolesList = React.lazy(() => import('./adminviews/AdminUsers/RolesList'));
const AssignRolesList = React.lazy(() => import('./adminviews/AdminUsers/AssignRolesList'));
const AddRoles = React.lazy(() => import('./adminviews/AdminUsers/AddRoles'));
const AddAssignRoles = React.lazy(() => import('./adminviews/AdminUsers/AddAssignRoles'));
// Setting
const State = React.lazy(() => import('./adminviews/Setting/State'));
const City = React.lazy(() => import('./adminviews/Setting/City'));
const BusinessType = React.lazy(() => import('./adminviews/Setting/BusinessType'));
const ServicesType = React.lazy(() => import('./adminviews/Setting/ServicesType'));
const FacingSide = React.lazy(() => import('./adminviews/Setting/FacingSide'));
const AttributeList = React.lazy(() => import('./adminviews/Setting/AttributeList'));
const AddAttribute = React.lazy(() => import('./adminviews/Setting/AddAttribute'));
// const ComingSoon = React.lazy(() => import('./views/Pages/ComingSoon/ComingSoon'));


// Rental Property
// const AddRentalProperty = React.lazy(() => import('./adminviews/Property/AddRentalProperty'));
const AddRentalPropertyNew = React.lazy(() => import('./adminviews/Property/AddRentalPropertyNew'));
const EditRentalProperty = React.lazy(() => import('./adminviews/Property/EditRentalProperty'));
const ViewRentalProperty = React.lazy(() => import('./adminviews/Property/ViewRentalProperty'));

const RentalPropertyList = React.lazy(() => import('./adminviews/Property/RentalPropertyList'));
const UnverifiedRentalPropertyList = React.lazy(() => import('./adminviews/Property/UnverifiedRentalPropertyList'));
const QualityCheckRentalPropertyList = React.lazy(() => import('./adminviews/Property/QualityCheckRentalPropertyList'));
const GoLiveRentalPropertyList = React.lazy(() => import('./adminviews/Property/GoLiveRentalPropertyList'));
const AssignInspetorRentalPropertyList = React.lazy(() => import('./adminviews/Property/AssignInspetorRentalPropertyList'));

const AddSellerProperty = React.lazy(() => import('./adminviews/Property/AddSellerProperty'));
const SellerPropertyList = React.lazy(() => import('./adminviews/Property/SellerPropertyList'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
	{ path: '/ez-admin/', exact: true, name: 'Dashboard' },
	{ path: '/ez-admin/dashboard', name: 'Dashboard', component: Dashboard },
 // { path: '/ez-admin/add-individual-user', name: 'AddIndividualForms', component: AddIndividualForms },
	{ path: '/ez-admin/individual-users', exact: true,  name: 'Individual Users', component: IndividualUserList },
	{ path: '/ez-admin/individual-users/list', exact: true,  name: 'Individual Users', component: IndividualUserList },
	{ path: '/ez-admin/individual-users/add', exact: true,  name: 'Add', component: AddIndividualUser },
	{ path: '/ez-admin/individual-users/edit/:user_id', exact: true,  name: 'edit', component: EditIndividualUser },
	{ path: '/ez-admin/builder-users', exact: true,  name: 'Users', component: BuilderUserList },
	{ path: '/ez-admin/admin-users', exact: true,  name: 'AdminUsers', component: AdminUserList },
	{ path: '/ez-admin/add-admin-user', exact: true,  name: 'AdminUsers', component: AddAdminUser },
	{ path: '/ez-admin/roles', exact: true,  name: 'AdminUsers', component: RolesList },
	{ path: '/ez-admin/assign-roles', exact: true,  name: 'AdminUsers', component: AssignRolesList },
	{ path: '/ez-admin/add-roles', exact: true,  name: 'AdminUsers', component: AddRoles },
	{ path: '/ez-admin/add-assign-roles', exact: true,  name: 'AdminUsers', component: AddAssignRoles },
	{ path: '/ez-admin/state', exact: true,  name: 'Setting', component: State },
	{ path: '/ez-admin/city', exact: true,  name: 'Setting', component: City },
	{ path: '/ez-admin/business-type', exact: true,  name: 'Setting', component: BusinessType },
	{ path: '/ez-admin/services-type', exact: true,  name: 'Setting', component: ServicesType },
	{ path: '/ez-admin/facing-side', exact: true,  name: 'Setting', component: FacingSide },
	{ path: '/ez-admin/rent-property', exact: true,  name: 'Rental Property ', component: UnverifiedRentalPropertyList },
	{ path: '/ez-admin/rent-property/add', exact: true,  name: 'Add ', component: AddRentalPropertyNew },
	{ path: '/ez-admin/rent-property/edit/:property_id/:flag', exact: true,  name: 'Edit ', component: EditRentalProperty },
	{ path: '/ez-admin/rent-property/unverified-list', exact: true,  name: 'Unverified', component: UnverifiedRentalPropertyList },
	{ path: '/ez-admin/rent-property/unverified-view/:property_id', exact: true,  name: 'View', component: ViewRentalProperty },
	
	{ path: '/ez-admin/rental-property-list', exact: true,  name: 'RentalPropertyList', component: RentalPropertyList },
	
	{ path: '/ez-admin/assign-inspector-rental-property-list', exact: true,  name: 'AssignInspetorRentalPropertyList', component: AssignInspetorRentalPropertyList },
	{ path: '/ez-admin/quality-check-rental-property-list', exact: true,  name: 'QualityCheckRentalPropertyList', component: QualityCheckRentalPropertyList },
	{ path: '/ez-admin/live-rental-property-list', exact: true,  name: 'GoLiveRentalPropertyList', component: GoLiveRentalPropertyList },
	
	{ path: '/ez-admin/add-seller-property', exact: true,  name: 'AddSellerProperty', component: AddSellerProperty },
	{ path: '/ez-admin/seller-property-list', exact: true,  name: 'SellerPropertyList', component: SellerPropertyList },
	{ path: '/ez-admin/attributes', exact: true,  name: 'Setting', component: AttributeList },
	{ path: '/ez-admin/add-attribute', exact: true,  name: 'Setting', component: AddAttribute },
	// { path: '/ez-admin/coming-soon', exact: true,  name: 'ComingSoon', component: ComingSoon },
	// { path: '/ez-admin/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
