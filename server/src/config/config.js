const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI,
    //useNewUrlParser: true,
  },
  defualt: {
    SECRET: "ffff",
    DATABASE: "mongodb://localhost:27017/travel-log",
    //useNewUrlParser: true,
  },
};

exports.get = function get(env) {
  return config.defualt;
  //return config[env] || config.defualt;
};
