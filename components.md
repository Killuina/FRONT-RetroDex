# DATA

## DATA LAYER

List of public Pokémons
id
name
type
ability
height
weigth
base Exp
isFavorite (boolean)

UI:
isLoading (boolean)
Error

## DATA MODIFICATIONS

- Add Pokémon to favorites
- Remove Pokémon from favorites
- Create new user Pokémon
- Modify a user Pokémon
- Delete a user Pokémon
- Add Pokémon to user Pokémon
- Remove Pokémon from user Pokémon
- Set isLoading
- Unset isLoading
- Activate error
- Deactivate error

# COMPONENTS

## CONTEXT PROVIDER (STORE)

- Contains the list of public Pokémons
- Contains the list of user Pokémons
- Contains the list of Pokémons
- Contains the function to add Pokémon to favorites
- Contains the function to remove Pokémon from favorites
- Contains the function to create user Pokémon
- Contains the function to modify user Pokémon
- Contains the function to delete user Pokémon
- Contains the function to add Pokémon to user Pokémon
- Contains the function to remove Pokémon from user Pokémon

## UI CONTEXT PROVIDER (STORE)

- Contains isLoading
- Contains Error 404
- Contains set isLoading function
- Contains unset isLoading function
- Contains activate error function
- Contains deactivate error function

## APP

## HEADER

- Shows app title: 'Pokédex'
- Shows NavBar component

## NAVIGATION

- Shows the navigation buttons
- Receives the action from user to go to a page

## HOME PAGE

- Shows the list of public Pokémons
- Sends a Pokémon to Pokémon Detail

## POKÉMON DETAIL PAGE

- Receives a Pokémon
- Sends the Pokémon detail (id, name, type, ability, height, weigth, base Exp)
- shows like button
- Receives the action to toggle isFAvourite

## MY POKÉMONS PAGE

- Receives list of Pokémon
- Shows the list of user Pokémons
- Sends a Pokémon to User Pokémon Detail

## USER POKÉMON DETAIL PAGE

- Receives the Pokémon detail (id, name, type, ability, height, weigth, base Exp)
- Shows edit button
- Onclick Redirects user to edit page
- Shows delete Button
- Receives an action to delete Pokémon from user Pokémon

## MODIFY POKEMON FORM

- Shows the form to create or modify a user Pokémon
- Sends a new or modified user Pokémon to User Pokémon Detail

## FILTER

- Receives an action the action
- Onclick executes the received action

# 404 PAGE

- Shows 404 error

## LOGIN PAGE

- Shows span 'Welcome freak!'
- Shows Login component
- Shows 'Register' anchor

## REGISTER PAGE

- Shows Register component

## LOADING PAGE

- Shows the loader depending on isLoading

## POKÉMON CARD

- Receives toggle isFavourite status action

- Receives a user with user data

- Shows the Pokémon's name
- Shows the Pokémon's image
- Shows the Pokémon's id
- Shows the Pokémon's type/s
- Shows is favourite button

- Shows Edit button (link)
- Shows delete button
- Executes deletePokemon action when the user clicks on delete button

- Shows 'Add to favourites' Button

- Executes toggle isFavourite status action when the user clicks on isFavourite button

## POKÉMON LIST

- Receives a list of Pokémon
- Shows a PokémonCard for every Pokémon in the list
- Sends a Pokémon to each PokémonCard component

## CREATE POKEMON FORM

- Receives the update user action

- Shows an input for the new name with label "Name"
- Shows an input for the new image with label "Image"
- Shows an input for the new First Type with label "Frist Type"
- Shows an input for the new Second type with label "secont type"
- Shows an input for the new Ability with label "Ability"
- Shows an input for the new height with label "Height"
- Shows an input for the new weight with label "weight"
- Shows an input for the new Base exp with label "Base exp"

- On submit executes the received create Pokémon action

## CREATE POKEMON FORM

- Receives the update user action

- Shows an input for the updated name with label "Name"
- Shows an input for the updated image with label "Image"
- Shows an input for the updated First Type with label "Frist Type"
- Shows an input for the updated Second type with label "secont type"
- Shows an input for the updated Ability with label "Ability"
- Shows an input for the updated height with label "Height"
- Shows an input for the updated weight with label "weight"
- Shows an input for the updated Base exp with label "Base exp"

- On submit executes the received upadate Pokémon action

## REGISTER FORM

- Receives the register user action

- Shows an input for the new username with label "Username:"
- Shows an input for the new email with label "Email:"
- Shows an input for users' password with label "Password:"

- On submit executes the received register user action

## LOGIN FORM

- Receives the login user action

- Shows text with welcoming message
- Shows an input for users' username with label "Username:"
- Shows an input for users' password with label "Password:"

- On submit executes the received login user action

## LOGOUT BUTTON

- Receives logout user action

- Shows 'Logout' text

- On click executes the given logout user action

## NAVBAR

- Shows 'Home' anchor when isLogged status is set to false
- Shows 'Logout' button when isLogged status is set to true
- Shows 'Create Pokémon' anchor
- Shows 'My Pokémon' anchor

- Onclick, each ones redirects to their path

## MODAL

- Receives text to desplay
- Is rendered depending on the error, when isError is true (pages has this responsibility)
