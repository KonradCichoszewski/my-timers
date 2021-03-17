const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const timerController = require("../controllers/timerController");

const auth = require("../middlewares/auth");

router.post("/", auth, catchErrors(timerController.createTimer));
router.get("/", auth, catchErrors(timerController.getTimers));
router.post("/delete", auth, catchErrors(timerController.deleteTimer));

module.exports = router;
