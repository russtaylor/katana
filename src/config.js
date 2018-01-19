const os = require('os')

let config = {}

config.defaults = {
  services: {
    uploadService: 'imgur',
    shortenerService: 'is.gd'
  },

  shortcuts: {
    screenshotSelection: 'command+alt+s',
    screenshotFull: '',
    screenshotWindow: '',
    shortenUrl: 'command+alt+0'
  }
}

config.icons = {
  app: `${__dirname}/../app/static/images/icon.png`,
  tray: {
    default: `${__dirname}/../app/static/images/menubar/IconTemplate@2x.png`,
    active: `${__dirname}/../app/static/images/menubar/active/IconTemplate@2x.png`
  }
}

config.paths = {
  application: `${os.homedir()}/.katana`,
  uploads: `${os.homedir()}/.katana/uploads`
}

config.services = {
  imgur: {
    token: '8049ae3132218f0'
  },

  pomf: {
    'comfy.moe': {
      uploadPath: 'https://comfy.moe/upload.php',
      resultPath: 'https://comfy.moe'
    },

    'doko.moe': {
      uploadPath: 'https://doko.moe/upload.php',
      resultPath: 'https://a.doko.moe'
    },

    'pomf.cat': {
      uploadPath: 'https://pomf.cat/upload.php',
      resultPath: 'https://a.pomf.cat'
    },

    'sinister.ly': {
      uploadPath: 'https://sister.ly/upload.php',
      resultPath: 'https://a.sinister.ly'
    },

    'void.cat': {
      uploadPath: 'https://void.cat/upload.php',
      resultPath: 'https://void.cat'
    }
  },

  shorteners: ['is.gd', 'v.gd', 'goo.gl']
}

module.exports = config