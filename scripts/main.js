function read_display_Quote() {
    db.collection("quotes").doc("tuesday")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
      .onSnapshot(tuesdayDoc => {                                                               //arrow notation
           console.log("current document data: " + tuesdayDoc.data());                          //.data() returns data object
           document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote;      //using javascript to display the data on the right place
           
           //Here are other ways to access key:value data fields
           //$('#quote-goes-here').text(c.data().quote);                                       //using jquery object dot notation
           //$("#quote-goes-here").text(c.data()["quote"]);                                    //using json object indexing
      })
}

function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user.uid); // The UID of the user which just logged in
            currentUser = db.collection("users").doc(user.uid); // user.uid is the document key
            currentUser.get().then(userDoc => {
                // get the user's Name
                let name = userDoc.data().name;
                document.getElementById("name-goes-here").innerText = name;
            })
        }
    })
}

read_display_Quote();        //calling the function
insertName();