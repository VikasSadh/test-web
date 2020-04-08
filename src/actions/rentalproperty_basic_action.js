export const basicinformation_form_vaild = (fields) => {
  console.log(11111)
	let formIsValid = true;
	let errors = {};
	
  if (!fields["user_name"]) {
        formIsValid = false;
        errors["user_name"] = "This Field is required";
 }
if (!fields["businesstype_name"]) {
	formIsValid = false;
	errors["businesstype_name"] = "This Field is required";
}
if (!fields["propertytype_name"]) {
	formIsValid = false;
	errors["propertytype_name"] = "This Field is required";
}
/* if (!fields["property_name"]) {
	formIsValid = false;
	errors["property_name"] = "This Field is required";
} */
if (!fields["bhktype_name"]) {
	formIsValid = false;
	errors["bhktype_name"] = "This Field is required";
}
if (!fields["property_age"]) {
	formIsValid = false;
	errors["property_age"] = "This Field is required";
}
if (!fields["bhktype_name"]) {
	formIsValid = false;
	errors["bhktype_name"] = "This Field is required";
}
if (!fields["areatype_name"]) {
	formIsValid = false;
	errors["areatype_name"] = "This Field is required";
}

if (!fields["area_total"]) {
	formIsValid = false;
	errors["area_total"] = "This Field is required";
}
if (typeof fields["area_total"] !== "undefined") {
        if (!fields["area_total"].match(/^[0-9]{3,6}$/)) {
          formIsValid = false;
          errors["area_total"] = "Please enter valid no.";
        }
      }
if (!fields["face_direction"]) {
	formIsValid = false;
	errors["face_direction"] = "This Field is required";
}

if (!fields["family"]) {
	formIsValid = false;
	errors["family"] = "This Field is required";
}
if (!fields["no_of_floors"]) {
	formIsValid = false;
	errors["no_of_floors"] = "This Field is required";
}
if (!fields["located_at"]) {
	formIsValid = false;
	errors["located_at"] = "This Field is required";
}
if (!fields["no_of_balcony"]) {
	formIsValid = false;
	errors["no_of_balcony"] = "This Field is required";
}
if(!fields["availability"]) {
	formIsValid = false;
	errors["availability"] = "This Field is required";
}


if (!fields["food"]) {
	formIsValid = false;
	errors["food"] = "This Field is required";
}
if (!fields["pet"]) {
	formIsValid = false;
	errors["pet"] = "This Field is required";
}
if (!fields["restrooms_type"]) {
	formIsValid = false;
	errors["restrooms_type"] = "This Field is required";
}
if (!fields["no_of_restrooms"]) {
	formIsValid = false;
	errors["no_of_restrooms"] = "This Field is required";
}
	
if (typeof fields["no_of_restrooms"] !== "undefined") {
	console.log(typeof fields["no_of_restrooms"])
        if (!fields["no_of_restrooms"].match(/^[0-9]{1,2}$/)) {
          formIsValid = false;
          errors["no_of_restrooms"] = "Please enter valid no.";
        }
      }

if (!fields["located_at"]) {
	formIsValid = false;
	errors["located_at"] = "This Field is required";
}
if (!fields["no_of_floors"]) {
	formIsValid = false;
	errors["no_of_floors"] = "This Field is required";
}
if (!fields["parking"]) {
	formIsValid = false;
	errors["parking"] = "This Field is required";
}
if (!fields["no_of_parking"]) {
	formIsValid = false;
	errors["no_of_parking"] = "This Field is required";
}
if (typeof fields["no_of_parking"] !== "undefined") {
        if (!fields["no_of_parking"].match(/^[0-9]{1}$/)) {
          formIsValid = false;
          errors["no_of_parking"] = "Please enter valid no.";
        }
 }

 if (!fields["parking_type"]) {
	formIsValid = false;
	errors["parking_type"] = "This Field is required";
}
 if (!fields["furnisingtype_name"]) {
	formIsValid = false;
	errors["furnisingtype_name"] = "This Field is required";
}
 // console.log('testvaild');
 // console.log(fields["add_rooms"].length);
 if (!fields["add_rooms"] || fields["add_rooms"].length === 0 ) {
	formIsValid = false;
	errors["add_rooms"] = "This Field is required";
}	

if (!fields["about_property"]) {
	formIsValid = false;
	errors["about_property"] = "This Field is required";
}

	  
	// console.log(errors)
return { errors: errors,formIsValid:formIsValid };
};


export const propertylocation_form_vaild = (fields,property_area) => {
	  console.log(222);
	let formIsValid = true;
	let errors = {};	
	// property_area
	if (!property_area) {
        formIsValid = false;
        errors["property_area"] = "Please enter your area.";
      }  
// property_address
	  if (!fields["property_address"]) {
        formIsValid = false;
        errors["property_address"] = "Please enter your adrress.";
      }  
// user_city
  console.log(fields["property_city"]);
   if (!fields["property_city"]) {
        formIsValid = false;
        errors["property_city"] = "Please select city.";
      } 
	  // user_state
   if (!fields["property_state"]) {
        formIsValid = false;
        errors["property_state"] = "Please select state.";
      }  
	  // user_landmark
   if (!fields["property_landmark"]) {
        formIsValid = false;
        errors["property_landmark"] = "Please enter your lanmark.";
      }   
	  // user_pincode
   if (!fields["property_pincode"]) {
        formIsValid = false;
        errors["property_pincode"] = "Please enter your pincode.";
      }  
   if (typeof fields["property_pincode"] !== "undefined") {
        if (!fields["property_pincode"].match(/^[0-9]{6}$/)) {
          formIsValid = false;
          errors["property_pincode"] = "Please enter valid alt pincode ";
        }
      }
	return { errors: errors,formIsValid:formIsValid };	
};

export const propertyprice_form_vaild = (fields) => {
let formIsValid = true;
let errors = {};


if(fields['property_building']=='Rent') {
	
	if (!fields["property_advanceprice"]) {
        formIsValid = false;
        errors["property_advanceprice"] = "This Field is required";
      }  
   if (typeof fields["property_advanceprice"] !== "undefined") {
        if (!fields["property_advanceprice"].match(/^[0-9]{4,8}$/)) {
          formIsValid = false;
          errors["property_advanceprice"] = "Please enter valid no.";
        }
      }
} else if(fields['property_building']=='Lease') {
	
	if (!fields["property_leaseduration"]) {
        formIsValid = false;
        errors["property_leaseduration"] = "This Field is required";
      } 
}

if(fields['maintenancetype']=='2' ) {
	if (!fields["maintenance_charge"]) {
        formIsValid = false;
        errors["maintenance_charge"] = "This Field is required";
      }  
   if (typeof fields["maintenance_charge"] !== "undefined") {
        if (!fields["maintenance_charge"].match(/^[0-9]{3,4}$/)) {
          formIsValid = false;
          errors["maintenance_charge"] = "Please enter valid no.";
        }
      }
	
}
if(fields['ebtype']=='No' ) {
	if (!fields["eb_charge"]) {
        formIsValid = false;
        errors["eb_charge"] = "This Field is required";
      }  
   if (typeof fields["eb_charge"] !== "undefined") {
        if (!fields["eb_charge"].match(/^[0-9]{1,2}$/)) {
          formIsValid = false;
          errors["eb_charge"] = "Please enter valid no.";
        }
      }
	
}
/* if (!fields["water_charge"]) {
        formIsValid = false;
        errors["water_charge"] = "This Field is required";
      }  
   if (typeof fields["water_charge"] !== "undefined") {
        if (!fields["water_charge"].match(/^[0-9]{3,4}$/)) {
          formIsValid = false;
          errors["water_charge"] = "Please enter valid no.";
        }
      }
	  */

if (!fields["property_price"]) {
        formIsValid = false;
        errors["property_price"] = "This Field is required";
      }  
   if (typeof fields["property_price"] !== "undefined") {
        if (!fields["property_price"].match(/^[0-9]{4,7}$/)) {
          formIsValid = false;
          errors["property_price"] = "Please enter valid no.";
        }
      }
	  
return { errors: errors,formIsValid:formIsValid };



};

export const propertypayment_form_vaild = (fields) => {
	let formIsValid = true;
	let errors = {};
	
	if (!fields["property_package"]) {
        formIsValid = false;
        errors["property_package"] = "This Field is required";
      }
	  if (!fields["property_paymentstatus"]) {
        formIsValid = false;
        errors["property_paymentstatus"] = "This Field is required";
      }
	  if (!fields["property_paymentmode"]) {
        formIsValid = false;
        errors["property_paymentmode"] = "This Field is required";
      }
if (!fields["payment_amount"]) {
        formIsValid = false;
        errors["payment_amount"] = "This Field is required";
      }  
  if (typeof fields["payment_amount"] !== "undefined") {
        if (!fields["payment_amount"].match(/^[0-9]{4,5}$/)) {
				formIsValid = false;
				errors["payment_amount"] = "Please enter valid no.";
        }
   }
	  
	return { errors: errors,formIsValid:formIsValid };
};
