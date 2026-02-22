import userService from "../services/userService.js";

class AdminController {
  async getDashboard(req, res, next) {
    try {
      const users = await userService.getAllUsers();

      res.render("admin/dashboard", {
        admin: req.session.user,
        users,
        keyword: "",
      });
    } catch (error) {
      next(error);
    }
  }

  async searchUsers(req, res) {
    const { keyword } = req.query;
    const users = await userService.searchUsers(keyword);

    res.render("admin/dashboard", {
      admin: req.session.user,
      users,
      keyword,
    });
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    await userService.deleteUser(id);

    res.redirect("/admin/dashboard");
  }

  async getEditUser(req, res) {
    const { id } = req.params;
    console.log("edit user");
    const user = await userService.getUserById(id);

    res.render("admin/editUser", { user, error: null });
  }

  async postEditUser(req, res) {
    console.log("inside posteditUser");
    const { id } = req.params;

    await userService.updateUser(id, req.body);
    res.redirect("/admin/dashboard");
  }
}

export default new AdminController();
