import { create } from 'jss';
import { jssPreset } from '@material-ui/core/styles';
import prefixer from 'jss-plugin-vendor-prefixer'

const jss = create({
  plugins: [...jssPreset().plugins, prefixer()],
});

export default jss
