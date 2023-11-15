import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid, Typography, FormControl, InputAdornment, Tooltip, IconButton } from '@mui/material';
import { RiInformationLine } from 'react-icons/ri';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddressAutocomplete from './AddressAutocomplete';

const InformationComponent = ({ next, back, onShippingDetailsSubmit, formData, onFormChange }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const storedFirstName = localStorage.getItem('userFirstName');
    const storedLastName = localStorage.getItem('userLastName');
    const storedEmail = localStorage.getItem('userEmail');

    useEffect(() => {
        console.log(localStorage)
        if (!formSubmitted) {
            // Update local state with formData values
            setFirstName(formData.firstName || storedFirstName || '');
            setLastName(formData.lastName || storedLastName || '');
            setEmail(formData.email || storedEmail || '');
            setPhone(formData.phone);
            setAddress(formData.address);
            setAddress2(formData.address2);
            setCity(formData.city);
            setZip(formData.zip);
            setState(formData.state);
            setCountry(formData.country);
        }
    }, [formData, formSubmitted, storedEmail, storedFirstName, storedLastName]);

    const [errors, setErrors] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });




    const validateField = (fieldName, value) => {
        let errorMsg = '';
        switch (fieldName) {
            case 'email':
                if (!value) {
                    errorMsg = "Email is required";
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    errorMsg = "Invalid email address";
                }
                break;
            case 'firstName':
                errorMsg = !value ? "First name is required" : '';
                break;
            case 'lastName':
                errorMsg = !value ? "Last name is required" : '';
                break;
            case 'address':
                errorMsg = !value ? "Address is required" : '';
                break;
            case 'city':
                errorMsg = !value ? "City is required" : '';
                break;
            case 'state':
                errorMsg = !value ? "State is required" : '';
                break;
            case 'zip':
                errorMsg = !value ? "Zip code is required" : !/^\d{5}(-\d{4})?$/.test(value) ? "Invalid zip code" : '';
                break;
            case 'country':
                errorMsg = !value ? "Country is required" : '';
                break;
            default:
                break;
        }
        setErrors(prevErrors => ({ ...prevErrors, [fieldName]: errorMsg }));
        return !errorMsg;
    };





    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate each field and check if the form is valid
        const isEmailValid = validateField('email', email);
        const isFirstNameValid = validateField('firstName', firstName);
        const isLastNameValid = validateField('lastName', lastName);
        const isAddressValid = validateField('address', address);
        const isCityValid = validateField('city', city);
        const isStateValid = validateField('state', state);
        const isZipValid = validateField('zip', zip);
        const isCountryValid = validateField('country', country);

        const isFormValid = isEmailValid && isFirstNameValid && isLastNameValid && isAddressValid && isCityValid && isStateValid && isZipValid && isCountryValid;

        if (!isFormValid) {
            return; // Stop submission if any validation fails
        }

        // Proceed with form submission if all validations pass
        const details = {

            email,
            firstName,
            lastName,
            phone,
            address,
            address2,
            city,
            state,
            zip,
            country
        };

        onShippingDetailsSubmit(details);
        setFormSubmitted(true)
        submitFormData(details);
        console.log(details);
        console.log("SDSDSDSDSDSDSDSDSDSD");
        console.log(formData);
        next(); // Proceed to the next step
    };
    const submitFormData = async (data) => {
        try {
            const response = await fetch(`http://localhost:8000/api/customer/${localStorage.getItem('customerId')}`, {
                method: 'PUT', // Use POST for creating or PUT for updating
                headers: {
                    'Content-Type': 'application/json',
                    // Include authentication token if required
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                const errorData = await response.json(); // Assuming the server sends JSON response
                console.error("Failed to submit form data:", errorData.message);
            }

            if (response.ok) {
                // Handle successful response
                console.log("Form data submitted successfully");
            } else {
                // Handle errors
                console.error("Failed to submit form data");
            }

        } catch (error) {
            console.error("Error submitting form data:", error);
        }
    };


    const handleAddressChange = (place) => {
        let streetNumber = '';
        let route = '';
        setAddress('');
        setAddress2('');
        setCity('');
        setState('');
        setZip('');
        setCountry('');

        place.address_components.forEach(component => {
            const componentType = component.types[0];
            if (componentType === 'street_number') {
                streetNumber = component.long_name;
            } else if (componentType === 'route') {
                route = component.long_name;
            }
            switch (componentType) {
                case "street_number":
                    streetNumber = component.long_name;
                    break;
                case "route":
                    route = component.long_name;
                    break;
                case "locality":
                    setCity(component.long_name);
                    break;
                case "administrative_area_level_1":
                    setState(component.short_name);
                    break;
                case "postal_code":
                    setZip(component.long_name);
                    break;
                case "country":
                    setCountry(component.long_name);
                    break;
                default:
                    // Unknown component type
                    break;
            }


        });

        // Combine street number and route to form the street address
        const streetAddress = streetNumber && route ? `${streetNumber} ${route}` : route;
        setAddress(streetAddress); // Set only the street address for the "Address line 1" field
    };


    const formatPhoneNumber = (value) => {
        if (!value) return value;

        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength < 4) return phoneNumber;

        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }

        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    };
    const handlePhoneChange = (e) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setPhone(formattedPhoneNumber);
    };








    const textFieldStyles = {
        '& .MuiInputBase-input': {
            fontSize: '14px' // Adjust the font size as needed
        },
        '& .MuiInputLabel-root': {
            fontSize: '14px' // Adjust the font size as needed
        }
    }


    return (
        <form onSubmit={handleSubmit} className='information-form-container'>
            <FormControl>
                <Typography fontWeight={600} fontSize={16} mb={1} variant="h6" className='information-titles' >
                    Contact
                </Typography>
                <TextField
                    type='email'
                    required
                    id="email"
                    name="email"
                    label="Email"
                    value={email || ''}
                    onChange={(e) => setEmail(e.target.value)}
                    helperText={errors.email || ' '}
                    error={!!errors.email}
                    color={email && !errors.email ? 'success' : 'primary'}
                    focused={!!email}
                    autoComplete="email"
                    variant="outlined"
                    onBlur={() => validateField('email', email)}
                    sx={textFieldStyles}
                >

                    Email</TextField>
                <TextField
                    required
                    type='tel'
                    id="phone"
                    name="phone"
                    label="phone (optional)"
                    value={phone || ''}

                    onChange={handlePhoneChange}
                    color={phone && !errors.phone ? 'success' : 'primary'}
                    focused={!!phone}
                    autoComplete="phone"
                    variant="outlined"
                    sx={textFieldStyles}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Tooltip title="In case we need to contact you about your order">
                                    <IconButton sx={{ mr: -1 }}>
                                        <InfoOutlinedIcon sx={{ cursor: 'pointer', color: '#0F75E0' }} />
                                    </IconButton>
                                </Tooltip>
                            </InputAdornment>
                        ),
                    }}

                >Phone</TextField>
                <Typography fontWeight={600} fontSize={16} my={1} variant="h6" className='information-titles'  >
                    Shipping Information
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} pr={2}>
                        <TextField
                            fullWidth
                            required
                            type='text'
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            value={firstName || ''}
                            onChange={(e) => setFirstName(e.target.value)}
                            error={!!errors.firstName}
                            helperText={errors.firstName || ' '}
                            autoComplete="given-name"
                            variant="outlined"
                            color={firstName && !errors.firstName ? 'success' : 'primary'}
                            onBlur={() => validateField('firstName', firstName)}
                            focused={!!firstName}
                            sx={textFieldStyles}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            autoComplete="family-name"
                            value={lastName || ''}
                            onChange={e => { setLastName(e.target.value); }}
                            error={!!errors.lastName}
                            helperText={errors.lastName || ' '}
                            color={lastName && !errors.lastName ? 'success' : 'primary'}
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            variant="outlined"
                            onBlur={() => validateField('lastName', lastName)}
                            focused={!!lastName}
                            sx={textFieldStyles}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <AddressAutocomplete

                            id="address"
                            label="Address line 1*"
                            fullWidth
                            error={!!errors.address}
                            helperText={errors.address || ' '}
                            color={address && !errors.address ? 'success' : 'primary'}
                            onAddressSelected={handleAddressChange}
                            value={address || ''}
                            setValue={setAddress}
                            focused={!!address}
                            onBlur={() => validateField('address', address)}
                            sx={textFieldStyles}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <TextField
                            helperText={<span>
                                <RiInformationLine fontSize={16} style={{ transform: 'translateY(3px)' }} />
                                {' Add a Building /Appartment number if you have one'}
                            </span>}
                            id="address2"
                            name="address2"
                            label="Address line 2 (optional)"
                            fullWidth
                            autoComplete="shipping address-line2"
                            variant="outlined"
                            onChange={e => setAddress2(e.target.value)}
                            value={address2 || ''}
                            sx={textFieldStyles}
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>

                        <TextField
                            value={city || ''}
                            onChange={e => { setCity(e.target.value); }}
                            onBlur={() => validateField('city', city)}
                            error={!!errors.city}
                            helperText={errors.city || ' '}
                            color={city && !errors.city ? 'success' : 'primary'}
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="shipping address-level2"
                            variant="outlined"
                            focused={!!city}
                            sx={textFieldStyles}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            value={state || ''}
                            onChange={e => { setState(e.target.value); }}
                            error={!!errors.state}
                            helperText={errors.state || ' '}
                            color={state && !errors.state ? 'success' : 'primary'}
                            required
                            id="state"
                            name="state"
                            label="State"
                            fullWidth
                            autoComplete="administrative_area_level_1"
                            variant="outlined"
                            onBlur={() => validateField('state', state)}
                            focused={!!state}
                            sx={textFieldStyles}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            value={zip || ''}
                            onChange={e => { setZip(e.target.value); }}
                            error={!!errors.zip}
                            helperText={errors.zip || ' '}
                            color={zip && !errors.zip ? 'success' : 'primary'}
                            required
                            id="zip"
                            name="zip"
                            label="ZIP code"
                            fullWidth
                            autoComplete="postal_code"
                            variant="outlined"
                            onBlur={() => validateField('zip', zip)}
                            focused={!!zip}
                            sx={textFieldStyles}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            value={country || ''}
                            onChange={e => {
                                setCountry(e.target.value);

                            }}
                            error={!!errors.country}
                            helperText={errors.country || ' '}
                            color={country && !errors.country ? 'success' : 'primary'}
                            required
                            id="country"
                            name="country"
                            label="Country/Region"
                            fullWidth
                            autoComplete="country"
                            variant="outlined"
                            onBlur={() => validateField('country', country)}
                            focused={!!country}
                            sx={textFieldStyles}
                        />
                    </Grid>
                    <Grid item xs={12} className='information-buttons'>

                        <Button className='cart-checkout-button' onClick={back} variant="outlined" sx={{ letterSpacing: 2, color: 'white', borderRadius: 0, backgroundColor: '#283047', "&:hover": { backgroundColor: '#FE6F49', border: '1px solid #FE6F49 ', }, textAlign: 'center' }}>Back to cart</Button>
                        <Button onClick={handleSubmit} variant="outlined" sx={{ m: 1, letterSpacing: 2, color: '#283047', borderRadius: 0, backgroundColor: 'white', borderColor: '#283047', borderWidth: 1.5, '&:hover': { backgroundColor: '#0F75E0', color: 'white', } }}><span className='cartSummary-checkout-text'>Proceed</span>  to Shipping</Button>
                    </Grid>
                </Grid>
            </FormControl>
        </form >
    );
};

export default InformationComponent;