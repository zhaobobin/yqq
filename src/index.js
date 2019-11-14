import dva from 'dva';
import {createBrowserHistory} from 'history';
import './theme/base.less'

// 1. Initialize
const app = dva({history: createBrowserHistory()});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/global').default);

// 4. Router
app.router(require('./routes/router').default);

// 5. Start
app.start('#root');

export default app;
