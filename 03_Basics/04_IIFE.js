// Immediately Invoked Function Expression (IIFE)

//! from this it give immediately invoked no need to give name to it as your wish

(function chai(){ //* Named IIFE
    console.log("DB connected");
})();
//* for stoping context of it semicolon in IIFE is neccessary


// chai() //! see as function calling everyting in short

// ()() //! first for function second for calling it immeditely




( (name) => {
    console.log(`DB connected two ${name}`);
} )("Raj"); //* parameter directly given


