function validSearchTerm(searchTerm){
    if(searchTerm.length >= 2){
      return true;
    }
    return false;
  }

export {validSearchTerm};