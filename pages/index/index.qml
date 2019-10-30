<view class="container" qq:if="{{isSearching}}">
  <view class="header">
    <view class="search-box">
      <text class="iconfont icon-search"></text>
      <input placeholder="搜索文集" focus="{{isSearching}}" />
      <text class="iconfont icon-close-circle" bindtap="tapToCloseSearch"></text>
    </view>
  </view>
  <view class="search-tags">
    <view class="title">热门搜索</view>
    <view class="tag-list">
      <view class="tag-item">村上春树</view>
      <view class="tag-item">Python</view>
      <view class="tag-item">什么是幸福</view>
      <view class="tag-item">百年孤独</view>
      <view class="tag-item">我好喜欢你</view>
      <view class="tag-item">韩寒</view>
    </view>
  </view>
</view>

<view class="container" qq:if="{{!isSearching}}">
  <view class="header">
   <view class="search-box" bindtap="tapToSearch">
    <text class="iconfont icon-search"></text>
    <text>搜索文集</text>
   </view>
  </view>

  <view class="time-card">
    <view class="text-up">今日已阅读</view>
    <view class="text-down">
      <view class="num">38</view>
      <view class="text">分钟</view>
    </view>
  </view>


  <view class="main">
    <view class="title">文集</view>
    <view class="list">

      <view class="list-item" bindtap="tapToNavigate" data-cat="1">
        <image class="left-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1618992379,3984719115&fm=26&gp=0.jpg" mode="aspectFill"></image>
        <view class="right-text">
          <view class="title">小编精选</view>
          <view class="desc">我是文集描述，乌拉乌拉乌拉乌拉乌拉乌拉乌拉！</view>
        </view>
      </view>

      <view class="list-item" bindtap="tapToNavigate" data-cat="2">
        <image class="left-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2018939532,1617516463&fm=26&gp=0.jpg" mode="aspectFill"></image>
        <view class="right-text">
          <view class="title">热门好文</view>
          <view class="desc">我是文集描述，乌拉乌拉乌拉乌拉乌拉乌拉乌拉！</view>
        </view>
      </view>

      <view class="list-item" bindtap="tapToNavigate" data-cat="3">
        <image class="left-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1618992379,3984719115&fm=26&gp=0.jpg" mode="aspectFill"></image>
        <view class="right-text">
          <view class="title">最新潮流</view>
          <view class="desc">我是文集描述，乌拉乌拉乌拉乌拉乌拉乌拉乌拉！</view>
        </view>
      </view>

    </view>
  </view>
</view>
