

function personalInfo() {
    console.log("ΠΑΡΑΚΑΛΩ ΣΥΜΠΛΗΡΩΣΤΕ ΤΑ ΣΤΟΙΧΕΙΑ ΣΑΣ");

    let name = prompt("ΟΝΟΜΑ");
    let lastName = prompt("EΠΙΘΕΤΟ");
    let address = prompt("ΔΙΕΥΘΥΝΣΗ");
    let city = prompt("ΠΟΛΗ");
    let number = prompt("ΑΡΙΘΜΟΣ ΤΗΛΕΦΩΝΟΥ");

    console.log("ΤΑ ΣΤΟΙΧΕΙΑ ΤΟΥ ΕΙΣΙΤΗΡΙΟΥ ΣΑΣ");
    console.log("ONOMA: " + name);
    console.log("ΕΠΙΘΕΤΟ: " + lastName);
    console.log("ΔΙΕΥΘΥΝΣΗ: " + address);
    console.log("ΠΟΛΗ: " + city);
    console.log("ΤΗΛΕΦΩΝΟ: " + number);
}

function detailsForJourney(option) {
    if (option == "1") {
        let travelOne = prompt("ΓΡΑΨΤΕ ΑΕΡΟΔΡΟΜΙΟ ΑΝΑΧΩΡΗΣΗΣ");
        let destinationOne = prompt("ΓΡΑΨΤΕ ΑΕΡΟΔΡΟΜΙΟ ΠΡΟΟΡΙΣΜΟΥ");

        let date = prompt("ΕΠΙΛΕΞΤΕ ΗΜΕΡΑ");
        let month = prompt("ΕΠΙΛΕΞΤΕ ΜΗΝΑ");
        let year = prompt("ΕΠΙΛΕΞΤΕ ΕΤΟΣ");


        console.log("ΑΠΟ: " + travelOne + " " + "ΠΡΟΣ: " + destinationOne);
        console.log(`ΑΝΑΧΩΡΗΣΗ: ${date}\\${month}\\${year}`);
        console.log("ΤΟ ΚΟΣΤΟΣ ΤΟΥ ΕΙΣΙΤΗΡΙΟΥ ΕΙΝΑΙ: " + Math.floor(Math.random() * (150 - 50) + 50));

    }
    else if (option == "2") {
        let travelFrom = prompt("ΓΡΑΨΤΕ ΑΕΡΟΔΡΟΜΙΟ ΑΝΑΧΩΡΗΣΗΣ");
        let destination = prompt("ΓΡΑΨΤΕ ΑΕΡΟΔΡΟΜΙΟ ΠΡΟΟΡΙΣΜΟΥ");

        let travelReturn = prompt("ΓΡΑΨΤΕ ΑΕΡΟΔΡΟΜΙΟ ΑΝΑΧΩΡΗΣΗΣ");
        let returnBack = prompt("ΓΡΑΨΤΕ ΑΕΡΟΔΡΟΜΙΟ ΠΡΟΟΡΙΣΜΟΥ");

        let dayGo = prompt("ΕΠΙΛΕΞΤΕ ΗΜΕΡΑ ΑΝΑΧΩΡΗΣΗΣ");
        let monthGo = prompt("ΕΠΙΛΕΞΤΕ ΜΗΝΑ ΑΝΑΧΩΡΗΣΗΣ");
        let yearGo = prompt("ΕΠΙΛΕΞΤΕ ΕΤΟΣ ΑΝΑΧΩΡΗΣΗΣ");

        let dayReturn = prompt("ΕΠΙΛΕΞΤΕ ΗΜΕΡΑ ΕΠΙΣΤΡΟΦΗΣ");
        let monthReturn = prompt("ΕΠΙΛΕΞΤΕ ΜΗΝΑ ΕΠΙΣΤΡΟΦΗΣ");
        let yearReturn = prompt("ΕΠΙΛΕΞΤΕ ΕΤΟΣ ΕΠΙΣΤΡΟΦΗΣ");


        console.log("ΜΕΤΑΒΑΣΗ");
        console.log("--------");
        console.log(travelFrom);
        console.log(destination);
        console.log("ΕΠΙΣΤΡΟΦΗ");
        console.log("--------");
        console.log(travelReturn);
        console.log(returnBack);
        console.log("--------");
        console.log(`ΑΝΑΧΩΡΗΣΗ ΑΠΟ ${travelFrom} ΠΡΟΣ ${destination}: ${dayGo}\\${monthGo}\\${yearGo}`);
        console.log(`ΕΠΙΣΤΡΟΦΗ ΑΠΟ ${travelReturn} ΠΡΟΣ ${returnBack}: ${dayReturn}\\${monthReturn}\\${yearReturn}`);
        console.log("-------------------------------------------------------------------");
        console.log("ΤΟ ΚΟΣΤΟΣ ΤΟΥ ΕΙΣΙΤΗΡΙΟΥ ΜΕΤΑΒΑΣΗΣ ΕΙΝΑΙ: " + Math.floor(Math.random() * (150 - 50) + 50));
        console.log("ΤΟ ΚΟΣΤΟΣ ΤΟΥ ΕΙΣΙΤΗΡΙΟΥ ΕΠΙΣΤΡΟΦΗΣ ΕΙΝΑΙ: " + Math.floor(Math.random() * (150 - 50) + 50));
    }
}

function destinations() {
    let from = ["ΑΓΙΑ ΠΕΤΡΟΥΠΟΛΗ", "ΑΛΕΞΑΝΡΙΑ", "ΑΘΗΝΑ", "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗ", "ΑΜΒΟΥΡΓΟ",
        "ΑΜΜΑΝ", "ΑΜΠΟΥ ΝΤΑΜΠΙ", "ΑΜΣΤΕΡΝΤΑΜ", "ΑΝΝΟΒΕΡΟ", "ΑΝΤΙΣ ΑΜΠΕΜΠΑ", "ΑΣΟΥΑΝ",
        "ΒΑΛΕΝΔΘΙΑ", "ΒΑΡΚΕΛΩΝΗ", "ΒΑΡΝΑ", "ΒΑΡΣΟΒΙΑ", "ΒΕΊΓΡΑΔΙ", "ΒΕΝΕΤΙΑ", "ΒΕΡΟΛΙΝΟ",
        "ΒΗΡΥΤΟΣ", "ΒΙΕΝΝΗ", "ΒΙΛΝΙΟΥΣ", "ΒΟΥΔΑΠΕΣΤΗ", "ΒΟΥΚΟΥΡΕΣΤΙ", "ΒΡΥΞΕΛΛΕΣ", "ΓΕΝΕΥΗ",
        "ΓΙΕΡΕΒΑΝ", "ΓΙΟΧΑΝΕΣΜΠΟΥΡΓΚ", "ΓΚΕΤΕΜΠΟΡΓΚ", "ΔΟΥΒΛΙΝΟ", "ΔΡΕΣΔΙ", "ΕΔΙΜΒΟΥΡΓΟ", "ΕΛΣΙΝΚΙ",
        "ΖΑΓΚΡΕΜΠ", "ΖΑΚΥΝΘΟΣ", "ΖΥΡΙΧΗ", "ΗΡΑΚΛΕΙΟ", "ΘΕΣΣΑΛΟΝΙΚΗ", "ΙΚΑΡΙΑ", "ΙΡΚΟΥΤΣΚ", "ΙΩΑΝΝΙΝΑ",
        "ΚΑΒΑΛΑ", "ΚΑΖΑΝ", "ΚΑΙΡΟ", "ΚΑΛΑΜΑΤΑ", "ΚΑΛΓΚΑΡΙ", "ΚΑΡΠΑΘΟΣ", "ΚΑΣΤΕΛΛΟΡΙΖΟ", "ΚΑΤΑΝΙΑ", "ΚΕΡΚΥΡΑ",
        "ΚΕΦΑΛΛΟΝΙΑ", "ΚΟΠΕΧΓΧΑΓΗ", "ΚΟΥΒΕΙΤ", "ΚΥΘΗΡΑ", "ΚΩΝΣΤΑΝΤΙΝΟΥΠΟΛΗ", "ΚΩΣ", "ΛΑΡΝΑΚΑ", "ΛΕΙΨΙΑ", "ΛΕΡΟΣ",
        "ΛΗΜΝΟΣ", "ΛΟΥΜΠΛΙΑΝΑ", "ΛΙΣΑΒΟΝΑ", "ΛΟΝΔΙΝΠ", "ΛΟΥΞΕΜΒΟΥΡΓΟ", "ΛΟΥΞΟΡ", "ΛΥΩΝ", "ΜΑΔΡΙΤΗ", "ΜΑΛΑΓΑ", "ΜΑΛΤΑ",
        "ΜΑΝΤΣΕΣΤΕΡ", "ΜΑΣΣΑΛΙΑ", "ΜΕΛΒΟΥΡΝΗ", "ΜΥΛΟΣ", "ΜΙΛΑΝΟ", "ΜΟΝΑΧΟ", "ΜΟΝΤΡΕΑΛ", "ΜΟΣΧΑ", "ΜΠΑΡΧΕΙΝ", "ΜΠΕΡΓΚΕΡ", "ΜΠΟΛΟΝΙΑ",
        "ΜΠΟΡΝΤΟ", "ΜΥΚΟΝΟΣ", "ΜΥΤΙΛΗΝΗ", "ΝΑΝΤΗ", "ΝΑΞΟΣ", "ΝΑΠΟΛΗ", "ΝΗΣΟΣ ΜΑΧΕ", "ΝΗΖΝΙ", "ΝΙΚΑΙΑ", "ΝΟΒΟΣΙΜΠΙΡΣΚ", "ΝΤΙΣΕΛΝΤΟΡΦ",
        "ΝΤΟΥΜΠΡΟΒΝΙΚ", "ΝΥΡΕΜΒΕΡΓΗ", "ΟΣΛΟ", "ΟΥΦΑ", "ΠΑΡΙΣΙ", "ΠΑΡΟΣ", "ΠΕΡΜ", "ΠΟΝΤΓΚΟΡΙΤΣΑ", "ΠΟΡΤΟ", "ΠΡΑΓΑ", "ΠΡΕΒΕΖΑ", "ΡΙΑΝΤ",
        "ΡΙΓΑ", "ΡΟΔΟΣ", "ΡΟΣΤΟΦ", "ΡΩΜΗ", "ΣΑΜΑΡΑ", "ΣΑΜΟΣ", "ΣΑΝΤΟΡΙΝΗ", "ΣΑΡΜ ΕΛ ΣΕΙΧ", "ΣΗΤΕΙΑ", "ΣΙΓΚΑΠΟΥΡΗ", "ΣΚΙΑΘΟΣ", "ΣΚΟΠΙΑ",
        "ΣΚΥΡΟΣ", "ΣΜΥΡΝΗ", "ΣΟΦΙΑ", "ΣΤΟΚΧΟΛΜΗ", "ΣΤΟΥΓΓΑΡΔΗ", "ΣΤΡΑΣΒΟΥΡΓΟ", "ΣΥΔΝΕΥ", "ΤΑΛΙΝ", "ΤΕΛ ΑΒΙΒ", "ΤΖΕΝΤΑ", "ΤΙΡΑΝΑ", "ΤΙΦΛΙΔΑ", "ΤΟΡΟΝΤΟ",
        "ΤΟΥΛΟΥΖΗ", "ΤΥΝΙΔΑ", "ΦΡΑΝΚΦΟΥΡΤΗ", "ΧΑΛΙΦΑΞ", "ΧΑΝΙΑ", "ΧΙΟΣ", "ΧΟΥΡΓΚΑΔΑ"];

    console.log("ΕΠΙΛΕΞΤΕ ΑΠΟ ΤΑ ΠΑΡΑΚΑΤΩ ΑΕΡΟΔΡΟΜΙΑ");

    for (let i = 0; i < from.length; i++) {
        console.log(from[i]);

    }
}

function chooseTicket() {
    console.log("ΚΑΛΩΣ ΗΡΘΑΤΕ ΣΤΗΝ ΑΕΡΟΠΟΡΙΚΗ SKYFLY");
    console.log("1)ΑΓΟΡΑ ΕΙΣΙΤΗΡΙΟΥ         2)Η ΚΡΑΤΗΣΗ ΜΟΥ         3)CHECK-IN");
    console.log("-----------------------------------------------------------------------");
    let choice = prompt("ΕΠΙΛΕΞΤΕ: 1) ΓΙΑ ΑΓΟΡΑ ΕΙΣΙΤΗΡΙΟΥ 2) ΓΙΑ ΚΡΑΤΗΣΗ 3) ΓΙΑ CHECK-IN ");
    let travel = prompt("1)ΑΠΛΗ ΜΕΤΑΒΑΣΗ - 2)ΜΕ ΕΠΙΣΤΡΟΦΗ");

    if (choice == "1") {
        console.log(travel);
    }
    else if (choice == "2") {
        console.log("Η ΚΡΑΤΗΣΗ ΜΟΥ");
    }
    else if (choice == "3") {
        console.log("CHECK - IN");
    }
    return travel;
}

function Main() {
    let ticket = chooseTicket();
    destinations();
    detailsForJourney(ticket);
    personalInfo();
}

Main();