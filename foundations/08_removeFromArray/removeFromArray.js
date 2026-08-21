const removeFromArray = function(array, ...removal) {
    // helper function for filter()
    function isRemoval(num) {
        if (removal.includes(num)) {
            return false;
        } else {
            return true;
        }
    }
    

    const filtered = array.filter(isRemoval);
    return filtered;

};

// Do not edit below this line
module.exports = removeFromArray;
