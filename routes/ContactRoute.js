const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  getContactById,
  updateContactById,
  deleteContact,
} = require("../controllers/ContactController");
const validateToken = require("../middleware/validateTokenHandler");
router.use(validateToken);
router.route("/").get(getContact).post(createContact);

router
  .route("/:id")
  .get(getContactById)
  .put(updateContactById)
  .delete(deleteContact);

module.exports = router;
