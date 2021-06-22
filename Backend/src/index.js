import app from './app';
import config from './config';
import './database';

app.set('port', config.listenPort);

app.listen(app.get('port'), () => {
    console.log('servidor en el puerto', app.get('port'));
});