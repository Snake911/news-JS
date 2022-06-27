import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '1b5795b8e6754b4cba7cf2e2a94b1833',
        });
    }
}

export default AppLoader;
