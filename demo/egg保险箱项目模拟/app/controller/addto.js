'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("addto",{
      Add_safe:"添加保险箱"
    })
  }
}

module.exports = HomeController;