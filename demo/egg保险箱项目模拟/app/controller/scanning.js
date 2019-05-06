'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("scanning",{
      Add_one:"添加保险箱",
      Add_two:"添加保险箱",
      scan_Typeface:"扫一扫保险箱二维码即可自动添加保险箱",
      scanning_Typeface:"扫描二维码添加",
    })
  }
}

module.exports = HomeController;
