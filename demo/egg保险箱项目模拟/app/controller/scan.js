'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("scan",{
        scan_one_scan:"扫一扫",
    })
  }
}

module.exports = HomeController;
