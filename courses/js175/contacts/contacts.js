const express = require("express");
const morgan = require("morgan");
const { body, validationResult } = require("express-validator");
const session = require("express-session");
const store = require("connect-loki");
const flash = require("express-flash");
const app = express();
const LokiStore = store(session);

const contactData = [
  {
    firstName: "Mike",
    lastName: "Jones",
    phoneNumber: "281-330-8004",
  },
  {
    firstName: "Jenny",
    lastName: "Keys",
    phoneNumber: "768-867-5309",
  },
  {
    firstName: "Max",
    lastName: "Entiger",
    phoneNumber: "214-748-3647",
  },
  {
    firstName: "Alicia",
    lastName: "Keys",
    phoneNumber: "515-489-4608",
  },
];

const sortContacts = contacts => {
  return contacts.slice().sort((contactA, contactB) => {
    if (contactA.lastName < contactB.lastName) {
      return -1;
    } else if (contactA.lastName > contactB.lastName) {
      return 1;
    } else if (contactA.firstName < contactB.firstName) {
      return -1;
    } else if (contactA.firstName > contactB.firstName) {
      return 1;
    } else {
      return 0;
    }
  });
};

const clone = object => JSON.parse(JSON.stringify(object));

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(morgan("common"));

app.use(session({
  cookie: {
    httpOnly: true,
    maxAge: 31 * 24 * 60 * 60 * 1000, // 31 days in milliseconds
    path: "/",
    secure: false,
  },
  name: "launch-school-contacts-manager-session-id",
  resave: false,
  saveUninitialized: true,
  secret: "this is not very secure",
  store: new LokiStore({}),
}));

// Add the following code after app.use(session(...);
app.use(flash());

app.use(function initContacts(req, res, next) {
  if (!("contactData" in req.session)) {
    req.session.contactData = clone(contactData);
  }
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(function addUniqueContacts(req, res, next) {
  let uniqueNames = new Set();
  req.session.contactData.forEach((contact) => {
    const { firstName, lastName } = contact;
    uniqueNames.add(firstName + lastName);
  });
  req.session.uniqueNames = uniqueNames;
  next();
})

app.use((req, res, next) => {
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
});

app.get("/", (req, res) => {
  res.redirect("/contacts");
});

app.get("/contacts", (req, res) => {
  res.render("contacts", {
    contacts: sortContacts(req.session.contactData),
  });
});

app.route("/contacts/new")
  .get((req, res, next) => {
    res.render("new-contact");
  })
  .post(
    [
      body('firstName')
        .trim()
        .isLength({ min: 1 })
        .withMessage(`First Name is required.`)
        .bail()
        .isLength({ max: 25 })
        .withMessage(`First Name is too long. Maximum length is 25 characters.`)
        .isAlpha()
        .withMessage(`First Name contains invalid characters. The name must be alphabetic.`),
      body('lastName')
        .trim()
        .isLength({ min: 1 })
        .withMessage(`Last Name is required.`)
        .bail()
        .isLength({ max: 25 })
        .withMessage(`Last Name is too long. Maximum length is 25 characters.`)
        .isAlpha()
        .withMessage(`Last Name contains invalid characters. The name must be alphabetic.`),
      body("phoneNumber")
        .trim()
        .isLength({ min: 1 })
        .withMessage("Phone number is required.")
        .bail()
        .matches(/^\d\d\d-\d\d\d-\d\d\d\d$/)
        .withMessage("Invalid phone number format. Use ###-###-####."),
    ],  
  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach(error => req.flash("error", error.msg));
      // The next 2 lines are for demonstration purposes only.
      
      res.render("new-contact", {
        flash: req.flash(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
      });
    } else {
      next();
    }
  },
  (req, res) => {
    req.session.contactData.push({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
    });

    req.flash("success", "New contact added to list!");
    res.redirect("/contacts");
  }
);

app.listen(3000, () => {
  console.log("Listening to port 3000.");
});
