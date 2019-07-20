export const setContacts = function(contacts){
  return {type:'SET_CONTACTS', payload:contacts}
}

export const removeContact = function(id){
  return {type:'REMOVE_CONTACT', payload:id}
}