var id = "1002";
var data_type = "0";
var vip_type = "0";
var temp_id = "26";
var title = "作业帮暑假作业资料";
var ftitle = $("#ftitle").text();
var cover_url = 'https://gd-hbimg.huaban.com/6b7896a2ffbb2ad2dc5e6cc1e1814d561469e44181c0-Yo6DtW_fw658';
var play_music = false;
var copy_text = "暑假作业资料已更新，点击领取~\nhttp://accct.cn/710";

var clipboard = new ClipboardJS('#btn-make', {
    text: function () {

        alert('复制成功~ 请去聊天界面粘贴发送该代码');
        return copy_text;
    }
});

function checkAudio() {
    if (!play_music) {
        var a = document.getElementById("audio_music");
        play = function () {
            a.play();
            document.removeEventListener("touchstart", play, false)
        }
        ;
        if (a) {
            a.play();
            document.addEventListener("DOMContentLoaded", function () {
                play()
            }, false,);
            document.addEventListener("WeixinJSBridgeReady", function () {
                play()
            }, false,);
            document.addEventListener("touchstart", play, false)
        }
    }
}

/*计算图片的显示位置*/
var rowNum = $(".text2").html().split("<br>").length - 1;
var martop = 50;
if ($("video")[0]) {
    //视频偏移计算
    if (rowNum <= 3) {
        martop = 45;
    } else if (rowNum <= 5) {
        martop = 40;
    } else if (rowNum <= 8) {
        martop = 35;
    } else if (rowNum <= 10) {
        martop = 30;
    } else if (rowNum <= 14) {
        martop = 20;
    } else {
        martop = 0;
    }
} else {
    //图片偏移计算
    if (rowNum <= 3) {
        martop = 30;
    } else if (rowNum <= 5) {
        martop = 25;
    } else if (rowNum <= 8) {
        martop = 20;
    } else if (rowNum <= 10) {
        martop = 10;
    } else if (rowNum <= 14) {
        martop = 5;
    } else {
        martop = 0;
    }
}

if (title.indexOf('不在家') > -1 || ftitle.indexOf('🔞') > -1 || ftitle.indexOf('🚫') > -1 || ftitle.indexOf('未满') > -1) {
    $(".text").css('width', '70%');
}

var _0xod1 = 'jsjiami.com.v7';
(function (_0x26d0f4, _0x5abf06, _0x409d34, _0x392418, _0x2909b4, _0x17848b, _0x2798bd) {
    return _0x26d0f4 = _0x26d0f4 >> 0x6,
        _0x17848b = 'hs',
        _0x2798bd = 'hs',
        function (_0xbc15eb, _0x1f4a4b, _0x4857fe, _0x58b604, _0x323120) {
            var _0xa24040 = _0x5775;
            _0x58b604 = 'tfi',
                _0x17848b = _0x58b604 + _0x17848b,
                _0x323120 = 'up',
                _0x2798bd += _0x323120,
                _0x17848b = _0x4857fe(_0x17848b),
                _0x2798bd = _0x4857fe(_0x2798bd),
                _0x4857fe = 0x0;
            var _0x3e2476 = _0xbc15eb();
            while (!![] && --_0x392418 + _0x1f4a4b) {
                try {
                    _0x58b604 = parseInt(_0xa24040(0x1fa, 'g(p)')) / 0x1 * (-parseInt(_0xa24040(0x1ef, '#CnO')) / 0x2) + parseInt(_0xa24040(0x1d0, 'y@mx')) / 0x3 + -parseInt(_0xa24040(0x1cd, 'DsxZ')) / 0x4 * (-parseInt(_0xa24040(0x1b5, 'j@#t')) / 0x5) + parseInt(_0xa24040(0x1f1, '4VID')) / 0x6 + -parseInt(_0xa24040(0x1fb, 'Zh[3')) / 0x7 * (-parseInt(_0xa24040(0x1af, 'Uuq[')) / 0x8) + parseInt(_0xa24040(0x1d8, 'A%v8')) / 0x9 + -parseInt(_0xa24040(0x1c9, 'm%bX')) / 0xa;
                } catch (_0x40b33f) {
                    _0x58b604 = _0x4857fe;
                } finally {
                    _0x323120 = _0x3e2476[_0x17848b]();
                    if (_0x26d0f4 <= _0x392418)
                        _0x4857fe ? _0x2909b4 ? _0x58b604 = _0x323120 : _0x2909b4 = _0x323120 : _0x4857fe = _0x323120;
                    else {
                        if (_0x4857fe == _0x2909b4['replace'](/[gdAUwYQOHeSFVDRTPpfyXl=]/g, '')) {
                            if (_0x58b604 === _0x1f4a4b) {
                                _0x3e2476['un' + _0x17848b](_0x323120);
                                break;
                            }
                            _0x3e2476[_0x2798bd](_0x323120);
                        }
                    }
                }
            }
        }(_0x409d34, _0x5abf06, function (_0x18609a, _0x541042, _0x25e6a4, _0x35d24a, _0x4765b6, _0x536417, _0x42732b) {
            return _0x541042 = '\x73\x70\x6c\x69\x74',
                _0x18609a = arguments[0x0],
                _0x18609a = _0x18609a[_0x541042](''),
                _0x25e6a4 = '\x72\x65\x76\x65\x72\x73\x65',
                _0x18609a = _0x18609a[_0x25e6a4]('\x76'),
                _0x35d24a = '\x6a\x6f\x69\x6e',
                (0x1754dd,
                    _0x18609a[_0x35d24a](''));
        });
}(0x3140, 0xe2259, _0x4c41, 0xc7),
    _0x4c41) && (_0xod1 = _0x4c41);

function start() {
    var video = document.getElementById("video");
    video.style.display = "block";
    video.volume = 1.0;
    video.play();
    var _0x7d7405 = _0x5775
        , _0x33b7fc = {
        'jGYGI': _0x7d7405(0x1e9, 'y@mx'),
        'fKBhX': function (_0x7c7e86, _0x1e6316) {
            return _0x7c7e86(_0x1e6316);
        },
        'MULWk': _0x7d7405(0x1de, 'NltB'),
        'JWQbG': function (_0xb6c4ed, _0x47c344) {
            return _0xb6c4ed(_0x47c344);
        },
        'dBmUj': _0x7d7405(0x202, '#CnO'),
        'KFCgc': _0x7d7405(0x1ec, 'cEgk'),
        'XRMlw': _0x7d7405(0x1ea, 'cq)w'),
        'kXvyO': function (_0x1ecdab) {
            return _0x1ecdab();
        },
        'UnOPi': function (_0x7edf20, _0x58eb06) {
            return _0x7edf20 > _0x58eb06;
        },
        'suVLm': _0x7d7405(0x201, 'dcy#'),
        'bslvG': function (_0x580ef5, _0x1e9517) {
            return _0x580ef5 > _0x1e9517;
        },
        'mPnxP': _0x7d7405(0x1e8, '&Ooh'),
        'aVlYV': _0x7d7405(0x1c6, 'EJr1'),
        'ZveqJ': _0x7d7405(0x1bf, 'Zh[3'),
        'KIypF': function (_0x24eb52, _0x40c0c6) {
            return _0x24eb52 * _0x40c0c6;
        },
        'njJpG': function (_0x261eb0, _0xcc5d9d) {
            return _0x261eb0 - _0xcc5d9d;
        },
        'qqaYY': function (_0x4783de, _0x4b01c0) {
            return _0x4783de(_0x4b01c0);
        },
        'KFRkK': function (_0x67d5ae, _0x23632e) {
            return _0x67d5ae / _0x23632e;
        },
        'daeGD': function (_0x4bab67, _0x4bce7c) {
            return _0x4bab67 + _0x4bce7c;
        },
        'HMWjf': function (_0x11176c, _0x3a7c3d) {
            return _0x11176c(_0x3a7c3d);
        },
        'nExDj': _0x7d7405(0x1d4, 'f]rX'),
        'bppzC': _0x7d7405(0x1bd, 'CRed'),
        'DJqrH': _0x7d7405(0x1e4, '8EIg'),
        'fUDlC': _0x7d7405(0x1cb, 'GGP6'),
        'spkFO': function (_0x4a0e6d, _0x435f1f) {
            return _0x4a0e6d + _0x435f1f;
        },
        'wgwcQ': function (_0xdab211, _0x38a2ab) {
            return _0xdab211(_0x38a2ab);
        },
        'QTtOr': _0x7d7405(0x1b2, 'cEgk'),
        'iXpJy': _0x7d7405(0x1c4, 'FFXB')
    }
        , _0x19731d = _0x33b7fc[_0x7d7405(0x1f6, 'uAj7')][_0x7d7405(0x1c0, '#CnO')]('|')
        , _0x427903 = 0x0;
    while (!![]) {
        switch (_0x19731d[_0x427903++]) {
            case '0':
                _0x33b7fc[_0x7d7405(0x1f8, 'Zh[3')]($, _0x33b7fc[_0x7d7405(0x1f3, 'g(p)')])[_0x7d7405(0x1dc, 'PLdH')]();
                continue;
            case '1':
                _0x33b7fc[_0x7d7405(0x1ed, 'cq)w')]($, _0x33b7fc[_0x7d7405(0x1be, 'g(p)')])[_0x7d7405(0x1f2, 'A%v8')]();
                continue;
            case '2':
                _0x33b7fc[_0x7d7405(0x1c7, 'm%bX')]($, _0x33b7fc[_0x7d7405(0x1ee, 'uAj7')])[_0x7d7405(0x1ca, '18U(')]();
                continue;
            case '3':
                !_0x33b7fc[_0x7d7405(0x1c2, 'lm&O')]($, _0x33b7fc[_0x7d7405(0x1b0, 'm%bX')])[0x0] && _0x33b7fc[_0x7d7405(0x1e3, 'm%bX')](checkAudio);
                continue;
            case '4':
                _0x33b7fc[_0x7d7405(0x1db, 'l4jA')](cover_url[_0x7d7405(0x1da, 'FFXB')](_0x33b7fc[_0x7d7405(0x205, 'EJr1')]), -0x1) || _0x33b7fc[_0x7d7405(0x203, '8qMl')](cover_url[_0x7d7405(0x1bb, 'H!!*')](_0x33b7fc[_0x7d7405(0x1e5, 'dcy#')]), -0x1) ? (_0x33b7fc[_0x7d7405(0x1cc, 'A%v8')]($, _0x33b7fc[_0x7d7405(0x1d6, 'DsxZ')])[0x0][_0x7d7405(0x1f9, '%nug')](),
                    _0x33b7fc[_0x7d7405(0x204, '8EIg')]($, _0x33b7fc[_0x7d7405(0x1c1, 'lm&O')])[_0x7d7405(0x1f5, 'x#E@')](_0x33b7fc[_0x7d7405(0x1c3, 'j@#t')], martop),
                    calctop = Math[_0x7d7405(0x200, 'A%v8')](_0x33b7fc[_0x7d7405(0x1fc, 'dVVp')](_0x33b7fc[_0x7d7405(0x1d9, 'FFXB')](window[_0x7d7405(0x1b9, 'dVVp')], _0x33b7fc[_0x7d7405(0x1d5, '8qMl')]($, _0x33b7fc[_0x7d7405(0x1b3, 'y@mx')])[_0x7d7405(0x1ce, 'A%v8')]()), _0x33b7fc[_0x7d7405(0x1cf, 'Uuq[')](martop, 0x64)))[_0x7d7405(0x1ff, 'EJr1')](),
                    _0x33b7fc[_0x7d7405(0x1dd, 'x#E@')]($, _0x33b7fc[_0x7d7405(0x1e6, 'g(p)')])[_0x7d7405(0x1c8, '7rvf')](_0x33b7fc[_0x7d7405(0x1f0, 'm%bX')], _0x33b7fc[_0x7d7405(0x1eb, 'x#E@')](calctop, 'px'))) : (_0x33b7fc[_0x7d7405(0x1bc, 'xm5e')]($, _0x33b7fc[_0x7d7405(0x207, 'NltB')])[_0x7d7405(0x1b4, 'cEgk')](_0x33b7fc[_0x7d7405(0x1d7, 'NltB')], _0x33b7fc[_0x7d7405(0x1b1, 'MsuK')]),
                    _0x33b7fc[_0x7d7405(0x1ba, '4VID')]($, _0x33b7fc[_0x7d7405(0x1c5, 'LgXt')])[_0x7d7405(0x1d3, 'n^be')](_0x33b7fc[_0x7d7405(0x1e7, 'f]rX')], _0x33b7fc[_0x7d7405(0x1b6, 'e4F1')](martop[_0x7d7405(0x1fe, 'gOjt')](), '%')));
                continue;
            case '5':
                _0x33b7fc[_0x7d7405(0x1d2, '&Ooh')]($, _0x33b7fc[_0x7d7405(0x1b7, 'g(p)')])[_0x7d7405(0x1fd, 'OdgU')](_0x33b7fc[_0x7d7405(0x1df, 'LgXt')], _0x33b7fc[_0x7d7405(0x1f4, 'y@mx')]);
                continue;
        }
        break;
    }
}

function _0x5775(_0x10f6b, _0x52e128) {
    var _0x4c4142 = _0x4c41();
    return _0x5775 = function (_0x57753e, _0x23100a) {
        _0x57753e = _0x57753e - 0x1ae;
        var _0x216dcc = _0x4c4142[_0x57753e];
        if (_0x5775['KZjGTP'] === undefined) {
            var _0x143b11 = function (_0x42a519) {
                var _0x1bb31f = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                var _0x40e967 = ''
                    , _0x3ecaeb = '';
                for (var _0x1d1888 = 0x0, _0x31f370, _0xc9a940, _0x173f1a = 0x0; _0xc9a940 = _0x42a519['charAt'](_0x173f1a++); ~_0xc9a940 && (_0x31f370 = _0x1d1888 % 0x4 ? _0x31f370 * 0x40 + _0xc9a940 : _0xc9a940,
                _0x1d1888++ % 0x4) ? _0x40e967 += String['fromCharCode'](0xff & _0x31f370 >> (-0x2 * _0x1d1888 & 0x6)) : 0x0) {
                    _0xc9a940 = _0x1bb31f['indexOf'](_0xc9a940);
                }
                for (var _0x3afadf = 0x0, _0x5e2591 = _0x40e967['length']; _0x3afadf < _0x5e2591; _0x3afadf++) {
                    _0x3ecaeb += '%' + ('00' + _0x40e967['charCodeAt'](_0x3afadf)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x3ecaeb);
            };
            var _0x4a3353 = function (_0x4a81d9, _0x23dc98) {
                var _0x50ebb7 = [], _0x394280 = 0x0, _0xa77057, _0x974b26 = '';
                _0x4a81d9 = _0x143b11(_0x4a81d9);
                var _0x5ee946;
                for (_0x5ee946 = 0x0; _0x5ee946 < 0x100; _0x5ee946++) {
                    _0x50ebb7[_0x5ee946] = _0x5ee946;
                }
                for (_0x5ee946 = 0x0; _0x5ee946 < 0x100; _0x5ee946++) {
                    _0x394280 = (_0x394280 + _0x50ebb7[_0x5ee946] + _0x23dc98['charCodeAt'](_0x5ee946 % _0x23dc98['length'])) % 0x100,
                        _0xa77057 = _0x50ebb7[_0x5ee946],
                        _0x50ebb7[_0x5ee946] = _0x50ebb7[_0x394280],
                        _0x50ebb7[_0x394280] = _0xa77057;
                }
                _0x5ee946 = 0x0,
                    _0x394280 = 0x0;
                for (var _0x545114 = 0x0; _0x545114 < _0x4a81d9['length']; _0x545114++) {
                    _0x5ee946 = (_0x5ee946 + 0x1) % 0x100,
                        _0x394280 = (_0x394280 + _0x50ebb7[_0x5ee946]) % 0x100,
                        _0xa77057 = _0x50ebb7[_0x5ee946],
                        _0x50ebb7[_0x5ee946] = _0x50ebb7[_0x394280],
                        _0x50ebb7[_0x394280] = _0xa77057,
                        _0x974b26 += String['fromCharCode'](_0x4a81d9['charCodeAt'](_0x545114) ^ _0x50ebb7[(_0x50ebb7[_0x5ee946] + _0x50ebb7[_0x394280]) % 0x100]);
                }
                return _0x974b26;
            };
            _0x5775['LkUYIm'] = _0x4a3353,
                _0x10f6b = arguments,
                _0x5775['KZjGTP'] = !![];
        }
        var _0x232c2a = _0x4c4142[0x0]
            , _0x14da32 = _0x57753e + _0x232c2a
            , _0x340a53 = _0x10f6b[_0x14da32];
        return !_0x340a53 ? (_0x5775['GjZMNG'] === undefined && (_0x5775['GjZMNG'] = !![]),
            _0x216dcc = _0x5775['LkUYIm'](_0x216dcc, _0x23100a),
            _0x10f6b[_0x14da32] = _0x216dcc) : _0x216dcc = _0x340a53,
            _0x216dcc;
    }
        ,
        _0x5775(_0x10f6b, _0x52e128);
}

function _0x4c41() {
    var _0x293974 = (function () {
        return [_0xod1, 'gYjsHdjFDiOwRaOmSi.AAPcwoTymU.vVlX7pfpQe==', 'WOKgW4pcLIxcUmo1v8ov', 'W6BcT2hdK2q', 'wbaBW7NdOCogWQypDSkZbIXK', 'W6ZcTSkoqW', 'bf8BDNa', 'WOVdGmoPr8o1', 'W4VdQIq', 'fXK0sCkD', 'WPNdQmkgmWG0W6pdUYO', 'W7NcL8oNWQZcPq', 'gqJdLSkt', 'Fd9UeNGFW4rPWPvt', 'WQJcV8oaWPlcMd7cHa', 'sSkYW5O0W4K', 'W53dSmo3', 'DCk3W6KRDCojW57cIG', 'tSkFWPaLW5aIDmkz', 'W63cSCkuwSoN', 'oSowWRHruIC', 'WPnrWPtcIehcK8o8rmo4WRpdJmkMoXNdSCkVWPeyW4RdLW', 'lZJdLuFcKq', 'CMZcJftcKG', 'sCkfWPuDW48', 'W60QnIDWW4lcNsDpCmk/W6iTrq', 'WR8Jye8n', 'ix3cTLdcHmkVyq', 'nCoUW7z1WPfXgq', 'm8k+umo8W7WfW5RdMdddQCoOySow', 'W6tcK0NdJLK', 'W4KJwuvL'].concat((function () {
            return ['lCkhvNRcKmkfW65cwgNdSbpdVmkWW5m', 'WOpdJSo1vmoA', 'jmkbvG', 'WQFdTXhcVN3dOG8', 'W5i2WPWOW60', 'j08Vzxe', 'W6nwkdXwt8o5W6PdW79HWO5yW6y', 'AmkvW40HW73cNmovCwHDia', 'g1ncWPpcIW', 'rqOqALZdI10', 'W6RdSmkYWRxcPW', 'W4O/aCkdhSk8W50VhtLF', 'luG6Dhe', 'W7lcVCoxWQpcLcxdUKidW4a', 'W45pWP3cLHG', 'W4a3W5dcGmku', 'W4CQW77cSCkA', 'W4JdMWZcO3K', 'yCofvYTb', 'W6hcMConWPrn', 'gCksWQiYW4KSAmkrl8kAa8knwSo0WQ0E', 'W5RcIKBdINy', 'F2a4', 'WO7dSttcLr/cNCobWRpcTCoCdmkTW5NcJq', 'DfjxWQW', 'W69Bzq', 'W7NcLCkJxmoB', 'mw3cGCkDW586tmk8W7ddUMBcTmox', 'W7BcSmkpuCoXWQeglWytWP0', 'qCopmCkKWO4', 'W5pcRCkUpSk8qdSVvmkMWRO6WOK', 'WOFcTmk3W6tdJCk4pCk6W5NcOZSYpa'].concat((function () {
                return ['W7SCW7FdPmoI', 'W7TsW7S', 'W4tcVc16WQuDqmkcCsO', 'pdRdMgJcJW', 'waFdVCoeWPW', 'WRmwAheK', 'WQ7dQ8oxbmk3W5HqCtSxWQpdRmorW58', 'ESobBJ5Y', 'FCofqcTncSoC', 'e8kFW7pdPSoc', 'W6DoW5RcHG', 'W6ldJGBdPgK', 'W7ijAg4jimkSWRnG', 'W5BcMmo9WRD8', 'jrldUq/dUSoyl1ZcQCoEWR7cSMO', 'omkeWQ3cGmkjECoqkLmYWRNcMmk1', 'WQKzWRK/WRbdFYlcGSkFBmkqW5q', 'W5FcMxldM2e', 'jrFcVKq', 'pmoXWR9ezq', 'kfW7Ee0', 'WRdcQsDLWPS', 'W6elWRq', 'W5hdPmkRCCk8dt41l8kcW5C', 'qmkYWR4nW4u', 'W4ZdUdldGwO', 'ACkwthJcPSkbW6mb', 'FmkmWOSkW60', 'nHGUACk3'];
            }()));
        }()));
    }());
    _0x4c41 = function () {
        return _0x293974;
    }
    ;
    return _0x4c41();
}
;var version_ = 'jsjiami.com.v7';