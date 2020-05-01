
# DJANGO REST AUTH + APP

## Initial setup
[FOLLOW THESE STEPS](https://git.generalassemb.ly/SEIR-224/DJANGO-SETUP/blob/master/README.md)

## What you'll be delivering. 
You'll be building DJANGO REST API with JWT authentication, where the user can login and store national parks information.  

Users must be able,
 - Register
 - Login
 - Create park location, and information
 - Read park location, and information
 - Update park location, and information
 - Delete park location, and information

### Models

Model name : `Location`
<ul>
 <li>name: The field length should not exceed over 200 characters</li>
 <li>owner: This field ties to the User model from the authentication app</li>
</ul>

Model name : `Park`
<ul>
 <li>park_name: he field length should not exceed over 90 characters</li>
 <li>park_description: This field should be a text field</li>
 <li>location: This is a `FK` relationship to the location model</li>
</ul>

