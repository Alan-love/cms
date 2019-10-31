﻿var $api = new apiUtils.Api(apiUrl + '/pages/cms/contentsLayerAttributes');

var data = {
  siteId: parseInt(pageUtils.getQueryString('siteId')),
  channelId: parseInt(pageUtils.getQueryString('channelId')),
  channelContentIds: pageUtils.getQueryString('channelContentIds'),
  pageLoad: false,
  pageAlert: null,
  pageType: 'setAttributes',
  isRecommend: false,
  isHot: false,
  isColor: false,
  isTop: false,
  hits: 0
};

var methods = {
  loadConfig: function () {
    this.pageLoad = true;
  },
  btnSubmitClick: function () {
    var $this = this;

    pageUtils.loading(true);
    $api.post({
      siteId: $this.siteId,
      channelId: $this.channelId,
      channelContentIds: $this.channelContentIds,
      pageType: $this.pageType,
      isRecommend: $this.isRecommend,
      isHot: $this.isHot,
      isColor: $this.isColor,
      isTop: $this.isTop,
      hits: $this.hits
    }, function (err, res) {
      if (err || !res || !res.value) return;

      parent.location.reload(true);
    });
  }
};

new Vue({
  el: '#main',
  data: data,
  methods: methods,
  created: function () {
    this.loadConfig();
  }
});