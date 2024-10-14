/*
 * Big Search (大术专搜)
 *     https://github.com/garywill/BigSearch
 *     https://addons.mozilla.org/firefox/addon/big-search/
 *     https://chrome.google.com/webstore/detail/big-search/ojcnjeigmgjaiolalpapfnmmhdmpjhfb
 * 

 * The code of this file is released under：
 *     1. GNU AGPL (GNU Affero General Public License)
 *     2. Our (Big Search) statement:
 *          1) AGPL won't have infect to other files or parts of Big Search.
 *              Other files/parts can be in other license or copyright status.
 *             The original creator (garywill) of this file reserves
 *              all rights to the code and data he creats or maintains
 *             (i.e. Big Search project and its creator's related projects,
 *              related features and extended featues are not restricted by 
 *              AGPL) 
 *          2) If any person or organization use this file or any part of
 *           its data in any form (including but not limited to 
 *           converting data format, compressing code, compiling link, 
 *           non-compiling link, script call, URL-link using, 
 *           using any part of data, etc.), then your entire project
 *           (including but not limited to user interfaces, application 
 *           program interfaces, underlying engine, background and related 
 *           logic code etc.) using this file is AGPL licensed.
 * 
 * 此文件的代码在这些许可协议下发布：
 *     1. GNU AGPL (GNU Affero General Public License)
 *     2. 我们（大术专搜）的声明：
 *          1) AGPL不对大术专搜的其他文件或部分产生作用，其他部分可以是别的许可证或版权状态。
 *              此文件的原创建者（garywill）保留自己所作及所收集的代码和数据的所有权利。
 *              （也就是说大术专搜及其创建者的相关、周边项目、功能、扩充功能并不受AGPL制约）
 *          2) 如果任何人或组织以任意形式（形式包括但不限于转换数据格式、压缩代码、编译链接、
 *              非编译链接、脚本调用、URL调用、取用部分数据 等）使用了此文件或其中
 *              任意部分数据，则你使用了此文件的整个项目皆为AGPL许可（包括但不限于用户界面、
 *              应用程序界面、底层引擎、背部及相关的逻辑代码 等）。
 * 
 */

/*
    Engines Data from Big Search
    Copyright (C) 2008  garywill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

let catas;
let sEngines;

function init_data() {
    
catas = {
    "general": {
        label: '🌐' + i18n(["通用搜索", "General"]),
        engines: [
            { type:"label", lstr:"中土五岳" , visible_lang: "zh"},
            { type:"engine", name:"baidu", visible_lang: "zh"},
            // { type:"engine", name:"fsou", visible_lang: "zh"},
            { type:"engine", name:"sogou", visible_lang: "zh"},
            { type:"engine", name:"360so", visible_lang: "zh"},
            { type: "engine", name: "chinaso", visible_lang: "zh" },
            { type:"label", lstr:"村融四海", visible_lang: "zh"},
            { type:"label", lstr:"General", visible_lang: "en"},
            { type:"engine", name:"bing"},
            { type:"engine", name:"google"},
            { type:"engine", name:"yahoo"},
            { type:"engine", name:"yandex"},
            { type:"label", lstr:"Engines Claiming No-Tracking", visible_lang: "en"},
            { type:"engine", name:"duckduckgo"},
            { type:"engine", name:"startpage"},
            { type:"engine", name:"ecosia"},
            { type:"engine", name:"qwant"},
            { type:"engine", name:"findx"},
            { type:"engine", name:"metager"},
            { type:"engine", name:"swisscows"},
        ],
    },
    "program": {
        label: '💻' + i18n(["软件程序", "Programing"]),
        engines: [
            { type:"engine", name:"github"},
            { type:"engine", name:"python"},
            { type:"engine", name:"rust"},
            { type:"engine", name:"mdn"},
            { type:"engine", name:"chrome_dev"},
            { type:"engine", name:"stackexchange"},
            { type:"engine", name:"alternativeto"},
            { type: "label", lstr: i18n(["浏览器扩展", "Browser Extensions"]) },
            { type: "engine", name: "ggl_ext"},
            { type: "engine", name: "ffx_ext"},
            { type: "engine", name: "sfr_ext"},
            { type: "label", lstr: i18n(["浏览器网页脚本", "Browser UserScripts"]) },
            { type: "engine", name: "greasy_fork"},
            { type: "engine", name: "user_script_zone"},
            { type: "engine", name: "open_user_js"},
            { type: "engine", name: "script_cat", visible_lang:"zh"},
            { type: "label", lstr: i18n(["浏览器网页样式", "Browser UserStyle"])},
            { type: "engine", name: "user_style_world"},
            { type: "engine", name: "user_style_org"},
            { type:"label", lstr:"Windows"},
            { type:"engine", name:"choco"},
            { type:"engine", name:"scoop"},
            { type:"engine", name:"cygwin"},
            { type:"engine", name:"ms_up_cata"},
            { type:"label", lstr:"Linux"},
            { type:"engine", name:"manpage"},
            { type:"engine", name:"homebrew"},
            { type:"engine", name:"docker"},
            { type:"engine", name:"flathub"},
            { type:"engine", name:"snapcraft"},
            { type:"engine", name:"pkgs.org"},
            { type:"engine", name:"repology"},
            { type:"engine", name:"nix"},
            { type:"engine", name:"guix"},
            
        ],
    }, 
    "mobileapp": {
        label: '📱' + i18n(["手机应用", "Mobile Apps"]),
        engines: [
            { type:"label", lstr:"Android"},
            { type:"engine", name:"google_play"},
            { type:"engine", name:"fdroid"},
            { type:"engine", name:"coolapk" , visible_lang: "zh" },
            { type:"engine", name:"sj_qq" , visible_lang: "zh" },
            { type:"engine", name:"wandoujia" , visible_lang: "zh" },
            { type:"engine", name:"hw_appgallery" , visible_lang: "zh" },
            
            { type:"label", lstr:"iOS"},
            { type:"engine", name:"itunesapps"},
            
            { type:"label", lstr:"Third-party Apk Downloads"},
            { type:"engine", name:"izzyondroid_fdroid"},
            { type:"engine", name:"apkdl"},
            { type:"engine", name:"apkmirror"},
            { type:"engine", name:"apk-dl"},
            { type:"engine", name:"apkpure"},
            { type:"engine", name:"apkshub"},
            { type:"engine", name:"freeapk"},
            { type:"engine", name:"appsapk"},
            { type:"engine", name:"androidpicks"},
            { type:"engine", name:"androidapksfree"},
            //{ type:"engine", name:"evozi"},
            
        ],
    }, 
    "media": {
        label: '📺' + i18n(["听视影图", "Multimedia"]),
        engines: [
            { type:"label", lstr:"中音簿画" , visible_lang: "zh" },
            { type:"engine", name:"baidu_media" , visible_lang: "zh" },
            { type:"engine", name:"bilibili" , visible_lang: "zh" },
            { type:"engine", name:"xiaohongshu" , visible_lang: "zh" },
            { type:"engine", name:"douyin" , visible_lang: "zh" },
            { type:"engine", name:"xigua" , visible_lang: "zh" },
            { type:"engine", name:"music163" , visible_lang: "zh" },
            { type:"engine", name:"douban" , visible_lang: "zh" },
            // { type:"engine", name:"fsou_img", visible_lang: "zh"},
            { type:"label", lstr:"各处民风" , visible_lang: "zh" },
            { type:"engine", name:"google_media"},
            { type:"engine", name:"youtube"},
            { type:"engine", name:"netflix"},
            { type:"engine", name:"bing_media"},
            { type:"engine", name:"vimeo"},
            { type:"engine", name:"dailymotion"},
            { type:"engine", name:"dtube"},
            { type:"label", lstr:i18n(["免费许可图库", "Free License Pictures"]) },            
            { type:"engine", name:"unsplash"},
            { type:"engine", name:"pexels"},
            { type:"engine", name:"pixabay"},
            { type:"engine", name:"videvo"},

        ],
    },
    "translate": {
        label: '🔠' + i18n(["多国译查", "Translates"]),
        engines: [
            { type:"engine", name:"youdao" , visible_lang: "zh"},
            { type:"engine", name:"baidu_translate" , visible_lang: "zh"},
            { type:"engine", name:"deepl"},
            // { type:"engine", name:"fsou_translate" , visible_lang: "zh"},
            { type:"engine", name:"cambridge"},
            { type:"engine", name:"google_translate"},
            { type:"engine", name:"bing_dict" , visible_lang: "zh"},
        ],
    }, 
    "academy": {
        label: '📑' + i18n(["资科知识", "Knowledge"]),
        engines: [
//             { type:"label", lstr:i18n(["资料专藏", "Knowledge Search Engines"])},
            { type:"engine", name:"wikip_zh", visible_lang: "zh"},
            { type:"engine", name:"wikip_en", visible_lang: "en"},
            { type:"engine", name:"hudongbaike", visible_lang: "zh"},
            { type:"engine", name:"baidu_xuesu", visible_lang: "zh"},
            { type:"engine", name:"google_scholar"},
            { type:"engine", name:"bing_ac"},
            { type:"engine", name:"wolframalpha"},
            { type:"engine", name:"sogoubaike", visible_lang: "zh"},
            { type:"engine", name:"360baike", visible_lang: "zh"},
            { type:"engine", name:"zhihu", visible_lang: "zh"},
            { type:"label", lstr:"中阁院府", visible_lang: "zh"},
            { type:"engine", name:"cnki", visible_lang: "zh"},
            { type:"engine", name:"wanfang", visible_lang: "zh"},
            { type:"engine", name:"cssci", visible_lang: "zh"},
            { type:"label", lstr:i18n(["机构国际", "Global Academic"])},
            { type:"engine", name:"webofscience"},
            { type:"engine", name:"pubmed"},
            { type:"engine", name:"ei"},
            { type:"engine", name:"ieee"},
        ],
    },
    "han": {
        label: "🀄漢言文藏",
        visible_lang: "zh",
        engines: [
            { type:"label", lstr:"字言辭海" },
            { type:"engine", name:"zdic"},
            { type:"engine", name:"ccamc"},
            { type:"engine", name:"moedict"},
            { type:"engine", name:"shenyandayi"},
            { type:"engine", name:"zitools"},
            { type:"label", lstr:"帛竹卷經" },
            { type:"engine", name:"ctext"},
            { type:"engine", name:"kanripo"},
            { type:"label", lstr:"南腔北调" },
            { type:"engine", name:"shyyp"},
            { type:"engine", name:"jyut_net"},
            { type:"engine", name:"works.hk"},
            { type:"engine", name:"cantodict"},
            { type:"engine", name:"voicedic"},
            { type:"label", lstr:"汉符编码" },
            { type:"engine", name:"unicode"},
            { type:"engine", name:"zi-hi"},
            { type:"engine", name:"ccvisualize"},
        ],
    }, 
    "buy": {
        label: '🛒' + i18n(["买东买西", "Shopping"]),
        engines: [
            { type:"label", lstr:"博物九州", visible_lang: "zh"},
            { type:"engine", name:"taobao", visible_lang: "zh"},
            { type:"engine", name:"jd", visible_lang: "zh"},
            { type:"engine", name:"weipinhui", visible_lang: "zh"},
            { type:"engine", name:"dangdang", visible_lang: "zh"},
            { type:"engine", name:"suning", visible_lang: "zh"},
            { type:"label", lstr:"商游世界", visible_lang: "zh"},
            { type:"engine", name:"amazon"},
            { type:"engine", name:"ebay"},
            { type:"engine", name:"alibaba"},
            { type:"engine", name:"walmart"},
            { type:"engine", name:"bestbuy"},
            { type:"engine", name:"newegg"},
        ],
    },
    "finance": {
        label: '📈' + i18n(["经财起落", "Finance"]),
        engines: [
            { type:"engine", name:"investing"},
            { type:"engine", name:"xueqiu", visible_lang: "zh"},
            { type:"label", lstr:i18n(["区块链", "Blockchain"])},
            { type:"engine", name:"feixiaohao", visible_lang: "zh"},
            { type:"engine", name:"aicoin"},
            
        ],
    }, 
};

sEngines = {
    "baidu": {
        "dname": "百度",
        "addr": "https://www.baidu.com",
        "action": "https://www.baidu.com/s",
        "kw_key": "wd",
        "btns": {
            "sch": {
                "label": "百度一下"
            }
        }
    },
    "fsou": {
        dname: "F搜", 
        addr: "https://fsoufsou.com/", 
        action: "https://fsoufsou.com/search", 
        kw_key: "q", 
    }, 
    "fsou_img": {
        dname: "F搜", 
        addr: "https://fsoufsou.com/", 
        action: "https://fsoufsou.com/search", 
        kw_key: "q", 
        btns: {
            "img": {
                label: "图片", 
                params: [
                    {key: "tbn", val: "images"}, 
                ], 
            }, 
        }, 
    }, 
    "fsou_translate": {
        dname: "F翻译", 
        addr: "https://fsoufsou.com/translate", 
        action: "https://fsoufsou.com/translate", 
        btns: {
            "translate": {
                label: "翻译", 
                ajax: [1500,  "textarea#translate-input-el"]
            }, 
        }, 
    }, 
    "sogou": {
        "dname": "搜狗搜索",
        "addr": "https://www.sogou.com",
        "action": "https://www.sogou.com/web",
        "kw_key": "query",
        "btns": {
            "sch": {
                "label": "搜狗搜索"
            }
        }
    },
    "360so": {
        "dname": "360搜索",
        "addr": "https://www.so.com/",
        "action": "https://www.so.com/s",
        "kw_key": "q"
    },
    "chinaso": {
        "dname": "中国搜索",
        "addr": "https://www.chinaso.com",
        "kw_key": "q",
        "btns": {
            "all": {
                "label": "新闻",
                "action": "https://www.chinaso.com/newssearch/all/allResults"
            },
            "social": {
                "label": "社科",
                "action": "https://www.chinaso.com/newssearch/social/socialResults"
            },
            "image": {
                "label": "图片",
                "action": "https://www.chinaso.com/newssearch/image"
            },
            "video": {
                "label": "视频",
                "action": "https://www.chinaso.com/newssearch/video"
            },
            "story": {
                "label": "好故事",
                "action": "https://www.chinaso.com/newssearch/story/storyResults"
            },
            "china_story": {
                "label": "China Story",
                "action": "https://www.chinaso.com/newssearch/chinaStory/chinaStoryResults"
            }
        }
    },
    "bing": {
        "dname": i18n(["必应", "Bing"]),
        "addr": "https://www.bing.com",
        "action": "https://www.bing.com/search",
        "kw_key": "q",
        "btns": {
            "sch": {
                "label": "Search",
                "visible_lang": "en",
            }, 
            
            "sch_cn": {
                "label": "中国版搜索",
                "visible_lang": "zh",
                "action": "https://cn.bing.com/search",
                "params": [
                    {key:"ensearch", val:"0"}
                ]
            },
            "sch_global": {
                "label": "Search (Global)", 
                "visible_lang": "zh",
                "params": [
                    {key: "ensearch", val: "1"}
                ]
                
            }, 
        }
    },
    "google": {
        dname: "Google",
        addr: "https://www.google.com",
        action: "https://www.google.com/search",
        kw_key: "q",
        btns: {
            "search": {
                label: "Google Search"
            },
            "lucky": {
                label: "I'm Lucky",
                params: [
                    {key:"btnI", val: "1"}
                ]
            }
        }
    },
    "yahoo": {
        dname: "Yahoo Search",
        addr: "https://search.yahoo.com",
        action: "https://search.yahoo.com/search",
        kw_key: "q"
    },
    "yandex": {
        "dname": "Yandex",
        "addr": "https://www.yandex.com/",
        "action": "https://www.yandex.com/search/",
        "kw_key": "text"
    },
    "duckduckgo": {
        "dname": "DuckDuckGo",
        "addr": "https://duckduckgo.com/",
        "action": "https://duckduckgo.com/",
        "kw_key": "q"
    },
    "startpage": {
        "dname": "StartPage",
        "addr": "https://www.startpage.com/",
        "action": "https://www.startpage.com/do/search",
        "kw_key": "query"
    },
    "ecosia": {
        "dname": "Ecosia",
        "addr": "https://www.ecosia.org",
        "action": "https://www.ecosia.org/search",
        "kw_key": "q"
    },
    "qwant": {
        "dname": "Qwant",
        "addr": "https://www.qwant.com/",
        "action": "https://www.qwant.com/",
        "kw_key": "q"
    },
    "findx": {
        "dname": "Findx",
        "addr": "https://www.findx.com/",
        "action": "https://www.findx.com/search",
        "kw_key": "q"
    },
    "metager": {
        "dname": "MetaGer",
        "addr": "https://metager.org/",
        "action": "https://metager.org/meta/meta.ger3",
        "kw_key": "eingabe",
        "btns": {
            "Search": {
                "label": "Search",
                "params": [
                    {
                        "key": "focus",
                        "val": "web"
                    }
                ]
            }
        }
    },
    "swisscows": {
        "dname": "Swisscows",
        "addr": "https://swisscows.com",
        "action": "https://swisscows.com/web",
        "kw_key": "query",
        "btns": {
            "sch": {
                "label": "Search",
            },
            "sch_noregion": {
                "label": "Search (Region off)",
                "params": [
                    {
                        "key": "region",
                        "val": "iv"
                    }
                ]
            },
            "sch_cn": {
                "label": "搜索zh-CN",
                visible_lang: "zh",
                "params": [
                    {
                        "key": "region",
                        "val": "zh-CN"
                    }
                ]
            },
            "sch_en_us": {
                "label": "Search en-US",
                "params": [
                    {
                        "key": "region",
                        "val": "en-US"
                    }
                ]
            },
        }
    },
    "taobao": {
        "dname": "淘宝天猫",
        "addr": "https://www.taobao.com/",
        "action": "https://s.taobao.com/search",
        // "d_addi_html": [{ "text": "精品优惠入口", "href": "https://ai.taobao.com/?pid=mm_325950067_1186300468_109886250042" , "tip": "点击进入淘宝官方精品优惠主页面\n要搜索精品及优惠券，输入后点击右列中的“精品优惠”" }],
        "kw_key": "q",
        "allow_referer": true,
        "btns": {
            "sch": {
                "label": "普通搜索",
                "dname": "淘宝",
            },            
            "atb": {
                "label": "搜优惠券",
                "dname": "淘宝",
                "addr": "https://ai.taobao.com/?pid=mm_325950067_1186300468_109886250042",
                "action": "https://ai.taobao.com/search/index.htm",
                "kw_key": "key",
                "btn_tip": "淘宝官方的精品优惠搜索\n可搜索到优惠券",
                "params": [
                    {
                        "key": "pid",
                        "val": "mm_325950067_1186300468_109886250042"
                    }
                ]
            },
            "shop": {
                "label": "店铺",
                "dname": "淘宝",
                "action": "https://shopsearch.taobao.com/search",
            },
            "tmall": {
                "label": "仅天猫",
                "dname": "天猫",
                "addr": "https://www.tmall.com/",
                "action": "https://list.tmall.com/search_product.htm",
                "charset": "gb18030",
                "kw_key": "q",
    
            },
            "old": {
                "label": "二手",
                "dname": "淘宝",
                "params": [
                    {
                        "key": "tab",
                        "val": "old"
                    },
                ]
            },
            "ali1688": {
                label: "1688",
                dname: "1688",
                addr: "https://www.1688.com/",
                action: "https://s.1688.com/selloffer/offer_search.htm",
                kw_key: "keywords",
                charset: "gbk"
            },
            "ali1688_industry": {
                label: "1688(工业品)",
                dname: "1688",
                addr: "https://www.1688.com/",
                action: "https://s.1688.com/selloffer/imall_search.htm",
                kw_key: "keywords",
                charset: "gbk"
            },
        }
    },
    "jd": {
        "dname": "京东",
        "addr": "https://www.jd.com/",
        "action": "https://search.jd.com/Search",
        "kw_key": "keyword",
        "btns": {
            "sch": {
                "label": "搜索",
                "params": [
                    {"key": "enc","val": "utf-8" }
                ],
            }
        }
    },
    "weipinhui": {
        "dname": "唯品会",
        "addr": "https://www.vip.com/",
        "action": "https://category.vip.com/suggest.php",
        "kw_key": "keyword",
        "btns": {
            "sch": {
                "label": "搜索",
                "params": [
                    {key: "ff", val: "235|12|1|1" },
                ],
            }
        }
    },
    "dangdang": {
        "dname": "当当网",
        "addr": "http://www.dangdang.com/",
        "action": "http://search.dangdang.com",
        "charset": "gb18030",
        "kw_key": "key",
        "params_share": {
            "act": "input"
        },
        "btns": {
            "sch": {
                "label": "全部分类"
            },
            "book": {
                "label": "图书",
                "params": [
                    {
                        "key": "catagory_path",
                        "val": "01.00.00.00.00.00"
                    },
                    {
                        "key": "type",
                        "val": "01.00.00.00.00.00"
                    }
                ]
            },
            "book_file": {
                "label": "电子书",
                "params": [
                    {
                        "key": "catagory_path",
                        "val": "98.00.00.00.00.00"
                    },
                    {
                        "key": "type",
                        "val": "98.00.00.00.00.00"
                    }
                ]
            },
            "audio": {
                "label": "音像",
                "params": [
                    {
                        "key": "catagory_path",
                        "val": "03.00.00.00.00.00"
                    },
                    {
                        "key": "type",
                        "val": "03.00.00.00.00.00"
                    }
                ]
            },
            "video": {
                "label": "影视",
                "params": [
                    {
                        "key": "catagory_path",
                        "val": "05.00.00.00.00.00"
                    },
                    {
                        "key": "type",
                        "val": "05.00.00.00.00.00"
                    }
                ]
            }
        }
    },
    "suning": {
        "dname": "苏宁易购",
        "addr": "https://www.suning.com/",
        "full_url": "https://search.suning.com/{0}/"
    },
    "tmall_global": {
        "dname": i18n(["天猫国际", "TMall"]),
        "addr": "https://www.tmall.hk/",
        "action": "https://list.tmall.hk/search_product.htm",
        "kw_key": "q",
        //"allow_referer": true,
        "btns": {
            "sch": {
                "label": i18n(["搜索", "Search"]),

            }
        }
    },
    "alibaba" : {
        "dname": i18n(["阿里巴巴","Alibaba"]),
        "addr": "https://www.aliexpress.com",
        "kw_key": "q",
        "btns": {
            "aliexpress": {
                label: "Ali Express",
                action: "https://www.aliexpress.com/wholesale",
                kw_key: "SearchText"
            },
            "alibaba.com": {
                label: "Alibaba.com",
                action: "https://www.alibaba.com/trade/search",
                kw_key: "SearchText"
            },
            "tmall": {
                label: i18n(["天猫国际", "TMall"]),
                visible_lang: "zh",
                use_other_engine: "tmall_global"
            }
        }
    },
    "amazon": {
        dname: "Amazon",
        addr: "https://www.amazon.com/",
        action: "https://www.amazon.com/s",
        kw_key: "k",
        btns: {
            "sch": {
                label: "Search"
            },
            "sch_cn" : {
                label: "搜索 .cn",
                visible_lang: "zh",
                action: "https://www.amazon.cn/s"
                
            }
        }
    },
    "ebay": {
        dname: "eBay",
        addr: "https://www.ebay.com",
        action: "https://www.ebay.com/sch/i.html",
        kw_key: "_nkw",
        btns: {
            "sch": {
                label: "Search"
            },
            "sch_hk" : {
                label: "搜索 .hk",
                visible_lang: "zh",
                action: "https://www.ebay.com.hk/sch/i.html"
                
            }
        }
    },
    "walmart": {
        dname: i18n(["沃尔玛","Walmart"]),
        addr: "https://www.walmart.com/",
        action: "https://www.walmart.com/search",
        kw_key: "q",
    },
    "bestbuy": {
        dname: i18n(["百思买","Best Buy"]),
        addr: "https://www.bestbuy.com/",
        action: "https://www.bestbuy.com/site/searchpage.jsp",
        kw_key: "st"
    },
    "newegg": {
        dname: "Newegg",
        addr: "https://www.newegg.com",
        action: "https://www.newegg.com/p/pl",
        kw_key: "d",
        btns: {
            "search": {
                label: "Search"
            },
            "neweggbusiness": {
                label: "NeweggBusiness",
                action: "https://www.neweggbusiness.com/product/productlist.aspx",
                kw_key: "Description"
            }
        }
    },
    "youdao": {
        "dname": "有道词典",
        "addr": "https://dict.youdao.com",
        "action": "https://dict.youdao.com/search",
        "kw_key": "q",
        "btns": {
            "lookup": {
                "label": "查询"
            },
            "trans": {
                label: "翻译",
                action: "https://fanyi.youdao.com/",
                ajax: "#inputOriginal"
            }
        }
    },
    "baidu_translate": {
        "dname": "百度翻译",
        "addr": "https://fanyi.baidu.com/",
        "btns": {
            "trans_zh": {
                "label": "译为中文",
                "full_url": "https://fanyi.baidu.com/#en/zh/{0}"
            },
            "trans_en": {
                "label": "译为英文",
                "full_url": "https://fanyi.baidu.com/#zh/en/{0}"
            }
        }
    },
    "deepl": {
        dname: "DeepL Translate",
        addr: "https://www.deepl.com/translator",
        kw_replace: [ ["/", "\\/"] ], 
        btns: {
            "trans_zh": {
                "label": "译为中文",
                visible_lang: "zh",
                "full_url": "https://www.deepl.com/translator#any/zh/{0}"
            },
            "trans_en": {
                "label": i18n(["译为英文", "To English"]),
                "full_url": "https://www.deepl.com/translator#any/en/{0}"
            }
        }
    },
    "cambridge": {
        "dname": "Cambridge Dictionary",
        "addr": i18n([ "https://dictionary.cambridge.org/zhs/", "https://dictionary.cambridge.org"]) ,
        "btns": {
            "en_zh": {
                "label": "英汉",
                "visible_lang": "zh",
                "full_url": "https://dictionary.cambridge.org/zhs/词典/英语-汉语-简体/{0}"
            },
            "en": {
                "label": i18n( ["英英", "English"] ),
                "full_url": "https://dictionary.cambridge.org/dictionary/english/{0}"
            },
            
        }
    },
    "google_translate": {
        "dname": "Google Translate",
        "addr": "https://translate.google.com/",
        "action": "https://translate.google.com/",
        "kw_key": "text",
        "btns": {
            "to_zh": {
                "label": "译为中文",
                "visible_lang": "zh",
                "params": [
                    {key: "hl", val: "zh-CN"},
                    {key: "op", val: "translate"},
                    {key: "sl", val: "auto"},
                    {key: "tl", val: "zh-CN"},
                ]
            },
            "to_en": {
                "label": i18n(["译为英文", "To English"]),
                "params": [
                    {key: "hl", val: "zh-CN"},
                    {key: "op", val: "translate"},
                    {key: "sl", val: "auto"},
                    {key: "tl", val: "en-US"},
                ]
            },
            "web_to_zh": {
                "label": "网页译为中文",
                "visible_lang": "zh",
                "btn_tip": "输入网址，将整个网页译为中文",
                "action": "https://translate.google.com/translate",
                "kw_key": "u",
                "params": [
                    {key: "hl", val: "zh-CN"},
                    {key: "sl", val: "auto"},
                    {key: "tl", val: "zh-CN"},
                ],
            },
            "web_to_en": {
                "label": i18n(["网页译为英文", "Web to English"]),
                "btn_tip": "Input a URL. Translate web into English",
                "action": "https://translate.google.com/translate",
                "kw_key": "u",
                "params": [
                    {key: "hl", val: "en"},
                    {key: "sl", val: "auto"},
                    {key: "tl", val: "en"},
                ],
            }
        }
    },
    "bing_dict": {
        "dname": "必应词典",
        "addr": "https://cn.bing.com/dict/?mkt=zh-cn",
        "action": "https://cn.bing.com/dict/search",
        "kw_key": "q",
        "btns": {
            "sch": {
                "label": "查询"
            }
        }
    },
    "cnki": {
        "dname": "中国知网",
        "addr": "https://cnki.net",
        "action": "https://kns.cnki.net/kns8/defaultresult/index",
        "kw_key": "kw",
        //"method": "post",
        "btns": {
            "subject": {
                "label": "主题",
                "params": [
                    { key: "action" , val: "scdbsearch" },
                    { key: "txt_1_sel" , val: "SU$%=|" },
                    { key: "ua" , val: "1.11" },
                ]
            },
            "keyword": {
                "label": "关键词",
                "params": [
                    { key: "action" , val: "scdbsearch" },
                    { key: "txt_1_sel" , val: "KY$%=|" },
                    { key: "ua" , val: "1.11" },
                ]
            },
            "author": {
                "label": "作者",
                "params": [
                    { key: "action" , val: "scdbsearch" },
                    { key: "txt_1_sel" , val: "AU$%=|" },
                    { key: "ua" , val: "1.11" },
                ]
            },
            "abstract": {
                "label": "摘要",
                "params": [
                    { key: "action" , val: "scdbsearch" },
                    { key: "txt_1_sel" , val: "AB$%=|" },
                    { key: "ua" , val: "1.11" },
                ]
            },
            "doi": {
                "label": "DOI",
                "params": [
                    { key: "action" , val: "scdbsearch" },
                    { key: "txt_1_sel" , val: "DOI$%=|" },
                    { key: "ua" , val: "1.11" },
                ]
            },
            "allcontent": {
                "label": "全文",
                "params": [
                    { key: "action" , val: "scdbsearch" },
                    { key: "txt_1_sel" , val: "FT$%=|" },
                    { key: "ua" , val: "1.11" },
                ]
            },
        }
    },
    "wanfang": {
        "dname": "万方数据",
        "addr": "http://www.wanfangdata.com.cn/",
        "action": "http://www.wanfangdata.com.cn/search/searchList.do",
        "kw_key": "searchWord",
        "btns": {
            "sch": {
                "label": "检索全部",
                "params": [
                    { key: "searchType" , val: "all" },
                ]
            },
            "author": {
                "label": "作者",
                "kw_format": "作者:{0}",
                "params": [
                    { key: "searchType" , val: "all" },
                ]
            },
            "keyword": {
                "label": "关键词",
                "kw_format": "关键词:{0}",
                "params": [
                    { key: "searchType" , val: "all" },
                ]
            },
            "abstract": {
                "label": "摘要",
                "kw_format": "摘要:{0}",
                "params": [
                    { key: "searchType" , val: "all" },
                ]
            },
        }
    },
    "cssci": {
        "dname": "CSSCI",
        "addr": "http://cssci.nju.edu.cn/",
        "action": "http://cssci.nju.edu.cn/ly_search_view.html",
        "kw_key": "title",
        "btns": {
            "sch": {
                "label": "搜索",
                "kw_format": "{0}   15",
                "params": [
                    {
                        "key": "pagenum",
                        "val": "20"
                    },
                    {
                        "key": "order_type",
                        "val": "nian"
                    },
                    {
                        "key": "order_px",
                        "val": "DESC"
                    }
                ]
            }
        }
    },
    "webofscience": {
        "dname": "Web of Science",
        "addr": "https://apps.webofknowledge.com",
        "action": "https://apps.webofknowledge.com/UA_GeneralSearch.do",
        "kw_key": "value(input1)",
        "btns": {
            "sch": {
                "label": "Search",
                "params": [
                    {
                        "key": "value(select1)",
                        "val": "TS"
                    },
                    {
                        "key": "fieldCount",
                        "val": "1"
                    },
                    {
                        "key": "action",
                        "val": "search"
                    },
                    {
                        "key": "product",
                        "val": "UA"
                    },
                    {
                        "key": "search_mode",
                        "val": "GeneralSearch"
                    },
                    {
                        "key": "period",
                        "val": "Range Selection"
                    },
                    {
                        "key": "range",
                        "val": "ALL"
                    }
                ]
            }
        }
    },
    "pubmed" :{
        "dname": "PubMed",
        "addr": "https://pubmed.ncbi.nlm.nih.gov",
        "action": "https://pubmed.ncbi.nlm.nih.gov",
        "kw_key": "term"
    },
    "ei": {
        "dname": "EI",
        "addr": "https://www.engineeringvillage.com/search/quick.url",
        "action": "https://www.engineeringvillage.com/search/submit.url",
        "kw_key": "searchWord1",
        "btns": {
            "sch": {
                "label": "Search",
                "params": [
                    {
                        "key": "CID",
                        "val": "searchSubmit"
                    },
                    {
                        "key": "searchtype",
                        "val": "Quick"
                    },
                    {
                        "key": "catagory",
                        "val": "quicksearch"
                    },
                    {
                        "key": "database",
                        "val": "1"
                    }
                ]
            }
        }
    },
    "ieee": {
        "dname": "IEEE Xplore",
        "addr": "https://ieeexplore.ieee.org",
        "action": "https://ieeexplore.ieee.org/search/searchresult.jsp",
        "kw_key": "queryText"
    },
    "google_scholar": {
        "dname": "Google Scholar",
        "addr": "https://scholar.google.com",
        "action": "https://scholar.google.com/scholar",
        "kw_key": "q"
    },
    "baidu_xuesu": {
        "dname": "百度学术",
        "addr": "https://xueshu.baidu.com",
        "action": "https://xueshu.baidu.com/s",
        "kw_key": "wd",
        "btns": {
            "sch": {
                "label": "全部文献"
            },
            "journal": {
                "label": "期刊",
                "params": [
                    {
                        "key": "filter",
                        "val": "sc_type={1}"
                    }
                ]
            },
            "confe": {
                "label": "会议",
                "params": [
                    {
                        "key": "filter",
                        "val": "sc_type={3}"
                    }
                ]
            },
            "degree": {
                "label": "学位",
                "params": [
                    {
                        "key": "filter",
                        "val": "sc_type={2}"
                    }
                ]
            },
            "wk": {
                "label": "百度文库",
                "dname": "百度文库",
                "addr": "https://wenku.baidu.com/",
                "action": "https://wenku.baidu.com/search",
                "charset": "gb18030",
                "kw_key": "word"
            },
            "bk": {
                "label": "百度百科",
                "dname": "百度百科",
                "addr": "https://baike.baidu.com",
                "action": "https://baike.baidu.com/search/word",
                "kw_key": "word",
            }
        }
    },
    "bing_ac": {
        "dname": i18n(["必应学术", "Bing Academic"]),
        "addr": "https://www.bing.com/academic",
        "action": "https://www.bing.com/academic/search",
        "kw_key": "q"
    },
    "wikip_zh": {
        "dname": "维基百科",
        "addr": "https://zh.wikipedia.org/zh/Wikipedia:%E9%A6%96%E9%A1%B5",
        "action": "https://zh.wikipedia.org/w/index.php",
        "kw_key": "search",
        "btns": {
            "search": {
                "label": "搜索",
                "params": [
                    {
                        "key": "fulltext",
                        "val": "1"
                    }
                ]
            },
            "go": {
                "label": "进入",
                full_url: "https://zh.wikipedia.org/wiki/{0}"
            },
            "sch_en": {
                "label": "Search",
                "use_other_engine": {
                    "engine": "wikip_en",
                    "btn": "search"
                }
            }, 
            "go_en": {
                "label": "Go",
                "use_other_engine": {
                    "engine": "wikip_en",
                    "btn": "go"
                }
            },
        }
    },
    "wikip_en": {
        "dname": "Wkipedia",
        "addr": "https://en.wikipedia.org/wiki/Main_Page",
        "action": "https://en.wikipedia.org/w/index.php",
        "kw_key": "search",
        "btns": {
            "search": {
                "label": "Search",
                "params": [
                    {
                        "key": "fulltext",
                        "val": "1"
                    }
                ]
            }, 
            "go": {
                "label": "Go"
            },
        }
    },
    "wolframalpha": {
        dname: "WolframAlpha", 
        addr: "https://www.wolframalpha.com", 
        action: "https://www.wolframalpha.com/input", 
        kw_key: "i", 
        btns: {
            "nl": {
                label: "Natural Language", 
            }, 
            "math": {
                label: "Math Input", 
                params: [
                    {key: "i2d", val: "true"}, 
                ], 
            }, 
        }, 
    }, 
    "hudongbaike": {
        dname: "快懂百科", 
        addr: "https://www.baike.com/", 
        action: "https://www.baike.com/search", 
        kw_key: "keyword", 
    }, 
    "sogoubaike": {
        dname: "搜狗百科", 
        addr: "https://baike.sogou.com/", 
        action: "https://www.sogou.com/sogou", 
        kw_key: "query", 
        params: [
            {key: "ie", val: "utf8"}, 
            {key: "insite", val: "baike.sogou.com"}, 
        ], 
    }, 
    "360baike": {
        dname: "360百科", 
        addr: "https://baike.so.com/", 
        btns: {
            "search": {
                label: "搜索词条",  
                action: "https://baike.so.com/search/", 
                kw_key: "q", 
            }, 
            "enter": {
                label: "进入词条", 
                action: "https://baike.so.com/doc/search", 
                kw_key: "word", 
            }
        }, 
        
    },
    "zhihu": {
        "dname": "知乎",
        "addr": "https://www.zhihu.com",
        "action": "https://www.zhihu.com/search",
        "kw_key": "q",
        "btns": {
            "content": {
                "label": "综合",
                "params": [
                    {"key": "type", "val": "content"}
                ]
            },
            "people": {
                "label": "用户",
                "params": [
                    {"key": "type", "val": "people"}
                ]
            },
            "topic": {
                "label": "话题",
                "params": [
                    {"key": "type", "val": "topic"}
                ]
            },
            "zvideo": {
                "label": "视频",
                "params": [
                    {"key": "type", "val": "zvideo"}
                ]
            },
            "column": {
                "label": "专栏",
                "params": [
                    {"key": "type", "val": "column"}
                ]
            },
            "km_general": {
                "label": "盐选内容",
                "params": [
                    {"key": "type", "val": "km_general"}
                ]
            },
            "publication": {
                "label": "电子书",
                "params": [
                    {"key": "type", "val": "publication"}
                ]
            }
        }
    },
    
    "fdroid": {
        "dname": "F-Droid",
        "addr": "https://f-droid.org/",
        "tip": i18n(["著名的专门收录开源应用的平台","Well-known platform that collects only open-source apps"]),
        "action": "https://search.f-droid.org/",
        "kw_key": "q"
    },
    
    "wandoujia": {
        "dname": "豌豆荚",
        "addr": "https://www.wandoujia.com/",
        "action": "https://www.wandoujia.com/search",
        "kw_key": "key"
    },
    "coolapk": {
        dname: "酷安",
        addr: "https://www.coolapk.com/apk/",
        btns: {
            "baidu": {
                "label": "百度",
                "kw_format": "{0}   site:(www.coolapk.com)",
                "use_other_engine": {
                    "engine": "baidu",
                    "btn": "sch"
                }
            },
            "google": {
                label: "Google",
                kw_format: "{0}    site:www.coolapk.com",
                use_other_engine: {
                    engine: "google",
                    btn: "search"
                }
            },
        }        
    },
    
    "sj_qq": {
        "dname": "腾讯应用宝",
        "addr": "https://sj.qq.com/",
        "action": "https://sj.qq.com/search/",
        "kw_key": "q"
    },
    "hw_appgallery": {
        "dname": "华为AppGallery",
        "addr": "https://appgallery.huawei.com/",
        "full_url": "https://appgallery.huawei.com/search/{0}",
    },

    "izzyondroid_fdroid": {
        "dname": "IzzyOnDroid F-Droid",
        "addr": "https://apt.izzysoft.de/fdroid/",
        "action": "https://apt.izzysoft.de/fdroid/index.php",
        "method": "post",
        "kw_key": "searchterm",
        "tip": i18n(["一个兼容并收录了几个不同（官方与第三方）F-Droid格式的仓库的网站\n它本身也维护一个仓库", "An apk website that includes several F-Droid format repos (including official and third-party)\nIt maintains a repo itself also"]),
        "btns": {
            "izzyondroid": {
                "label": "IzzyOnDroid",
                "params": [
                    {key: "doFilter", val: "Go!"},
                    /*
                    {key: "limit", val: "10"},
                    {key: "cat", val: ""},
                    {key: "license", val: ""},
                    {key: "boolanti", val: ""},
                    {key: "radd", val: ""},
                    {key: "rup", val: ""},
                    {key: "ibuild", val: ""},
                    */
                ]
            },
            "fdroid": {
                "label": "F-Droid",
                "action": "https://apt.izzysoft.de/fdroid/index.php?repo=main",
                "params": [
                    {key: "doFilter", val: "Go!"},
                ]
            },
            "fdroidarchive": {
                "label": "F-Droid Archive",
                "action": "https://apt.izzysoft.de/fdroid/index.php?repo=archive",
                "params": [
                    {key: "doFilter", val: "Go!"},
                ]
            },
            "guardian": {
                "label": "Guardian",
                "action": "https://apt.izzysoft.de/fdroid/index.php?repo=guardian",
                "params": [
                    {key: "doFilter", val: "Go!"},
                ]
            },
            "kali": {
                "label": "Kali Nethunter",
                "action": "https://apt.izzysoft.de/fdroid/index.php?repo=kali",
                "params": [
                    {key: "doFilter", val: "Go!"},
                ]
            },
            "nit": {
                "label": "Nit",
                "action": "https://apt.izzysoft.de/fdroid/index.php?repo=nit",
                "params": [
                    {key: "doFilter", val: "Go!"},
                ]
            },
        }
    },
    "apkdl": {
        "dname": "APKDL",
        "addr": "https://apkdl.net",
        "action": "https://apkdl.net/search",
        "kw_key": "q"
    },
    "google_play": {
        "dname": "Google Play Apps",
        "addr": "https://play.google.com/store/apps",
        "action": "https://play.google.com/store/search",
        "kw_key": "q",
        "btns": {
            "app": {
                "label": "Apps",
                "params": [
                    {
                        "key": "c",
                        "val": "apps"
                    }
                ]
            },
            "freeapp": {
                "label": "Free Apps",
                "params": [
                    {
                        "key": "c",
                        "val": "apps"
                    },
                    {
                        "key": "price",
                        "val": "1"
                    }
                ]
            }
        }
    },
    "apkmirror": {
        "dname": "APKMirror",
        "addr": "https://www.apkmirror.com",
        "action": "https://www.apkmirror.com/",
        "kw_key": "s",
        "btns": {
            "apks": {
                "label": "APKs",
                "params": [
                    {
                        "key": "searchtype",
                        "val": "apk"
                    }
                ]
            },
            "apps": {
                "label": "APPs",
                "params": [
                    {
                        "key": "searchtype",
                        "val": "app"
                    }
                ]
            }
        }
    },
    "apk-dl": {
        "dname": "APK-DL",
        "addr": "https://apk-dl.com/",
        "action": "https://apk-dl.com/search",
        "kw_key": "q"
    },
    "apkpure": {
        "dname": "APKPure",
        "addr": "https://apkpure.com",
        "action": "https://apkpure.com/cn/search",
        "kw_key": "q"
    },
    "apkshub": {
        dname: "APKsHub", 
        addr: "https://apkshub.com/", 
        action: "https://apkshub.com/search", 
        kw_key: "q",
    }, 
    "freeapk": {
        "dname": "Freeapk",
        "addr": "https://freeapk.mobi",
        "full_url": "https://freeapk.mobi/search/{0}/"
    },
    "appsapk": {
        "dname": "AppsApk",
        "addr": "https://www.appsapk.com/",
        "action": "https://www.appsapk.com/",
        "kw_key": "s"
    },
    "androidpicks": {
        "dname": "Android Picks",
        "addr": "https://androidpicks.com/",
        "action": "https://androidpicks.com/",
        "kw_key": "s"
    },
    "androidapksfree": {
        "dname": "AndroidAPKsFree",
        "addr": "https://androidapksfree.com/",
        "action": "https://androidapksfree.com/",
        "kw_key": "s"
    },
    "evozi": {
        "dname": "Evozi APK Downloader",
        "tip": i18n(["这是一个输入APK包名（如com.tencent.mm）来生成下载链接的网站","Input APK package name (e.g. org.videolan.vlc) to generate download link"]),
        "addr": "https://apps.evozi.com/apk-downloader",
        "action": "https://apps.evozi.com/apk-downloader/",
        "ajax": [".input-lg", 1000, ".btn-lg" ],
        "btns": {
            "pkg_n": {
                "label": "Generate Download Link",
                "btn_tip": i18n(["输入APK包名（如com.tencent.mm），获取下载链接","Input the package name of APK (e.g. org.videolan.vlc) to get download link"])
                //"method": "get",
                //"kw_key": "id"
            }
        }
    },
    "itunesapps": {
        dname: "iTunes Apps",
        addr: "https://www.apple.com/itunes/charts/free-apps/",
        btns: {
            "baidu": {
                "label": "百度",
                visible_lang: "zh",
                "kw_format": "{0}   site:(apps.apple.com)",
                "use_other_engine": {
                    "engine": "baidu",
                    "btn": "sch"
                }
            },
            "google": {
                label: "Google",
                kw_format: "{0}   site:apple.com/*app",
                use_other_engine: {
                    engine: "google",
                    btn: "search"
                }
            },
        }
    },
    "github": {
        "dname": "Github",
        "addr": "https://github.com",
        "action": "https://github.com/search",
        "kw_key": "q",
        "btns": {
            "repo": {
                "label": "Repo",
                "params": [
                    {
                        "key": "type",
                        "val": "repositories"
                    }
                ]
            },
            "code": {
                "label": "Code",
                "params": [
                    {
                        "key": "type",
                        "val": "code"
                    }
                ]
            },
            "users": {
                "label": "Users",
                "params": [
                    {
                        "key": "type",
                        "val": "users"
                    }
                ]
            },
            "gist": {
                "label": "Gist", 
                full_url: "https://gist.github.com/search?q={0}"
            }, 
        }
    },
    "python": {
        dname: "Python", 
        addr: "https://docs.python.org", 
        btns: {
            "doc": {
                label: "Search Doc", 
                action: "https://docs.python.org/3/search.html", 
                kw_key: "q", 
            }, 
            "pypi": {
                label: "PyPI", 
                action: "https://pypi.org/search/", 
                kw_key: "q", 
            }, 
        }
    }, 
    "rust": {
        dname: "Rust",
        addr: "https://www.rust-lang.org",
        btns: {
            "doc": {
                label: "std doc",
                action: "https://doc.rust-lang.org/std/index.html",
                kw_key: "search",
            },
            "crates": {
                label: "crates.io",
                action: "https://crates.io/search",
                kw_key: "q",
            },
        }
    },
    "mdn": {
        "dname": "MDN",
        "addr": "https://developer.mozilla.org",
        "action": "https://developer.mozilla.org/search",
        "kw_key": "q",
        "btns": {
            "search": {
                "label": "Search",
            },
            "sch_google": {
                "label": " Google",
                "kw_format": "{0}   site:developer.mozilla.org/en-US",
                "use_other_engine": {
                    "engine": "google",
                    "btn": "search",
                }
            },
            /*
            "archived": {
                "label": "Archived (Google)",
                "kw_format": "{0} site:developer.mozilla.org/en-US/docs/Archive",
                "use_other_engine": {
                    "engine": "google",
                    "btn": "search",
                }
            },
            "jsm": {
                "label": "Legacy JS Modules (Google)",
                "kw_format": "{0} site:developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules",
                "use_other_engine": {
                    "engine": "google",
                    "btn": "search",
                }
            },
            */
        }
    },
    "chrome_dev": {
        "dname": "Chrome Dev",
        "addr": "https://developer.chrome.com",
        action: "https://developer.chrome.com/s/results", 
        kw_key: 'q', 
        btns: {
            // "google": {
            //     label: "Google",
            //     kw_format: "{0}   site:developer.chrome.com/*",
            //     use_other_engine: "google"
            // }, 
            "google_webext" : {
                label: "WebExt API (Google)",
                kw_format: "{0}   site:developer.chrome.com/docs/extensions/*",
                use_other_engine: "google"
            }, 
            "search": {
                label: "Search",
                btn_tip: "This will give search result of blog articles and Chrome extension APIs", 
            },
            
        }
    },    
    "chrome_ext_dev": { // no more
        "dname": "Chrome Extension API",
        "addr": "https://developer.chrome.com/docs/extensions/reference/",
        btns: {
            "search": {
                label: "Search",
                "action": "https://developer.chrome.com/docs/extensions/reference/",
                "ajax": ".devsite-search-field"
                
            },
            "google": {
                label: "Google",
                kw_format: "{0}   site:developer.chrome.com/docs/extensions/*",
                use_other_engine: "google"
            }
        }
    },
    "stackexchange": {
        "dname": "StackExchange",
        "addr": "https://stackexchange.com/",
        "action": "https://stackexchange.com/search",
        "kw_key": "q"
    },
    
    "docker": {
        "dname": "Docker Hub",
        "addr": "https://hub.docker.com/",
        "action": "https://hub.docker.com/search/",
        "kw_key": "q",
        "btns": {
            "Search": {
                "label": "Search",
                "params": [
                    {
                        "key": "type",
                        "val": "image"
                    }
                ]
            }
        }
    },
    "flathub": {
        dname: "Flathub",
        addr: "https://flathub.org/apps",
        action: "https://flathub.org/apps/search",
        btns: {
            "Search": {
                label: "Search",
                full_url: "https://flathub.org/apps/search/{0}"
            }
        }
    },
    
    "manpage": {
        dname: "Man Pages", 
        btns: {
            "he": {
                label: "Hurricane Electric", 
                action: "http://man.he.net/", 
                kw_key: "topic", 
                params: [
                    {key: "section", val: "all"}
                ], 
            }, 
            "debian": {
                label: "Debian", 
                action: "https://manpages.debian.org/jump", 
                kw_key: "q", 
            }, 
            "ubuntu": {
                label: "Ubuntu", 
                action: "https://manpages.ubuntu.com/cgi-bin/search.py", 
                kw_key: "q", 
            }, 
            "opensuse": {
                label: "openSUSE", 
                action: "https://manpages.opensuse.org/jump", 
                kw_key: "q", 
            }, 

        }, 
    }, 
    
    "homebrew": {
        "dname": "Homebrew",
        "addr": "https://formulae.brew.sh/",
        "btns": {
            "go": {
                "label": "Go",
                "full_url": "https://formulae.brew.sh/formula/{0}"
            },
            "search": {
                label: "Search",
                action: "https://formulae.brew.sh/",
                ajax: [700, "#search-container button", 700, "#docsearch-input", 10]
            }
        }
    },
    "snapcraft": {
        "dname": "Snapcraft",
        "addr": "https://snapcraft.io/store",
        "action": "https://snapcraft.io/search",
        "kw_key": "q"
    },
    "pkgs.org": {
        "dname": "pkgs.org",
        "addr": "https://pkgs.org",
        "action": "https://pkgs.org/search/", 
        "kw_key": "q",
    }, 
    "repology": {
        "dname": "Repology",
        "addr": "https://repology.org/projects/",
        "action": "https://repology.org/projects/", 
        "kw_key": "search",
    }, 
    "nix": {
        "dname": "NixOS",
        "addr": "https://search.nixos.org/packages?",
        "kw_key": "query",
        btns: {
            "pkgs": {
                label: "Packages",
                action: "https://search.nixos.org/packages",
            },
        }
    },
    "guix": {
        "dname": "GNU Guix packages",
        "addr": "https://guix.gnu.org/packages/",
        "action": "https://ci.guix.gnu.org/search",
        "kw_key": "query"
    },
    "alternativeto": {
        "dname": "AlternativeTo",
        "addr": "https://alternativeto.net/",
        "action": "https://alternativeto.net/browse/search",
        "kw_key": "q",
        "btns": {
            "Find Apps": {
                "label": "Find Apps",
                "kw_replace": [
                    [
                        " ",
                        "-"
                    ]
                ],
                "full_url": "https://alternativeto.net/software/{0}"
            },
            "Search": {
                "label": "Search"
            }
        }
    },
    "zdic": {
        dname: "汉典",
        addr: "https://www.zdic.net",
        btns: {
            "search": {
                label: "汉字词",
                full_url: "https://www.zdic.net/hans/{0}",
            },
        }
    },
    "ccamc": {
        dname: "古今文字集成",
        addr: "http://www.ccamc.co",
        tip: "一個集古今文字释義、字形更革、音韻演變之大全的大型在線辭書\n兼收錄其他少數民族的語言文字資料，如西夏文、契丹文、女真文、八思巴文",
        btns: {
            "search": {
                label: "漢字詞",
                btn_tip: "输入简体或繁体时，得的文字解释可能不同",
                action: "http://www.ccamc.co/cjkv.php",
                kw_key: "cjkv",
            },
        }
    },
    "moedict": {
        dname: "萌典",
        addr: "https://www.moedict.tw",
        tip: "萌典共收錄十六萬筆國語、兩萬筆臺語、一萬四千筆客語條目\n原始資料來源為教育部《重編國語辭典修訂本》\n兩岸詞典由中華文化總會提供\n輸入繁體可獲得最佳結果",
        btns: {
            "guoyu": {
                label: "國語辭典",
                full_url: "https://www.moedict.tw/{0}",
            },
            "cntw": {
                label: "兩岸詞典",
                full_url: "https://www.moedict.tw/~{0}",
            },
            "min": {
                label: "閩南語",
                full_url: "https://www.moedict.tw/'{0}",
            },
            "ke": {
                label: "客家語",
                full_url: "https://www.moedict.tw/:{0}",
            },
        }
    },
    "works.hk": {
        "dname": "粵典",
        "addr": "https://words.hk/",
        "d_addi_html": "繁",
        "action": "https://words.hk/zidin/wan/",
        "kw_key": "q",
        "btns": {
            "search": {
                "label": "查字典"
            }
        }
    },
    "shyyp": {
        dname: "羊羊粤语", 
        addr: "https://shyyp.net", 
        btns: {
            'search': {
                label: "搜索", 
                action: "https://shyyp.net/", 
                ajax: ["#mainSearchInput", 10 ], 
            }, 
            "enter": {
                label: "进入", 
                full_url: "https://shyyp.net/w/{0}", 
            }
        }, 
    }, 
    "jyut_net": {
        dname: "粵音資料集叢", 
        addr: "https://jyut.net/", 
        d_addi_html: "繁",
        kw_key: "q", 
        btns: {
            "char": {
                label: "查單字", 
                action: "https://jyut.net/query", 
            }, 
            "ping": {
                label: "粵拼查", 
                action: "https://jyut.net/search", 
            }, 
            
        }, 
    }, 
    "cantodict": {
        "dname": "CantoDict",
        "tip": "CantoDict is a unique collaborative English/Cantonese/Mandarin dictionary",
        "addr": "http://www.cantonese.sheik.co.uk/dictionary/",
        "action": "http://www.cantonese.sheik.co.uk/scripts/wordsearch.php",
        "method": "post",
        "kw_key": "TEXT",
        "btns": {
            "english": {
                "label": "English Meaning",
                "btn_tip": "输入英文，根据英文意思查中文",
                "params": [
                    {"key": "SEARCHTYPE", "val": "4"},
                    {"key": "radicaldropdown", "val": "0"},
                    {"key": "searchsubmit", "val": "search"}
                ]
            },
            "chi_word": {
                "label": "Chinese Word",
                "btn_tip": "输入中文，查两字以上中文词",
                "params": [
                    {"key": "SEARCHTYPE", "val": "1"},
                    {"key": "radicaldropdown", "val": "0"},
                    {"key": "searchsubmit", "val": "search"}
                ]
            },
            "chi_char": {
                "label": "Chinese Character",
                "btn_tip": "输入中文，查中文字",
                "params": [
                    {"key": "SEARCHTYPE", "val": "2"},
                    {"key": "radicaldropdown", "val": "0"},
                    {"key": "searchsubmit", "val": "search"}
                ]
            },
            "sentance": {
                "label": "Sentance",
                "btn_tip": "输入英文，查中文句子",
                "params": [
                    {"key": "SEARCHTYPE", "val": "12"},
                    {"key": "radicaldropdown", "val": "0"},
                    {"key": "searchsubmit", "val": "search"}
                ]
            }
        }
    },
    "voicedic": {
        dname: "汉语方言发音字典",
        addr: "https://zh.voicedic.com/",
        action: "https://zh.voicedic.com/",
        btns: {
            "Cantonese": {
                "label": "广东话",
                "ajax": [
                    "input[name=language][value=Cantonese]",
                    100,".s_ipt",100,".s_btn"]
            },
            "Waitau": {
                "label": "围头话",
                "ajax": [
                    "input[name=language][value=Waitau]",
                    100,".s_ipt",100,".s_btn"]
            },            
            "Shanghaiese": {
                "label": "吴语系",
                "ajax": [
                    "input[name=language][value=Shanghaiese]",
                    "input[name=language][value=Suzhouese]",
                    "input[name=language][value=Vusihlau]",
                    "input[name=language][value=Wenzhouese]",
                    100,".s_ipt",100,".s_btn"]
            },
            "Minnan": {
                "label": "闽南语系",
                "ajax": [
                    "input[name=language][value=Minnanese]",
                    "input[name=language][value=Twblg]",
                    "input[name=language][value=Chaozhouese]", 
                    100,".s_ipt",100,".s_btn"]
            },            
            "Hakka": {
                "label": "客家语系",
                "ajax": [
                    "input[name=language][value=Hakka]",
                    "input[name=language][value=Hakkafc]",
                    "input[name=language][value=Hakkahl]",
                    "input[name=language][value=Hakkanjp]",
                    "input[name=language][value=Hakkatb]",
                    "input[name=language][value=Hakkazhon]",
                    100,".s_ipt",100,".s_btn"]
            },
            "Mandarin":  {
                "label": "南京话",
                "ajax": [
                    "input[name=language][value=Langjin]",
                    100,".s_ipt",100,".s_btn"]
            },
        }
    },
    "shenyandayi": {
        dname: "深言达意", 
        addr: "https://www.shenyandayi.com", 
        tip: "根据意思来搜索词或句", 
        kw_key: "query", 
        btns: {
            "zh_word": {
                action: "https://www.shenyandayi.com/wantWordsResult", 
                label: "词和成语", 
                params: [
                    {key: "lang", val: "zh"}
                ], 
            }, 
            "zh_sentence_modern": {
                label: "现代句", 
                action: "https://www.shenyandayi.com/wantQuotesResult", 
                params: [
                    {key: "lang", val: "zh"}, 
                    {key: "category", val: "2001"}, 
                ], 
            }, 
            "zh_sentence_ancient": {
                label: "古诗文", 
                action: "https://www.shenyandayi.com/wantQuotesResult", 
                params: [
                    {key: "lang", val: "zh"}, 
                    {key: "category", val: "2002"}, 
                ], 
            }, 
            "zh_sentence_idiom": {
                label: "熟语", 
                action: "https://www.shenyandayi.com/wantQuotesResult", 
                params: [
                    {key: "lang", val: "zh"}, 
                    {key: "category", val: "2003"}, 
                ], 
            }, 
            "zh_sentence_couplet": {
                label: "对联", 
                action: "https://www.shenyandayi.com/wantQuotesResult", 
                params: [
                    {key: "lang", val: "zh"}, 
                    {key: "category", val: "2004"}, 
                ], 
            }, 
            "wantwords": {
                label: "万词王反向(旧)", 
                use_other_engine: "wantwords", 
            }, 
        }, 
    }, 
    "wantwords": {
        dname: "万词王",
        addr: "https://wantwords.net/",
        btns: {
            "inverse": {
                label: "反向词典",
                action: "https://wantwords.net/",
                ajax: "#description"
            }
        }
    },
    "ctext": {
        dname: "中國哲學書電子化計劃",
        tip: "線上開放電子圖書館，為中外學者提供中國歷代傳世文獻，力圖超越印刷媒體限制，通過電子科技探索新方式與古代文獻進行溝通。收藏的文本已超過三萬部著作，並有五十億字之多，故為歷代中文文獻資料庫最大者",
        addr: "https://ctext.org/zh",
        action: "https://ctext.org/searchbooks.pl",
        kw_key: "searchu",
        btns: {
            "book": {
                label: "書名",
                "params": [
                    {
                        "key": "if", "val": "gb"
                    },

                ],
            },
            "pre-qin": {
                label: "搜字詞(先秦兩漢)",
                action: "https://ctext.org/pre-qin-and-han/zh",
            },
            "post-han": {
                label: "搜字詞(漢之後)",
                action: "https://ctext.org/post-han/zh",
            },
        }
    },
    "kanripo": {
        dname: "漢籍(漢リポ)",
        tip: "東瀛友人做的漢文獻收集，有掃描圖片，原始文字，無標點符號\n輸入簡體和繁體搜索出來的不同，以他們收集來的原始文字爲準",
        "d_addi_html": "繁簡分離",
        addr: "http://www.kanripo.org/",
        kw_key: "query",
        btns: {
            "title": {
                label: "標題",
                action: "http://www.kanripo.org/titlesearch",
            },
            "text": {
                label: "文本",
                action: "http://www.kanripo.org/search",
            }
        },
        
    },
    "unicode": {
        "dname": "Unicode.org",
        "addr": "http://www.unicode.org/cgi-bin/GetUnihanData.pl",
        "kw_key": "a",
        "btns": {
            "unihan": {
                "label": "Unihan",
                "action": "https://www.unicode.org/cgi-bin/GetUnihanData.pl",
                "btn_tip": "https://www.unicode.org/cgi-bin/GetUnihanData.pl",
                "kw_key": "codepoint"
            },
            "char_prop": {
                "label": "Character Properties",
                "action": "https://util.unicode.org/UnicodeJsps/character.jsp",
                "btn_tip": "https://util.unicode.org/UnicodeJsps/character.jsp",
                "kw_key": "a"
            },
            "confusable": {
                "label": "Confusables",
                "action": "https://util.unicode.org/UnicodeJsps/confusables.jsp",
                "btn_tip": "https://util.unicode.org/UnicodeJsps/confusables.jsp",
                "kw_key": "a"
            }
        }
    },
    "zi-hi" : {
        dname: "字嗨", 
        addr: "https://zi-hi.com/sp/uni/", 
        action: "https://zi-hi.com/sp/uni/", 
        kw_key: "s", 
    }, 
    "zitools": {
        dname: "字統网",
        addr: "https://zi.tools/", 
        full_url: "https://zi.tools/zi/{0}", 
    },
    "ccvisualize": {
        dname: "CC可视化", 
        addr: "https://garywill.github.io/cc-visualize/", 
        tip: "在全文中查看字符信息，如Unicode码、所属区块、收录的Unicode版本\n找出大段文本（Unicode的）中的非寻常字符，如 不可打印字符、非汉非ASCII、日本和制汉字、PUA、兼容汉字符 等\n以及直观的全文批量汉字繁简关联关系全览\n既适合程序员，也适合中文电子文字整编人员", 
        action: "https://garywill.github.io/cc-visualize/",
        kw_key: "s", 
        btns: {
            "inspect" : {
                label: "检视"
            }
        }
    },
    "ggl_ext": {
        "dname": "Chrome WebStore",
        "full_url": "https://chromewebstore.google.com/search/{0}",
        "btns": {
            "go": {
                "label": "Search"
            },
            "crxsoso": {
                "label": "Crx搜搜",
                visible_lang: "zh", 
                "full_url": "https://www.crxsoso.com/search?store=chrome&keyword={0}"
            }
        }
    },
    "ffx_ext": {
        "dname": "Firefox Add-Ons",
        "full_url": "https://addons.mozilla.org/firefox/search/?q={0}",
        "btns": {
            "go": {
                "label": "Search"
            },
            "crxsoso": {
                "label": "Crx搜搜",
                visible_lang: "zh",
                "full_url": "https://www.crxsoso.com/search?store=firefox&keyword={0}"
            }
        }
    },
    "sfr_ext": {
      "dname": "Safari Extensions",
      "addr": "https://www.apple.com/",
      "action": "https://www.apple.com/search",
      "kw_format": "{0} extension",
      "full_url":"https://www.apple.com/search/{0}?src=serp",
      "btns": {
          "app_store":{
              "label":"App Store",
              "btn_tip":"Original Search"
          },
          "baidu": {
              "label": "百度",
              "visible_lang": "zh",
              "kw_format": "{0} extension  site:(apps.apple.com)",
              "use_other_engine": {
                  "engine": "baidu",
                  "btn": "sch"
              }
          },
          "google": {
              "label": "Google",
              "kw_format": "{0} extension   site:apple.com/*app",
              "use_other_engine": {
                  "engine": "google",
                  "btn": "search"
              }
          }
      }
    }, 
    "crxsoso":{
        dname: "Crx 搜搜", 
        full_url: "https://www.crxsoso.com/search?keyword={0}"
    },
    "greasy_fork": {
        "dname": "Greasy Fork",
        "action": "https://greasyfork.org/scripts",
        "kw_key": "q",
        "btns": {
            "js": {
                "label": "JS"
            },
            "css": {
                "label": "CSS",
                "params": [
                {
                    "key": "language",
                    "val": "css"
                }
                ]
            },
            "all": {
                "label": "Total",
                "btn_tip": "按照总安装数显示所有脚本",
                "params": [
                {
                    "key": "language",
                    "val": "all"
                },
                {
                    "key": "sort",
                    "val": "total_installs"
                }
                ]
            },
            "lib": {
                "label": "Lib",
                "btn_tip":"请用 kw_format 定制 Sphinx 模版",
                "action": "https://greasyfork.org/scripts/libraries"
            },
            "code": {
                "label": "Code",
                "full_url": "https://greasyfork.org/scripts/code-search?c={0}"
            },
            "user": {
                "label": "User",
                "action": "https://greasyfork.org/users"
            },
            "ath": {
                "label": "Author",
                "action": "https://greasyfork.org/users",
                "params": [
                {
                    "key": "author",
                    "val": "1"
                }
                ]
            }
        }
    },
    "user_script_zone": {
        dname: "UserScript.Zone",
        full_url: "https://www.userscript.zone/search?q={0}"
    },
    "open_user_js": {
        dname: "OpenUserJS",
        full_url: "https://openuserjs.org/?q={0}"
    },
    "script_cat": {
        dname: "Script Cat",
        full_url: "https://scriptcat.org/search?keyword={0}"
    },
    "gist": {
        dname: "Github Gist",
        full_url: "https://gist.github.com/search?q={0}"
    },
    "user_style_world": {
        dname: "UserStyle World",
        full_url: "https://userstyles.org/styles/browse?search_terms={0}"
    },
    "user_style_org": {
        "dname": "UserStyles.org",
        "full_url": "https://userstyles.org/styles/browse?search_terms={0}",
        "btns": {
          "go": {
            "label": "Search",
            "btn_tip": "Modern Search"
        },
        "uso_kkx_one": {
            "label": "Archive",
            "btn_tip": "Classical Search",
            "full_url": "https://uso.kkx.one/browse/styles?search={0}"
        }
        }
    },
    "choco": {
        dname: "Chocolatey",
        addr: "https://chocolatey.org/packages",
        action: "https://chocolatey.org/packages",
        kw_key: "q",
        btns: {
            "sch": {
                label: "Packages",
            },
            "sch_all": {
                label: "All packages",
                "params": [
                    {
                        "key": "moderationStatus",
                        "val": "all-statuses"
                    },
                    {
                        "key": "prerelease",
                        "val": "true"
                    },
                ],
            },
        }
    },
    "scoop": {
        dname: "Scoop Search Apps",
        addr: "https://scoop-docs.vercel.app/apps/",
        action: "https://scoop-docs.vercel.app/apps/",
        kw_key: "query",
    },
    "cygwin": {
        dname: "Cygwin packages",
        addr: "https://cygwin.com/packages/",
        action: "https://cygwin.com/cgi-bin2/package-grep.cgi",
        kw_key: "grep",
        btns: {
            "sch64": {
                label: "x86_64",
                "params": [
                    {
                        key: "arch",
                        val: "x86_64"
                    },
                ],
            },
            "sch_all": {
                label: "x86",
                params: [
                    {
                        key: "arch",
                        val: "x86_64"
                    },
                ],
            },
        }
    },
    "ms_up_cata": {
        dname: "Microsoft Update Catalog", 
        tip: `It's a service from Microsoft that provides a listing of updates that can be distributed over a corporate network. You can use it as a one-stop location for finding Microsoft software updates, drivers, and hotfixes.\n\nThe Microsoft Update Catalog lets you search on a variety of update fields and categories. These include the update title, description, applicable products, classifications, and knowledge base articles (e.g. KB9123456). When searching for hardware updates ("drivers"), you can also search for driver model, manufacturer, class, or a 4-part hardware id (e.g "PCI\VEN_14E4&DEV_1677&SUBSYS_01AD1028"). You can narrow the scope of your search by adding additional search terms.`, 
        addr: "https://catalog.update.microsoft.com/", 
        action: "https://catalog.update.microsoft.com/Search.aspx", 
        kw_key: "q", 
    }, 
    "feixiaohao": {
        dname: "非小号",
        addr: "https://www.feixiaohao.com/",
        action: "https://www.feixiaohao.com/search/",
        kw_key: "word",
    },
    "aicoin": {
        dname: "AICoin",
        addr: "https://www.aicoin.com/",
        action: "https://www.aicoin.com/search",
        kw_key: "s",
    },
    "investing": {
        dname: i18n(["英为财情", "Investing.com"]),
        addr: "https://www.investing.com",
        action: "https://www.investing.com/search/",
        kw_key: "q",
        btns: {
            "sch": {
                label: i18n(["所有结果", "All Results"]),
            },
            "quotes": {
                label: i18n(["行情","Quotes"]),
                params: [
                    {
                        key: "tab",
                        val: "quotes"
                    },
                ],
            },
            "news": {
                label: i18n(["新闻","News"]),
                params: [
                    {
                        key: "tab",
                        val: "news"
                    },
                ],
            },
            "articles": {
                label: i18n(["分析","Analysis"]),
                params: [
                    {
                        key: "tab",
                        val: "articles"
                    },
                ],
            },
        }
    },
    "xueqiu": {
        dname: "雪球",
        addr: "https://xueqiu.com",
        action: "https://xueqiu.com/k",
        kw_key: "q",
        btns: {
            "sch": {
                label: "综合",
            },
            "stock": {
                label: "股票",
                full_url: "https://xueqiu.com/k?q={0}#/stock",
            },
            "timeline": {
                label: "讨论",
                full_url: "https://xueqiu.com/k?q={0}#/timeline",
            },
            "portfolio": {
                label: "组合",
                full_url: "https://xueqiu.com/k?q={0}#/portfolio",
            },
        }
    },
    "baidu_media": {
        "dname": "百度",
        "addr": "https://www.baidu.com",
        "btns": {
            "video": {
                "label": "视频",
                "kw_key": "query",
                "action": "https://haokan.baidu.com/web/search/page",
            },
            "image": {
                "label": "图片",
                "kw_key": "word",
                "action": "https://image.baidu.com/search/index",
                "params": [
                    { "key": "tn", "val": "baiduimage" },
                    { "key": "ie", "val": "utf-8" },
                ],
            },
        }
    },
    "bilibili": {
        "dname": "哔哩哔哩",
        "addr": "https://www.bilibili.com",
        "action": "https://search.bilibili.com/all",
        "kw_key": "keyword",
        "btns": {
            "all": {
                "label": "综合",
            },
            "video": {
                "label": "视频",
                "action": "https://search.bilibili.com/video",
            },
            "live": {
                "label": "直播",
                "action": "https://search.bilibili.com/live",
            },
            "user": {
                "label": "用户",
                "action": "https://search.bilibili.com/upuser",
            },
            "article": {
                "label": "专栏",
                "action": "https://search.bilibili.com/article",
            },
        }
    },
    "xiaohongshu": {
        dname: "小红书", 
        addr: "https://www.xiaohongshu.com", 
        action: "https://www.xiaohongshu.com/search_result", 
        kw_key: "keyword", 
    }, 
    "douyin": {
        dname: "抖音", 
        addr: "https://www.douyin.com/", 
        full_url: "https://www.douyin.com/search/{0}", 
        btns: {
            "comp": {
                label: "搜索", 
            }, 
            "video": {
                label: "视频", 
                full_url: "https://www.douyin.com/search/{0}?type=video", 
            }, 
            "user": {
                label: "用户", 
                full_url: "https://www.douyin.com/search/{0}?type=user", 
            }, 
            "live": {
                label: "直播", 
                full_url: "https://www.douyin.com/search/{0}?type=live", 
            }, 
        }
    }, 
    "xigua": {
        dname: "西瓜视频", 
        addr: "https://www.ixigua.com/", 
        btns: {
            "search": {
                label: "综合", 
                full_url: "https://www.ixigua.com/search/{0}/", 
            }, 
            "movie": {
                label: "影视", 
                full_url: "https://www.ixigua.com/search/{0}/?typeIndex=1", 
            }, 
            "user": {
                label: "用户" , 
                full_url: "https://www.ixigua.com/search/{0}/?typeIndex=2", 
            }, 
            
        }, 
    }, 
    "music163": {
        "dname": "网易云音乐",
        "addr": "https://music.163.com",
        "action": "https://music.163.com/#/search/m/",
        "kw_key": "s",
        "btns": {
            "song": {
                "label": "单曲",
                "full_url": "https://music.163.com/#/search/m/?s={0}&type=1"
            },
            "singer": {
                "label": "歌手",
                "full_url": "https://music.163.com/#/search/m/?s={0}&type=100"
            },
            "album": {
                "label": "专辑",
                "full_url": "https://music.163.com/#/search/m/?s={0}&type=10"
            },
            "video": {
                "label": "视频",
                "full_url": "https://music.163.com/#/search/m/?s={0}&type=1014"
            },
            "lyrics": {
                "label": "歌词",
                "full_url": "https://music.163.com/#/search/m/?s={0}&type=1006"
            },
        }
    },
    "douban": {
        "dname": "豆瓣",
        "addr": "https://search.douban.com",
        "kw_key": "search_text",
        "btns": {
            "all": {
                "label": "全部",
                "kw_key": "q",
                "action": "https://www.douban.com/search"
            },
            "movie": {
                "label": "电影",
                "action": "https://search.douban.com/movie/subject_search"
            },
            "book": {
                "label": "读书",
                "action": "https://search.douban.com/book/subject_search"
            },
            "music": {
                "label": "音乐",
                "action": "https://search.douban.com/music/subject_search"
            }
        }
    },
    "google_media": {
        "dname": "Google",
        "addr": "https://www.google.com",
        "action": "https://www.google.com/search",
        "kw_key": "q",
        "btns": {
            "video": {
                "label": "Videos",
                "params" : [
                    { "key": "tbm", "val": "vid" }
                ]
            },
            "image": {
                "label": "Images",
                "params" : [
                    { "key": "tbm", "val": "isch" }
                ]
            }
        }
    },
    "youtube": {
        dname: "Youtube",
        addr: "https://www.youtube.com/",
        action: "https://www.youtube.com/results/",
        kw_key: "search_query",
    },
    "bing_media": {
        "dname": i18n(["必应", "Bing"]),
        "addr": "https://www.bing.com",
        "kw_key": "q",
        "btns": {
            "img_cn": {
                "label": "图片(中国版)",
                "visible_lang": "zh",
                "action": "https://cn.bing.com/images/search",
                "params": [
                    {key:"ensearch", val:"0"}
                ]
            },
            "vid_cn": {
                "label": "视频(中国版)",
                "visible_lang": "zh",
                "action": "https://cn.bing.com/videos/search",
                "params": [
                    {key:"ensearch", val:"0"}
                ]
            },
            "img": {
                "label": "Images",
                "action": "https://www.bing.com/images/search",
                "params": [
                    {key:"ensearch", val:"1"}
                ]
            },
            "vid": {
                "label": "Videos",
                "action": "https://www.bing.com/videos/search",
                "params": [
                    {key:"ensearch", val:"1"}
                ]
            },
        }
    },
    "vimeo": {
        dname: "Vimeo",
        addr: "https://vimeo.com",
        action: "https://vimeo.com/search",
        kw_key: "q"
    },
    "netflix": {
        dname: "Netflix",
        addr: "https://www.netflix.com/",
        action: "https://www.netflix.com/search",
        kw_key: "q"
    },
    "dailymotion": {
        dname: "Dailymotion",
        addr: "https://www.dailymotion.com",
        btns: {
            "vid": {
                label: "Videos",
                full_url: "https://www.dailymotion.com/search/{0}/videos",
            },
            "channel": {
                label: "Channels",
                full_url: "https://www.dailymotion.com/search/{0}/channels",
            },
            "playlist": {
                label: "Playlists",
                full_url: "https://www.dailymotion.com/search/{0}/playlists",
            },
        }
    },
    "dtube": {
        dname: "DTube",
        addr: "https://d.tube/",
        full_url: "https://d.tube/#!/s/{0}"
    },
    "unsplash": {
        dname: "Unsplash", 
        addr: "https://unsplash.com", 
        full_url: "https://unsplash.com/s/photos/{0}", 
    }, 
    "pexels": {
        dname: "Pexels", 
        addr: "https://www.pexels.com/", 
        btns: {
            "photos": {
                label: "Photos", 
                full_url: "https://www.pexels.com/search/{0}/", 
            }, 
            "videos": {
                label: "Videos", 
                full_url: "https://www.pexels.com/search/videos/{0}/", 
            },
        }, 
    }, 
    "pixabay": {
        dname:" Pixabay", 
        addr: "https://pixabay.com/", 
        btns: {
            "images": {
                label: "All Images", 
                full_url: "https://pixabay.com/images/search/{0}/", 
            }, 
            "photos": {
                label: "Photos", 
                full_url: "https://pixabay.com/photos/search/{0}/", 
            }, 
            "illustrations": {
                label: "Illustrations", 
                full_url: "https://pixabay.com/illustrations/search/{0}/", 
            }, 
            "vectors": {
                label: "Vectors", 
                full_url: "https://pixabay.com/vectors/search/{0}/", 
            }, 
            
            "videos": {
                label: "Videos", 
                full_url: "https://pixabay.com/videos/search/{0}/", 
            }, 
            "music": {
                label: "Music", 
                full_url: "https://pixabay.com/music/search/{0}/", 
            }, 
            "sound": {
                label: "Sounds", 
                full_url: "https://pixabay.com/sound-effects/search/{0}/", 
            }, 
            "gifs": {
                label: "GIFs", 
                full_url: "https://pixabay.com/gifs/search/{0}/", 
            }, 
        }, 
    }, 
    
    "videvo": {
        dname: "Videvo", 
        addr: "https://www.videvo.net", 
        action: "https://www.videvo.net/search/", 
        kw_key: "q", 
        btns: {
            'videos_free': {
                label: "Free All Videos", 
                params: [
                    { key: "type[0]", val: "free" }, 
                ], 
            }, 
            'footages_free': {
                label: "Free Footages", 
                params: [
                    { key: "mode", val: "footage" }, 
                    { key: "type[0]", val: "free" }, 
                ], 
            }, 
            'motiongraphic_free': {
                label: "Free Motion Graphics", 
                params: [
                    { key: "mode", val: "motion-graphics" }, 
                    { key: "type[0]", val: "free" }, 
                ], 
            }, 
            'music_free': {
                label: "Free Music", 
                params: [
                    { key: "mode", val: "music" }, 
                    { key: "type[0]", val: "free" }, 
                ], 
            }, 
            'sound_free': {
                label: "Free Sounds", 
                params: [
                    { key: "mode", val: "sound-effects" }, 
                    { key: "type[0]", val: "free" }, 
                ], 
            }, 
            
        }
    }, 
    
    
};

}


