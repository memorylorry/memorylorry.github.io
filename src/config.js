let config = {
    profile:'local', // 设置运行模式: prod:test:local（缺省）
    version:new Date().getTime()
};

let prod_url = {
};
let local_url = {
};



if(config.profile == 'prod'){
    config.resources = prod_url;
}else{
    config.resources = local_url;
}

export default config;