import {observable, action, computed} from 'mobx'

// https://www.npmjs.com/package/react-device-detect
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isTablet,
  isAndroid,
  isIOS,
} from 'react-device-detect'

class Device {
  BrowserView = BrowserView
  MobileView = MobileView

  @observable isBrowser = isBrowser
  @observable isMobile = isMobile
}

export default Device