const fs = require("fs");
const { setupStrapi } = require("./strapi");
const request = require("co-supertest");

/** this code is called once before any test is called */
before((done) => {
  done()
  return setupStrapi();
});

/** this code is called once before all the tested are finished */
// after(async (done) => {
//   // const dbSettings = strapi.config.get("database.connections.default.settings");

//   //delete test database after all tests
//   // if (dbSettings && dbSettings.filename) {
//   //   const tmpDbFile = `${__dirname}/../${dbSettings.filename}`;
//   //   if (fs.existsSync(tmpDbFile)) {
//   //     fs.unlinkSync(tmpDbFile);
//   //   }
//   // }
//   done();
// });

it("strapi is defined", async (done) => {
  console.log("strapi is defined");
  done();
});

require("./controllers/activity.test.js");
require("./controllers/activityassignee.test.js");
require("./controllers/activitytype.test.js");
require("./controllers/contact.test.js");
require("./controllers/contacttag.test.js");
require("./controllers/country.test.js");
require("./controllers/district.test.js");
require("./controllers/state.test.js");
require("./controllers/tag.test.js");
require("./controllers/village.test.js");