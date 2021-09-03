/**
 * MIT License
 *
 * Lighthouse CI Configuration
 * https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md
 *
 * @author Rigin Oommen <riginoommen@gmail.com>
 *
 * Created at     : 2021-08-23 11:59:53
 * Last modified  : 2021-0-23 11:59:53
 */
 module.exports = {
    ci: {
        collect: {
            numberOfRuns: 3,
            settings: {
                chromeFlags: "--no-sandbox --ignore-certificate-errors"
            },
            url: ['https://lighthouse-app-devconf.herokuapp.com']
        },
        assert: {
            preset: 'lighthouse:recommended'
        },
    },
};
