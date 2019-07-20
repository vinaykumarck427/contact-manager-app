export const setContact = function(contact){
  return {type:'SET_CONTACT', payload:contact}
}

export const editContact = function(contact){
  return {type:'EDIT_CONTACT', payload:contact}
}