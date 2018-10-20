'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var BaseStyles = {};

BaseStyles.ReactBash = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
};

BaseStyles.header = {
    display: "none"
};

var circle = {
    display: 'inline-block',
    height: '15px',
    marginRight: '5px',
    width: '15px'
};

BaseStyles.redCircle = Object.assign({}, circle, {
    backgroundColor: '#bf616a'
});

BaseStyles.yellowCircle = Object.assign({}, circle, {
    backgroundColor: '#ebcb8b'
});

BaseStyles.greenCircle = Object.assign({}, circle, {
    backgroundColor: '#a3be8c'
});

BaseStyles.body = {
    flexGrow: "1",
};

BaseStyles.form = {
    display: 'flex'
};

BaseStyles.input = {
    background: 'none',
    border: 'none',
    color: 'inherit',
    flexGrow: '1',
    outline: 'none !important',
};

BaseStyles.prefix = {
    marginRight: '5px'
};

exports.default = {
    light: Object.assign({}, BaseStyles, {
        body: Object.assign({}, BaseStyles.body, {
            backgroundColor: 'black',
            color: '#eee'
        }),
        header: Object.assign({}, BaseStyles.header, {
            backgroundColor: '#eee'
        }),
        prefix: Object.assign({}, BaseStyles.prefix, {
            color: '#bd081c'
        })
    }),
    dark: Object.assign({}, BaseStyles, {
        body: Object.assign({}, BaseStyles.body, {
            backgroundColor: '#000',
            color: '#d0d0d0'
        }),
        header: Object.assign({}, BaseStyles.header, {
            backgroundColor: '#dcdbdb'
        }),
        prefix: Object.assign({}, BaseStyles.prefix, {
            color: '#5b65fb'
        })
    }),
    solarized: Object.assign({}, BaseStyles, {
        body: Object.assign({}, BaseStyles.body, {
            backgroundColor: 'rgba(0,0,0,0)',
            color: '#e2e7ef'
        }),
        header: Object.assign({}, BaseStyles.header, {
            backgroundColor: 'rgba(0,0,0,0)'
        }),
        prefix: Object.assign({}, BaseStyles.prefix, {
            color: '#f6c700'
        })
    })
};
