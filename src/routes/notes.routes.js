const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.use(ensureAuthenticated);

// router params ==> Obrigatorio passar os parametros
notesRoutes.get("/", notesController.index);
notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;

// // query params
// app.get("/search", (req, res) => {
//   const { page, limit } = req.query;

//   res.send(`Page: ${page}.
//           Limit: ${limit}.
// `);
// });
