export default {
  items: [
    {
      name: 'Dashboard',
      url: '/ez-admin/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'Admin User',
      url: '/ez-admin/admin-users',
      icon: 'icon-user',
      children: [
        {
          name: 'Add User',
          url: '/ez-admin/add-admin-user',
          icon: 'icon-plus',
        },
        {
          name: 'User List',
          url: '/ez-admin/admin-users',
          icon: 'icon-list',
        },
        /* {
          name: 'Roles',
          url: '/ez-admin/roles',
          icon: 'icon-list',
        },
        {
          name: 'Assign Roles',
          url: '/ez-admin/assign-roles',
          icon: 'icon-list',
        }, */
      ],
    },
	
	{
      name: 'Roles',
      url: '/ez-admin/roles',
      icon: 'icon-user',
      children: [
         {
          name: 'Add Role',
          url: '/ez-admin/add-roles',
          icon: 'icon-plus',
        },
        {
          name: 'Roles List',
          url: '/ez-admin/roles',
          icon: 'icon-list',
        }, 
      ],
    },
	
    
	{
      name: 'User',
      url: '/ez-admin/individual-users',
      icon: 'icon-user',
      children: [
        {
          name: 'Add Individual User',
          url: '/ez-admin/individual-users/add',
          icon: 'icon-plus',
        },
		{
          name: 'Individual List',
          url: '/ez-admin/individual-users/list',
          icon: 'icon-list',
        },
        /* {
          name: 'Builder List',
          url: '/ez-admin/individual-users',
          icon: 'icon-list',
        },
        {
          name: 'Dealer List',
          url: '/ez-admin/individual-users',
          icon: 'icon-list',
        }, */

      ],
    },
    {
      name: 'Rental Property',
      url: '/ez-admin/rent-property',
      icon: 'icon-note',
      children: [
        {
          name: 'Add Property ',
          url: '/ez-admin/rent-property/add',
          icon: 'icon-plus',

        },
		{
          name: 'Unverified Property',
          url: '/ez-admin/rent-property/unverified-list',
          icon: 'icon-list',
        },
		{
          name: 'Assign Inspector',
          url: '/ez-admin/assign-inspector-rental-property-list',
          icon: 'icon-list',
        },
		{
          name: 'Quality Check',
          url: '/ez-admin/quality-check-rental-property-list',
          icon: 'icon-list',
        },
		{
          name: 'Live Property List',
          url: '/ez-admin/live-rental-property-list',
          icon: 'icon-list',
        },
		
		/* {
          name: 'Rentout Property',
          url: '/ez-admin/rental-property-list',
          icon: 'icon-list',
        }, */
		

      ],
    },

	/* {
      name: 'Seller Property',
      url: '/ez-admin/seller-property-list',
      icon: 'icon-note',
      children: [
        {
          name: 'Add Seller porperty ',
          url: '/ez-admin/add-seller-property',
          icon: 'icon-plus',

        },
        {
          name: 'Seller porperty List',
          url: '/ez-admin/seller-property-list',
          icon: 'icon-list',
        },

      ],
    }, */
    {
       name: 'Packages',
       url: '/ez-admin/package',
       icon: 'icon-star',
       children: [
         {
           name: 'Tenant Package List',
           url: '/ez-admin/package/tenant-package-list',
           icon: 'icon-list',

         },
         {
           name: 'Buyer Package List',
           url: '/ez-admin/package/buyer-package-list',
           icon: 'icon-list',
         },
         {
           name: 'Owner Package List',
           url: '/ez-admin/package/owner-package-list',
           icon: 'icon-list',
         },
         {
           name: 'Seller Package List',
           url: '/ez-admin/package/seller-package-list',
           icon: 'icon-list',
         },

       ],
     },
    {
      name: 'Setting',
      url: '/13',
      icon: 'icon-settings',
      children: [
        {
          name: 'Business Type',
          url: '/ez-admin/business-type',
          icon: 'icon-star',
        },
		{
          name: 'Services Type',
          url: '/ez-admin/services-type',
          icon: 'icon-star',
        },

        {
          name: 'Facing Side',
          url: '/ez-admin/facing-side',
          icon: 'icon-star',
        },
        {
          name: 'State',
          url: '/ez-admin/state',
          icon: 'icon-star',
        },
		{
          name: 'City',
          url: '/ez-admin/city',
          icon: 'icon-star',
        },
		{
          name: 'Attributes',
          url: '/ez-admin/attributes',
          icon: 'icon-star',
        },
      ],
    },

    {
      name: 'Invoice',
      url: '/dashboard',
      icon: 'icon-list',

    },
  ],
};
