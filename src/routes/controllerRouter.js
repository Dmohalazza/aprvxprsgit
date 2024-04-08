
const Router = require("express");
const router = Router();

const {controller, approve} = require("../controllers/User/controllerController");


router.get("/", (request, response) => {

    response.send("Belle!!!");

});
  
router.post("/controller", controller);
router.post("/approve", approve);

module.exports = router;
