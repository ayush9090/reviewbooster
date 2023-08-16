class MmotelServices {
  constructor() {}

  async getMotels(req: any) {
    return {
      name: "krutik's motel",
    };
  }
}

module.exports = new MmotelServices();
